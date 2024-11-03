import React from 'react'
import HeadSEO from '~/components/ui/Head'

import Image from 'next/image'
import Link from "next/link"
import { fourDayGorillaTrekking } from '~/data/rwanda'
import Accordion from '~/components/Accordion'
import RateTable from '~/components/RatesTable'

const Page = () => {
    return (
        <>
            <HeadSEO title='Tazama Itenary | 4 Day Gorilla Trekking Adventure' keywords='' />

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
                            4 Day Gorilla Trekking Adventure
                        </h1>
                    </div>
                </div>
            </div>

            <div className='mb-20 mt-28 max-w-5xl mx-auto md:px-8 px-4'>
                <h3 className="text-5xl text-center mb-8 text-primary">4 Day Gorilla Trekking Adventure</h3>
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
                            {fourDayGorillaTrekking.map((item, index) => (
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
                    <RateTable title={'High-End: Singita Kwitonda Lodge – Musanze, Volcanoes National Park'} rates={highEndRates} />
                    <RateTable title={'Luxury: The Bishop’s House Rwanda – Musanze, Volcanoes National Park'} rates={luxuryRates} />
                    <RateTable title={'Mid-range: Five Volcanoes Boutique Hotel – Musanze, Volcanoes National Park'} rates={midRangeRates} />
                </section>
            </div>
        </>
    )
}

const highEndRates = [
    {
      season: 'High Season',
      solo: '$23,096',
      twoSharing: '$21,577',
      fourSharing: '$20,999',
      sixSharing: '$20,510',
    },
    {
      season: 'Low Season',
      solo: '$19,273',
      twoSharing: '$17,740',
      fourSharing: '$17,217',
      sixSharing: '$16,675',
    },
  ];

  const luxuryRates = [
    {
      season: 'High Season',
      solo: '$11,123',
      twoSharing: '$8,734',
      fourSharing: '$8,260',
      sixSharing: '$7,900',
    },
    {
      season: 'Low Season',
      solo: '$11,123',
      twoSharing: '$8,734',
      fourSharing: '$8,260',
      sixSharing: '$7,900',
    },
  ];

  const midRangeRates = [
    {
      season: 'High Season',
      solo: '$9,383',
      twoSharing: '$6,763',
      fourSharing: '$6,349',
      sixSharing: '$5,937',
    },
    {
      season: 'Low Season',
      solo: '$8,544',
      twoSharing: '$6,237',
      fourSharing: '$5,768',
      sixSharing: '$5,402',
    },
  ];

export default Page