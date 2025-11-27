/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react'
import PrimaryHeader from '~/components/PrimaryHeader'
import Image from 'next/image'
import Link from 'next/link'
import { getClient } from "~/sanity/lib/client";
import type { SanityDocument } from "next-sanity";
import { token } from "~/sanity/lib/token";
import { itineraryQueries } from "~/sanity/lib/queries";
import { urlFor } from "~/sanity/lib/image";
import ReasonsCallToActionKilimanjaro from '~/components/kilimanjaro/reasons-cta';
import KilimanjaroItinerariesCallToAction from '~/components/kilimanjaro/itineraries-cta';
import HeadSEO from '~/components/ui/Head';
import { Kilimanjaro_keywords } from '~/lib/constants';

const Page = ({ itineraries }: { itineraries: SanityDocument[] }) => {
  return (
    <>
      <HeadSEO title="Tazama Africa Safaris | Kilimanjaro Marangu Route" keywords={Kilimanjaro_keywords} />
      <PrimaryHeader title='Marangu Route' image='https://res.cloudinary.com/drhl0yu7y/image/upload/v1759229205/kilimanjaro/main-page/kilimanjaro18_nlxory.webp' />

      <section className='mx-auto max-w-5xl px-4 md:px-8 mt-20'>
        <h3 className="text-5xl text-primary text-center max-w-3xl mx-auto">
          The Marangu Route: Classic Kilimanjaro With Hut Accommodation
        </h3>
        <br />
        <p>
          The Marangu Route, often called the “Coca-Cola Route,” is the only trail on Kilimanjaro with hut accommodation,
          making it a comfortable and straightforward option. It offers a well-established path, steady gradients, and
          the convenience of sleeping in huts rather than tents, a unique feature among the main routes.
        </p>
        <br />
        <p>
          While Marangu can be completed in fewer days than other routes, we still recommend a longer itinerary for better
          acclimatization and higher summit success. If you prefer hut stays and a classic, direct approach, Marangu is a great choice.
        </p>

        <br /><br />
        <ReasonsCallToActionKilimanjaro />

        <div className='my-16'>
          <h3 className="text-5xl text-primary text-center max-w-3xl mx-auto">Marangu Route Itineraries</h3>
          <br />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(itineraries?.length ?? 0) > 0 ? (
              itineraries.map((itinerary) => (
                <ItineraryCard key={itinerary?._id} itinerary={itinerary} />
              ))
            ) : (
              <p className="col-span-full text-center text-gray-600">No itineraries found.</p>
            )}
          </div>

          <br /><br />
          <KilimanjaroItinerariesCallToAction />
        </div>
      </section>
    </>
  )
}

function ItineraryCard({ itinerary }: { itinerary: SanityDocument }) {
  const title: string = itinerary?.itineraryName ?? "Safari Itinerary";
  const days: number | undefined = itinerary?.locationAndDuration?.duration as number | undefined;
  const price: number | undefined = itinerary?.price as number | undefined;
  const slug: string | undefined = itinerary?.slug?.current;
  const imageAsset = itinerary?.coverImg;
  const imageUrl: string = imageAsset?.asset?.url
    ? (imageAsset.asset.url as string)
    : (imageAsset ? urlFor(imageAsset).width(800).height(600).url() : "/assets/images/gallery/adventure.webp");
  const altText: string = (imageAsset as any)?.alt || title;

  return (
    <Link href={slug ? `/tours/${slug}` : "#"} className="block">
      <div className="h-96 rounded-xl relative overflow-hidden group">
        <Image
          src={imageUrl}
          alt={altText}
          layout="fill"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-0 left-0 p-4 right-4 text-white bg-gradient-to-b from-black/35 w-full">
          <div className="flex flex-col gap-0.5">
            <p className="text-xl font-bold line-clamp-2">{title}</p>
            {typeof days === "number" && <p className="text-sm">{days} days</p>}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 text-white p-4 w-full flex items-center justify-between bg-gradient-to-t from-black/35">
          <div className="flex flex-col">
            <p>Starting from</p>
            <p className="text-2xl font-bold">${typeof price === "number" ? `${price.toLocaleString()}` : "Contact us"}</p>
          </div>
          <button className='bg-transparent border-2 border-white py-2 px-6 font-semibold rounded-full group-hover:bg-white group-hover:text-primary transition-colors'>See more</button>
        </div>
      </div>
    </Link>
  );
}

export async function getStaticProps({ draftMode = false }) {
  const client = getClient(draftMode ? token : undefined);
  const itineraries = await client.fetch<SanityDocument[]>(itineraryQueries.byLocationAndRouteContains, {
    locationPattern: "*mount kilimanjaro*",
    routePattern: "*marangu route*"
  });

  return {
    props: {
      itineraries,
      draftMode,
      token: draftMode ? token : "",
    },
  };
}

export default Page