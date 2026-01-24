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
            <HeadSEO title="Tazama Africa Safaris | Kilimanjaro Lemosho Route" keywords={Kilimanjaro_keywords} />
            <PrimaryHeader title='Lemosho Route' imageUrl='https://res.cloudinary.com/drhl0yu7y/image/upload/v1759229199/kilimanjaro/main-page/kilimanjaro11_hyxmwe.webp' />

            <section className='mx-auto max-w-5xl px-4 md:px-8 mt-20'>
                <h3 className="text-5xl text-primary text-center max-w-3xl mx-auto">
                    The Lemosho Route: The Ultimate Kilimanjaro Experience
                </h3>
                <br />
                <p>
                    The Lemosho Route is a classic trail that has earned its reputation as the most beautiful path up Kilimanjaro. And deservedly so: it offers the most spectacular scenery, a superb acclimatization profile, and boasts one of the highest summit success rates among all routes. Approaching the mountain from its quiet western slope, the Lemosho route is a stunning journey through five distinct climatic zones, from lush rainforest to the arctic world of the summit.
                </p>
                <br />
                <p>
                    At Tazama, we offer the Lemosho route with two itineraries: a <span className="font-bold text-darker">7-day</span> and an <span className="font-bold text-darker">8-day trek</span>. One of the route’s many highlights is the Cathedral Peak—one of the highest points of the Shira Volcano. You’ll also encounter the iconic, alien-like <i>Dendrosenecio kilimanjari</i>, a plant found only on this mountain. It was this very route that Angela Vorobieva, aged 86, took to set a Guinness World Record as the oldest person to ever climb this mountain.
                </p>

                <br />

                <div className='bg-amber-50 border-amber-200 border rounded-lg p-8 text-amber-800'>
                    <h5 className='text-center text-4xl'>
                        Our Expert Opinion
                    </h5>
                    <br />
                    <p>
                        The Lemosho route is our top choice for anyone planning their first Kilimanjaro climb. Its stunning scenery and smooth acclimatization profile make it the best option for maximizing your chances of reaching the summit and truly enjoying the journey.
                    </p>
                    <br />
                    <p>Many climbers wonder whether to choose the 7-day or 8-day itinerary. Here is a simple guide to help you decide:</p>
                    <br />
                    <ul className='list-disc pl-4 space-y-2'>
                        <li>
                            <span className="font-bold text-darker">7-Day Itinerary:</span> This is an ideal option for trekkers with some outdoor experience but little to no high-altitude exposure. You will bypass the tropical forest, as your vehicle takes you directly to the trailhead at a higher elevation. The initial days feature a minimal altitude gain, allowing you to conserve energy for the more challenging sections to come.
                        </li>
                        <li>
                            <span className="font-bold text-darker">8-Day Itinerary:</span> We consider this the best possible option for a beginner. The extra day at the beginning is a priceless investment in your acclimatization and gives you more time to adjust to the trekking routine. This itinerary also begins in the tropical forest, offering a more complete scenic experience from day one.
                        </li>
                    </ul>
                    <br />
                    <p>
                        While the 7-day option has a great success rate, the 8-day is statistically a smarter choice for first-time climbers. This is because it attracts a higher number of trekkers who are entirely new to mountain climbing, for whom the extra day on the mountain makes all the difference in achieving their goal. For anyone making Kilimanjaro their first serious trek, we consider the 8-day Lemosho the best option to maximize your summit success and enjoyment.
                    </p>
                </div>
                <br />
                <ReasonsCallToActionKilimanjaro />
            </section>

            <section className='mx-auto max-w-5xl px-4 md:px-8 mt-20'>
                <h3 className="text-5xl text-primary text-center max-w-3xl mx-auto">
                    The Tazama Advantage: Our Commitment to Your Climb
                </h3>
                <br />
                <p>
                    What truly sets a Tazama Lemosho trek apart are the hidden values that you won&apos;t find on a standard price list. Our commitment to your safety, comfort, and the well-being of our team is what ensures an unforgettable experience.
                </p>
                <br />
                <ul className='list-disc pl-8 space-y-2'>
                    <li>
                        <span className="font-bold text-darker">Ethical Practices and Crew Welfare:</span> We ensure our crew receives fair wages, good food, and proper working conditions. A happy and well-supported crew is our greatest asset and is a crucial part of your incredible journey
                    </li>
                    <li>
                        <span className="font-bold text-darker">Safety and Air Evacuation:</span> Your safety is our number one priority. In addition to daily health checks and WFR-trained guides, we are partnered with an air evacuation service for immediate medical assistance. This is a crucial safety net that provides unmatched peace of mind on the mountain.
                    </li>
                    <li>
                        <span className="font-bold text-darker">A Culinary Experience:</span> Our professional chefs prepare a wide variety of nutritious and delicious meals throughout your trek, ensuring you have the energy and good mood to keep pushing forward.
                    </li>
                    <li>
                        <span className="font-bold text-darker">Private Portable Toilets:</span> We provide private, portable toilets that are meticulously cleaned and maintained throughout your trek, providing a level of sanitation and comfort that is rare on the mountain.
                    </li>
                    <li>
                        <span className="font-bold text-darker">Sustainability:</span> We are committed to leaving the mountain pristine. We have a strict <span className="font-bold text-darker">no single-use plastic policy</span>, providing reusable water bottles for all trekkers and guides. We also adhere to a strict &quot;trash-in, trash-out&quot; policy, ensuring nothing is left behind on the mountain..
                    </li>
                </ul>
                <br />
                <p>The Lemosho route is a magnificent choice. When you climb it with Tazama Africa, you are not just booking a trek—you are investing in a safe, ethical, and deeply rewarding experience.</p>

                <div className='my-20'>
                    <h3 className="text-5xl text-primary text-center max-w-3xl mx-auto">Lemosho Route Itineraries</h3>
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
    const imageUrl: string = imageAsset?.asset?.url ? (imageAsset.asset.url as string) : (imageAsset ? urlFor(imageAsset).width(800).height(600).url() : "/assets/images/gallery/adventure.webp");
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
                        <p className="text-2xl font-bold">{typeof price === "number" ? `${price.toLocaleString()}` : "Contact us"}</p>
                    </div>
                    <button className='bg-transparent border-2 border-white py-2 px-6 font-semibold rounded-full group-hover:bg-white group-hover:text-black transition-colors'>See more</button>
                </div>
            </div>
        </Link>
    );
}

export async function getStaticProps({ draftMode = false }) {
    const client = getClient(draftMode ? token : undefined);
    const itineraries = await client.fetch<SanityDocument[]>(itineraryQueries.byLocationAndRouteContains, {
        locationPattern: "*mount kilimanjaro*",
        routePattern: "*lemosho route*"
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