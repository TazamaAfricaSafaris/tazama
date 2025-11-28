/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from 'next/link'
import CallToAction from '~/components/CallToAction'
import HeadSEO from '~/components/ui/Head'

import Accordion from '~/components/Accordion'
import { threeDayAmboseliSafari } from '~/data/kenya'

import Image from 'next/image'
import ItineraryAccordion from '~/components/itineraries/itinerary-accordion'

const Page = () => {
    return (
        <>
            <HeadSEO title='3 Days Amboseli Fly-in Safari' keywords='' />

            <div className="relative h-screen">
                <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-start justify-center bg-black/60 text-white overflow-hidden">
                    <Image
                        alt="tazama gallery photos"
                        className="absolute left-0 right-0 top-0 -z-50 h-screen w-screen object-cover opacity-80"
                        src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1731333470/east-africa/kenya/3-day-amboseli-safari/adore-africa-kenya-amboseli-slider-03_zf7oup.jpg"
                        layout="fill"
                    />

                    <div className="container">
                        <h1 className="font-base absolute left-1/2 top-1/2 mx-auto w-full -translate-x-1/2 -translate-y-1/2 px-2 text-center text-6xl sm:px-12 lg:w-2/3 xl:text-7xl">
                            3 Days Amboseli Fly-in Safari
                        </h1>
                    </div>
                </div>
            </div>

            <div className='mb-20 mt-28 max-w-5xl mx-auto md:px-8 px-4'>
                <h3 className="text-5xl text-center mb-8 text-primary">3 Days Amboseli Fly-in Safari</h3>
                <p>
                    Tazama Africa invites you to experience a breathtaking three-day fly-in safari to Amboseli National Park. Start with a quick flight from Nairobi to luxury accommodations in this scenic paradise. Enjoy game drives through diverse landscapes filled with elephants, lions, and various bird species, all set against the stunning backdrop of Mount Kilimanjaro. Over two days, learn about the unique ecosystem and conservation efforts while savoring gourmet meals and relaxing with sundowners. This immersive getaway promises unforgettable wildlife encounters and a true taste of Kenya’s natural beauty.
                </p>
                <section className='mt-20'>
                    <h3 className="text-center text-4xl  tracking-wider text-[#A87133]">
                        Detailed Itinerary for 3 Days Amboseli Fly-in Safari
                    </h3>

                    <div className='mt-10 flex flex-col-reverse items-start gap-4 md:flex-row md:gap-8 relative'>
                        {/* <aside className="w-full md:w-1/2 md:sticky md:top-4">
                            <div className="flex flex-col-reverse items-start gap-2 md:gap-5">
                                <Link href="/contact" className='border-primary border border-dark/40 px-6 py-3 w-full font-raleway text-center hover:bg-primary hover:text-white transition-colors rounded-md text-primary'>
                                    Request Custom Itinerary
                                </Link>

                                <div className="relative h-[300px] w-full bg-zinc-900 group overflow-hidden">
                                    <Link
                                        href="/contact"
                                        target="_blank"
                                    >
                                        <>
                                            <Image
                                                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1731333572/east-africa/kenya/3-day-amboseli-safari/zebras-in-Kenya_edy34s.jpg"
                                                layout="fill"
                                                className="object-cover  opacity-30 group-hover:scale-110 transition-transform"
                                                alt=''
                                                objectFit='cover'
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
                            {threeDayAmboseliSafari.map((item, index) => (
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
                                        totalDays={threeDayAmboseliSafari.length}
                                        tripType='safari'
                                    />
                                </div>
                            ))}
                        </section>
                    </div>
                </section>
            </div>

            <br /><br /><br />
            <CallToAction />
        </>
    )
}

export default Page