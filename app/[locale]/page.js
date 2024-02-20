"use client";
import { useState } from "react";
import Image from "next/image";
import Projects from "./components/cards/cards";
import Wholesale from "./components/wholesale/wholesale";
import Video from "./components/video/video";
import Cargo from "./components/cargo/cargo";
import Produce from "./components/produce/produce";
import Contact from "./components/contact/contact";
import { useTranslations } from "next-intl";
export default function Home() {
  const t = useTranslations("Main");
  return (
    <div className="bg-white text-slate-200  scroll-smooth min-h-screen">
      <div className="w-full flex flex-col md:flex-row pt-20 justify-center md:justify-around px-10" 
      style={{
        background: "url('/main-background.svg')", 
        backgroundSize:"90%", backgroundPositin:"center top", backgroundRepeat:"no-repeat"}}>
        <div className="w-full md:w-1/3  md:pt-14 ">
          <h1 className="text-4xl font-bold tracking-tight  sm:text-5xl bg-gradient-to-r from-blue-600 via-purple-500 to-white-400  text-transparent bg-clip-text pb-2">
          {t("title1")} <br /> {t("title2")}
          </h1>
          <h1 className="text-3xl font-bold tracking-tight  sm:text-4xl bg-gradient-to-r from-blue-600 via-purple-500 to-white-400  text-transparent bg-clip-text pb-2">
          PDR
          </h1>
          <h1 className="text-3xl font-bold tracking-tight  sm:text-4xl bg-gradient-to-r from-blue-600 via-purple-500 to-white-400  text-transparent bg-clip-text pb-2 ">
          {t("title3")}
          </h1>
          <h2 className="mt-6 text-lg leading-8 text-gray-600 pr-5 uppercase">
          {t("subtitle")}
          </h2>
        </div>
        <div className="w-full md:w-2/3 flex justify-center relative overflow-hidden pt-10">
        <Image
          src="https://assets.nicepagecdn.com/4c77f7ba/6159874/images/pngegg.png"
          height={400}
          width={600}
          className="w-full max-w-2xl drop-shadow-2xl relative z-10"
          alt="Picture of the author"
        />
        {/* <Image
          src="https://www.safigrup.com/image/cache/catalog/12-446x554.jpg"
          height={400}
          width={600}
          className="w-full max-w-xl drop-shadow-2xl absolute right-0 origin-center rotate-12"
          alt="Picture of the author"
        /> */}
        </div>
        
      </div>
      <Projects/>
      <Wholesale/>
      <Video/>
      <Cargo/>
      <Produce/>
      <Contact/>

    </div>
  );
}

