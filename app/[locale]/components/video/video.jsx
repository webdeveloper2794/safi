import React from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { useTranslations } from "next-intl";
import Link from "next/link";


export default function Video() {
  const t = useTranslations("Video");
  const includedFeatures = [
    { name: t("location1"), href: "https://www.safigrup.com/index.php?route=information/information&information_id=13" },
    { name: t("location2"), href: "https://www.safigrup.com/index.php?route=information/information&information_id=16" },
    { name: t("location3"), href: "https://www.safigrup.com/index.php?route=information/information&information_id=14" },
    { name: t("location4"), href: "https://www.safigrup.com/index.php?route=information/information&information_id=15" }
  ];
  
  return (
    <div className="w-full">
      <div className="w-full flex flex-col lg:flex-row justify-around">
        <div className="w-full lg:w-1/2 flex flex-col py-10 lg:py-28 px-10 items-center lg:items-start ">
          <h1 className="text-2xl font-bold tracking-tight  sm:text-5xl bg-gradient-to-r from-blue-600 via-purple-500 to-white-400  text-transparent bg-clip-text pb-2">
           {t("title")}
          </h1>

          <p className="text-md text-gray-800 tracking-tight  pb-2  max-w-2xl text-center lg:text-left">
          {t("text")}
          </p>
          <ul
            role="list"
            className="mt-2 grid  gap-4 text-sm leading-6 text-gray-600 grid-cols-2 sm:gap-6 "
          >
            {includedFeatures.map((feature) => (
              <li key={feature} className="flex gap-x-3">
                <CheckIcon
                  className="h-6 w-5 flex-none text-indigo-600"
                  aria-hidden="true"
                />
                <Link              
                href={feature.href}
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-700  transition"
              >
                {feature.name}
                
              </Link>
                
                
              </li>
            ))}
          </ul>
          <p className="text-md text-gray-800 tracking-tight pt-4 text-center lg:text-left">
          {t("text-last")}
          </p>
        </div>

        <div className="w-full lg:w-2/3 justify-center py-20 px-10">
          <div className="relative" style={{ paddingTop: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
              src="https://www.youtube.com/embed/iuvcye67G3Q"
              title="Safi Grup Tanıtım Videomuz (Boyasız Göçük Düzeltme Ekipman İmalatı ve Satışı)"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}

