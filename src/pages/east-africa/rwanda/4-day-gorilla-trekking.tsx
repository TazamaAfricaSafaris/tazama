import React from 'react'
import HeadSEO from '~/components/ui/Head'

import Image from 'next/image'
import Link from "next/link"
import { fourDayGorillaTrekking } from '~/data/rwanda'
import Accordion from '~/components/Accordion'

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
                    <div className="max-w-4xl mx-auto">
                        <div className="rounded-lg mb-6 overflow-auto">
                            <p className="rounded-t-md w-full text-xl bg-lighter/25 border-x border-t border-dark/40 px-4 py-3">High-End: Singita Kwitonda Lodge – Musanze, Volcanoes National Park</p>
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="font-raleway">
                                        <th className="border border-dark/40 p-4">Season</th>
                                        <th className="border border-dark/40 p-4">Solo Traveler</th>
                                        <th className="border border-dark/40 p-4">2 People Sharing</th>
                                        <th className="border border-dark/40 p-4">4 People Sharing</th>
                                        <th className="border border-dark/40 p-4">6 People Sharing</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='font-raleway'>
                                        <td className="border border-dark/40 p-4">High Season</td>
                                        <td className="border border-dark/40 p-4">$23,096</td>
                                        <td className="border border-dark/40 p-4">$21,577</td>
                                        <td className="border border-dark/40 p-4">$20,999</td>
                                        <td className="border border-dark/40 p-4">$20,510</td>
                                    </tr>
                                    <tr className='font-raleway'>
                                        <td className="border border-dark/40 p-4">Low Season</td>
                                        <td className="border border-dark/40 p-4">$19,273</td>
                                        <td className="border border-dark/40 p-4">$17,740</td>
                                        <td className="border border-dark/40 p-4">$17,217</td>
                                        <td className="border border-dark/40 p-4">$16,675</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className=" rounded-lg mb-6 overflow-auto">
                            <p className="rounded-t-lg text-lg bg-lighter/25 border-x border-t border-dark/40 px-4 py-3">Luxury: The Bishop’s House Rwanda – Musanze, Volcanoes National Park</p>
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="font-raleway">
                                        <th className="border border-dark/40 p-4">Season</th>
                                        <th className="border border-dark/40 p-4">Solo Traveler</th>
                                        <th className="border border-dark/40 p-4">2 People Sharing</th>
                                        <th className="border border-dark/40 p-4">4 People Sharing</th>
                                        <th className="border border-dark/40 p-4">6 People Sharing</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='font-raleway'>
                                        <td className="border border-dark/40 p-4">High Season</td>
                                        <td className="border border-dark/40 p-4">$11,123</td>
                                        <td className="border border-dark/40 p-4">$8,734</td>
                                        <td className="border border-dark/40 p-4">$8,260</td>
                                        <td className="border border-dark/40 p-4">$7,900</td>
                                    </tr>
                                    <tr className='font-raleway'>
                                        <td className="border border-dark/40 p-4">Low Season</td>
                                        <td className="border border-dark/40 p-4">$11,123</td>
                                        <td className="border border-dark/40 p-4">$8,734</td>
                                        <td className="border border-dark/40 p-4">$8,260</td>
                                        <td className="border border-dark/40 p-4">$7,900</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className=" rounded-lg mb-6 overflow-auto">
                            <p className="rounded-t-lg text-lg bg-lighter/25 border-x border-t border-dark/40 px-4 py-3">Mid-range: Five Volcanoes Boutique Hotel – Musanze, Volcanoes National Park</p>
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="font-raleway">
                                        <th className="border border-dark/40 p-4">Season</th>
                                        <th className="border border-dark/40 p-4">Solo Traveler</th>
                                        <th className="border border-dark/40 p-4">2 People Sharing</th>
                                        <th className="border border-dark/40 p-4">4 People Sharing</th>
                                        <th className="border border-dark/40 p-4">6 People Sharing</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className='font-raleway'>
                                        <td className="border border-dark/40 p-4">High Season</td>
                                        <td className="border border-dark/40 p-4">$9,383</td>
                                        <td className="border border-dark/40 p-4">$6,763</td>
                                        <td className="border border-dark/40 p-4">$6,349</td>
                                        <td className="border border-dark/40 p-4">$5,937</td>
                                    </tr>
                                    <tr className='font-raleway'>
                                        <td className="border border-dark/40 p-4">Low Season</td>
                                        <td className="border border-dark/40 p-4">$8,544</td>
                                        <td className="border border-dark/40 p-4">$6,237</td>
                                        <td className="border border-dark/40 p-4">$5,768</td>
                                        <td className="border border-dark/40 p-4">$5,402</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Page