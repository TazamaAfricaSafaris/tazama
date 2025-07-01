import Navbar from "~/components/Navbar";
import { Footer } from "~/components/Footer";
import { Toaster } from "./toaster";
import { FaWhatsapp } from "react-icons/fa";
import Script from "next/script"

import * as React from "react";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <div>
        <Navbar />
        <Toaster />
        <main className="relative">
          {children}
          <Link
            className="p-4 bg-green-600 w-fit  overflow-hidden fixed bottom-6 right-8 z-20 rounded-full flex items-center justify-center hover:bg-green-700 duration-200 transition-colors"
            href="https://wa.me/+255744400043"
            target="_blank"
          >
            <div className="flex items-center gap-4 text-white">
              <FaWhatsapp color="#fff" size={24} />
              <p className="max-md:hidden">
                Chat with us on WhatsApp
              </p>
            </div>
          </Link>
        </main>
        <Footer />

        <Script id="zohopublic-form">
        </Script>
      </div>
    </>
  );
}

          // <script type="text/javascript">function zforms_open_window(url, height, width){var leftPos = 0;var topPos = 0;if(screen){leftPos = (screen.width - width) / 2;topPos = (screen.height - height) / 2;window.open(url, null, 'width='+width+',height='+height+',left='+leftPos+',top='+topPos+', toolbar=0, location=0, status=1, scrollbars=1, resizable=1');}}</script><a href='https://forms.zohopublic.com/tazamaafricatourssafari1/form/TAZAMAPLANMYTRIPFORM/formperma/RpRK4CHabrTCKwe3sv1FNL5N9TBgcoBzTUZnWs6_Fvo' title="PLAN MY TRIP FORM" target='_blank' onclick="zforms_open_window(this.href, 648, 700); return false">Access Form</a>