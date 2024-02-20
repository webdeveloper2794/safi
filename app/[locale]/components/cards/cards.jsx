import React from "react";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl";



export default function Projects() {
  const t = useTranslations("Cards");

  const projectDatas = [
    {
      name: t("title1"),
      description: t("description1"),
      imageSrc: "/pdr_lights.webp",
      imageAlt:
        "light",
      href: "https://www.safigrup.com/pdr-led-lamba",
    },
    {
      name: t("title2"),
      description: t("description2"),
      imageSrc: "/pdr2.webp",
      imageAlt:
        "repair",
      href: "https://www.safigrup.com/pdr-ozel-takim",
    },
    {
      name: t("title3"),
      description: t("description3"),
      imageSrc: "/pdr3.jpg",
      imageAlt: "service",
      href: "https://www.safigrup.com/pdr-takim-sehpasi",
    },
    {
      name: t("title4"),
      description: t("description4"),
      imageSrc: "/education.webp",
      imageAlt: "education",
      href: "https://www.safigrup.com/boyasiz-gocuk-duzeltme-egitimi",
    },
  ];
  return (
    <div className="relative isolate">
      <div
        className="absolute inset-x-0 top-20 -z-10 transform-gpu overflow-hidden blur-3xl "
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(80%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <div className="flex justify-center"></div>
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-4 lg:gap-x-6 lg:space-y-0">
            {projectDatas.map((callout) => (
              <div
                key={callout.name}
                className="group relative bg-white/50 backdrop-blur-sm ring-1 ring-slate-400/25 rounded-md p-2 shadow-xl flex flex-col justify-center items-center h-96"
              >
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h1 className="text-2xl text-gray-800">{callout.name}</h1>
                <p className="text-md text-gray-600 text-center">
                  {callout.description}
                </p>
                <a
                  href={callout.href}
                  className="w-36 rounded-md px-3.5 py-2.5 text-sm ring-1 ring-indigo-500 font-semibold text-gray-900 transition shadow-sm hover:shadow-2xl hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center justify-around mt-2"
                >
                  {t("button")}{" "}
                  <ArrowTopRightOnSquareIcon className="h-4 w-4 text-gray-600" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

