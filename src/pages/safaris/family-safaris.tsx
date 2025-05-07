/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/no-unescaped-entities */
import PrimaryHeader from "~/components/PrimaryHeader";
import FamilyItinerary from "~/components/itenaries/family";
import QuoteSection from "~/components/QuoteSection";
import { ImageProps } from "~/lib/generateBlurPlaceHolder";
import Gallery, { CloudinaryImage } from "~/components/ui/GalleryImage";
import useFetchImages from "~/hooks/useFetchImages";
import HeadSEO from "~/components/ui/Head";
import { base_keywords } from "~/lib/constants";
import CallToAction from "~/components/CallToAction";

const Page = ({ images }: { images: ImageProps[] }) => {

  return (
    <>
      <HeadSEO
        title="Family Safaris in Tanzania | Tazama Africa Safari"
        keywords={`${base_keywords}, family safari Tanzania, kid-friendly safari, educational safari, family adventure Africa, Tanzania family vacation, family wildlife tour, luxury family safari, child-friendly accommodation, family travel Tanzania, multi-generational safari`}
        description="Create unforgettable family memories with Tazama's specially designed Tanzania family safaris. Our educational, entertaining adventures offer both mid-range and luxury options perfect for travelers of all ages."
      />
      <PrimaryHeader image="discovery.webp" title="Family Safaris" />

      <div className="mx-auto mt-10 max-w-5xl px-4 pt-[2rem]">
        <div className="">
          <h3 className="text-4xl text-[#A87133]">Family Safaris</h3>
          <p className="mb-3 mt-5 text-[#757371]">
            Welcome to a family safari experience with Tazama Africa Safaris,
            where every journey is an enriching chapter in your family's
            storybook of adventures. We specialize in creating safaris that are
            not just vacations, but vibrant, educational, and unforgettable
            experiences that bond families closer together.
          </p>

          <p className="mb-3 mt-5 text-[#757371]">
            Imagine a safari where each day is a new adventure, tailored to
            entertain and educate both you and your children. Our itineraries,
            available in mid-range and luxury tiers, are designed with family
            needs in mind. Whether you prefer the rustic charm of the wilderness
            or the indulgence of luxury accommodations, we have something for
            every family. Post-safari, we also offer an optional beach holiday,
            perfect for unwinding and reflecting on your wildlife adventures.
          </p>
          <p className="mb-3 mt-5 text-[#757371]">
            Each family safari is a mosaic of prolific game viewing in some of
            Africa's most concentrated wildlife areas and heartwarming cultural
            exchanges. Your children will be thrilled to engage with local Masai
            tribes, learning to craft traditional bows, dance to the rhythms of
            ancient songs, and even try their hand at preparing local dishes.
            These experiences are not only fun but are gateways to understanding
            and appreciating different cultures
          </p>
        </div>
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
              public_id={images[2]!.public_id}
              format={images[2]!.format}
              blurDataUrl={images[2]!.blurDataUrl!}
            />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-5xl px-4">
        <div className="">
          <p className="mb-3 mt-5 text-[#757371]">
            Our accommodations have been carefully chosen for their exceptional
            family-friendly reputations. In these welcoming camps, your family
            will find comfort and a chance to bond over shared experiences.
            Understanding the challenges of traveling with children, we
            recommend, for families with younger kids, flying directly into
            several of the game reserves. This approach minimizes travel time
            and maximizes comfort, allowing you and your family to enjoy every
            moment of your safari.
            <br />
            <br />
            Are you ready to embark on a family adventure that combines the
            thrill of wildlife, the warmth of cultural encounters, and the
            comfort of thoughtfully selected accommodations? Reach out to us at
            Tazama Africa Safaris, and let's tailor a safari that will turn into
            a cherished family memory. Your African family adventure, full of
            learning and laughter, awaits!
            <br />
            <br />
          </p>
        </div>
      </div>

      <FamilyItinerary />

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
  const images = await useFetchImages({ folderName: "family_safari" });
  return {
    props: {
      images,
    },
  };
}
