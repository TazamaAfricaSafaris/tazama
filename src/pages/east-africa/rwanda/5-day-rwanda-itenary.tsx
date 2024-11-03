import React from 'react'
import HeadSEO from '~/components/ui/Head'

import Image from 'next/image'
import Link from "next/link"
import { fiveDayRwandaItenary } from '~/data/rwanda'
import Accordion from '~/components/Accordion'
import RateTable from '~/components/RatesTable'
import { IoMdCheckmark, IoMdClose } from 'react-icons/io'

const Page = () => {
    return (
        <>
            <HeadSEO title='Tazama Itenary | 5 Days In Rwanda' keywords='' />

            <div className="relative h-screen">
                <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-start justify-center bg-black/60 text-white overflow-hidden">
                    <Image
                        alt="tazama gallery photos"
                        className="absolute left-0 right-0 top-0 -z-50 h-screen w-screen object-cover opacity-80"
                        src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730203838/lodges/lions-paw/LP_Double_1-min-scaled_dgq0vu.webp"
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
                    <h3 className="text-center text-4xl  tracking-wider text-[#A87133]">
                        Itinerary
                    </h3>

                    <div className='mt-10 flex flex-col-reverse items-start gap-4 md:flex-row md:gap-8 relative'>
                        <aside className="w-full md:w-1/2 md:sticky md:top-4">
                            <div className="flex flex-col-reverse items-start gap-2 md:gap-5">
                                <Link href="/contact" className='border-primary border border-dark/40 px-6 py-3 w-full font-raleway text-center hover:bg-primary hover:text-white transition-colors rounded-md text-primary'>
                                    Request Custom Itenary
                                </Link>

                                <div className="relative h-[300px] w-full bg-zinc-900 group overflow-hidden">
                                    <Link
                                        href="https://wetu.com/Itinerary/Landing/EC03E682-B66F-4924-AB41-549AF4117281"
                                        target="_blank"
                                    >
                                        <>
                                            <Image
                                                src="/assets/images/gallery/discovery.webp"
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
                            {fiveDayRwandaItenary.map((item, index) => (
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
                    <h3 className="text-center text-4xl mb-4 tracking-wider text-[#A87133]">
                        Tour Rates / Prices
                    </h3>
                    <RateTable title={'Option 1: Mid-range (Hotel Des Mille Collines & Five Volcanoes Boutique Hotel)'} rates={midRangeRates} />
                    <RateTable title={'Option 2: Luxury (Kigali Serena Hotel & The Bishop’s House Rwanda)'} rates={luxuryRates} />
                    <RateTable title={'Option 3: High-End (The Retreat & Singita Kwitonda Lodge)'} rates={highEndRates} />
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
                    <br /><br />
                    <p><span className="italic">Note: </span> Inclusions for Singita Kwitonda Lodge and The Bishop’s House encompass all meals, beverages, and laundry services</p>
                </section>
                <section className='mt-8'>
                    <h3 className='text-4xl text-primary'>Preparing for Your Journey</h3>
                    <p>Recommended packing includes waterproof hiking boots, durable hiking pants, a waterproof jacket, gloves, gaiters, thick socks, and long-sleeved tops to prepare for varying trek conditions</p>
                </section>
            </div>
        </>
    )
}

const midRangeRates = [
    {
        season: 'High Season',
        solo: '$7,982',
        twoSharing: '$5,798 each',
        fourSharing: '$5,449 each',
        sixSharing: '$5,096 each',
    },
    {
        season: 'Low Season',
        solo: '$7,336',
        twoSharing: '$4,324 each',
        fourSharing: '$4,982 each',
        sixSharing: '$4,638 each',
    },
];

const luxuryRates = [
    {
        season: 'High Season',
        solo: '$9,992',
        twoSharing: '$7,208 each',
        fourSharing: '$6,859 each',
        sixSharing: '$6,505 each',
    },
    {
        season: 'Low Season',
        solo: '$9,992',
        twoSharing: '$7,208 each',
        fourSharing: '$6,859 each',
        sixSharing: '$6,505 each',
    },
];


const highEndRates = [
    {
        season: 'High Season',
        solo: '$19,655',
        twoSharing: '$17,619 each',
        fourSharing: '$17,188 each',
        sixSharing: '$16,794 each',
    },
    {
        season: 'Low Season',
        solo: '$16,469',
        twoSharing: '$14,624 each',
        fourSharing: '$14,193 each',
        sixSharing: '$13,798 each',
    },
];

const itenaryIncludes = [
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

const itenaryExcludes = [
    "International and domestic flights & entry visa fees",
    "Tips and gratuities",
    "Personal expenses (e.g., telephone calls, drinks, mini bar, travel insurance)",
]

export default Page