/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import HeadSEO from '~/components/ui/Head'
import Link from 'next/link'

import Image from 'next/image'

import { IoMdCheckmark, IoMdClose } from "react-icons/io";

import Accordion from '~/components/Accordion'
import { rwandaGorillaSafari } from '~/data/rwanda';
import CallToAction from '~/components/CallToAction';
import ItineraryAccordion from '~/components/itineraries/itinerary-accordion';
import { base_keywords } from '~/lib/constants';
import { FaCheck } from 'react-icons/fa6';
import { FaXmark } from 'react-icons/fa6';

const ItineraryIncludes = [
    "Transport in an enclosed 4WD Toyota Land Cruiser",
    "Fuel for the entire trip",
    "Return airport transfers",
    "3 nights’ accommodation",
    "Meals as indicated in the itinerary",
    "1 gorilla trekking permit per person",
    "2 liters of mineral water daily per person",
    "English-speaking driver guide",
    "AMREF Emergency Evacuation Cover",
    "All government taxes"
]

const ItineraryExcludes = [
    "Early check-in or late checkout at hotels",
    "International flights",
    "Tourist visa fees",
    "Dayroom use on the departure day",
    "Travel and medical insurance",
    "Personal expenses",
    "Extra meals and snacks outside the program",
    "Optional activities",
]

const Page = () => {
    return (
        <>
            <HeadSEO title='Tazama Itinerary | Rwanda Gorilla Safari' keywords={base_keywords} />

            <div className="relative h-screen">
                <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-start justify-center bg-black/60 text-white overflow-hidden">
                    <Image
                        alt="tazama gallery photos"
                        className="absolute left-0 right-0 top-0 -z-50 h-screen w-screen object-cover opacity-80"
                        src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730709645/east-africa/rwanda/rwanda-gorilla-trekking/49197853001_362e5dca1e_k_lpuofw.webp"
                        layout="fill"
                    />

                    <div className="container">
                        <h1 className="font-base absolute left-1/2 top-1/2 mx-auto w-full -translate-x-1/2 -translate-y-1/2 px-2 text-center text-6xl sm:px-12 lg:w-2/3 xl:text-7xl">
                            Rwanda Gorilla Safari
                        </h1>
                    </div>
                </div>
            </div>

            <div className='mb-20 mt-28 max-w-4xl mx-auto md:px-8 px-4'>

                <section>
                    <h3 className="text-5xl text-center mb-8 text-primary">Rwanda Gorilla Safari</h3>
                    <p>
                        Rwanda, once known for its turbulent history, has transformed into a captivating destination. Beyond its iconic gorilla tracking in the lush Volcanoes National Park, Rwanda offers stunning natural attractions like Lake Kivu, Nyungwe Forest, and Akagera’s wildlife-rich savannah. Start with a Kigali City tour, then head to Volcanoes National Park for a cultural experience at the Gorilla Guardians Village. Enjoy an unforgettable gorilla trek amid the beautiful Virunga Mountains, with options for golden monkey tracking and birding before departing from Kigali Airport.
                    </p>

                    <div className="flex items-center justify-center gap-4 my-8">
                        <div className="relative w-full h-72 rounded-2xl overflow-hidden">
                            <Image
                                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730714623/east-africa/rwanda/rwanda-gorilla-trekking/40185955594_7a7f6358b8_k_fui6lh.webp"
                                alt=""
                                layout="fill"
                                objectFit="cover"
                                className="w-full object-cover h-full"
                            />
                        </div>
                        <div className="relative w-full h-72 rounded-2xl overflow-hidden">
                            <Image
                                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730714781/east-africa/rwanda/rwanda-gorilla-trekking/48685332787_91fdc97c30_k_kffffx.webp"
                                alt=""
                                layout="fill"
                                objectFit="cover"
                                className="w-full object-cover h-full"
                            />
                        </div>
                    </div>
                </section>

                <section className='mt-20'>
                    <h3 className="text-4xl  tracking-wider text-[#A87133]">
                        Detailed Itinerary for Rwanda Gorilla Safari
                    </h3>

                    <div className='mt-10 flex flex-col-reverse items-start gap-4 md:flex-row md:gap-8 relative'>
                        <section className='w-full'>
                            {rwandaGorillaSafari.map((item, index) => (
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
                                    totalDays={rwandaGorillaSafari.length}
                                    tripType='safari'
                                />
                            ))}
                        </section>
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
            </div>

            <br /><br /><br />
            <CallToAction />
        </>
    )
}

export default Page