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

      <section className="flex flex-col items-center justify-center max-w-5xl mx-auto mt-16">
        <div className="mb-4 py-8">
          <h3 className="text-center text-4xl text-[#A87133]">
            Our Personal Tailored experiences
          </h3>
          <p className="mt-5 text-[#757371]">
            Welcome to our diverse collection of meticulously crafted
            itineraries, each designed to offer you a unique and unforgettable
            travel experience. Our itineraries are thoughtfully curated to
            showcase the beauty, culture, and adventure awaiting you at every
            destination.
          </p>
        </div>

        <div className="mb-20 px-6 md:px-0">
          <h3 className="text-center text-4xl md:text-5xl text-[#A87133] mb-4">
            Join us on Instagram
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-4 px-6 md:px-0">
            <InstagramEmbed url="https://www.instagram.com/p/DDq1Yf5i956/" />
            <InstagramEmbed url="https://www.instagram.com/reel/CzfuhEvtnPi/" />
            <InstagramEmbed url="https://www.instagram.com/reel/DJ4KpL8CQUD/" />
            {/* reel/CzfuhEvtnPi/ */}
          </div>

          <div className="mx-auto flex justify-center">
            <Link href="https://www.youtube.com/@tazama_africa" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#F0D246] via-[#E23167] to-[#6B3AE9] text-white px-8 py-4 rounded-full hover:brightness-90 transition-colors duration-300 flex items-center gap-2 w-fit">
              <FaInstagram className="inline-block ml-2 text-xl" />
              <span>Follow us on Instagram</span>
            </Link>
          </div>
        </div>


        <div className="mb-20 px-6 md:px-0">
          <h3 className="text-center text-4xl md:text-5xl text-[#A87133] mb-4">
            Subscribe to our Youtube Channel
          </h3>
          <Carousel
            opts={{
              // loop: true, 
              align: "center",
            }}
          >
            <CarouselContent>
              <CarouselItem className="pt-1">
                <YouTubeEmbed url="https://www.youtube.com/embed/S8UawcsyQic?si=4nV6RjtwGW4eNPEo" />
              </CarouselItem>
              <CarouselItem className="pt-1">
                <YouTubeEmbed url="https://www.youtube.com/embed/XqIhqS3Y0Ds?si=UTX6hdYXaUDymP1-" />
              </CarouselItem>
            </CarouselContent>
            <div>
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>

        </div>
        <div>
          <Link href="https://www.youtube.com/@tazama_africa" target="_blank" rel="noopener noreferrer" className="mt-6 bg-[#FF0033] text-white px-8 py-4 rounded-full hover:bg-[#db002c] transition-colors duration-300 flex items-end gap-2">
            <FaYoutube className="inline-block ml-2 text-xl" />
            <span>Visit our YouTube Channel</span>
          </Link>
        </div>

        <br />

        <div>
          <div className="mt-[4px] flex flex-col items-center justify-center gap-4 md:gap-0 md:grid md:grid-cols-2 lg:grid-cols-3">
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
