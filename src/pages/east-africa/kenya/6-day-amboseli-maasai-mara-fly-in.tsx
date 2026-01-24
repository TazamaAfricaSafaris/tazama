import React from 'react'
import HeadSEO from '~/components/ui/Head'

import Image from "next/image"
import Link from "next/link"

import Accordion from '~/components/Accordion'

import CallToAction from '~/components/CallToAction'
import { sixDayAmboseliMaasaiMaraSafari } from '~/data/kenya'

const Page = () => {
    return (
        <>
            <HeadSEO title='Tazama Itenary | 6 Day Amboseli-Maasai Mara Fly-in Safari' keywords='' />

            <div className="relative h-screen">
                <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-start justify-center bg-black/60 text-white overflow-hidden">
                    <Image
                        alt="tazama gallery photos"
                        className="absolute left-0 right-0 top-0 -z-50 h-screen w-screen object-cover opacity-80"
                        src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1731328470/east-africa/kenya/6-day-amboselu-maasai-safari/_copyright_beverly_joubert_oldonyo_wildlife_kenya_5717_gr6dpt.webp"
                        layout="fill"
                    />

                    <div className="container">
                        <h1 className="font-base absolute left-1/2 top-1/2 mx-auto w-full -translate-x-1/2 -translate-y-1/2 px-2 text-center text-6xl sm:px-12 lg:w-2/3 xl:text-7xl">
                            6 Day Amboseli-Maasai Mara Fly-in Safari
                        </h1>
                    </div>
                </div>
            </div>

            <div className='mb-20 mt-28 max-w-5xl mx-auto md:px-8 px-4'>
                <h3 className="text-5xl text-center mb-8 text-primary">6 Day Amboseli-Maasai Mara Fly-in Safari</h3>
                <p>
                    Embark on a six-day fly-in safari to Kenya, starting in Amboseli National Park, where stunning views of Mount Kilimanjaro provide a backdrop for observing herds of elephants and other wildlife. After two days, fly to the renowned Masai Mara, famous for its luxurious accommodations and extraordinary game drives. Experience the thrill of witnessing the Big Five amid breathtaking landscapes and explore the rich wildlife of the endless plains. Engage with the local Maasai culture for a truly immersive adventure that combines seamless travel with unparalleled scenery and luxury.
                </p>
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
                                        href="/contact"
                                        target="_blank"
                                    >
                                        <>
                                            <Image
                                                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1731328470/east-africa/kenya/6-day-amboselu-maasai-safari/_copyright_beverly_joubert_oldonyo_wildlife_kenya_5717_gr6dpt.webp"
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
                            {sixDayAmboseliMaasaiMaraSafari.map((item, index) => (
                                <div key={index}>
                                    <Accordion
                                        default={true}
                                        question={item.question}
                                        answer={item.answer}
                                        list={item.list}
                                        list2={item.list2}
                                        list3={item.list3}
                                        listHeader={item.listHeader}
                                        listHeader2={item.listHeader2}
                                        listHeader3={item.listHeader3}
                                        note={item.note}
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