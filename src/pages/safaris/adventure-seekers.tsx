/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import { ImageProps } from "~/lib/generateBlurPlaceHolder";
import Gallery, { CloudinaryImage } from "~/components/ui/GalleryImage";
import QuoteSection from "~/components/QuoteSection";
import Image from "next/legacy/image";
import useFetchImages from "~/hooks/useFetchImages";
import HeadSEO from "~/components/ui/Head";
import { base_keywords } from "~/lib/constants";
import CallToAction from "~/components/CallToAction";

const Page = ({ images }: { images: ImageProps[] }) => {
  return (
    <>
      <HeadSEO title="Tazama Africa Safaris | Custom Adventure Travel Experiences" keywords={base_keywords} />
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
            blurDataURL={images[0]!.blurDataUrl!}
            src={`https://res.cloudinary.com/${
              process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
            }/image/upload/${images[0]!.public_id}.${images[0]!.format}`}
            layout="fill"
          />

          <div className="container">
            <h1 className="font-base absolute left-1/2 top-1/2 mx-auto w-full -translate-x-1/2 -translate-y-1/2 px-2 text-center text-6xl sm:px-12 lg:w-2/3 xl:text-7xl">
              Adventure Seekers
            </h1>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-5xl px-4 pt-[2rem]">
        <div className="">
          <h3 className="text-4xl text-[#A87133]">Adventure Seekers</h3>
          <p className="mb-3 mt-5 text-[#757371]">
            Step into a world where every day is an exhilarating new chapter
            with Tazama Africa Safaris, your gateway to Africa's untamed beauty
            and thrilling adventures. Our safaris are designed for those who
            crave the pulse of adventure and the joy of discovery.
          </p>

          <p className="mb-3 mt-5 text-[#757371]">
            Your journey with us is a tapestry of diverse experiences. Imagine
            tracking the Big Five during a wildlife safari in the heart of the
            Serengeti, feeling your heart race as you witness nature's raw
            power. Venture to the Ngorongoro Crater, where each turn reveals
            another aspect of the wilderness waiting to be explored. Our
            itineraries are carefully crafted to satisfy your thirst for
            adventure, blending wildlife encounters with rich cultural
            immersions.
          </p>
          <p className="mb-3 mt-5 text-[#757371]">
            The adventure extends beyond the typical safari. Feel the rush of
            adrenaline as you partake in activities like hot air ballooning over
            vast savannas, trekking through lush landscapes, or navigating the
            rapids of mighty rivers. Each activity is an opportunity to
            challenge yourself and create memories that last a lifetime.
          </p>
        </div>
        <div className="mt-5 flex flex-col items-center justify-center space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0">
          <div className="relative h-[400px] w-full lg:w-[50%] ">
            <CloudinaryImage
              public_id={images[1]!.public_id}
              format={images[1]!.format}
              blurDataUrl={images[1]!.blurDataUrl!}
            />
          </div>

          <div className="relative h-[400px] w-full lg:w-[50%]">
            <CloudinaryImage
              public_id={images[3]!.public_id}
              format={images[3]!.format}
              blurDataUrl={images[3]!.blurDataUrl!}
            />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-5xl px-4">
        <div className="">
          <p className="mb-16 mt-5 text-[#757371]">
            For those intrigued by culture, we offer immersive experiences that
            bring you face-to-face with local traditions and lifestyles.
            Participate in authentic cultural exchanges, learning from the
            communities that have lived in harmony with the African wilderness
            for centuries.
            <br />
            <br />
            At Tazama Africa Safaris, we understand that adventure is personal.
            That's why we tailor each itinerary to your preferences, ensuring
            your safari adventure is as unique as you are. Whether you're a solo
            traveler seeking solitude and thrill or an adventure-seeking couple
            looking to explore new horizons together, we're here to make your
            dream safari a reality.
            <br />
            <br />
            Dive into the adventure of a lifetime with Tazama Africa Safaris.
            Contact us today, and let's craft your personalized journey into
            Africa's heart of adventure.
          </p>
        </div>
      </div>

      <QuoteSection
        subText="- Leonie Trubshoe, Australia"
        quote="Tazama is the one safari company anyone thinking of visiting Tanzania should contact. Infact, anyone thinking of doing safari [anywhere]."
      />
      <div className="mt-16 mb-10 flex flex-col items-center justify-center">
        <div className="mt-10 lg:mt-[10px] ">
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
  const images = await useFetchImages({ folderName: "adventure" });
  return {
    props: {
      images,
    },
  };
}
