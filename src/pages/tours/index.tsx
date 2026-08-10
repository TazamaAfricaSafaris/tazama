/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import HeadSEO from "~/components/ui/Head";

import PrimaryHeader from "~/components/PrimaryHeader";
import Image from "next/image";
import { getClient } from "~/sanity/lib/client";
import { token } from "~/sanity/lib/token";
import { type SanityDocument } from "next-sanity";
import { itineraryQueries } from "~/sanity/lib/queries";
import Link from "next/link";
import { urlFor } from "~/sanity/lib/image";
import React from "react";
import ReasonsCallToActionKilimanjaro from "~/components/kilimanjaro/reasons-cta";
import Script from "next/script";

type PageProps = {
  itineraries: SanityDocument[];
  draftMode: boolean;
  token: string;
};

export default function Page(props: PageProps) {
  return (
    <>
      <HeadSEO
        title="Our Tours & Safari Itineraries | Tazama Africa Safaris"
        description="Browse our full range of custom-designed safari itineraries across Tanzania — from wildlife safaris to Kilimanjaro treks to beach holidays."
        path="/tours"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: props.itineraries.map((it, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `https://www.tazamaafricasafari.com/tours/${it.slug?.current}`,
            name: it.itineraryName,
          })),
        }}
      />
      <PrimaryHeader title="Explore our itineraries" image="safari.webp" />

      <main className="mx-auto my-20 flex max-w-5xl flex-col px-4 pt-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl text-primary md:text-5xl">
            Experience Tanzania with Tazama Africa Safaris
          </h2>
          <br />
          <p>
            Few places in the world rival Tanzania as a wildlife destination.
            Ranked #1 country for an African safari, Tanzania hypnotizes with
            its pristine, wildest beauty. The last sanctuary of the wildlife of
            such magnitude in the world, Tanzania is a perfect spot for your
            vacation.
          </p>
        </div>
        <br />
        <br />
        <ReasonsCallToActionKilimanjaro />
        <br />
        <br />
        <div>
          <div className="grid grid-cols-1 content-center items-center justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {(props.itineraries?.length ?? 0) > 0 ? (
              props.itineraries.map((itinerary) => (
                <ItineraryCard key={itinerary?._id} itinerary={itinerary} />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-600">
                No itineraries found.
              </p>
            )}
          </div>
        </div>
      </main>

      <Script id="itinerary-list-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: props.itineraries.map((it, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `https://www.tazamaafricasafari.com/tours/${it.slug?.current}`,
            name: it.itineraryName,
          })),
        })}
      </Script>
    </>
  );
}

function ItineraryCard({ itinerary }: { itinerary: SanityDocument }) {
  const title: string = itinerary?.itineraryName ?? "Safari Itinerary";
  //   const days: number | undefined = itinerary?.locationAndDuration?.duration as
  //     | number
  //     | undefined;
  const price: number | undefined = itinerary?.price as number | undefined;
  const slug: string | undefined = itinerary?.slug?.current;

  const imageAsset = itinerary?.coverImg;
  const imageUrl: string = (
    imageAsset
      ? urlFor(imageAsset).width(800).height(600).url()
      : "/assets/images/gallery/adventure.webp"
  ) as string;
  const altText: string = imageAsset?.alt || title;

  return (
    <Link href={slug ? `/tours/${slug}` : "#"} className="block">
      <div className="group relative h-96 overflow-hidden rounded-xl">
        <Image
          src={imageUrl}
          alt={altText}
          fill
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        <div className="absolute left-0 right-4 top-0 w-full bg-gradient-to-b from-black/60 p-4 text-white">
          <div className="flex flex-col gap-0.5">
            <p className="line-clamp-2 text-xl font-bold">{title}</p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 flex w-full items-center justify-between bg-gradient-to-t from-black/60 p-4 text-white">
          <div className="flex flex-col">
            <p>Starting from</p>
            <p className="text-2xl font-bold">
              {typeof price === "number"
                ? `$${price.toLocaleString()}`
                : "Contact us"}
            </p>
          </div>

          <button className="rounded-full border-2 border-white bg-transparent px-6 py-2 font-semibold transition-colors group-hover:bg-white group-hover:text-primary">
            See more
          </button>
        </div>
      </div>
    </Link>
  );
}

export const getStaticProps = async ({ draftMode = false }) => {
  const client = getClient(draftMode ? token : undefined);
  const itineraries = await client.fetch<SanityDocument[]>(
    itineraryQueries.all,
  );

  return {
    props: {
      itineraries,
      draftMode,
      token: draftMode ? token : "",
    },
    revalidate: 60,
  };
};
