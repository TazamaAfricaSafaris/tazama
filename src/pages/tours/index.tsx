/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import HeadSEO from "~/components/ui/Head";
import { base_keywords } from "~/lib/constants";
import PrimaryHeader from "~/components/PrimaryHeader";
import Image from "next/image";
import { getClient } from "~/sanity/lib/client";
import { token } from "~/sanity/lib/token";
import { type SanityDocument } from "next-sanity";
import { itineraryQueries } from "~/sanity/lib/queries";
import Link from "next/link";
import { urlFor } from "~/sanity/lib/image";
import React from "react";

type PageProps = {
    itineraries: SanityDocument[];
    draftMode: boolean;
    token: string;
};

export default function Page(props: PageProps) {
    React.useEffect(() => {
        console.log(props.itineraries)
    }, [props])

    return (
        <>
            <HeadSEO title="Tazama Africa Safaris | Our Tours" keywords={base_keywords} />
            <PrimaryHeader title="Our Safari Tours" image="safari.webp" />

            <main className="mx-auto my-20 max-w-5xl px-4 pt-8 flex flex-col gap-8">
                <div className="text-center max-w-3xl mx-auto flex flex-col gap-4">
                    <h2 className="text-primary text-3xl md:text-5xl">Experience Tanzania with Tazama Africa Safaris</h2>
                    <p>Few places in the world rival Tanzania as a wildlife destination. Ranked #1 country for an African safari, Tanzania hypnotizes with its pristine, wildest beauty. The last sanctuary of the wildlife of such magnitude in the world, Tanzania is a perfect spot for your vacation.</p>
                    <br />
                </div>

                <div>
                    <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            (props.itineraries?.length ?? 0) > 0 ? (
                                props.itineraries.map((itinerary) => (
                                    <ItineraryCard key={itinerary?._id} itinerary={itinerary} />
                                ))
                            ) : (
                                <p className="col-span-full text-center text-gray-600">No itineraries found.</p>
                            )
                        }
                    </div>
                </div>

            </main>
        </>
    )
}

function ItineraryCard({ itinerary }: { itinerary: SanityDocument }) {
    const title: string = itinerary?.itineraryName ?? "Safari Itinerary";
    const days: number | undefined = itinerary?.locationAndDuration?.duration as number | undefined;
    const price: number | undefined = itinerary?.price as number | undefined;
    const slug: string | undefined = itinerary?.slug?.current;

    const imageAsset = itinerary?.coverImg;
    const imageUrl: string =
        (imageAsset ? urlFor(imageAsset).width(800).height(600).url() : "/assets/images/gallery/adventure.webp") as string;
    const altText: string = imageAsset?.alt || title;

    return (
        <Link href={slug ? `/tours/${slug}` : "#"} className="block">
            <div className="h-96 rounded-xl relative overflow-hidden group">
                <Image
                    src={imageUrl}
                    alt={altText}
                    layout="fill"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />

                <div className="absolute top-4 left-4 right-4 text-white drop-shadow-lg">
                    <div className="flex flex-col gap-0.5">
                        <p className="text-xl font-bold line-clamp-2">{title}</p>
                        {typeof days === "number" ? (
                            <p className="-mt-0.5">{days} day(s) safari</p>
                        ) : null}
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 text-white drop-shadow-lg p-4 w-full flex items-center justify-between">
                    <div className="flex flex-col">
                        <p>Starting from</p>
                        <p className="text-2xl font-bold">
                            {typeof price === "number" ? `$${price.toLocaleString()}` : "Contact us"}
                        </p>
                    </div>

                    <button className='bg-transparent border-2 border-white py-2 px-6 font-semibold rounded-full group-hover:bg-white group-hover:text-black transition-colors'>See more</button>
                </div>
            </div>
        </Link>
    );
}

export const getStaticProps = async ({ draftMode = false }) => {
    const client = getClient(draftMode ? token : undefined);
    const itineraries = await client.fetch<SanityDocument[]>(itineraryQueries.all);

    return {
        props: {
            itineraries,
            draftMode,
            token: draftMode ? token : "",
        },
    };
};