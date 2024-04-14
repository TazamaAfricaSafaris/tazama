import Navbar from "~/components/Navbar";
import { Footer } from "~/components/Footer";
import Head from "./Head";

import * as React from "react";
import { Toaster } from "./toaster";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <Toaster />
      <main>{children}</main>
      <Footer />
    </>
  );
}
