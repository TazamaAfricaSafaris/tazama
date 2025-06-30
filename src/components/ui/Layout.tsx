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
            className="whatsapp-button-container"
            href="https://wa.me/+255744400043"
            target="_blank"
          >
            <div className="whatsapp-button">
              <FaWhatsapp color="#fff" size={24} />
              <p>
                Chat with us on WhatsApp
              </p>
            </div>
          </Link>
        </main>
        <Footer />
      </div>
    </>
  );
}
