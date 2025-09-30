/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { getImageDimensions } from "@sanity/asset-utils"

import type { SanityDocument } from "next-sanity";
import { BsHouseFill } from "react-icons/bs";
import { getClient } from "~/sanity/lib/client";
import { token } from "~/sanity/lib/token";
import { itineraryQueries } from "~/sanity/lib/queries";
import KilimanjaroItinerariesCallToAction from "~/components/kilimanjaro/itineraries-cta";
import { ItineraryCard } from "./itineraries";
import HeadSEO from "~/components/ui/Head";
import { Kilimanjaro_keywords } from "~/lib/constants";


export default function Page({ itineraries }: { itineraries: SanityDocument[] }) {
    return (
        <>
            <HeadSEO title="Tazama Africa Safaris | What Makes Tazama’s Kilimanjaro Experience Different?" keywords={Kilimanjaro_keywords} />
            <main className="max-w-4xl mx-auto prose p-4 mb-8 text-black">
                <div className="font-raleway mt-28 md:mt-32 mx-auto mb-5 text-center max-w-xl text-sm flex items-center justify-center max-sm:flex-col">
                    <Link
                        href="/blogs"
                        className="cursor-pointer no-underline hover:underline hover:underline-offset-2"
                    >
                        Blogs
                    </Link>
                    <span className="font-bold text-2xl mx-2">•</span>
                    <span>Why Our Kilimanjaro Experience Stands Apart</span>
                </div>
                <h1 className="text-center max-sm:text-4xl text-5xl text-primary font-normal">
                    What Makes Tazama’s Kilimanjaro Experience Different?
                </h1>

                <div className="relative w-full h-96">
                    <Image
                        className="m-0 w-full rounded-lg object-cover"
                        src={'/assets/images/gallery/kilimanjaro-cta/cta-3.jpg'}
                        layout="fill"
                        objectFit="cover"
                        alt={'Why Tazama’s Kilimanjaro Experience Stands Apart'}
                    />
                </div>

                <section>
                    <p>
                        Climbing Kilimanjaro is a profound challenge, and the success of your summit depends on more than just physical endurance. It depends on the team you climb with, the food you eat, and the values that guide your operator. While some companies offer a budget price, at Tazama, we deliver an ethical, safe, and truly unforgettable experience.
                    </p>
                    <p>
                        Here’s what you get when you book a Tazama Kilimanjaro trek: the hidden values that are priceless.
                    </p>

                    <h4 className="text-primary font-normal text-4xl">A Culinary Journey, Not Just a Hike</h4>
                    <p>
                        A powerful and energetic hike requires food that is both nutritious and delicious. Our commitment to your well-being starts in the kitchen. We hire professional chefs who craft a varied, three-course menu for every single day of your trek. This means no repetitive meals and a menu designed to give you the energy and mood boost you need to keep moving forward. We also expertly cater to all dietary needs, including vegetarian, vegan, gluten-free, and any specific allergies.
                    </p>

                    <h4 className="text-primary font-normal text-4xl">The Heart of Our Operation: Our Crew</h4>
                    <p>
                        We believe a happy crew makes for a successful climb. Unlike many operators who serve their guides and porters poor, separate food, we ensure our entire mountain crew from guides to porters enjoys the same high-quality, nutritious meals as our guests.
                    </p>
                    <p>
                        Furthermore, we are proud to follow the standard of the <strong>Kilimanjaro Porter Assistance Project (KPAP)</strong> and go above industry standards. We pay our crew above-average wages and ensure they are properly equipped and supported. This isn&apos;t just a business practice; it&apos;s a core value. We believe that by creating a sustainable livelihood for our team and their families, we foster a deep sense of loyalty and a love for their work. This commitment to our crew&apos;s well-being is a difference you will feel in their passion and dedication to your experience.
                    </p>

                    <KilimanjaroItinerariesCallToAction />

                    <h4 className="text-primary font-normal text-4xl">Uncompromised Safety & Support: A Lifeline on the Mountain</h4>
                    <p>
                        Your safety is not just our priority, it is the foundation of our entire operation. Every decision we make, from the gear we use to the expertise of our crew, is focused on ensuring you have a secure and confident climb.
                    </p>
                    <ul>
                        <li>
                            <strong>WFR-Trained Guides</strong>: Our guides have undergone <strong>Wilderness First Responder (WFR)</strong> training, a globally recognized standard in outdoor emergency care. This means they are prepared to assess and manage any medical situation that may arise in a remote environment.
                        </li>
                        <li>
                            <strong>Daily Health Checks</strong>: Our expert guides conduct daily medical checks, monitoring your oxygen saturation, pulse rate, and hydration levels. They are trained to spot any early signs of altitude-related issues, allowing them to take immediate, proactive steps to ensure your well-being.
                        </li>
                        <li>
                            <strong>Emergency Air Evacuation Partnership</strong>: While every precaution is taken, emergencies can happen. We are proud to be partnered with a leading air evacuation service in Tanzania. In the unlikely event of a medical emergency on the mountain, this partnership allows us to initiate a helicopter rescue to airlift you to the nearest medical facility. This provides a critical, life-saving option when a rapid descent is not possible.

                            <div className='border-amber-200 bg-amber-50 p-4 rounded-lg border mt-4'>
                                <div className="flex items-start gap-2 -mb-6">
                                    <BsHouseFill className="text-amber-600" />
                                    <p className="text-sm text-amber-800 font-semibold -mt-0">Note</p>
                                </div>
                                <p className='text-sm text-amber-800 mb-0'>
                                    To benefit from this service, all clients must have travel insurance that includes coverage for high-altitude trekking and medical evacuation up to 6,000 meters. We will verify this before your climb begins to ensure you are fully protected.
                                </p>
                            </div>
                        </li>
                        <li>
                            <strong>Dedicated Support Team</strong>: Every guest is assigned a generous team of <strong>three porters</strong>. This ensures that you have ample support, and that your gear, food, and clothing are carried without a single person being overloaded.
                        </li>
                    </ul>
                    {/* --------------- CALL TO ACTION HERE --------------- */}

                    <h4 className="text-primary font-normal text-4xl"> The Comfort of Home on the Mountain (Private portable toilets)</h4>
                    <p>
                        We understand that comfort and sanitation are essential for a good night’s rest and a successful climb. While most trekkers have to use crowded, unsanitary public toilets at campsites, we carry our own private, portable toilets on all of our treks. These toilets are for your exclusive use, are meticulously cleaned and maintained by a dedicated crew member, and provide a level of privacy and hygiene that is simply not available otherwise.
                    </p>

                    <h4 className="text-primary font-normal text-4xl">Committed to the Mountain: Our Sustainability Promise</h4>
                    <p>
                        At Tazama, we are custodians of Kilimanjaro. We have a strict <strong>&quot;no single-use plastic&quot;</strong> policy. Instead of disposable water bottles, we provide our clients and crew with reusable bottles that are refilled with filtered water throughout the trek. Additionally, we adhere to a <strong>&quot;trash-in, trash-out&quot;</strong> rule, ensuring that every piece of garbage we create on the mountain is carried back down for proper disposal. We also provide trash bags to our guests, making it easy to keep the mountain clean and pristine for future generations.
                    </p>
                    <p>
                        The true value of a Tazama Kilimanjaro climb is not a luxury item; it is an investment in your safety, in the well-being of the people who make your dream a reality, and in the preservation of the mountain itself. These are the hidden values that transform a trek into an unforgettable and meaningful life experience.
                    </p>
                </section>

                {/* --- Kilimanjaro Itineraries Section --- */}
            </main>
            <section className="max-w-5xl mx-auto">
                <h4 className="text-5xl text-primary mb-4 text-center">Some of our Kilimanjaro itineraries</h4>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {itineraries && itineraries.length > 0 ? (
                        itineraries.slice(0, 3).map((itinerary) => (
                            <ItineraryCard key={itinerary._id} itinerary={itinerary} />
                        ))
                    ) : (
                        <p>No Kilimanjaro itineraries found.</p>
                    )}
                </div>
            </section>

            {/* --- Button to All Kilimanjaro Itineraries --- */}
            <div className="flex justify-center mt-8 mb-16">
                <Link
                    className="bg-primary text-white px-6 py-3 rounded-lg shadow hover:bg-primary-dark transition"
                    href='/safaris/kilimanjaro/itineraries'
                >
                    <p className="">See All Kilimanjaro Itineraries</p>
                </Link>
            </div>
        </>
    );
}

// Fetch Kilimanjaro itineraries at build time
export async function getStaticProps({ draftMode = false }) {
    const client = getClient(draftMode ? token : undefined);
    const itineraries = await client.fetch<SanityDocument[]>(
        itineraryQueries.byLocationContains,
        { pattern: "*kilimanjaro*" }
    );

    return {
        props: {
            itineraries,
            draftMode,
            token: draftMode ? token : "",
        },
    };
}