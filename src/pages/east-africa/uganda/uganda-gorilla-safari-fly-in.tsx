/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import HeadSEO from '~/components/ui/Head'
import Link from 'next/link'

import Image from 'next/image'

import { IoMdCheckmark, IoMdClose } from "react-icons/io";

import Accordion from '~/components/Accordion'
import { ugandaGorillaSafariFlyIn } from '~/data/uganda'
import CallToAction from '~/components/CallToAction';

const itenaryIncludes = [
    "Gorilla trekking permit per person",
    "Transport in a 4WD land cruiser(Window seat guaranteed)",
    "Return domestic airline ticket",
    "Return transfer: Airstrip - Lodge in Bwindi",
    "02 Nights’ accommodation",
    "Meals as described in the itinerary",
    "AMREF Medical evacuation cover",
    "An English - speaking guide",
    "All government taxes"
]

const itenaryExcludes = [
    "All optional activities",
    "Expenses of a personal nature",
    "Return domestic airline ticket",
    "All drinks (alcoholic and non-alcoholic)",
    "Travel related insurance and tourist visa",
    "Tips and Gratuities",
    "Extra nights/day room use at a fee",
    "Itinerary alteration without prior notice",
]

const Page = () => {
    return (
        <>
            <HeadSEO title='Tazama Itenary | Uganda Gorilla Safari Fly In' keywords='' />

            <div className="relative h-screen">
                <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-start justify-center bg-black/60 text-white overflow-hidden">
                    <Image
                        alt="tazama gallery photos"
                        className="absolute left-0 right-0 top-0 -z-50 h-screen w-screen object-cover opacity-80"
                        src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730711559/east-africa/uganda/uganda-gorilla-safari/26022685797_fb352d1d64_k_eqveca.webp"
                        layout="fill"
                    />

                    <div className="container">
                        <h1 className="font-base absolute left-1/2 top-1/2 mx-auto w-full -translate-x-1/2 -translate-y-1/2 px-2 text-center text-6xl sm:px-12 lg:w-2/3 xl:text-7xl">
                            Uganda Gorilla Safari Fly In
                        </h1>
                    </div>
                </div>
            </div>

            <div className='mb-20 mt-28 max-w-5xl mx-auto md:px-8 px-4'>
                <section>
                    <h3 className="text-5xl text-center mb-8 text-primary">Uganda Gorilla Safari Fly In</h3>
                    <p>
                        Uganda boasts a landscape that ranges from the dry savannah in the north to lush mountains and dense forests in the central and western regions. Home to incredible biodiversity, Uganda is renowned for its endangered mountain gorillas in Bwindi Impenetrable Forest and the unique wildlife of Queen Elizabeth National Park, where you may spot the rare tree-climbing lions and colorful flamingos. For adventure seekers, activities like white-water rafting, kayaking, hiking, and horse riding are plentiful, while vibrant Kampala offers lively cultural spots, bars, and restaurants.
                    </p>

                    <div className="flex items-center justify-center gap-4 my-8">
                        <div className="relative w-full h-72">
                            <Image
                                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730718010/east-africa/uganda/uganda-gorilla-safari/1-day-shoe-bill-birding-tour-mabamba-swamp_yz9z4z.jpg"
                                alt=""
                                layout="fill"
                                objectFit="cover"
                                className="w-full object-cover h-full"
                            />
                        </div>
                        <div className="relative w-full h-72">
                            <Image
                                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730718213/east-africa/uganda/uganda-gorilla-safari/52037422427_838c3bc3be_h_px4gov.webp"
                                alt=""
                                layout="fill"
                                objectFit="cover"
                                className="w-full object-cover h-full"
                            />
                        </div>
                    </div>

                    <p>
                        This short yet unforgettable tour is perfect for travelers with limited time, such as those on business trips or brief holidays, seeking a thrilling gorilla trek and a visit to the Batwa community. Enjoy flexible domestic flights from Entebbe and seamless transfers to Bwindi Impenetrable National Park for an unparalleled encounter with Uganda’s remarkable wildlife.
                    </p>
                </section>

                <section className='mt-20'>
                    <h3 className="text-center text-4xl  tracking-wider text-[#A87133]">
                        Itinerary
                    </h3>

                    <div className='mt-10 flex flex-col-reverse items-start gap-4 md:flex-row md:gap-8 relative'>
                        <aside className="w-full md:w-1/2 md:sticky md:top-4">
                            <div className="flex flex-col-reverse items-start gap-2 md:gap-5">
                                <Link href="/contact" className='border-primary border px-6 py-3 w-full font-raleway text-center hover:bg-primary hover:text-white transition-colors rounded-md text-primary'>
                                    Request Custom Itenary
                                </Link>

                                <div className="relative h-[300px] w-full bg-zinc-900 group overflow-hidden">
                                    <Link
                                        href="https://wetu.com/Itinerary/Landing/EC03E682-B66F-4924-AB41-549AF4117281"
                                        target="_blank"
                                    >
                                        <>
                                            <Image
                                                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730711559/east-africa/uganda/uganda-gorilla-safari/26022685797_fb352d1d64_k_eqveca.webp"
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
                        </aside>
                        <section className='w-full'>
                            {ugandaGorillaSafariFlyIn.map((item, index) => (
                                <div key={index}>
                                    <Accordion
                                        default={true}
                                        question={item.question}
                                        answer={item.answer}
                                        list={item.list}
                                        list2={item.list2}
                                        listHeader={item.listHeader}
                                        listHeader2={item.listHeader2}
                                        note={item.note}
                                    />
                                </div>
                            ))}
                        </section>
                    </div>
                </section>

                <section className='mt-20'>
                    <div className='flex flex-col md:flex-row gap-8'>
                        <div className='w-full'>
                            <div className='flex flex-row items-center space-x-4'>
                                <div className='w-8 h-8 bg-primary flex items-center justify-center rounded-full'>
                                    <IoMdCheckmark className='text-xl text-[#F5F1EB]' />                                </div>
                                <p className='text-2xl'>Itenary includes</p>
                            </div>
                            <ul className='list-disc list-inside mt-6'>
                                {
                                    itenaryIncludes.map(item => <li key={item} className='pl-8'>{item}</li>)
                                }
                            </ul>
                        </div>
                        <div className='w-full'>
                            <div className='flex flex-row items-center space-x-4'>
                                <div className='w-8 h-8 bg-primary flex items-center justify-center rounded-full'>
                                    <IoMdClose className='text-xl text-[#F5F1EB]' />                                </div>
                                <p className='text-2xl'>Itenary Excludes</p>
                            </div>
                            <ul className='list-disc list-inside mt-6'>
                                {
                                    itenaryExcludes.map(item => <li key={item} className='pl-8'>{item}</li>)
                                }
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            
            <br /><br /><br />
            <CallToAction />
        </>
    )
}

export default Page