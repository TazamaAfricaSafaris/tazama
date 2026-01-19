/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { type ChangeEvent } from "react"
import Image from "next/image"
import posthog from "posthog-js";
import { api } from "~/lib/api";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "~/components/ui/dialog";


// Importing social media icons from react-icons
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
  FaTripadvisor,
} from "react-icons/fa";
import { applicationName } from "../helpers";
import Link from "next/link";

import { useToast } from "~/hooks/useToast";
import { ToastAction } from "~/components/ui/Toast";

import { useRouter } from "next/router";


import { Input } from "./Form";
import { safaris } from "~/data/data";
import { lodges } from "~/data/lodges";
import { AnimatePresence, motion } from "framer-motion";


const kilimanjaroNav = [
  { name: "Climbing Mount Kilimanjaro", link: "kilimanjaro" },
  { name: "Our Kilimanjaro Itineraries", link: "kilimanjaro/itineraries" },
  { name: "Tazama's Kilimanjaro Experience", link: "kilimanjaro/what-makes-kilimanjaro-tazama-trek-different" },
  { name: "Kilimanjaro Routes", link: "kilimanjaro/routes" },
  { name: "Lemosho Route", link: "kilimanjaro/routes/lemosho" },
  { name: "Machame Route", link: "kilimanjaro/routes/machame" },
  { name: "Marangu Route", link: "kilimanjaro/routes/marangu" },
]

// Footer functional component definition
export const Footer = () => {
  const [email, setEmail] = React.useState<string>("");
  const [loading, setLoading] = React.useState(true);

  const router = useRouter();
  const { toast } = useToast();

  const { isLoading, mutateAsync } = api.contactEmail.send.useMutation({
    onSuccess: () => {
      router.push("/thank-you");
    },
    onError: () => {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: `Try adding all the details and submit again`,
        action: <ToastAction altText="Try again">Try again</ToastAction>,
        duration: 1500,
      });
    },
  });



  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutateAsync({
      email: email,
      message: "New Email Submission",
      fullNames: "See email"
    });
  };

  return (
    <>
      {/* <NewsletterSignup /> */}
      <footer className="border-t  border-t-[#E0DED9] px-8 pt-20 pb-10 max-w-6xl mx-auto">
        <div className="w-full mb-8">
          <div className="flex flex-col items-center gap-8">
            <div className="w-full mb-8">
              <div className="flex flex-col md:flex-row items-end gap-8">
                <div className="w-full max-w-xl">
                  <h3 className="text-3xl mb-4 text-primary">Stay Updated on Exclusive Adventures</h3>
                  <p className="max-w-md">Sign up to get the latest travel tips, exclusive destination highlights, and early access to new adventures. Join our community and never miss out!
                  </p>
                </div>
                <form
                  method="POST"
                  className="mx-auto w-full"
                  onSubmit={onSubmit}
                >
                  <div className="flex max-sm:flex-col items-end gap-4">
                    <Input
                      required
                      type="email"
                      name="email"
                      value={email}
                      label="Email Address*"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      onClick={() => {
                        posthog.capture("contact-form", { property: "Contact form" });
                      }}
                      className="w-fit max-sm:w-full h-fit rounded-lg bg-[#A87133] px-6 py-3 text-white hover:border hover:border-[#A87133] hover:bg-transparent hover:text-[#A87133]"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="w-full relative h-96 rounded-3xl overflow-hidden">
              <div className="absolute top-0 left-8 w-full h-full flex items-center justify-start z-10">
                <div className="flex-col gap-2 flex max-w-lg text-white">
                  <h4 className="text-2xl md:text-4xl">
                    Bring Your Dreams into Reality
                  </h4>
                  <p className="max-md:text-sm mb-4">
                    Fill in the form in  below to create your custom itinerary. Our highly experienced team of professionals team will go through your request and get back to you
                  </p>

                  <Dialog>
                    <DialogTrigger asChild>
                      <p className="border border-white hover:border-primary rounded-md px-4 lg:px-6 py-2 md:text-lg text-xl font-raleway text-white hover:bg-primary/15 transition-colors duration-200 cursor-pointer w-fit max-md:text-sm">
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
              <Image
                src="/assets/images/gallery/faq.webp"
                alt=""
                layout="fill"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className="my-12 flex justify-between gap-6 max-lg:flex-wrap pt-12 border-t border-t-[#E0DED9]">
          <div className="h-fit">
            <h3 className="text-primary font-raleway text-xl font-medium mb-4">Safaris</h3>
            <ul className="grid gap-1">
              {safaris.map(safari => (
                <li key={safari.href}>
                  <Link href={safari.href} className="hover:underline hover:underline-offset-2">{safari.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="h-fit">
            <h3 className="text-primary font-raleway text-xl font-medium mb-4">Mount Kilimanjaro</h3>
            <ul className="grid gap-1">
              {
                kilimanjaroNav.map(link => (
                  <Link key={link.link} href={`/${link.link}`} className="hover:underline hover:underline-offset-2">{link.name}</Link>
                ))
              }
              {/* <Link href="safaris/mount-meru" className="hover:underline hover:underline-offset-2">Mount Meru</Link> */}
            </ul>
          </div>
          <div className="h-fit">
            <h3 className="text-primary font-raleway text-xl font-medium mb-4">East Africa</h3>
            <ul className="grid gap-1">
              <Link href="/east-africa/tanzania" className="hover:underline hover:underline-offset-2">Tanzania</Link>
              <Link href="/east-africa/kenya" className="hover:underline hover:underline-offset-2">Kenya</Link>
              <Link href="/east-africa/rwanda" className="hover:underline hover:underline-offset-2">Rwanda</Link>
              <Link href="/east-africa/uganda" className="hover:underline hover:underline-offset-2">Uganda</Link>
            </ul>
          </div>
          <div className="h-fit">
            <h3 className="text-primary font-raleway text-xl font-medium mb-4">Other Links</h3>
            <ul className="grid gap-1">
              <Link href="/lodges" className="hover:underline hover:underline-offset-2">Our Itineraries</Link>
              <Link href="/lodges" className="hover:underline hover:underline-offset-2">Lodges</Link>
              <Link href="/partners" className="hover:underline hover:underline-offset-2">Partners</Link>
              <Link href="/sustainability" className="hover:underline hover:underline-offset-2">Sustainability</Link>
            </ul>
          </div>
        </div>

        {/* Container for footer content with responsive design for column and row layout */}
        <div className="flex-between flex flex-col items-center justify-between gap-y-4 pt-8 lg:flex-row border-t border-t-[#E0DED9]">
          {/* List container for footer links and copyright information */}
          <ul className="flex flex-col gap-2 text-center text-sm sm:flex-row sm:gap-4">
            {/* List item for copyright notice dynamically inserting the current year */}
            <li>
              <p className="text-[#414141]">
                All rights reserved&nbsp;&copy;&nbsp;{new Date().getFullYear()}{" "}
                {applicationName}
              </p>
            </li>
            {/* List items for various footer links with hover effects */}
            <li className="text-[#969492] hover:underline">
              <Link href="/terms">Terms & Conditions</Link>
            </li>
            {/* <li className="text-[#969492] hover:underline">
              <Link href="/testimonials">Testimonials</Link>
            </li> */}
            <li className="text-[#969492] hover:underline">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>

          {/* Container for social media icons with a gap between them */}
          <div className="flex w-fit gap-x-4">
            {/* Anchor tags linking to respective social media platforms, each opening in a new tab */}
            <a
              href="https://www.tripadvisor.com/Attraction_Review-g6940195-d13368802-Reviews-Tazama_Africa_Tours_and_Safari-Arusha_National_Park_Arusha_Region.html"
              target="_blank"
            >
              <FaTripadvisor className="cursor-pointer text-2xl text-[#35E0A1]" />
            </a>
            <a href="https://instagram.com/tazamaafricasafaris" target="_blank">
              <FaInstagram className="cursor-pointer text-2xl text-[#C13584]" />
            </a>
            <a href="https://facebook.com/TazamaAfricaSafaris" target="_blank">
              <FaFacebook className="cursor-pointer text-2xl text-[#4267B2]" />
            </a>
            <a href="https://youtube.com/@tazama_africa" target="_blank">
              <FaYoutube className="cursor-pointer text-2xl text-[#FF0000]" />
            </a>
            <a href="https://tiktok.com/@tazama_africa" target="_blank">
              <FaTiktok className="cursor-pointer text-2xl text-[#000000]" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
