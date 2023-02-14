import Carousel from "@/components/carousel/Carousel";
import { auth } from "firebaseConfig";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState<string | undefined>("");

  const onSignOut = () => {
    auth
      .signOut()
      .then(() => router.push("/"))
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserName(user.email?.split("@")[0]);
        console.log(user.email?.split("@")[0]);
      } else {
        setIsLoggedIn(false);
        console.log(user);
      }
    });
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mx-auto xl:screens lg:w-10/12 md:w-screen sm:w-screen relative">
        <header className="bg-[#35BCB2]">
          {/* logo, login / join */}
          <div className="p-4 flex justify-between items-baseline mb-4 border-solid border-0 border-b-[1px] border-slate-800">
            <h1 className="text-3xl font-bold underline text-slate-900">
              shopping-t
            </h1>
            <div>
              {isLoggedIn ? <><span><strong>{userName}</strong>님 어서오세요</span> | <button onClick={onSignOut}>로그아웃</button></> : <Link href="/login">로그인</Link>}
            </div>
          </div>
          {/* search / profile / cart */}
          <div className="px-4 flex justify-between">
            <input type="text" />
            <div className="flex gap-2">
              <a>개인정보</a>
              <a>장바구니</a>
            </div>
          </div>
          {/* nav */}
          <nav className="px-4 py-2">
            <ul className="flex gap-2">
              <li>전체</li>
              <li>카테고리1</li>
              <li>카테고리2</li>
            </ul>
          </nav>
        </header>
        {/* carousel */}
        <div className="p-8 bg-white">
          <Carousel SLIDE_LEN={2} />
          {/* <div className="bg-slate-400 h-[350px] flex items-center justify-center">
            carousel
          </div> */}
        </div>
        {/* items */}
        <div className="bg-green-100 p-4">items</div>
      </div>
    </>
  );
}
