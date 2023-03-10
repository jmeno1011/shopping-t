import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'firebaseConfig';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ChangeEvent, FormEvent, useState } from 'react'

export default function Join() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
  
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      const {
        target: { name, value },
      } = e;
      if (name === "email") {
        setEmail(value);
      } else if (name === "password") {
        setPassword(value);
      }
    };
  
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentail) => {
          console.log(userCredentail.user);
          router.push("/login");
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(error.code);
          setError(errorMessage);
        });
    };
    
    return (
      <div className="bg-white">
        <div className="flex flex-col items-center justify-center h-screen p-6">
          <div className="w-10/12 mx-auto md:w-96">
            <h1 className="mb-2 text-lg font-medium">회원가입</h1>
            <form className="flex flex-col justify-center" onSubmit={onSubmit}>
              <div className="mb-2">
                <input
                  name="email"
                  placeholder="Email"
                  type="email"
                  className="w-full p-3 transition duration-200 border border-gray-400 bg-gray-50 focus:bg-white hover:bg-white"
                  value={email}
                  onChange={onChange}
                />
              </div>
              <div className="mb-2">
                <input
                  name="password"
                  placeholder="Password"
                  type="password"
                  className="w-full p-3 transition duration-200 border border-gray-400 bg-gray-50 focus:bg-white hover:bg-white"
                  value={password}
                  onChange={onChange}
                />
              </div>
              {error && <span className="mb-2 text-red-500">{error}</span>}
              <button className="w-full py-2 mb-1 text-xs font-bold text-white uppercase bg-gray-400 border border-gray-400 rounded cursor-pointer">
                회원가입
              </button>
            </form>
            <small>
              이미 가입하셨나요?
              <Link href="/login" className="ml-1 text-blue-500 uppercase">
                로그인
              </Link>
            </small>
          </div>
        </div>
      </div>
    );
  }