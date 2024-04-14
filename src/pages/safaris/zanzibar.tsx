import Image from "next/legacy/image";
import { ImageProps } from "~/lib/generateBlurPlaceHolder";
import Gallery, { CloudinaryImage } from "~/components/ui/GalleryImage";
import QuoteSection from "~/components/QuoteSection";
import useFetchImages from "~/hooks/useFetchImages";
import HeadSEO from "~/components/ui/Head";
import { base_keywords } from "~/lib/constants";

const Page = ({ images }: { images: ImageProps[] }) => {
  return (
    <>
      <HeadSEO
        title="Zanzibar Safaris - Tazama Africa Tours"
        keywords={base_keywords}
      />
      <div className="relative h-screen">
        <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-start justify-center bg-black/60 text-white">
          <Image
            alt="tazama gallery photos"
            className="absolute left-0 right-0 top-0 -z-50 h-screen w-screen object-cover opacity-80"
            style={{
              transform: "translate3d(0, 0, 0)",
              imageRendering: "crisp-edges",
            }}
            placeholder="blur"
            blurDataURL={images[1]!.blurDataUrl!}
            src={`https://res.cloudinary.com/${
              process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
            }/image/upload/${images[1]!.public_id}.${images[1]!.format}`}
            layout="fill"
          />

          <div className="container">
            <h1 className="font-base absolute left-1/2 top-1/2 mx-auto w-full -translate-x-1/2 -translate-y-1/2 px-2 text-center text-6xl sm:px-12 lg:w-2/3 xl:text-7xl">
              Zanzibar
            </h1>
          </div>
        </div>
      </div>
      <div className="mx-auto  max-w-7xl px-4 md:px-8">
        <div className="mb-10 py-8">
          <h3 className="text-4xl text-[#A87133]">
            An Archipelago in the Indian ocean
          </h3>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            Welcome to the epitome of serenity and adventure, where the
            crystalline waters of the Indian Ocean caress the shores of
            Tanzania's untouched beaches. Our beach holiday page serves as your
            exclusive gateway to the enchanting islands of Zanzibar, including
            the secluded havens of Mafia, Pemba, and Unguja. Each destination
            promises an unparalleled fusion of opulence and excitement, steeped
            in a tapestry of rich culture and captivating history.
          </p>
          <p className="mb-3 mt-5 text-xl text-[#757371]">
            Zanzibar, renowned as the spice island, has beckoned explorers,
            mariners, and merchants for centuries, its shores laden with the
            intoxicating aromas of cloves, nutmeg, and cinnamon. Today, the
            Zanzibar Archipelago remains a sanctuary of indulgence, where
            traditional dhows gracefully glide across the horizon amidst a
            backdrop of timeless beauty.
          </p>

          <div className="mt-5 flex flex-col items-center justify-center space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0">
            <div className="relative h-[400px] w-full lg:w-[50%] ">
              <CloudinaryImage
                public_id={images[3]!.public_id}
                format={images[3]!.format}
                blurDataUrl={images[3]!.blurDataUrl!}
              />
            </div>

            <div className="relative h-[400px] w-full lg:w-[50%]">
              <CloudinaryImage
                public_id={images[7]!.public_id}
                format={images[7]!.format}
                blurDataUrl={images[7]!.blurDataUrl!}
              />
            </div>
          </div>
        </div>
      </div>

      <QuoteSection
        subText="- Leonie Trubshoe, Australia"
        quote="Tazama is the one safari company anyone thinking of visiting Tanzania should contact. Infact, anyone thinking of doing safari [anywhere]."
      />
      <div className="mt-10 flex flex-col items-center justify-center">
        {/* @ts-ignore */}
        <Gallery images={images} />
      </div>
    </>
  );
};

export default Page;

export async function getStaticProps() {
  const images = await useFetchImages({ folderName: "beach_holidays" });
  return {
    props: {
      images,
    },
  };
}
