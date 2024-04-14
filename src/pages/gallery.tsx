import React from "react";
import PrimaryHeader from "~/components/PrimaryHeader";
import Image from "next/legacy/image";
import HeadSEO from "~/components/ui/Head";
import { base_keywords } from "~/lib/constants";
const honeyMooners = [
  {
    id: 1,
    src: "/assets/images/gallery/family-trip.webp",
  },
  {
    id: 2,
    src: "/assets/images/gallery/maasai.webp",
  },
  {
    id: 3,
    src: "/assets/images/gallery/blog.webp",
  },
  {
    id: 4,
    src: "/assets/images/gallery/offer.webp",
  },
  {
    id: 5,
    src: "/assets/images/gallery/classic-safaris.webp",
  },
  {
    id: 6,
    src: "/assets/images/gallery/discovery.webp",
  },
];

const MemoryImage = ({ src }: { src: string }) => {
  return (
    <div className="relative h-[200px] w-[80%] md:h-[300px] lg:w-[400px]">
      <Image src={src} layout="fill" className="rounded-sm object-cover" />
    </div>
  );
};

const GalleryPage = () => {
  return (
    <>
      <HeadSEO title="Gallery" keywords={base_keywords} />
      <PrimaryHeader image="gallery.webp" title="Glimpse of our Memories" />

      <section className="flex flex-col items-center justify-center">
        <div className="mb-10 py-8">
          <h3 className="text-center text-4xl text-[#A87133]">
            Our Personal Tailored experiences
          </h3>
          <p className="mb-3 mt-5 text-center text-lg text-[#757371]">
            Welcome to our diverse collection of meticulously crafted
            itineraries, each designed to offer you a unique and unforgettable
            travel experience. Our itineraries are thoughtfully curated to
            showcase the beauty, culture, and adventure awaiting you at every
            destination.
          </p>
        </div>
        <div className="mt-10 lg:mt-[10px] ">
          <div className="mt-[4px] flex flex-col items-center justify-center gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
            {honeyMooners.map((item) => (
              <MemoryImage src={item.src} key={item.id} />
            ))}
            {honeyMooners.map((item) => (
              <MemoryImage src={item.src} key={item.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
