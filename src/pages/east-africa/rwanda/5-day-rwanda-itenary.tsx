import React from 'react'
import HeadSEO from '~/components/ui/Head'

import Image from 'next/image'
import Link from "next/link"
import { fiveDayRwandaItinerary } from '~/data/rwanda'
import Accordion from '~/components/Accordion'
import { IoMdCheckmark, IoMdClose } from 'react-icons/io'
import CallToAction from '~/components/CallToAction'
import ItineraryAccordion from '~/components/itineraries/itinerary-accordion'
import { FaCheck } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'

const Page = () => {
    return (
        <>
            <HeadSEO title='Tazama Itinerary | 5 Days In Rwanda' keywords='' />

            <div className="relative h-screen">
                <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-start justify-center bg-black/60 text-white overflow-hidden">
                    <Image
                        alt="tazama gallery photos"
                        className="absolute left-0 right-0 top-0 -z-50 h-screen w-screen object-cover opacity-80"
                        src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730715440/east-africa/rwanda/5-day-rwanda-safari/FyAZn1qWwAI6a0E_amlhky.webp"
                        layout="fill"
                    />

                    <div className="container">
                        <h1 className="font-base absolute left-1/2 top-1/2 mx-auto w-full -translate-x-1/2 -translate-y-1/2 px-2 text-center text-6xl sm:px-12 lg:w-2/3 xl:text-7xl">
                            5 Days In Rwanda
                        </h1>
                    </div>
                </div>
            </div>

            <div className='mb-20 mt-28 max-w-5xl mx-auto md:px-8 px-4'>
                {/* <h3 className="text-5xl text-center mb-8 text-primary">5 Days In Rwanda</h3> */}
                <section className='mt-20'>
                    <h3 className="text-center text-5xl  tracking-wider text-[#A87133] mb-8">
                        Detailed Itinerary for 5 Days In Rwanda
                    </h3>

                    <div className='flex flex-col-reverse items-start gap-4 md:flex-row md:gap-8 relative'>
                        <section>
                            <div className='flex flex-col-reverse items-start gap-4 md:flex-row md:gap-8 relative'>
                                <div className='mt-10 flex flex-col-reverse items-start gap-4 md:flex-row md:gap-8 relative'>
                                    <section className='w-full'>
                                        {fiveDayRwandaItinerary.map((item, index) => (
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
                                                totalDays={fiveDayRwandaItinerary.length}
                                                tripType='safari'
                                            />
                                        ))}
                                    </section>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>

                <section className='mt-20 max-w-4xl mx-auto px-4 '>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
                    </div>
                    <br />
                    <br />
                    <p><span className="italic">Note: </span> Inclusions for Singita Kwitonda Lodge and The Bishop’s House encompass all meals, beverages, and laundry services</p>
                </section>
                <br /><br />
                <section className='mb-20'>
                    <h3 className='text-4xl text-primary'>Preparing for Your Journey</h3>
                    <br />
                    <p>Recommended packing includes waterproof hiking boots, durable hiking pants, a waterproof jacket, gloves, gaiters, thick socks, and long-sleeved tops to prepare for varying trek conditions</p>
                </section>
            </div>

            <br /><br /><br />
            <CallToAction />
        </>
    )
}

const ItineraryIncludes = [
    "Meet and greet assistant at Kigali International Airport",
    "Airport and inter-hotel transfers from day 1 to departure.",
    "Exclusive use of a private 4x4 vehicle.",
    "Professional, experienced English-speaking driver-guide",
    "Full-board accommodation as per itinerary",
    "Meals mentioned in the program",
    "Audio-guide for Kigali Genocide Memorial",
    "1 Mountain gorilla trekking permit (US$ 1,500 each)",
    "1 Mountain gorilla trekking permit (US$ 1,500 each)",
    "Porter assistance during treks",
    "Visit to the Dian Fossey Gorilla Fund",
    "Golden monkey trekking permit (US$ 100 each) and cultural expedition",
    "Coffee masterclass at Question Coffee Kigali",
    "Bottled mineral water during the tour",
    "All government taxes on quoted services"
]

const ItineraryExcludes = [
    "International and domestic flights & entry visa fees",
    "Tips and gratuities",
    "Personal expenses (e.g., telephone calls, drinks, mini bar, travel insurance)",
]

export default Page