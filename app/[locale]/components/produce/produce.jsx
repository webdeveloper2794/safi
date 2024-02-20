import React from "react";
import Image from "next/image";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";


export default function Produce() {
  const t = useTranslations("Produce");

  return (
    <div className="w-full">
        <div className="w-full bg-white/75 flex flex-col md:flex-row items-center md:items-start justify-around ">
       
         <div className="w-full md:w-1/2 flex flex-col items-center md:items-start pt-0 lg:pt-24 p-4">
          <h1 className="text-3xl font-bold tracking-tight text-center md:text-left sm:text-5xl bg-gradient-to-r from-blue-600 via-purple-500 to-white-400  text-transparent bg-clip-text pb-2 md:pt-10">
          {t("title")}
          </h1>
         
          <h3 className="text-md font-semibold tracking-tight text-center md:text-left  sm:text-lg bg-gradient-to-r from-blue-600 via-purple-500 to-white-400  text-transparent bg-clip-text pb-2 px-2">
          {t("subtitle")}
          </h3>
          <p className="text-center md:text-left mt-6 text-sm lg:text-lg leading-8 text-gray-900 pr-5 max-w-2xl bg-white/50 p-4 rounded-md ">
          {t("text")}
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center  p-6 sm:p-20">
        <Image
          src="https://assets.nicepagecdn.com/4c77f7ba/6159874/images/pdrmanupic.jpg"
          height={300}
          width={500}
          layout="responsive"
          className="w-full shadow-2xl rounded-md ring-1 ring-slate-100"
          alt="Picture of the author"
        />
        </div>

        </div>
      
    </div>
  );
}

