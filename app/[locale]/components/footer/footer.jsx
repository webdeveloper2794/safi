import Link from "next/link";
import { CursorArrowRaysIcon, LinkIcon,AtSymbolIcon, PhoneIcon} from '@heroicons/react/24/outline'
import { Tooltip, Button } from "@nextui-org/react";
import { useTranslations, useLocale } from "next-intl";
import {Accordion, AccordionItem} from "@nextui-org/react";


export default function Footer() {
  const t = useTranslations("Navbar");
  const tFooter = useTranslations("Footer");

  const contracts = [
    { name: tFooter("about-us"), href: "https://www.safigrup.com/hakkimizda" },
    { name: tFooter("agreement"), href: "https://www.safigrup.com/mesafeli-satis-sozlesmesi" },
    { name: tFooter("privacy"), href: "https://www.safigrup.com/privacy" },
    { name: tFooter("terms"), href: "https://www.safigrup.com/terms" },
  ];
  const services = [
    { name:  t("submenu1"), href: "https://www.safigrup.com/index.php?route=information/information&information_id=11" },
    { name: t("submenu2"), href: "https://www.safigrup.com/index.php?route=information/information&information_id=9" },
    { name: t("submenu3"), href: "https://www.safigrup.com/index.php?route=information/information&information_id=10" },
    { name: t("submenu4"), href: "https://www.safigrup.com/boyasiz-gocuk-duzeltme-egitimi" },
  ];
  const customerService = [
    { name: tFooter("contact"), href: "https://www.safigrup.com/index.php?route=information/contact" },
    { name: tFooter("map"), href: "https://www.safigrup.com/index.php?route=information/sitemap" },
    { name: tFooter("brand"), href: "https://www.safigrup.com/index.php?route=product/manufacturer" },
  ];
  const contact = [
    { name: tFooter("address"), href: "/service" },
    { name: tFooter("address2"), href: "/service" },
  ];
  const socialLinks = [
    { name: "Service", href: "https://www.facebook.com/safiotomotiv?eid=ARDJecOxNuSVzw2KdYepQXeq9-vnqaN7F1yt4a6CHiQuy-P6tP2az1QjN9tksQFbvYpm2dMjpaNg9TCC",src: "/facebook.png" },
    { name: "Service", href: "https://www.youtube.com/@safigrupotomotiv",src: "/youtube.png" },
    { name: "Service", href: "https://www.instagram.com/safiotomotiv/",src: "/instagram.png" },  
    { name: "Service", href: "https://wa.me/+905010274949",src: "/whatsapp.png" },  
  ];
  return (
    <>
      <div className="mx-auto w-full h-auto px-6 lg:px-8 pt-10 border-t-1 border-slate-100">
        <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none">         
          <dl className="grid  gap-x-2 gap-y-10 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 lg:pt-2 w-full">
            <div className="flex flex-col items-start">  
            
              <dt className="mt-4 font-semibold bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-400 inline-block text-transparent bg-clip-text">{tFooter("contracts")}</dt>
              <dd className="mt-2 leading-7 text-gray-400 flex flex-col">
              {contracts.map((item,index) => (
              <Link
                key={index}
                href={item.href}
                className="text-sm  leading-6 text-gray-700 hover:text-purple-700 mb-5"
              >
                {item.name}
              </Link>
            ))}
              </dd>
            </div>
            <div className="flex flex-col items-start">  
            
              <dt className="mt-4 font-semibold bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-400 inline-block text-transparent bg-clip-text">{t("menu3")}</dt>
              <dd className="mt-2 leading-7 text-gray-400 flex flex-col">
              {services.map((item,index) => (
              <Link
                key={index}
                href={item.href}
                className="text-sm  leading-6 text-gray-700 hover:text-purple-700 mb-5"
              >
                {item.name}
              </Link>
            ))}
              </dd>
            </div>
            <div className="flex flex-col items-start">  
            
              <dt className="mt-4 font-semibold bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-400 inline-block text-transparent bg-clip-text">{tFooter("customer")}</dt>
              <dd className="mt-2 leading-7 text-gray-400 flex flex-col">
              {customerService.map((item,index) => (
              <Link
                key={index}
                href={item.href}
                className="text-sm  leading-6 text-gray-700 hover:text-purple-700 mb-5"
              >
                {item.name}
              </Link>
            ))}
              </dd>
            </div>
            <div className="flex flex-col items-start">  
            
              <dt className="mt-4 font-semibold bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-400 inline-block text-transparent bg-clip-text">{tFooter("contact-info")}</dt>
              <dd className="mt-2 leading-7 text-gray-400 flex flex-col">
              {contact.map((item,index) => (
              <Link
                key={index}
                href={item.href}
                className="text-sm  leading-6 text-gray-700 hover:text-purple-700 mb-5"
              >
                {item.name}
              </Link>
            ))}
              </dd>
            </div>
            <div className="flex flex-col items-start">              
              
              <dd className="mt-2 leading-7 text-gray-400 flex">
              {socialLinks.map((item,index) => (
              <Link
                key={index}
                href={item.href}
                className="ring-1 rounded-full mr-3  ring-slate-100 hover:ring-purple-950 shadow-2xl shadow-violet-950 transition-all"
              >
                <img src={item.src} alt="social" className="p-2 w-10 shadow-2xl" />
              </Link>
            ))}
              </dd>
              <div className="rounded-md pt-4 py-2 flex">
              <Link
                  href="tel:+905010274949"
                  className="ring-1 rounded-full  ring-slate-100 bg-white/5 hover:ring-purple-950 shadow-2xl shadow-violet-950 transition-all flex px-2 py-1 text-gray-700 text-xs"
                >
                  <PhoneIcon className="h-4 w-4 text-violet-800" aria-hidden="true" />
                  <span className="px-1">
                  +90 501 027 49 49
                  </span>
                 
                </Link>             
                
              </div>
              <div className="rounded-md pt-4 py-2 flex">
              <Link
                  href="tel:+905070230059"
                  className="ring-1 rounded-full  ring-slate-100 bg-white/5 hover:ring-purple-950 shadow-2xl shadow-violet-950 transition-all flex px-2 py-1 text-gray-700 text-xs"
                >
                  <PhoneIcon className="h-4 w-4 text-violet-800" aria-hidden="true" />
                  <span className="px-1">
                  +90 507 023 00 59
                  </span>
                 
                </Link>             
                
              </div>
              <div className="rounded-md   py-2   flex">
              <Link
                  href="mailto:safiotomotiv@gmail.com"
                  className="ring-1 bg-white/5 rounded-full  ring-slate-100 hover:ring-purple-950 shadow-2xl shadow-violet-950 transition-all flex px-2 py-1 text-gray-700   text-xs"
                >
                  <AtSymbolIcon className="h-4 w-4 text-violet-800" aria-hidden="true" />
                 <span className="px-1">safiotomotiv@gmail.com</span>
                </Link>
                
              </div>
              
             
            </div>
          </dl>
        </div>
      </div>     
    </>
  )
}
