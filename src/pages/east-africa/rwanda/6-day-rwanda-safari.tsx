import React from 'react'
import HeadSEO from '~/components/ui/Head'

import Image from 'next/image'
import Link from "next/link"
import { sixDayRwandaSafari } from '~/data/rwanda'
import Accordion from '~/components/Accordion'
import { IoMdCheckmark, IoMdClose } from 'react-icons/io'
import CallToAction from '~/components/CallToAction'

const Page = () => {
    return (
        <>
            <HeadSEO title='Tazama Itenary | 6 day Rwanda Safari' keywords='' />

            <div className="relative h-screen">
                <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-start justify-center bg-black/60 text-white overflow-hidden">
                    <Image
                        alt="tazama gallery photos"
                        className="absolute left-0 right-0 top-0 -z-50 h-screen w-screen object-cover opacity-80"
                        src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730710201/east-africa/rwanda/6-day-rwanda-safari/40185985184_8a3cd7cad6_k_ud0kay.webp"
                        layout="fill"
                    />

                    <div className="container">
                        <h1 className="font-base absolute left-1/2 top-1/2 mx-auto w-full -translate-x-1/2 -translate-y-1/2 px-2 text-center text-6xl sm:px-12 lg:w-2/3 xl:text-7xl">
                            6 day Rwanda Safari
                        </h1>
                    </div>
                </div>
            </div>

            <div className='mb-20 mt-28 max-w-5xl mx-auto md:px-8 px-4'>
                <section className=''>
                    <h3 className="text-5xl text-center mb-8 text-primary">6 day Rwanda Safari</h3>
                    <p>
                        Experience the awe-inspiring beauty of Rwanda with our meticulously curated 6-Day Rwanda Primate
                        Discovery Tour: Chimpanzees and Gorillas Expedition. Traverse the verdant landscapes of Rwanda on an
                        unforgettable journey that blends exhilarating wildlife encounters with immersive cultural experiences.
                        Embark on thrilling treks through Nyungwe National Park to witness the captivating behavior of
                        chimpanzees in their natural habitat. Then, venture into the heart of Volcanoes National Park for a once-
                        in-a-lifetime opportunity to observe the majestic mountain gorillas, an experience that promises to
                        leave an indelible mark on your soul.
                    </p>
                    <div className="flex max-sm:flex-row items-center justify-center gap-4 mt-8">
                        <div className='relative w-full h-72'>
                            <Image
                                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730716950/east-africa/rwanda/6-day-rwanda-safari/49198225732_18ad9dfe0d_k_lizfem.webp"
                                alt=""
                                layout='fill'
                                objectFit='cover'
                                className="w-full object-cover h-full"
                            />
                        </div>
                        <div className='relative w-full h-72'>
                            <Image
                                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730717093/east-africa/rwanda/6-day-rwanda-safari/Birds-and-plant-species-of-Nyungwe-National-park-Visit-rwanda-Tour_h0rwun.jpg"
                                alt=""
                                layout='fill'
                                objectFit='cover'
                                className="w-full object-cover h-full"
                            />
                        </div>
                    </div>
                    <br /><br /><br />
                    <h4 className="text-4xl mb-4 text-primary">Highlights of the Itenary</h4>
                    <p>
                        Delve into the depths of Nyungwe National Park in search of our closest relatives, the
                        chimpanzees and witness their playful antics in their natural habitat.
                        Experience the thrill of walking among the treetops on a canopy walk in Nyungwe National Park,
                        offering unparalleled views of the forest canopy and its inhabitants.
                        Gain insight into Rwanda’s rich tea culture with a tea tour within the One &amp; Only Nyungwe
                        House Compound. Here, you’ll learn about the making process and indulge in tastings of freshly
                        brewed tea.
                    </p>
                    <br />
                    <p>
                        Embark on a once-in-a-lifetime adventure to track and observe endangered mountain gorillas in
                        their natural habitat, a truly humbling and unforgettable experience.
                        Explore the groundbreaking work of Dian Fossey Gorilla Fund at the Ellen DeGeneres Campus,
                        dedicated to the conservation of gorillas and their habitats.
                        Discover the vibrant culture and history of Rwanda’s capital city, Kigali, with a guided tour that
                        showcases its bustling markets, poignant memorials, and lively neighborhoods.
                        Unwind in style at handpicked accommodations, including the Retreat by Heaven, the high-end
                        One &amp; Only Nyungwe House, and One &amp; Only Gorilla’s Nest nestled at the foothills of the
                        Virunga Mountains.

                    </p>
                </section>
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
                            {sixDayRwandaSafari.map((item, index) => (
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
                                    <IoMdClose className='text-xl text-[#F5F1EB]' />
                                </div>
                                <p className='text-2xl'>Itenary Excludes</p>
                            </div>
                            <ul className='list-disc list-inside mt-6'>
                                {
                                    itenaryExcludes.map(item => <li key={item} className='pl-8'>{item}</li>)
                                }
                            </ul>
                        </div>
                    </div>
                    <br />
                    <p><span className='italic'>Note:</span> The permits need to be prepaid in full to secure and are non-refundable once purchased.</p>
                    <p className='mt-2'>
                        <span className='italic'>Note:</span> Inclusions for the exclusive One & Only Nyungwe House, One & Only Gorilla’s Nest, and the luxury Bishop’s House Rwanda encompass all meals, a selection of alcoholic and non-alcoholic beverages, as well as laundry services, subject to reasonable limits
                    </p>
                </section>
                <section className='mt-8'>
                    <h3 className='text-4xl text-primary'>Preparing for Your Journey</h3>
                    <p>Recommended packing includes waterproof hiking boots, durable hiking pants, a waterproof jacket, gloves, gaiters, thick socks, and long-sleeved tops to prepare for varying trek conditions</p>
                </section>
            </div>

            <br /><br /><br />
            <CallToAction />
        </>
    )
}

const itenaryIncludes = [
    "Exclusive use of a private 4x4 vehicle",
    "Services of a professional, experienced English-speaking driver-guide",
    "Accommodation inclusions as per itinerary on a full-board basis",
    "Meals mentioned in the program",
    "Return flight Kigali – Kamembe - Kigali with Rwandair",
    "1 Chimpanzee trekking permit per person",
    "1 Chimpanzee trekking permit per person",
    "1 Canopy walk permit per person",
    "Tea tour experience at the One & Only Nyungwe House",
    "1 Gorilla trekking permit (US$ 1,500 each)",
    "One porter will be available to assist throughout these journeys",
    "Visit to the Ellen DeGeneres Campus of the Dian Fossey Gorilla Fund",
    "Audio-guide for Kigali Genocide Memorial",
    "Bottled mineral water in the vehicle during the tour",
    "All government taxes on the services quoted above, and our assistance",
]

const itenaryExcludes = [
    "International airline tickets & entry visa fees",
    "Tips and gratuities",
    "Personal expenses such as telephone calls, drinks throughout the trip, mini bar, travel insurance, etc",
]


export default Page