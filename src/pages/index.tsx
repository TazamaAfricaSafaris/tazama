/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable react/no-unescaped-entities */
import { HomeContactUs } from "~/components/HomeContactUs";

import { getClient } from "~/sanity/lib/client";
import { token } from "~/sanity/lib/token";
import { POSTS_QUERY } from "~/sanity/lib/queries";
import { itineraryQueries } from "~/sanity/lib/queries";

import HeadSEO from "~/components/ui/Head";
import Link from "next/link";
import Image from "next/image";
import PartnersMarquee from "~/components/PartnersMarquee";
import type { SanityDocument } from "next-sanity";
import { ItineraryCard } from "./kilimanjaro/itineraries";
import Reviews from "~/components/home/reviews";
import { lodges } from '~/data/lodges'
import Hero from "~/components/home/hero";



type PageProps = {
    posts: SanityDocument[];
    itineraries: SanityDocument[];
};

export default function Page(props: PageProps) {

    // const slicedPosts = props.posts.slice(0, 6)

    return (
        <>
            <HeadSEO
                title="Tazama Africa Safaris - East Africa Safaris"
                keywords="African safaris, luxuruy safaris, personalized safaris, Serengeti, Kilimanjaro, memorable safaris"
                description="Tazama Africa Safaris is a leading provider of authentic and timeless African safaris. We offer personalized safaris, connecting you with the best of Africa. Whether you're a seasoned explorer or a first-timer, we have the perfect safari for you. Book your trip today!"
            />

            <Hero />

            <section className="mx-auto max-w-5xl px-4 xl:px-8 mt-20 lg:mt-28">
                <h3 className="mb-4 text-4xl lg:text-5xl text-primary text-center">
                    Fulfill your travel dreams with Tazama
                </h3>

                <p className="text-center mx-auto max-w-4xl">
                    Tazama specializes in curating unforgettable memories that will have you reminiscing with your loved ones for years to come. Boasting over 15 years of expertise in the safari industry, we've mastered the art of crafting seamless journeys.
                </p>

                <div className="grid grid-cols-3 gap-4 mt-8">
                    <Link href="/safaris" className="w-full h-96 flex items-center justify-center relative overflow-hidden rounded-2xl group">
                        <div className="text-center z-10 w-full h-full text-white py-8 flex flex-col justify-between">
                            <div>
                                <p className='font-bold text-3xl'>Safaris</p>
                                <p className='text-sm'>Serengeti • Ngorongoro • Tarangire</p>
                            </div>

                            <div className="px-8">
                                <button className='bg-transparent border-2 border-white py-2 px-6 font-semibold rounded-full group-hover:bg-white group-hover:text-primary transition-colors w-full'>
                                    Discover more
                                </button>
                            </div>
                        </div>
                        <Image
                            src="https://images.unsplash.com/photo-1695787841479-614715857c28?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Safaris"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-200 brightness-75"
                        />
                    </Link>
                    <Link href="/trekking" className="w-full h-96 flex items-center justify-center relative overflow-hidden rounded-2xl group">
                        <div className="text-center z-10 w-full h-full text-white py-8 flex flex-col justify-between">
                            <div>
                                <p className='font-bold text-3xl'>Trekking</p>
                                <p className='text-sm'>Kilimanjaro • Meru • Gorilla Trekking</p>
                            </div>

                            <div className="px-8">
                                <button className='bg-transparent border-2 border-white py-2 px-6 font-semibold rounded-full group-hover:bg-white group-hover:text-primary transition-colors w-full'>
                                    Discover more
                                </button>
                            </div>
                        </div>
                        <Image
                            src="https://images.pexels.com/photos/2101088/pexels-photo-2101088.jpeg"
                            alt="Trekking"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-200 brightness-90"
                        />
                    </Link>
                    <Link href="/zanzibar" className="w-full h-96 flex items-center justify-center relative overflow-hidden rounded-2xl group">
                        <div className="text-center z-10 w-full h-full text-white py-8 flex flex-col justify-between">
                            <div>
                                <p className='font-bold text-3xl'>Beach Holidays</p>
                                <p className='text-sm'>Zanzibar • Spice Island • Stone Town</p>
                            </div>

                            <div className="px-8">
                                <button className='bg-transparent border-2 border-white py-2 px-6 font-semibold rounded-full group-hover:bg-white group-hover:text-primary transition-colors w-full'>
                                    Discover more
                                </button>
                            </div>
                        </div>
                        <Image
                            src="https://images.unsplash.com/photo-1621583628955-42fbc37bf424?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Beach Holidays"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-200 brightness-75"
                        />
                    </Link>
                </div>
            </section>

            <section className="mx-auto max-w-5xl px-4 xl:px-8 mt-28">
                <div className="mx-auto mb-8 w-full px-4 py-4 text-center">
                    <h3 className="mb-3 text-4xl lg:text-5xl text-primary">
                        Why Travel With Tazama Africa Safaris
                    </h3>
                    <p
                        className="font-raleway"
                    >
                        We at Tazama Africa Safaris pride ourselves on collaborating with top-tier partners to ensure our guests receive the best experiences Africa has to offer. We are committed to providing our guests with the best possible experience, Whether it be a luxury safari, trekking or a beach holiday
                    </p>
                    <br />
                    <div className="mx-auto">
                        <Link href="/about" className="border border-primary hover:border-primary rounded-md px-4 lg:px-8 py-4 md:text-lg text-xl font-raleway text-primary hover:bg-primary/15 transition-colors duration-200 cursor-pointer mx-auto flex justify-center w-fit">
                            Learn More
                        </Link>
                    </div>
                </div>
                <div className="border rounded-3xl h-96 bg-darker relative overflow-hidden">
                    <Image
                        src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1763461486/pexels-magda-ehlers-pexels-1320609_npvqkj.jpg"
                        alt="Cheetahs in the wild"
                        className="w-full h-full"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </section>

            <section className="mx-auto max-w-5xl px-4 xl:px-8 mt-28">
                <h3 className="mb-4 text-4xl lg:text-5xl text-primary text-center">
                    Explore East Africa, The Tazama Way
                </h3>

                <p className="text-center mx-auto max-w-4xl">
                    Our expertise spans all four corners of East Africa. Whether you’re tracking gorillas, chasing the Great Migration, or unwinding on pristine coastlines, Tazama crafts fully personalized itineraries shaped around you.
                    <br />
                    <br />
                    Click on any destination below and begin your journey.
                </p>
                <br />
                <div className="grid grid-cols-3 gap-4">
                    <Link href="/safaris" className="h-64 col-span-2 flex items-start justify-start relative overflow-hidden rounded-2xl group">
                        <div className="px-8 w-full h-full text-white py-8 flex flex-col justify-end z-10">
                            <p className="text-2xl">Tanzania</p>
                        </div>

                        <Image
                            src="https://images.unsplash.com/photo-1741850826371-b37047bece5d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Safaris"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-200 brightness-75"
                        />
                    </Link>
                    <Link href="/east-africa/uganda" className="h-64 col-span-1 flex items-start justify-start relative overflow-hidden rounded-2xl group">
                        <div className="px-8 w-full h-full text-white py-8 flex flex-col justify-end z-10">
                            <p className="text-2xl">Uganda</p>
                        </div>

                        <Image
                            src="/assets/images/gallery/chimps.webp"
                            alt="Safaris"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-200 brightness-75"
                        />
                    </Link>
                    <Link href="/east-africa/rwanda" className="h-64 col-span-1 flex items-start justify-start relative overflow-hidden rounded-2xl group">
                        <div className="px-8 w-full h-full text-white py-8 flex flex-col justify-end z-10">
                            <p className="text-2xl">Rwanda</p>
                        </div>

                        <Image
                            src="/assets/images/gallery/rwanda/rwanda.jpg"
                            alt="Safaris"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-200 brightness-90"
                        />
                    </Link>

                    <Link href="/east-africa/kenya" className="h-64 col-span-2 flex items-start justify-start relative overflow-hidden rounded-2xl group">
                        <div className="px-8 w-full h-full text-white py-8 flex flex-col justify-end z-10">
                            <p className="text-2xl">Kenya</p>
                        </div>

                        <Image
                            src="/assets/images/gallery/kenya/kenya.jpg"
                            alt="Safaris"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-200 brightness-75"
                        />
                    </Link>
                </div>
            </section>

            <section className="mx-auto max-w-5xl px-4 xl:px-8 mt-28">
                <div className="mb-8 w-full px-4 py-4 text-center">
                    <h3 className="text-4xl lg:text-5xl text-primary">
                        Authentic & timeless adventures
                    </h3>
                    <p
                        className="font-raleway"
                    >
                        Start exploring some of our sample itineraries and see where an
                        adventure with Tazama Africa can take you.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {(props.itineraries?.length ?? 0) > 0 ? (
                        (() => {
                            // Sort itineraries by price
                            const sorted = [...props.itineraries].sort((a, b) =>
                                ((a.price as number) ?? 0) - ((b.price as number) ?? 0)
                            );

                            // Get cheapest, most expensive, and midrange
                            const cheapest = sorted[0];
                            const mostExpensive = sorted[sorted.length - 1];
                            const midIndex = Math.floor(sorted.length / 2);
                            const midrange = sorted[midIndex];

                            // Filter out any undefined values and return
                            return [cheapest, midrange, mostExpensive]
                                .filter((itinerary): itinerary is SanityDocument => itinerary !== undefined)
                                .map((itinerary) => (
                                    <ItineraryCard key={itinerary?._id} itinerary={itinerary} />
                                ));
                        })()
                    ) : (
                        <p className="col-span-full text-center text-gray-600">No itineraries found.</p>
                    )}
                </div>


                <Link
                    href="/tours"
                    className="border border-primary hover:border-primary rounded-md px-4 lg:px-8 py-4 md:text-lg text-xl font-raleway text-primary hover:bg-primary/15 transition-colors duration-200 cursor-pointer mx-auto flex justify-center w-fit"
                >
                    See more itineraries
                </Link>
            </section>

            <section className="my-24">
                <div className="mx-auto max-w-4xl px-4 xl:px-8 mb-2">
                    <div className="mx-auto mb-8 w-full px-4 py-4 text-center">
                        <h3 className="mb-3 text-4xl lg:text-5xl text-primary">
                            Our Partners
                        </h3>
                        <p
                            className="font-raleway"
                        >
                            We at Tazama Africa Safaris pride ourselves on collaborating with top-tier partners to ensure our guests receive the best experiences Africa has to offer.
                        </p>
                    </div>
                </div>

                <PartnersMarquee />
            </section>

            <section className="my-24 bg-dark">
                <div className="mx-auto max-w-5xl px-4 xl:px-8 py-24 text-white">
                    <h3 className="text-5xl mb-2">Not Sure Where to Stay?</h3>
                    <div className="max-w-4xl">
                        <p className="mb-8">
                            Whether you're looking for a budget-friendly option or a luxurious retreat, we have a range of accommodations that we work with to suit your needs.
                        </p>
                    </div>

                    <div>
                        <div className='grid grid-cols-2 lg:grid-cols-3 gap-8 mb-8'>
                            {
                                lodges.slice(0, 3).map((lodge, index) => (
                                    <Link href={`/lodges/${lodge.link}`} key={index}>
                                        <div className='w-full group'>
                                            <div className='w-full h-80 relative rounded-xl overflow-hidden'>
                                                <Image
                                                    src={`${lodge.img}`}
                                                    alt={lodge.title}
                                                    className='w-full h-full object-cover transition-transform group-hover:scale-110'
                                                    layout="fill"
                                                />
                                            </div>
                                            <p className='mt-4 text-lg text-white'>{lodge.title}</p>
                                        </div>
                                    </Link>
                                ))
                            }
                        </div>
                        <Link
                            href="/lodges"
                            className="border border-white rounded-md px-4 lg:px-6 py-2 md:text-lg text-xl font-raleway text-white hover:bg-primary/15 transition-colors duration-200 cursor-pointer mx-auto w-fit mt-16"
                        >
                            Find More
                        </Link>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-5xl px-4 xl:px-8 mt-28">
                <Reviews />
            </section>

            <br />
            <HomeContactUs />
        </>
    );
}

export const getStaticProps = async ({ draftMode = false }) => {
    const client = getClient(draftMode ? token : undefined);
    const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY);
    const itineraries = await client.fetch<SanityDocument[]>(itineraryQueries.all);

    return {
        props: {
            posts,
            draftMode,
            token: draftMode ? token : "",
            itineraries
        },
        revalidate: 60
    };
};