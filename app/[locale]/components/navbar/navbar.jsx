"use client";
import React from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition, Dialog, Disclosure, Popover } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Select, SelectItem, Avatar } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import {
  AcademicCapIcon,
  WrenchScrewdriverIcon,
  ArrowTrendingUpIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  ArrowPathRoundedSquareIcon,
  BuildingOffice2Icon,
  BuildingOfficeIcon,
  MapIcon,
  MapPinIcon
} from '@heroicons/react/24/outline'
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const people = [
  {
    id: 1,
    name: "EN",
    value: "en",
    avatar: "/en-icon.png",
  },
  {
    id: 2,
    name: "TR",
    value: "tr",
    avatar: "/tr-icon.png",
  },
  {
    id: 3,
    name: "RU",
    value: "ru",
    avatar: "/ru-icon.png",
  },
];



export default function Navbar() {

  const t = useTranslations("Navbar");
  const navigation = [
    { name: t("menu1"), href: "https://www.safigrup.com/" },
    { name: t("menu2"), href: "/service" },
    // { name: t("menu3"), href: "/about" },
    // { name: t("menu4"), href: "/projects" },
    // { name: t("menu5"), href: "/courses" },
    
  ];
  const serviceMenus = [
    { name: t("submenu1"), description: 'Get a better understanding of your traffic', href: 'https://www.safigrup.com/index.php?route=information/information&information_id=11', icon: ArrowPathRoundedSquareIcon },
    { name: t("submenu2"), description: 'Speak directly to your customers', href: 'https://www.safigrup.com/index.php?route=information/information&information_id=9', icon: ArrowTrendingUpIcon },
    { name: t("submenu3"), description: 'Your customers’ data will be safe and secure', href: 'https://www.safigrup.com/index.php?route=information/information&information_id=10', icon: WrenchScrewdriverIcon },
    { name: t("submenu4"), description: 'Connect with third-party tools', href: 'https://www.safigrup.com/boyasiz-gocuk-duzeltme-egitimi', icon: AcademicCapIcon },    
  ]
  const locations = [
    { name: t("other-submenu1"), description: 'Get a better understanding of your traffic', href: 'https://www.safigrup.com/index.php?route=information/information&information_id=13', icon: BuildingOffice2Icon },
    { name: t("other-submenu2"), description: 'Speak directly to your customers', href: 'https://www.safigrup.com/index.php?route=information/information&information_id=14', icon: BuildingOfficeIcon },
    { name: t("other-submenu3"), description: 'Your customers’ data will be safe and secure', href: 'https://www.safigrup.com/index.php?route=information/information&information_id=15', icon: MapIcon },
    { name: t("other-submenu4"), description: 'Connect with third-party tools', href: 'https://www.safigrup.com/boyasiz-gocuk-duzeltme-egitimi', icon: MapPinIcon },    
  ]
  const callsToAction = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
  ]

  const router = useRouter();
  const localActive = useLocale();
  const [isPending, startTransition] = useTransition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const initialSelected =
    people.find((person) => person.value === localActive) || people[0];
  const [selected, setSelected] = useState(initialSelected);

  const onSelectChange = (selectedPerson) => {
    const nextLocale = selectedPerson.value;
    const personFound = people.find((person) => person.value === nextLocale);
    if (personFound) {
      setSelected(personFound);
      startTransition(() => {
        router.replace(`/${nextLocale}`);
      });
    }
  };
  return (
    <div className="relative">
      {/* <Example/> */}
      <header className="fixed inset-x-0 top-0 z-50 bg-white/5 backdrop-blur-md border-bottom-1 border-slate-900">
        <nav
          className="flex items-center justify-between p-x py-0 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link
              href="/"
              locale={localActive}
              className="-m-1.5 p-1.5 hover:text-gray-500"
            >
              {/* <span className="sr-only">Your Company</span> */}
              {/* <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              /> */}
              <div className="inline-flex ">
                <Image
                  src="/safiLogo.webp"
                  height={30}
                  width={50}
                  alt="Picture of the author"
                />
              </div>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                className="h-8 w-8 text-indigo-600"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item, index) => (
              // Replace the anchor tag with Link
              <Link
                key={index}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-700  transition"
              >
                {item.name}
              </Link>
            ))}
            <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
            {t("menu3")}
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {serviceMenus.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>                        
                      </div>
                    </div>
                  ))}
                </div>                
              </Popover.Panel>
            </Transition>
          </Popover>

        </Popover.Group>
            <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
            {t("menu4")}
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {locations.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>                        
                      </div>
                    </div>
                  ))}
                </div>
               
              </Popover.Panel>
            </Transition>
          </Popover>
         
        </Popover.Group>
        <Link
               
                href="https://www.safigrup.com/index.php?route=information/contact"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-700  transition"
              >
                {t("menu5")}
              </Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <div className="w-36">
              <Listbox value={selected} onChange={(selectedPerson) => onSelectChange(selectedPerson)}>
                {({ open }) => (
                  <>
                    <div className="relative mt-2">
                      <Listbox.Button className="relative w-full cursor-default rounded-md bg-transparent py-1.5 pl-3 pr-10 text-left text-gray-900   sm:text-sm sm:leading-6 hover:cursor-pointer">
                        <span className="flex items-center">
                          <img
                            src={selected.avatar}
                            alt=""
                            className="h-5 w-5 flex-shrink-0 rounded-full"
                          />
                          <span className="ml-3 block truncate text-purple-900 ">
                            {selected.name}
                          </span>
                        </span>
                      </Listbox.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white/5 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ">
                          {people.map((person) => (
                            <Listbox.Option
                              key={person.id}
                              className={({ active }) =>
                                classNames(
                                  active
                                    ? "bg-indigo-600 text-white"
                                    : "text-purple-900",
                                  "relative cursor-default select-none py-2 pl-3 pr-9 hover:cursor-pointer"
                                )
                              }
                              value={person}
                            >
                              {({ selected, active }) => (
                                <>
                                  <div className="flex items-center">
                                    <img
                                      src={person.avatar}
                                      alt=""
                                      className="h-5 w-5 flex-shrink-0 rounded-full"
                                    />
                                    <span
                                      className={classNames(
                                        selected
                                          ? "font-semibold"
                                          : "font-normal",
                                        "ml-3 block truncate"
                                      )}
                                    >
                                      {person.name}
                                    </span>
                                  </div>

                                  {selected ? (
                                    <span
                                      className={classNames(
                                        active
                                          ? "text-white"
                                          : "text-indigo-600",
                                        "absolute inset-y-0 right-0 flex items-center pr-4"
                                      )}
                                    >
                                      <CheckIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </>
                )}
              </Listbox>
            </div>

            {/* <Link
              href="#"
              className="text-sm font-semibold leading-6 text-purple-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </Link> */}
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/5 backdrop-blur-md px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link href="#" className="-m-1.5 p-1.5">
                {/* <span className="sr-only">Your Company</span> */}
                <Image
                   src="/safiLogo.webp"
                   height={30}
                   width={50}
                  alt="Picture of the author"
                />
              </Link>
              <Listbox value={selected} onChange={(selectedPerson) => onSelectChange(selectedPerson)}>
                {({ open }) => (
                  <>
                    <div className="relative mt-2">
                      <Listbox.Button className="relative w-full cursor-default rounded-md bg-transparent py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm   sm:text-sm sm:leading-6 hover:cursor-pointer">
                        <span className="flex items-center">
                          <img
                            src={selected.avatar}
                            alt=""
                            className="h-5 w-5 flex-shrink-0 rounded-full"
                          />
                          <span className="ml-3 block truncate text-purple-900">
                            {selected.name}
                          </span>
                        </span>
                      </Listbox.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white/5 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ">
                          {people.map((person) => (
                            <Listbox.Option
                              key={person.id}
                              className={({ active }) =>
                                classNames(
                                  active
                                    ? "bg-indigo-600 text-white"
                                    : "text-purple-900",
                                  "relative cursor-default select-none py-2 pl-3 pr-9 hover:cursor-pointer"
                                )
                              }
                              value={person}
                            >
                              {({ selected, active }) => (
                                <>
                                  <div className="flex items-center">
                                    <img
                                      src={person.avatar}
                                      alt=""
                                      className="h-5 w-5 flex-shrink-0 rounded-full"
                                    />
                                    <span
                                      className={classNames(
                                        selected
                                          ? "font-semibold"
                                          : "font-normal",
                                        "ml-3 block truncate"
                                      )}
                                    >
                                      {person.name}
                                    </span>
                                  </div>

                                  {selected ? (
                                    <span
                                      className={classNames(
                                        active
                                          ? "text-white"
                                          : "text-indigo-600",
                                        "absolute inset-y-0 right-0 flex items-center pr-4"
                                      )}
                                    >
                                      <CheckIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </>
                )}
              </Listbox>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root  ">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-purple-900 hover:text-black "
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
            {t("menu3")}
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {serviceMenus.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>                        
                      </div>
                    </div>
                  ))}
                </div>                
              </Popover.Panel>
            </Transition>
          </Popover>

        </Popover.Group>
            <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
            {t("menu4")}
              <ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {locations.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div>
                      <div className="flex-auto">
                        <a href={item.href} className="block font-semibold text-gray-900">
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>                        
                      </div>
                    </div>
                  ))}
                </div>
               
              </Popover.Panel>
            </Transition>
          </Popover>
         
        </Popover.Group>
        <Link
               
                href="https://www.safigrup.com/index.php?route=information/contact"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-700  transition"
              >
                {t("menu5")}
              </Link>
                <div className="py-6">
                  <div className="w-full flex justify-center">
                    {/* social links  */}
                    <Link
                      href="https://www.linkedin.com/in/boburbek-shahobiddin-0b9401227/"
                      className="ring-1 rounded-full mx-3  ring-slate-100 hover:ring-purple-950 shadow-2xl shadow-violet-950 transition-all"
                    >
                      <img
                        src="/about-linkedin.svg"
                        alt=""
                        className="p-2 w-10"
                      />
                    </Link>
                    <Link
                      href="https://t.me/abdurrohman_dev"
                      className="ring-1 rounded-full mx-3  ring-slate-100 hover:ring-purple-950 shadow-2xl shadow-violet-950 transition-all"
                    >
                      <img
                        src="/about-telegram.svg"
                        alt=""
                        className="p-2 w-10"
                      />
                    </Link>
                    <Link
                      href="https://wa.me/905510063265"
                      className="ring-1 rounded-full mx-3  ring-slate-100 hover:ring-purple-950 shadow-2xl shadow-violet-950 transition-all"
                    >
                      <img
                        src="/about-whatsapp.svg"
                        alt=""
                        className="p-2 w-10"
                      />
                    </Link>
                    <Link
                      href="https://www.instagram.com/abu_ibrohiiym?igsh=MW1reXM2MGJzcmZwaw=="
                      className="ring-1 rounded-full mx-3  ring-slate-100 hover:ring-purple-950 shadow-2xl shadow-violet-950 transition-all"
                    >
                      <img src="/instagram.svg" alt="" className="p-2 w-10" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}

