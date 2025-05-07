import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import SafariCarousel from '~/components/safari-carousel'
import CallToAction from '~/components/CallToAction'
import HeadSEO from '~/components/ui/Head'
import { base_keywords } from '~/lib/constants'

const Page = () => {
    const activities = [
        {
            name: "Reef Walk",
            description: "During the low tides, explore the reef and the rock pools that emerge, searching for small creatures in the water.",
        },
        {
            name: "Cultural Village Visits",
            description: "Explore local villages, embark on a spice tour, or take a visit to Stone Town and soak in all the tradition and culture.",
        },
        {
            name: "Diving and Snorkelling",
            description: "Immerse yourself in the pristine Mnemba Atoll, and discover what the crystal clear waters have to offer.",
        },
        {
            name: "Spice tours",
            description: "Culture fans will also appreciate learning about the history of spice on Zanzibar, as will anyone intrigued by the use of spices in cooking. You’ll look around a spice plantation in the company of a knowledgeable guide, and often there are chances to sample the wares following the tour."
        },
        {
            name: "Dhow trips",
            description: "A dhow is a traditional Zanzibari sailboat. Guests can climb aboard and set sail on the ocean, perhaps doing a bit of birdwatching during the journey."
        },
        {
            name: "Kayaking",
            description: "Why not hire kayaks and paddle around the island’s scenic north-eastern coastline? You’ll have lovely vistas over sparkling seas and serene lagoons."
        }
    ]

    return (
        <>
            <HeadSEO 
                title="Matemwe Retreat | Exclusive Beach Villas in Zanzibar" 
                keywords={`${base_keywords}, Matemwe Retreat Zanzibar, private beach villas, luxury Zanzibar accommodation, exclusive beach resort, ocean view villas, private plunge pools, Mnemba Atoll diving, romantic beach getaway, seafood dining Zanzibar, boutique beach retreat`}
                description="Indulge in ultimate privacy at Matemwe Retreat, featuring exclusive beach villas with private plunge pools and panoramic Indian Ocean views. Experience personalized service, exceptional dining, and world-class diving at nearby Mnemba Atoll."
            />
            <div className="relative h-screen">
                <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-start justify-center bg-black/60 text-white">
                    <Image
                        alt="tazama gallery photos"
                        className="absolute left-0 right-0 top-0 -z-50 h-screen w-screen object-cover opacity-80"
                        src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1729843909/lodges/matemwe-retreat/matemwe-retreat-guest-bedroom-terrace-zanzibar-tanzania-yellow-zebra-safaris_el7ihe.jpg"
                        layout="fill"
                    />

                    <div className="container">
                        <h1 className="font-base absolute left-1/2 top-1/2 mx-auto w-full -translate-x-1/2 -translate-y-1/2 px-2 text-center text-6xl sm:px-12 lg:w-2/3 xl:text-7xl">
                            Matemwe Retreat
                        </h1>
                    </div>
                </div>
            </div>

            <section className='mb-20 mt-28 max-w-5xl mx-auto md:px-8 px-4'>
                <h3 className="text-5xl text-center mb-4 text-primary">Matemwe Retreat</h3>
                <p>
                    There are few better places to enjoy a carefree family holiday than a tropical island, and the homely <Link href="https://www.tripadvisor.com/VacationRentalReview-g616017-d2551517-Matemwe_Beach_House_Asilia_Africa-Matemwe_Zanzibar_Island_Zanzibar_Archipelago.html" className="text-primary">Matemwe Beach House</Link> offers the perfect bolthole for a family or small group looking for an exclusive beach retreat. The house offers three bedrooms, two of which are en-suite, making it the ideal option for families looking for both space and privacy.
                    <br /><br />
                    Set a few metres from the white sands of Matemwe Beach in northeast Zanzibar, this private residence allows travellers to write
                    the schedule for their tropical escape. A team of staff including private chef and butler are dedicated to looking after every need,
                    offering guests the freedom to truly relax.
                </p>
                <div className="flex items-center justify-center gap-4 mt-8">
                    <div className='relative w-full h-72'>
                        <Image
                            src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1729845422/lodges/matemwe-retreat/d2_pqmmmh.jpg"
                            alt=""
                            layout='fill'
                            objectFit='cover'
                            className="w-full object-cover h-full"
                        />
                    </div>
                    <div className='relative w-full h-72'>
                        <Image
                            src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1729845422/lodges/matemwe-retreat/71_qs6tz9.jpg"
                            alt=""
                            layout='fill'
                            objectFit='cover'
                            className="w-full object-cover h-full"
                        />
                    </div>
                </div>
                <br /><br /><br />
                <h4 className='text-4xl text-primary mb-3'>Activities</h4>
                <ul className='list-disc pl-4 mb-4'>
                    {activities.map((activity, index) => (
                        <li className="ml-4" key={index}>
                            <p><span className='font-semibold'>{activity.name}</span>: {activity.description}</p>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center justify-center gap-4 mt-8">
                    <div className='relative w-full h-72'>
                        <Image
                            src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1729845956/lodges/matemwe-retreat/4f_khz4tb.jpg"
                            alt=""
                            layout='fill'
                            objectFit='cover'
                            className="w-full object-cover h-full"
                        />
                    </div>
                    <div className='relative w-full h-72'>
                        <Image
                            src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1729846030/lodges/matemwe-retreat/51_pqhgjk.jpg"
                            alt=""
                            layout='fill'
                            objectFit='cover'
                            className="w-full object-cover h-full object-center"
                        />
                    </div>
                </div>
                <br /><br />

                <div className="w-full px-4 my-6">
                    <h3
                        className="text-4xl text-primary mb-3"
                    >
                        Our Safari Itenaries
                    </h3>
                    <p>
                        Explore some of sample itineraries and see where an
                        adventure with Tazama Africa can take you.
                    </p>
                </div>
                <section className="flex flex-col items-center justify-center">
                    <SafariCarousel />
                </section>

                <br /><br />
            </section>
            
            <CallToAction />
        </>
    )
}

export default Page