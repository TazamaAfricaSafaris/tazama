/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import PrimaryHeader from "~/components/PrimaryHeader";
import Image from "next/legacy/image";
import { type ImageProps } from "~/lib/generateBlurPlaceHolder";
import HeadSEO from "~/components/ui/Head";
import { base_keywords } from "~/lib/constants";
import useFetchImages from "~/hooks/useFetchImages";

const GalleryPage = ({ images }: { images: ImageProps[] }) => {
  return (
    <>
      <HeadSEO 
        title="Safari & Kilimanjaro Photo Gallery | Tazama Africa" 
        keywords={`${base_keywords}, Tanzania safari photos, Kilimanjaro trek images, wildlife photography, African landscapes, Serengeti pictures, Tanzania wildlife gallery, safari memories, African adventure photos, Ngorongoro Crater images, Tanzania travel gallery`}
        description="Explore our gallery of stunning Tanzania safari and Kilimanjaro trek photographs. Get inspired by breathtaking wildlife encounters, majestic landscapes, and unforgettable African adventures captured through our lens"
      />
      <PrimaryHeader image="gallery.webp" title="Glimpse of our Memories" />

      <section className="flex flex-col items-center justify-center max-w-5xl mx-auto mt-16">
        <div className="mb-4 py-8 px-6 lg:px-0">
          <h3 className="text-center text-4xl md:text-5xl text-[#A87133]">
            Our Personal Tailored experiences
          </h3>
          <p className="mt-5">
            Welcome to our diverse collection of meticulously crafted
            itineraries, each designed to offer you a unique and unforgettable
            travel experience. Our itineraries are thoughtfully curated to
            showcase the beauty, culture, and adventure awaiting you at every
            destination.
          </p>
        </div>
        <div>
          <div className=" mb-20 px-6 md:px-0">
            <MasonryGallery images={images} />
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;

export function MasonryGallery({ images }: { images: ImageProps[] }) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 sm:gap-4 lg:gap-6 [column-fill:_balance]">
      {images.map((image) => (
        <div
          key={(image as any).public_id ?? image.id}
          className="mb-3 sm:mb-4 lg:mb-6 break-inside-avoid rounded-xl overflow-hidden"
        >
          <Image
            alt="tazama gallery photos"
            className="object-cover w-full h-full rounded-xl"
            style={{
              transform: "translate3d(0, 0, 0)",
              imageRendering: "crisp-edges",
            }}
            placeholder="blur"
            blurDataURL={(image as any).blurDataUrl}
            src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${(image as any).public_id}.${(image as any).format}`}
            width={Number(image.width)}
            height={Number(image.height)}
          />
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const images = await useFetchImages({ folderName: "gallery" });
  return {
    props: {
      images,
    },
  };
}
