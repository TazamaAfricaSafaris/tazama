import Navbar from "~/components/Navbar";
import { Footer } from "~/components/Footer";
import { Toaster } from "./toaster";
import { FaWhatsapp } from "react-icons/fa";

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
                Chat with us on Whatsapp
              </p>
            </div>
          </Link>
        </main>
        <Footer />
      </div>
    </>
  );
}
