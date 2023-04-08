import Header from '@/components/common/Header'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { auth } from "firebaseConfig";

export default function App({ Component, pageProps }: AppProps) {
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
      <Header
        isLoggedIn={isLoggedIn}
        userName={userName}
        onSignOut={onSignOut}
      />
      <Component {...pageProps} />
    </>
  )
}
