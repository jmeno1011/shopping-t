import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "firebaseConfig";
import Image from "next/image";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";

interface propsType {
    isOpen: boolean;
    setIsOpen: Function;
}

export default function Auth({ isOpen, setIsOpen }: propsType) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {
            target: { name, value },
        } = e;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredentail) => {
            console.log(userCredentail.user);
            setIsOpen(false);
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(error.code);
            setError(errorMessage);
          });
      };

    return (
        <div className={isOpen ? "fixed bg-black/40 left-0 top-0 w-full h-full" : "hidden"}>
            <div
                className={
                    "w-[400px] bg-white flex flex-col items-center absolute z-333 top-1/2 left-1/2 right-auto bottom-auto translate-y-[-50%] translate-x-[-50%] px-2"
                }
            >
                <div className="w-full flex justify-end pt-2 px-4"><button onClick={() => setIsOpen(!isOpen)}>X</button></div>
                <h1 className="text-lg my-2 font-bold"><span className="text-[#35BCB2]">Sign In </span>to tono-shop</h1>
                <form className="w-full flex flex-col justify-center items-center" onSubmit={onSubmit}>
                    <input
                        type={"email"}
                        className="w-[calc(100%-1rem)] p-2 mb-2 border-solid border-0 border-b-[1px] border-slate-400" 
                        name="email"
                        value={email}
                        onChange={onChange}
                    />
                    <input
                        type={"password"}
                        className="w-[calc(100%-1rem)] p-2 mb-2 border-solid border-0 border-b-[1px] border-slate-400"
                        name="password"
                        value={password}
                        onChange={onChange}
                    />
                    <button className="w-[calc(100%-1rem)] mb-2 border-solid border-[1px] border-slate-400">로그인</button>
                </form>
                <div className="flex gap-2">
                    <button className="mb-2 px-1 py-2 w-[180px] flex items-center bg-white h-[40px] border-solid border-[1px] border-slate-400">
                        <Image
                            className="mr-2"
                            src={"/auth_svg/btn_google_light_normal_ios.svg"}
                            alt="google-login"
                            height={32}
                            width={32}
                        />
                        <span className="text-sm inline-block ">Sign in with Google</span>
                    </button>
                    <button className="mb-4 px-1 py-2 w-[180px] flex items-center bg-white h-[40px] border-solid border-[1px] border-slate-400">
                        <Image
                            className="mr-1 p-2 border-solid border-[1px] border-slate-100"
                            src={"/auth_svg/github-mark.svg"}
                            alt="github-login"
                            height={32}
                            width={32}
                        />
                        <span className="text-sm inline-block ">Sign in with Github</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
