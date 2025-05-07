/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import PrimaryHeader from "~/components/PrimaryHeader";
import QuoteSection from "~/components/QuoteSection";
import ClassicSafaris from "~/components/itenaries/classic-safaris";
import useFetchImages from "~/hooks/useFetchImages";
import { ImageProps } from "~/lib/generateBlurPlaceHolder";
import Gallery, { CloudinaryImage } from "~/components/ui/GalleryImage";
import HeadSEO from "~/components/ui/Head";
import { base_keywords } from "~/lib/constants";
import CallToAction from "~/components/CallToAction";

const Page = ({ images }: { images: ImageProps[] }) => {
  return (
    <>
      <HeadSEO
        title="Classic Tanzania Safaris | Tazama Africa Safari Experiences"
        keywords={`${base_keywords}, classic safari Tanzania, Serengeti safari, Ngorongoro Crater tour, Tarangire National Park, Tanzania wildlife, Big Five safari, short safari Tanzania, luxury safari experience, guided safari tours, African wildlife viewing`}
        description="Experience our 5-day Classic Safari through Tanzania's iconic landscapes. Explore the Serengeti plains, Ngorongoro Crater, and Tarangire National Park with expert guides for an unforgettable wildlife adventure."
      />
      <PrimaryHeader image="discovery.webp" title="Classic Safaris" />

      <div className="mx-auto mt-10 max-w-5xl px-4 pt-[2rem]">
        <div className="">
          <h3 className="text-4xl text-[#A87133]">Classic Safaris</h3>
          <p className="mb-3 mt-5 text-[#757371]">
            Welcome to the Classic Safari with Tazama Africa Safaris, a journey
            that encapsulates the essence of the African wilderness in a
            compact, yet comprehensive adventure. Perfect for those who wish to
            soak in the splendor of Tanzania's most iconic landscapes and
            wildlife within a limited timeframe, our Classic Safari is an
            excursion into the heart of the natural world.
          </p>

          <p className="mb-3 mt-5 text-[#757371]">
            Envision a safari where every day is a journey through some of
            Africa's most renowned and wildlife-rich habitats. Our 5-day
            itinerary is thoughtfully crafted to showcase the diverse beauty of
            the Serengeti, the marvels of the Ngorongoro Crater, and the hidden
            gems of Tarangire National Park. Whether you're basking in the
            golden sunsets of the Serengeti, witnessing the grandeur of
            Ngorongoro's natural amphitheater, or exploring the elephant-dotted
            landscapes of Tarangire, this safari promises a parade of
            unforgettable moments.
          </p>
          <p className="mb-3 mt-5 text-[#757371]">
            The Classic Safari is a celebration of nature's wonders. In the
            Serengeti, watch as the savannah comes alive with the Great
            Migration, a spectacle of life in its most unfiltered form. In the
            Ngorongoro Crater, a UNESCO World Heritage Site, encounter a diverse
            array of species, from the elusive black rhino to the pink-hued
            flamingos adorning the soda lakes. Tarangire, with its
            baobab-studded landscapes and dense elephant population, offers a
            quieter, yet equally captivating wildlife viewing experience.
          </p>
        </div>
        <div className="mt-5 flex flex-col items-center justify-center space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0">
          <div className="relative h-[400px] w-full lg:w-[50%] ">
            <CloudinaryImage
              public_id={images[7]!.public_id}
              format={images[7]!.format}
              blurDataUrl={images[7]!.blurDataUrl!}
            />
          </div>

          <div className="relative h-[400px] w-full lg:w-[50%]">
            <CloudinaryImage
              public_id={images[6]!.public_id}
              format={images[6]!.format}
              blurDataUrl={images[6]!.blurDataUrl!}
            />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-5xl px-4">
        <div className="">
          <p className="mb-3 mt-5 text-[#757371]">
            Our accommodations, ranging from comfortable mid-range lodges to
            luxurious camps, are carefully selected to enhance your experience.
            Nestled in prime locations, they provide not just a place to rest,
            but a serene retreat to reflect on the day's adventures.
            <br />
            <br />
            Are you ready to delve into the wild heart of Tanzania and discover
            the timeless allure of its most celebrated parks? Join us at Tazama
            Africa Safaris for a Classic Safari that’s as enriching as it is
            exhilarating. Your journey through the wild, filled with awe and
            wonder, awaits.
            <br />
            <br />
          </p>
        </div>
      </div>

      <ClassicSafaris />

      <QuoteSection
        subText="- Leonie Trubshoe, Australia"
        quote="Tazama is the one safari company anyone thinking of visiting Tanzania should contact. Infact, anyone thinking of doing safari [anywhere]."
      />
      <div className="mt-10 flex flex-col items-center justify-center">
        <div className="mt-10 lg:mt-[10px] ">
          {/* @ts-ignore */}
          <Gallery images={images} />
        </div>
      </div>

      <br /><br /><br /> <br />
      <CallToAction />
    </>
  );
};

export default Page;

export async function getStaticProps() {
  const images = await useFetchImages({ folderName: "family_safari" });
  return {
    props: {
      images,
    },
  };
}
