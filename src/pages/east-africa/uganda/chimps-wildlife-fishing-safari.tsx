import React from 'react'
import HeadSEO from '~/components/ui/Head'

import Image from 'next/image'
import Link from "next/link"
import Accordion from '~/components/Accordion'
import { IoMdCheckmark, IoMdClose } from 'react-icons/io'
import { ugandaChimpsWildlifeFishingSafari } from '~/data/uganda'
import CallToAction from '~/components/CallToAction'
import { FaCheck } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'
import ItineraryAccordion from '~/components/itineraries/itinerary-accordion'

const Page = () => {
    return (
        <>
            <HeadSEO title='Tazama Itinerary | Chimps, Wildlife and Fishing Safari' keywords='' />

            <div className="relative h-screen">
                <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-start justify-center bg-black/60 text-white overflow-hidden">
                    <Image
                        alt="tazama gallery photos"
                        className="absolute left-0 right-0 top-0 -z-50 h-screen w-screen object-cover opacity-80"
                        src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730717456/east-africa/uganda/chimps-wildlife-fishing-safari/49198076118_4fa0090611_k_rniv7l.webp"
                        layout="fill"
                    />

                    <div className="container">
                        <h1 className="font-base absolute left-1/2 top-1/2 mx-auto w-full -translate-x-1/2 -translate-y-1/2 px-2 text-center text-6xl sm:px-12 lg:w-2/3 xl:text-7xl">
                            Chimps, Wildlife and Fishing Safari
                        </h1>
                    </div>
                </div>
            </div>

            <div className='mb-20 mt-28 max-w-4xl mx-auto md:px-8 px-4'>
                <section className=''>
                    <h3 className="text-5xl text-center mb-8 text-primary">Chimps, Wildlife and Fishing Safari</h3>
                    <p>
                        Uganda, known as “the Pearl of Africa,” boasts a striking landscape with flat savannahs in the north, lush mountains in the west, and dense forests in the central region. It is home to an incredible diversity of wildlife, including the highly endangered mountain gorillas in Bwindi Impenetrable Forest and four of the Big Five in Queen Elizabeth National Park, where you can also spot rare tree-climbing lions. Adventure seekers can enjoy white-water rafting, kayaking, hiking, and more, while the capital city offers a vibrant nightlife and cultural scene, earning Uganda the title of “Africa’s friendliest country.” With half of the world’s mountain gorillas residing here, visitors can engage in gorilla and chimpanzee habituation experiences, gaining unique insights into their behavior. The adventure is complemented by golden monkey tracking and a scenic boat cruise on Lake Mutanda.
                    </p>
                </section>
                <section className='mt-20'>
                    <h3 className="text-center text-4xl  tracking-wider text-[#A87133]">
                        Detailed Itinerary for Chimps, Wildlife and Fishing Safari
                    </h3>

                    <div className='mt-10 flex flex-col-reverse items-start gap-4 md:flex-row md:gap-8 relative'>
                        {/* <aside className="w-full md:w-1/2 md:sticky md:top-4">
                            <div className="flex flex-col-reverse items-start gap-2 md:gap-5">
                                <Link href="/contact" className='border-primary border border-dark/40 px-6 py-3 w-full font-raleway text-center hover:bg-primary hover:text-white transition-colors rounded-md text-primary'>
                                    Request Custom Itinerary
                                </Link>

                                <div className="relative h-[300px] w-full bg-zinc-900 group overflow-hidden">
                                    <Link
                                        href="https://wetu.com/Itinerary/Landing/EC03E682-B66F-4924-AB41-549AF4117281"
                                        target="_blank"
                                    >
                                        <>
                                            <Image
                                                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730717456/east-africa/uganda/chimps-wildlife-fishing-safari/49198076118_4fa0090611_k_rniv7l.webp"
                                                layout="fill"
                                                className="object-cover  opacity-30 group-hover:scale-110 transition-transform"
                                                alt=''
                                            />

                                            <p className="font-serif absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-center text-4xl text-white">
                                                View Itinerary
                                            </p>
                                        </>
                                    </Link>
                                </div>
                            </div>
                        </aside> */}
                        <section className='w-full'>
                            {ugandaChimpsWildlifeFishingSafari.map((item, index) => (
                                <div key={index}>
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
                                        totalDays={ugandaChimpsWildlifeFishingSafari.length}
                                        tripType='safari'
                                    />
                                </div>
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
    "Transport in a 4X4 Land Cruiser (Window seat guaranteed)",
    "Fuel cost for the entire trip",
    "Meals and daily breakfast as described in the itinerary",
    "02 liters of daily mineral water on safari per person",
    "06 nights’ accommodation",
    "En-route meals as mentioned",
    "All activities except optional",
    "Gorilla and chimpanzee habituation permit",
    "Golden monkey tracking permit and entrance fee",
    "An English-speaking driver guide",
    "AMREF Medical evacuation cover",
]

const ItineraryExcludes = [
    "Extra meals and snacks not mentioned",
    "Travel-related insurance and visa fees",
    "All optional activities",
    "Expenses of a personal nature (tips, all drinks, and beverages)",
    "Extra nights and/or day room",
    "Itinerary alterations without prior notice"
]

export default Page