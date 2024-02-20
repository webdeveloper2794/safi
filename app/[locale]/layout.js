import * as React from "react";
import { Suspense } from "react";

import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import { Providers } from "./providers";
import Loading from "./loading";
import {NextIntlClientProvider, useMessages} from 'next-intl';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Safi Grup Wholesale",
  description: "Building Your Digital Universe",
};

export default function RootLayout({ children, params:{locale} }) {
  const messages = useMessages();
  return (
    <html lang={locale} className="dark">
      <body className={inter.className}>
        <Providers>
      <NextIntlClientProvider messages={messages}>

          <div className="bg-white">
            <Navbar />
          </div>
          <Suspense fallback={<Loading />}>
         
            {children}
            
            </Suspense>
          <div className="bg-white">
            <Footer />
          </div>
          </NextIntlClientProvider>
        </Providers>
      </body>
    </html>
  );
}
