/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/legacy/image";
import { ImageProps } from "~/lib/generateBlurPlaceHolder";
import Gallery, { CloudinaryImage } from "~/components/ui/GalleryImage";
import QuoteSection from "~/components/QuoteSection";
import useFetchImages from "~/hooks/useFetchImages";
import HeadSEO from "~/components/ui/Head";
import { base_keywords } from "~/lib/constants";
import ContentSection from "~/components/ContentSection";

import { getClient } from "~/sanity/lib/client";
import type { SanityDocument } from "next-sanity";
import { token } from "~/sanity/lib/token";
import { itineraryQueries } from "~/sanity/lib/queries";
import { ItineraryCard } from "~/pages/kilimanjaro/itineraries"

const Page = ({ itineraries, images }: { itineraries: SanityDocument[], images: ImageProps[] }) => {
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
            src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
              }/image/upload/${images[1]!.public_id}.${images[1]!.format}`}
            layout="fill"
          />

          <div className="container">
            <h1 className="font-base absolute left-1/2 top-1/2 mx-auto w-full -translate-x-1/2 -translate-y-1/2 px-2 text-center text-6xl sm:px-12 lg:w-2/3 xl:text-7xl">
              Discover the Best of Zanzibar
            </h1>
          </div>
        </div>
      </div>
      <section className="mx-auto max-w-5xl px-4 md:px-8 my-20">
        <div className="mb-10 py-8">
          <h3 className="text-5xl text-primary text-center">
            Welcome to Zanzibar
          </h3>
          <br />
          <p>
            Zanzibar is one of the world’s most enchanting island destinations, a place where white-sand beaches meet turquoise waters, spice plantations perfume the air, and history lingers in every narrow alley of Stone Town.
          </p>
          <br />
          <p>
            Located just off Tanzania’s coast, this island archipelago enjoys a tropical climate year-round, making it perfect for relaxation, adventure, and cultural discovery. Tourism is the heartbeat of Zanzibar, bringing travelers from all over the world to experience its unique charm and coastal beauty.
          </p>
          <div className="mt-5 flex flex-col items-center justify-center space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0">
            <div className="relative h-[400px] w-full lg:w-[50%] rounded-2xl overflow-hidden">
              <CloudinaryImage
                public_id={images[12]!.public_id}
                format={images[12]!.format}
                blurDataUrl={images[12]!.blurDataUrl!}
              />
            </div>

            <div className="relative h-[400px] w-full lg:w-[50%] rounded-2xl overflow-hidden">
              <CloudinaryImage
                public_id={images[9]!.public_id}
                format={images[9]!.format}
                blurDataUrl={images[9]!.blurDataUrl!}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 md:px-8 mb-20 mt-16">
        <h3 className="text-5xl text-primary text-center">Zanzibar at a Glance</h3>
        <br />
        <p>
          Zanzibar is not just one island, it’s an archipelago made up of several islands, with Unguja (often called Zanzibar Island) and Pemba being the largest. Just 25 kilometers from mainland Tanzania, the islands are famous for their pristine beaches, rich history, and fascinating blend of African, Arab, and European influences.
        </p>
        <br />
        <p>
          The name “Zanzibar” comes from the Arabic words Zinj el Barr, meaning “land of the blacks.” Today, it remains a semi-autonomous region of Tanzania, known for its peace, hospitality, and culture.
        </p>
      </section>

      <div className="flex flex-col gap-24">
        <ContentSection
          title="Language & Culture"
          description="Swahili is the main language spoken throughout Zanzibar, though English is also widely used. The island’s people are known for their warmth and hospitality, and its culture is a colorful mix of African, Arab, Indian, and Persian influences reflected in its food, music, and architecture."
          image={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
            }/image/upload/${images[7]!.public_id}.${images[7]!.format}`}
        />

        <ContentSection
          title="Nature & Wildlife"
          description="Unlike the mainland, Zanzibar’s wildlife is concentrated mainly in Jozani Forest, home to the rare red colobus monkey, the Zanzibar servaline genet, and a variety of butterflies and birds. The surrounding ocean is alive with marine diversity, coral reefs, dolphins, turtles, and colorful fish make it a paradise for divers and snorkelers."
          image={`https://res.cloudinary.com/drhl0yu7y/image/upload/v1763028674/beach_holidays/Fax-And-Tours-2_dzidq0.jpg`}
          reverse
        />

        <ContentSection
          title="The Spice Islands"
          description="Zanzibar is often called the “Spice Islands” for good reason. Its fertile soils produce cloves, nutmeg, cinnamon, and black pepper, spices that have been traded for centuries. Visiting a spice farm is one of the most authentic experiences on the island, offering a taste of Zanzibar’s deep-rooted history and culture."
          image={`https://res.cloudinary.com/drhl0yu7y/image/upload/v1763028976/beach_holidays/theoutsider_uex1lf.jpg`}
            reverse={false}
        />
      </div>

      <section className="mx-auto max-w-5xl px-4 md:px-8 my-28">
        <h3 className="text-5xl text-primary text-center">Featured Zanzibar Itineraries</h3>
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(itineraries?.length ?? 0) > 0 ? (
            itineraries.slice(0, 6).map((itinerary) => (
              <ItineraryCard key={itinerary?._id} itinerary={itinerary} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-600">No itineraries found.</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Page;

export async function getStaticProps({ draftMode = false }) {
  const images = await useFetchImages({ folderName: "beach_holidays" });
  const client = getClient(draftMode ? token : undefined);
  const itineraries = await client.fetch<SanityDocument[]>(itineraryQueries.byLocationContains, { pattern: "*zanzibar*" });

  return {
    props: {
      images,
      itineraries,
      draftMode,
      token: draftMode ? token : "",
    },
    revalidate: 60
  };
}
