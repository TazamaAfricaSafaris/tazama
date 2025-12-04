import React from 'react'
import HeadSEO from '~/components/ui/Head'

import Image from 'next/image'
import Link from "next/link"
import { sixDayRwandaSafari } from '~/data/rwanda'
import Accordion from '~/components/Accordion'
import { IoMdCheckmark, IoMdClose } from 'react-icons/io'
import CallToAction from '~/components/CallToAction'
import ItineraryAccordion from '~/components/itineraries/itinerary-accordion'
import { FaCheck, FaWhatsapp, FaXmark } from 'react-icons/fa6'
import { ngorongoroHighlands } from '~/data/ngorongoro-highlands'
import { base_keywords } from '~/lib/constants'
import { ZohoFormButton } from '../tours/[slug]'
import { PiMountainsFill } from "react-icons/pi";


const Page = () => {
    return (
        <>
            <HeadSEO title='The Ngorongoro Highlands & The Great Rift Valley Trek' keywords={base_keywords} />

            <div className="relative h-screen">
                <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-start justify-center bg-black/60 text-white overflow-hidden">
                    <Image
                        alt="tazama gallery photos"
                        className="absolute left-0 right-0 top-0 -z-50 h-screen w-screen object-cover opacity-80"
                        src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1764885511/ngorongoro-highlands/header_ib5ocu.jpg"
                        layout="fill"
                    />

                    <div className="container">
                        <h1 className="font-base absolute left-1/2 top-1/2 mx-auto w-full -translate-x-1/2 -translate-y-1/2 px-2 text-center text-6xl sm:px-12 lg:w-2/3 xl:text-7xl">
                            The Ngorongoro Highlands & The Great Rift Valley Trek
                        </h1>
                    </div>
                </div>
            </div>

            <div className='mb-20 mt-28 max-w-4xl mx-auto md:px-8 px-4'>
                <section className=''>
                    <h3 className="text-5xl text-center mb-8 text-primary">The Ngorongoro Highlands & The Great Rift Valley Trek</h3>
                    <p>
                        For travelers searching for a journey that feels raw, real, and entirely disconnected from the noise of modern life, this is it. This is one of the most remarkable and untouched routes in Northern Tanzania. A journey through the Ngorongoro Highlands is not just a safari. It is a slow immersion into ancient landscapes, wild beauty, rich Maasai culture, and raw, unspoiled nature.
                    </p>
                    <br />
                    <p>
                        This is a perfect choice for those seeking pure adventure, breathtaking vistas, wildlife encounters, and the rare chance to disconnect completely from the world. Every step you take connects you deeper with Africa’s great outdoors, from lush volcanic craters to the remote valleys of the Great Rift.
                    </p>
                </section>

                <section className='mt-20'>
                    <h3 className="text-4xl  tracking-wider text-[#A87133]">
                        Detailed Itinerary for The Ngorongoro Highlands & The Great Rift Valley Trek
                    </h3>

                    <div className='mt-10 flex flex-col-reverse items-start gap-4 md:flex-row md:gap-8 relative'>
                        <section className='w-full'>
                            {ngorongoroHighlands.map((item, index) => (
                                <ItineraryAccordion
                                    key={index}
                                    id={index + 1}
                                    day={item.day}
                                    description={item.description}
                                    transferTime={item.transferTime}
                                    note={item.note}
                                    mealPlan={item.mealPlan}
                                    distance={item.distance}
                                    highlights={item.highlights}
                                    gallery={item.gallery}
                                    totalDays={sixDayRwandaSafari.length}
                                    tripType='safari'
                                />
                            ))}
                        </section>
                    </div>
                </section>

                <section className='mt-20'>
                    <h3 className="text-4xl">Why Choose This Route with Tazama?</h3>
                    <br />
                    <ul className="list-disc list-inside flex flex-col gap-3">
                        <li>Experience one of the most untouched and scenic trekking routes in East Africa.</li>
                        <li>Led by expert local guides who know the landscapes, wildlife, and culture intimately.</li>
                        <li>High standards of safety, comfort, and sustainability throughout the trip.</li>
                        <li>Unique campsites in remote locations few travelers ever see.</li>
                        <li>The perfect combination of trekking, wildlife, culture, and relaxation.</li>
                    </ul>
                    <br />
                    <p>
                        This journey through the Ngorongoro Highlands is designed for those who want more than just a holiday. It’s for those who seek reconnection—with nature, with culture, and with themselves. <br />
                        If this sounds like your kind of adventure, reach out to us. We are ready to make it happen.
                    </p>

                    <div className="px-4 py-3 md:py-6 md:px-8 flex max-md:flex-col gap-4 md:items-center justify-between border border-neutral-200 rounded-xl mt-10">
                        <div className="flex gap-4 items-center">
                            <div className={`w-10 h-10 flex items-center justify-center rounded-full bg-teal-500`}>
                                <PiMountainsFill className="text-white text-xl" />
                            </div>
                            <div>
                                <p className="text-xl text-neutral-700 font-bold">Ngorongoro Highlands & The Great Rift Valley Trek</p>
                                <p className="text-neutral-700 text-sm">Price per person</p>
                            </div>
                        </div>
                        <ZohoFormButton link="https://forms.zohopublic.com/tazamaafricatourssafari1/form/NGORONGOROHIGHLANDS/formperma/ccWao0V9H5duUN2mZphGWB6oZ8vAR21r-DmPSluurcU" title="Book this trip" />
                    </div>
                </section>

                <section className="max-w-4xl mx-auto px-4 my-20 grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                <FaCheck color="#fff" />
                            </div>
                            <h5 className="text-3xl">Cost Includes</h5>
                        </div>
                        <ul className="list-inside list-disc flex flex-col gap-3">
                            {ItineraryIncludes.map((item: string) => (
                                <li key={item} className="ml-4 list-item">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                                <FaXmark color="#fff" />
                            </div>
                            <h5 className="text-3xl">Cost Excludes</h5>
                        </div>
                        <ul className="list-inside list-disc flex flex-col gap-3">
                            {ItineraryExcludes.map((item: string) => (
                                <li key={item} className="ml-4 list-item">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>

                <section className='mt-8'>
                    <h3 className='text-4xl text-primary'>Preparing for Your Journey</h3>
                    <p>Recommended packing includes waterproof hiking boots, durable hiking pants, a waterproof jacket, gloves, gaiters, thick socks, and long-sleeved tops to prepare for varying trek conditions</p>
                </section>
            </div>

            <br /><br /><br />
            <CallToAction />
        </>
    )
}

const ItineraryIncludes = [
    "Airport transfers (Kilimanjaro International Airport to Arusha and return)",
    "All accommodations as per the itinerary (lodges, campsites, Lake Natron Camp)",
    "All meals from dinner on Day 1 to breakfast on Day 6",
    "Drinking water during trekking days",
    "Private 4x4 safari vehicle and professional driver-guide",
    "All park entry fees, camping fees, conservation fees (Ngorongoro, Empakaai, Natron)",
    "Maasai village fees and cultural contributions",
    "Dedicated trekking crew (guide, cook, porters where needed)",
    "High-quality tents, mattresses, Sleeping bags, dining tent, and camping equipment",
    "Walking safaris and crater hikes (Olmoti, Empakaai, etc.)",
]

const ItineraryExcludes = [
    "International flights to/from Tanzania",
    "Visa fees for Tanzania",
    "Personal hiking gear (boots, daypack, etc.)",
    "Alcoholic drinks",
    "Optional activities not specified in the itinerary",
    "Laundry services at lodges (available at extra cost)",
    "Gratuities for guides, drivers, and trekking crew",
    "Additional nights accommodation before/after the trip (unless arranged with us)",
]


export default Page