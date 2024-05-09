import React from "react";
import HeadSEO from "./Head";
import { Kilimanjaro_keywords } from "~/lib/constants";
import { Button } from "./button";
import Link from "next/link";

export default function BlogLayout({
  children,
  title,
  bookingPage,
  coverImg,
}: {
  children: React.ReactNode;
  title: string;
  bookingPage?: string;
  coverImg?: string;
}) {
  return (
    <React.Fragment>
      <HeadSEO title={title} keywords={Kilimanjaro_keywords} />
      <div className="relative h-[60vh]">
        <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-start justify-center bg-black/60 text-white">
          <img
            // src={`/assets/images/gallery/mount-kilimanjaro.webp`}
            src={
              coverImg
                ? coverImg
                : "/assets/images/gallery/mount-kilimanjaro.webp"
            }
            className="absolute left-0 right-0 top-0 -z-50 h-[60vh] w-screen object-cover opacity-80 "
          />
          <div className="container flex flex-col">
            <h1 className="font-base absolute left-1/2 top-[40%] mx-auto w-full -translate-x-1/2 -translate-y-1/2 px-2 text-center text-3xl md:text-4xl sm:px-12 lg:w-2/3 lg:text-5xl">
              {title}
            </h1>

            {/* <h1 className="font-base absolute left-1/2 top-[60%] mx-auto w-full -translate-x-1/2 -translate-y-1/2 px-2 text-center text-6xl sm:px-12 lg:w-2/3 xl:text-7xl">
              Book this trip
            </h1> */}

            {bookingPage && (
              <Link href={bookingPage}>
                <Button className="font-base font-base absolute left-1/2 top-[60%]  mx-auto -translate-x-1/2 -translate-y-1/2 bg-primary  px-2 text-center  text-xl sm:px-12">
                  Book this Trip
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <section className="lg:mx-auto lg:max-w-none">
        <section className="mx-auto  max-w-7xl px-4 pb-10 md:px-0">
          {children}
        </section>
      </section>
    </React.Fragment>
  );
}
