"use client"
import React from 'react'

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "~/components/ui/dialog";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

function CustomTripFormCallToAction() {
  const [loading, setLoading] = useState(true);

  return (
    <section className="bg-lighter relative bg-cover bg-center py-8 rounded-3xl overflow-hidden">
      <div className="max-w-5xl z-10 relative top-0 left-0 w-full mx-auto flex flex-col items-center justify-center p-4 gap-8 md:p-10 xl:px-36 text-white">
        <h1 className="text-5xl leading-none text-left">Your next breathtaking escape awaits.</h1>

        <div className="flex flex-col md:flex-row items-start justify-start gap-4 w-full">

          <Dialog>
            <DialogTrigger asChild>
              <p className="border border-white hover:border-primary rounded-md px-4 lg:px-6 py-2 md:text-lg text-xl font-raleway text-white hover:bg-primary/15 transition-colors duration-200 cursor-pointer">
                Plan My Trip
              </p>
            </DialogTrigger>
            <DialogContent className="h-[80%] p-0 bg-background">
              <AnimatePresence>
                {loading && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 flex justify-center items-center text-darker">
                    <p className="text-xl text-white">Loading...</p>
                  </motion.div>
                )}
              </AnimatePresence>
              <iframe
                width="720"
                height="315"
                src="https://forms.zohopublic.com/tazamaafricatourssafari1/form/TAZAMAPLANMYTRIPFORM/formperma/RpRK4CHabrTCKwe3sv1FNL5N9TBgcoBzTUZnWs6_Fvo"
                title="Plan your dream trip and we'll get back to you"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full z-0 rounded-xl"
                onLoad={() => setLoading(false)}
              ></iframe>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <br />
      <Image src="https://images.pexels.com/photos/1815084/pexels-photo-1815084.jpeg" alt="" layout="fill" objectFit="cover" className="w-full h-full brightness-[0.7]" />
    </section>
  )
}

export default CustomTripFormCallToAction