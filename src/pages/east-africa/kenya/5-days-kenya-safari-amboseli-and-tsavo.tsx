/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from 'next/link'
import CallToAction from '~/components/CallToAction'
import HeadSEO from '~/components/ui/Head'

import Accordion from '~/components/Accordion'
import { fiveDaysTemboSafariAmboseliandTsavo } from '~/data/kenya'

import Image from 'next/image'

const Page = () => {
    return (
        <>
            <HeadSEO title='Tazama Itenary | 5 Days Kenya Safari – Amboseli and Tsavo' keywords='' />

            <div className="relative h-screen">
                <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-start justify-center bg-black/60 text-white overflow-hidden">
                    <Image
                        alt="tazama gallery photos"
                        className="absolute left-0 right-0 top-0 -z-50 h-screen w-screen object-cover opacity-80"
                        src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1731331990/east-africa/kenya/5-days-kenya-safari/Tinks_Leopard_2Z3A2753_xuabu4.jpg"
                        layout="fill"
                    />

                    <div className="container">
                        <h1 className="font-base absolute left-1/2 top-1/2 mx-auto w-full -translate-x-1/2 -translate-y-1/2 px-2 text-center text-6xl sm:px-12 lg:w-2/3 xl:text-7xl">
                            5 Days Kenya Safari – Amboseli and Tsavo
                        </h1>
                    </div>
                </div>
            </div>

            <div className='mb-20 mt-28 max-w-5xl mx-auto md:px-8 px-4'>
                <h3 className="text-5xl text-center mb-8 text-primary">5 Days Kenya Safari – Amboseli and Tsavo</h3>
                <p>
                    Experience Kenya's stunning landscapes and diverse wildlife in five days with Tazama Africa Safaris, which takes you through Amboseli and Tsavo National Parks. Begin your journey in Amboseli, renowned for its breathtaking views of Mount Kilimanjaro and large herds of elephants, where you'll enjoy game drives through lush wetlands and open plains teeming with wildlife. Next, venture into the rugged wilderness of Tsavo, known for its red-earth plains and unique red elephants, immersing yourself in its dramatic scenery and visiting highlights like Mzima Springs and the Yatta Plateau. With guided game drives and luxurious lodges to unwind in, the Tembo Safari perfectly balances adventure, luxury, and the natural beauty of Kenya.
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
                                                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1731332122/east-africa/kenya/5-days-kenya-safari/Tsavo-West-leopards_o8fnib.jpg"
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
                        </aside>
                        <section className='w-full'>
                            {fiveDaysTemboSafariAmboseliandTsavo.map((item, index) => (
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
            </div>

            <br /><br /><br />
            <CallToAction />
        </>
    )
}

export default Page