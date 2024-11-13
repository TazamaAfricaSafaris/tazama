import OffBeatenItenary from "~/components/itenaries/off-beaten-path";
import QuoteSection from "~/components/QuoteSection";
import Image from "next/legacy/image";
import useFetchImages from "~/hooks/useFetchImages";
import { ImageProps } from "~/lib/generateBlurPlaceHolder";
import Gallery, { CloudinaryImage } from "~/components/ui/GalleryImage";
import HeadSEO from "~/components/ui/Head";
import { base_keywords } from "~/lib/constants";
import CallToAction from "~/components/CallToAction";


const Page = ({ images }: { images: ImageProps[] }) => {
  return (
    <>
      <HeadSEO title="Off the Beaten Path Safaris - Tazama Africa " keywords={base_keywords} />
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
            src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
              }/image/upload/${images[1]!.public_id}.${images[1]!.format}`}
            layout="fill"
          />

          <div className="container">
            <h1 className="font-base absolute left-1/2 top-1/2 mx-auto w-full -translate-x-1/2 -translate-y-1/2 px-2 text-center text-6xl sm:px-12 lg:w-2/3 xl:text-7xl">
              Off the Beaten Path
            </h1>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-5xl px-4 pt-[2rem]">
        <div className="">
          <h3 className="text-4xl text-[#A87133]">Off the Beaten Path</h3>
          <p className="mb-3 mt-5 text-[#757371]">
            Welcome to the Off the Beaten Path Safari with Tazama Africa
            Safaris, where we take you beyond the usual trails to explore
            Tanzania's hidden gems. This safari experience is tailored for those
            who seek adventure in the less-traveled corners of the wilderness,
            where the beauty of nature is raw and unspoiled.
          </p>

          <p className="mb-3 mt-5 text-[#757371]">
            Dive into a safari experience that’s far from ordinary. Our
            carefully crafted itinerary takes you to remote destinations,
            offering an intimate connection with the wild. You’ll traverse
            landscapes that few have witnessed, from secluded valleys and
            untouched forests to hidden waterways teeming with wildlife.
          </p>
          <p className="mb-3 mt-5 text-[#757371]">
            Experience the thrill of uncovering secret spots within well-known
            reserves or venturing into lesser-known parks where wildlife roams
            freely, away from the crowds. These off-the-beaten-path locations
            are sanctuaries for rare species and offer unparalleled
            opportunities for wildlife observation and photography.
          </p>
        </div>
        <div className="mt-5 flex flex-col items-center justify-center space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0">
          <div className="relative h-[400px] w-full lg:w-[50%] ">
            <CloudinaryImage
              public_id={images[2]!.public_id}
              format={images[2]!.format}
              blurDataUrl={images[2]!.blurDataUrl!}
            />
          </div>

          <div className="relative h-[400px] w-full lg:w-[50%]">
            <CloudinaryImage
              public_id={images[0]!.public_id}
              format={images[0]!.format}
              blurDataUrl={images[0]!.blurDataUrl!}
            />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-5xl px-4">
        <div className="">
          <p className="mb-3 mt-5 text-[#757371]">
            If you’re longing for an adventure that takes you to the heart of
            the wild, untouched by mass tourism, our Off the Beaten Path Safari
            is your gateway to a different kind of safari experience. It's an
            adventure that promises not just sightings, but stories; not just
            views, but visions.
            <br />
            <br />
            Get in touch with us at Tazama Africa Safaris to start planning your
            journey into the lesser-known, yet equally mesmerizing, wonders of
            Tanzania. Your adventure through the hidden treasures of the wild
            awaits.
          </p>
        </div>
      </div>

      <OffBeatenItenary />

      <QuoteSection
        subText="- Leonie Trubshoe, Australia"
        quote="Tazama is the one safari company anyone thinking of visiting Tanzania should contact. Infact, anyone thinking of doing safari [anywhere]."
      />
      <div className="mt-10 flex flex-col items-center justify-center">
        <div className="mb-10 mt-10 lg:mt-[10px] ">
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
  const images = await useFetchImages({ folderName: "offbeaten_path" });
  return {
    props: {
      images,
    },
  };
}
