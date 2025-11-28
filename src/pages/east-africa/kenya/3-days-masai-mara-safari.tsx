/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from 'next/link'
import CallToAction from '~/components/CallToAction'
import HeadSEO from '~/components/ui/Head'

import Accordion from '~/components/Accordion'
import { threeDayMasaiMaraSafari } from '~/data/kenya'

import Image from 'next/image'
import ItineraryAccordion from '~/components/itineraries/itinerary-accordion'

const Page = () => {
    return (
        <>
            <HeadSEO title='3 Days Masai Mara Fly-in Safari' keywords='' />

            <div className="relative h-screen">
                <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-start justify-center bg-black/60 text-white overflow-hidden">
                    <Image
                        alt="tazama gallery photos"
                        className="absolute left-0 right-0 top-0 -z-50 h-screen w-screen object-cover opacity-80"
                        src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1731335119/east-africa/kenya/3-day-masai-mara-safari/wildebeest-zebra-maasai-mara-national-reserve-kenya-africa_kk6cpk.webp"
                        layout="fill"
                    />

                    <div className="container">
                        <h1 className="font-base absolute left-1/2 top-1/2 mx-auto w-full -translate-x-1/2 -translate-y-1/2 px-2 text-center text-6xl sm:px-12 lg:w-2/3 xl:text-7xl">
                            3 Days Masai Mara Fly-in Safari
                        </h1>
                    </div>
                </div>
            </div>

            <div className='mb-20 mt-28 max-w-5xl mx-auto md:px-8 px-4'>
                <h3 className="text-5xl text-center mb-8 text-primary">3 Days Masai Mara Fly-in Safari</h3>
                <p>
                    Perfect for a quick yet immersive escape, this three-day fly-in safari to the Masai Mara takes you straight into Kenya’s premier wildlife destination for an unforgettable experience. After a scenic flight from Nairobi, arrive at a luxurious safari camp or lodge, where you’ll settle in before heading out on your first game drive. Over the next few days, explore the vast plains of the Mara, known for its impressive populations of lions, elephants, giraffes, and the seasonal Great Migration.
                    <br /><br />
                    Enjoy expertly guided game drives that offer up-close encounters with the wildlife, and cap off each day with sundowners overlooking the Mara’s stunning landscapes. With gourmet meals, luxurious accommodations, and unforgettable views, this fly-in safari provides a seamless and exciting introduction to the beauty and thrill of an African safari.
                </p>
                <section className='mt-20'>
                    <h3 className="text-center text-4xl  tracking-wider text-[#A87133]">
                        Detailed Itinerary for 3 Days Masai Mara Fly-in Safari
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
                                                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1731335119/east-africa/kenya/3-day-masai-mara-safari/wildebeest-zebra-maasai-mara-national-reserve-kenya-africa_kk6cpk.webp"
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
                            {threeDayMasaiMaraSafari.map((item, index) => (
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
                                        totalDays={threeDayMasaiMaraSafari.length}
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