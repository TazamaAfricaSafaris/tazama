import MigrationItienary from "~/components/itenaries/migration";
import QuoteSection from "~/components/QuoteSection";
import Image from "next/legacy/image";
import useFetchImages from "~/hooks/useFetchImages";
import { ImageProps } from "~/lib/generateBlurPlaceHolder";
import Gallery, { CloudinaryImage } from "~/components/ui/GalleryImage";
import HeadSEO from "~/components/ui/Head";
import { base_keywords } from "~/lib/constants";

const Page = ({ images }: { images: ImageProps[] }) => {
  return (
    <>
      <HeadSEO
        title="Migration Safaris - Tazama Africa Safaris"
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
              Migration Safaris
            </h1>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl px-4 pt-[1rem]">
        <div className="">
          <p className="mb-3 mt-5 text-lg text-[#757371]">
            Embark on the Migration Safari, an extraordinary journey with Tazama
            Africa Safaris, to witness one of nature’s most awe-inspiring
            spectacles. The Great Migration, a monumental movement of over two
            million wildebeest, zebras, and gazelles, is a display of nature’s
            raw power and beauty, a phenomenon that captures the essence of the
            wild African landscape.
          </p>

          <p className="mb-3 mt-5 text-lg text-[#757371]">
            The Migration Safari offers an unparalleled opportunity to observe
            this majestic event. Each year, around 1.5 million wildebeest and
            200,000 zebras embark on an epic 1,800-mile circuit through the
            Ngorongoro Conservation Area, the vast plains of the Serengeti, and
            into Kenya's Maasai Mara. This journey, driven by instinct and the
            pursuit of sustenance, is one of the world’s most incredible natural
            wonders.
          </p>
          <p className="mb-3 mt-5 text-lg text-[#757371]">
            As the herds follow the rains, you’ll witness nature’s drama unfold.
            Predators, including lions, cheetahs, and crocodiles, lie in wait,
            turning the migration into a struggle for survival. Each stage of
            the journey presents its own challenges – treacherous river
            crossings, steep embankments, and endless plains. It’s a testament
            to the resilience of these creatures, an unfolding story of life,
            struggle, and survival.
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
              public_id={images[3]!.public_id}
              format={images[3]!.format}
              blurDataUrl={images[3]!.blurDataUrl!}
            />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl px-4">
        <div className="">
          <p className="mb-3 mt-5 text-lg text-[#757371]">
            Your safari will take you into the heart of the action. From
            comfortable camps strategically located to offer the best views of
            the migration, you'll witness the herds as they traverse the
            landscape. Experienced guides will provide insights into the
            behaviors and intricacies of this extraordinary event, enhancing
            your understanding and appreciation of this natural marvel.
            <br />
            <br />
            The Migration Safari is more than a wildlife viewing experience;
            it's a deep dive into the cycles of nature, a chance to witness a
            spectacle that few get to see. With Tazama Africa Safaris, you're
            not just observing; you're part of the epic journey that is the
            Great Migration.
          </p>
          <p className="mb-3 mt-5 text-lg text-[#757371]">
            Prepare to be awestruck by the sheer scale and beauty of this event.
            For more information or to book your Migration Safari, connect with
            us at Tazama Africa Safaris. Your front-row seat to one of the
            world’s greatest wildlife experiences awaits.
          </p>
        </div>

        <h3 className="mt-5 text-4xl text-[#A87133]">Migration seasons</h3>
        <p className="mt-5 text-xl text-[#A87133]">
          RIVER CROSSING ITINERARY JULY - NOVEMBER
        </p>
        <p className="mb-3 mt-5 text-lg text-[#757371]">
          The river crossings, considered by many the most exciting event of the
          Great Migration, usually start in July, depending on the rains. The
          herds can be found in the Northern Serengeti as well as in Kenya’s
          Masai Mara. Daily river crossings can be seen at the Mara and Talek
          rivers. The herds usually cross back to the Serengeti from the Mara
          and head towards the now fertile southern Serengeti, traveling fast
          and covering long distances in a single day. By December the herds had
          arrived in Ndutu and began calving.
        </p>
        <p className="mt-5 text-xl text-[#A87133]">
          CALVING SEASON ITINERARY DECEMBER - MARCH
        </p>
        <p className="mb-3 mt-5 text-lg text-[#757371]">
          The herds congregate on the short grass plains of the southern
          Serengeti and northernmost regions of the Ngorongoro Conservation
          Area. An estimated 500,000 calves are born during a two- to three-week
          window in February. This mass calving draws a staggering number of
          predators eager to prey on the vulnerable newborns. This area also
          allows off road game drives, allowing you to explore some of the most
          untouched and rugged areas of the northern circuit. Ndutu is
          definitely a hidden gem if you're traveling during this time.
        </p>
      </div>

      <MigrationItienary />

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
    </>
  );
};

export default Page;

export async function getStaticProps() {
  const images = await useFetchImages({ folderName: "migration" });
  return {
    props: {
      images,
    },
  };
}
