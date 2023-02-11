import Image from "next/image";

interface propsType {
  isOpen: boolean;
}

export default function Auth({ isOpen }: propsType) {
  return (
    <div
      className={
        isOpen
          ? "w-[400px] bg-white flex flex-col items-center absolute z-333 top-1/2 left-1/2 right-auto bottom-auto translate-y-[-50%] translate-x-[-50%]"
          : "hidden"
      }
    >
      <h1 className="text-lg my-4 font-bold">Sign in to tono-shop</h1>
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
      <button className="mb-2 px-1 py-2 w-[180px] flex items-center bg-white h-[40px] border-solid border-[1px] border-slate-400">
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
  );
}

// transform: "translate(-50%, -50%)",
// marginRight: "-50%",
// display: "flex",
// justifyContent: "center",
// alignItems: "center"
