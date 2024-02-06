'use client'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import HomePage from './home/page'

const inter = Inter({ subsets: ['latin'] })


import Head from "next/head";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import NextNProgress from "nextjs-progressbar";
import { SessionProvider } from "next-auth/react";
import { useRouter, usePathname } from "next/navigation";
import { FcRotateToPortrait } from "react-icons/fc";

export default function App({ Component, pageProps }: any) {

  const [portrait, setPortrait] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    Aos.init({ duration: 250 });
    switch (pathname) {
      case "/":
        document.title = "Yash Simejiya's Portfolio";
        break;
      case "/skills":
        document.title = "Skills | Yash Simejiya's Portfolio";
        break;
      case "/latest":
        document.title = "Latest Projects & Events | Yash Simejiya's Portfolio";
        break;
      case "/blogs":
        document.title = "Blog | Yash Simejiya's Portfolio";
        break;
      case "/chat":
        document.title = "Chat | Yash Simejiya's Portfolio";
        break;
      case "/contact":
        document.title = "Contact | Yash Simejiya's Portfolio";
        break;
    }
  }, [pathname]);


  const router = useRouter();

  useEffect(() => {
    const mediaMatch = window.matchMedia("(orientation: portrait)")
    mediaMatch.addEventListener("change", (e) => {
      router.refresh()
    });
    const portraits = mediaMatch.matches;
    if (portraits) {
      setPortrait(true);
    } else {
      setPortrait(false);
    }
  }, [router]);

  if (!portrait) {
    return (
      <>
        <Head>
          <title>Yash Simejiya&apos;s Portfolio</title>
          <meta name="description" content="Yash Simejiya Portfolio Website" />
          <meta
            name="keywords"
            content="Yash Simejiya, Yash, Simejiya, Portfolio, Website, Yash Simejiya, Yash Simejiya acid, Yash Simejiya as a fraction, Yash Simejiya ba, Yash Simejiya bali, Yash Simejiya bangla, Yash Simejiya bangla lyrics, Yash Simejiya battery, Yash Simejiya bank, Yash Simejiya blood pressure, Yash Simejiya chords, Yash Simejiya com, Yash Simejiya code, Yash Simejiya center, Yash Simejiya de, Yash Simejiya delhi, Yash Simejiya dei, Yash Simejiya dit, Yash Simejiya definition, Yash Simejiya download, Yash Simejiya disease, Yash Simejiya english translation, Yash Simejiya english lyrics, Yash Simejiya english, Yash Simejiya english pdf, Yash Simejiya english subtitles, Yash Simejiya englisch, Yash Simejiya example, Yash Simejiya film, Yash Simejiya facebook, Yash Simejiya full movie, Yash Simejiya fakaza, Yash Simejiya font, Yash Simejiya file, Yash Simejiya for sale,  eer Simejiya gif, Yash Simejiya google translate,  Yash Simejiya google scholar, Yash Simejiya google, Yash Simejiya google drive, Yash Simejiya games, Yash Simejiya germany,"
          />
        </Head>
        {/* <SessionProvider session={pageProps.session}> */}
        <NextNProgress />
        <HomePage />
        {/* </SessionProvider> */}
      </>
    );
  }
  if (portrait) {
    return (
      <>
        <NextNProgress />
        <Head>
          <title>Yash Simejiya&apos;s Portfolio</title>
          <meta name="description" content="Yash Simejiya Portfolio Website" />
          <meta
            name="keywords"
            content="Yash Simejiya, Yash, Simejiya, Portfolio, Website, Yash Simejiya, Yash Simejiya acid, Yash Simejiya as a fraction, Yash Simejiya ba, Yash Simejiya bali, Yash Simejiya bangla, Yash Simejiya bangla lyrics, Yash Simejiya battery, Yash Simejiya bank, Yash Simejiya blood pressure, Yash Simejiya chords, Yash Simejiya com, Yash Simejiya code, Yash Simejiya center, Yash Simejiya de, Yash Simejiya delhi, Yash Simejiya dei, Yash Simejiya dit, Yash Simejiya definition, Yash Simejiya download, Yash Simejiya disease, Yash Simejiya english translation, Yash Simejiya english lyrics, Yash Simejiya english, Yash Simejiya english pdf, Yash Simejiya english subtitles, Yash Simejiya englisch, Yash Simejiya example, Yash Simejiya film, Yash Simejiya facebook, Yash Simejiya full movie, Yash Simejiya fakaza, Yash Simejiya font, Yash Simejiya file, Yash Simejiya for sale,  eer Simejiya gif, Yash Simejiya google translate,  Yash Simejiya google scholar, Yash Simejiya google, Yash Simejiya google drive, Yash Simejiya games, Yash Simejiya germany,"
          />
        </Head>
        <div className="w-full h-screen text-center flex justify-center items-center flex-col">
          <h1 className="text-2xl w-[85%]">
            Please rotate your device to landscape mode to view this website!
          </h1>
          <FcRotateToPortrait className="text-9xl animate-shake rotate-90" />
        </div>
      </>
    );
  }
}