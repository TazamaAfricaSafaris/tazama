/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import HeadSEO from '~/components/ui/Head'
import Link from 'next/link'

import Image from 'next/image'

import { IoMdCheckmark, IoMdClose } from "react-icons/io";

import Accordion from '~/components/Accordion'
import { rwandaGorillaSafari } from '~/data/rwanda';
import CallToAction from '~/components/CallToAction';

const itenaryIncludes = [
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

const itenaryExcludes = [
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
            <HeadSEO title='Tazama Itenary | Rwanda Gorilla Safari' keywords='' />

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

            <div className='mb-20 mt-28 max-w-5xl mx-auto md:px-8 px-4'>
                <section>
                    <h3 className="text-5xl text-center mb-8 text-primary">Rwanda Gorilla Safari</h3>
                    <p>
                        Rwanda, once known for its turbulent history, has transformed into a captivating destination. Beyond its iconic gorilla tracking in the lush Volcanoes National Park, Rwanda offers stunning natural attractions like Lake Kivu, Nyungwe Forest, and Akagera’s wildlife-rich savannah. Start with a Kigali City tour, then head to Volcanoes National Park for a cultural experience at the Gorilla Guardians Village. Enjoy an unforgettable gorilla trek amid the beautiful Virunga Mountains, with options for golden monkey tracking and birding before departing from Kigali Airport.
                    </p>

                    <div className="flex items-center justify-center gap-4 my-8">
                        <div className="relative w-full h-72">
                            <Image
                                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730714623/east-africa/rwanda/rwanda-gorilla-trekking/40185955594_7a7f6358b8_k_fui6lh.webp"
                                alt=""
                                layout="fill"
                                objectFit="cover"
                                className="w-full object-cover h-full"
                            />
                        </div>
                        <div className="relative w-full h-72">
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
                                                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730709645/east-africa/rwanda/rwanda-gorilla-trekking/49197853001_362e5dca1e_k_lpuofw.webp"
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
                            {rwandaGorillaSafari.map((item, index) => (
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