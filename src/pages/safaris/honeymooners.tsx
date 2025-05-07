/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable react/no-unescaped-entities */
import PrimaryHeader from "~/components/PrimaryHeader";
import { honeyMooners } from "~/components/itenaries/day-itienary";
import Image from "next/legacy/image";
import useFetchImages from "~/hooks/useFetchImages";
import { type ImageProps } from "~/lib/generateBlurPlaceHolder";
import EnquireNow from "~/components/EnquireNow";
import ItienaryViewer from "~/components/itenaries/day-itienary";
import HeadSEO from "~/components/ui/Head";
import { base_keywords } from "~/lib/constants";
import BlurImage from "~/components/ui/BlurImage";
import CallToAction from "~/components/CallToAction";

export const MemoryImage = ({ src }: { src: string }) => {
  return (
    <div className="relative h-[200px] w-[300px] md:h-[300px] md:w-[80%] lg:w-[400px]">
      <Image src={src} layout="fill" className="rounded-sm object-cover" alt="" />
    </div>
  );
};
const Page = ({ images }: { images: ImageProps[] }) => {
  return (
    <>
      <HeadSEO 
            title="Luxury Honeymoon Safaris in Tanzania | Tazama Africa"
            keywords={`${base_keywords}, Tanzania honeymoon safari, romantic safari, luxury honeymoon Africa, Zanzibar beach honeymoon, safari and beach package, romantic getaway Tanzania, exclusive honeymoon experience, private safari tour, couples safari, luxury accommodation Tanzania`}
            description="Begin your marriage with Tazama's romantic honeymoon safaris, combining thrilling wildlife encounters in Tanzania with serene Zanzibar beach relaxation for the perfect balance of adventure and luxury."
          />
      <PrimaryHeader image="honey-moon-trip.webp" title="Honeymooners" />

      <div className="mx-auto mt-10 max-w-5xl px-4 pt-[2rem]">
        <div className="">
          <h3 className="text-4xl text-[#A87133]">Honeymoon Safaris</h3>
          <p className="mb-3 mt-5">
            Welcome to your first adventure as a newlywed couple with Tazama
            Africa Safaris. Imagine a honeymoon that not only celebrates your
            love but also immerses you in the heartbeat of Africa, where wild
            nature meets serene island bliss. We're dedicated to weaving these
            elements into a tapestry of unforgettable memories for you.
          </p>

          <p className="mb-3 mt-5">
            Your journey begins with the raw beauty of Tanzania's wildlife. The
            untamed expanse of the Serengeti and the wildlife-rich Ngorongoro
            Crater offer a front-row seat to nature's grandeur. Picture
            yourselves sharing the thrill of watching a pride of lions lounging
            in the morning sun or elephants gracefully traversing the savannah.
            These moments in the wild create a bond with nature that mirrors the
            deep connection you share as a couple.
          </p>
          <p className="mb-3 mt-5">
            Transitioning from the thrilling safaris, your adventure mellows
            into the tranquil embrace of Zanzibar's enchanting beaches. Here,
            the pace slows, and the romantic ambience of secluded resorts sets
            the tone for your island retreat. Explore the historic alleys of
            Stone Town, indulge in the island's unique blend of cultures and
            cuisines, and bask in the warmth of sun-kissed shores. Your days can
            end with a private beach dinner under the stars or a serene sunset
            cruise, adding a touch of romance to each moment.
          </p>
        </div>
        <div className="mt-5 flex flex-col items-center justify-center space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0">
          <div className="relative h-[400px] w-full lg:w-[50%] ">
            <BlurImage
              src={"https://res.cloudinary.com/drhl0yu7y/image/upload/v1728590923/honeymoon/7-days-Tanzania-Honeymoon-Safari-750x450_bcuo1x.jpg"}
            />
          </div>

          <div className="relative h-[400px] w-full lg:w-[50%]">
            <BlurImage
              src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1728591080/honeymoon/10-days-tanzania-adventure-zanzibar-honeymoon-private-safari_f5kumm.jpg"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-5xl px-4">
        <div className="">
          <p className="mb-10 mt-5">
            We understand that every couple is unique, and so should be their
            honeymoon experience. That's why we tailor each journey to fit your
            dreams. Whether you desire more time amidst the wild, crave endless
            days by the ocean, or a balanced mix of both, our team is here to
            craft your perfect honeymoon. Your preferences and dreams guide our
            planning, ensuring your honeymoon is as individual as your love
            story.
            <br />
            <br />
            Ready to turn your dream honeymoon into reality? Get in touch with
            us, and let's start planning your unforgettable African safari and
            serene Zanzibar retreat. Your adventure of a lifetime awaits, and
            we're excited to be a part of it.
            <br />
            <br />
          </p>
        </div>
      </div>

      <EnquireNow />

      <section className="mx-auto max-w-5xl px-4 pb-10 md:px-8">
        <>
          {honeyMooners.map((data) => (
            <ItienaryViewer
              desc={data.desc}
              key={data.id}
              title={data.title}
              format={images[1]?.format!}
              blurDataUrl={images[1]?.blurDataUrl!}
              public_id={data.public_id}
              imgs={data.imgs}
            />
          ))}
        </>
      </section>

      <br /><br /><br /> <br />
      <CallToAction />
    </>
  );
};

export default Page;

export async function getStaticProps() {
  const images = await useFetchImages({ folderName: "honeymoon" });
  return {
    props: {
      images,
    },
  };
}
