/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import HeadSEO from '~/components/ui/Head'
import { base_keywords } from '~/lib/constants'

import Image from 'next/image'
import Link from 'next/link'
import SafariCarousel from '~/components/safari-carousel'
import CallToAction from '~/components/CallToAction'

const activities = [
    {
        title: "Open Safari Vehicle Game Drives",
        description: "Open safari vehicle game drives in the Serengeti offer a unique chance to connect deeply with Africa’s iconic landscapes and abundant wildlife. With unobstructed views, the scents, sounds, and gentle breeze provide an immersive experience, enhancing each wildlife sighting, from the \"Big Five\" to countless other species. Guided by experienced experts, these drives adapt to seasonal changes and wildlife movements, creating a captivating journey into the heart of wild Africa."
    },
    {
        title: "Relaxing Poolside at Serengeti Sametu Camp",
        description: "Serengeti Sametu Camp’s serene swimming pool offers a refreshing escape amid the stunning landscapes of the Serengeti. After a day of safari adventures, unwind by the pool, where comfortable loungers and shaded areas invite relaxation with a refreshing drink or a good book. Whether you’re taking a dip or simply enjoying the panoramic views, the pool enhances your connection with the breathtaking savannah."
    },
    {
        title: "Balloon Safari",
        description: "A balloon safari from Serengeti Sametu Camp offers a breathtaking and peaceful view of the Serengeti, as you float silently above the plains with the morning sun. From herds of wildebeest and zebras to elephants and stealthy predators, this vantage point reveals the intricate beauty of the ecosystem below. After landing, a champagne breakfast in the wilderness adds a touch of luxury, making this a truly unforgettable experience."
    },
    {
        title: "Bush Dining, Lunch or Breakfast!",
        description: "At Sametu Camp, bush dining offers an unforgettable culinary experience amidst the vast Serengeti landscape. Guests can enjoy a gourmet breakfast before an early morning game drive or dine under the stars at night, surrounded by the sounds and beauty of the wilderness. The camp’s elegant design enhances comfort, making each meal a unique adventure."
    },
    {
        title: "Sundowner",
        description: "Relax with a refreshing drink as you watch the sun set over the Serengeti, painting the sky with vibrant colors."
    }
]

const Page = () => {
    return (
        <>
            <HeadSEO
                title="Sametu Camp | Authentic Safari Experience in Eastern Serengeti"
                keywords={`${base_keywords}, Sametu Camp Tanzania, eastern Serengeti accommodation, authentic safari camp, migration viewing camp, big cat territory, off-the-beaten-track safari, luxury mobile camp, wildlife photography location, exclusive safari experience, Serengeti National Park`}
                description="Experience the untamed wilderness at Sametu Camp, an authentic safari camp in the eastern Serengeti. Enjoy exceptional big cat sightings, Great Migration views, and an intimate safari experience away from the crowds in this pristine location."
            />

            <div className="relative h-screen">
                <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-start justify-center bg-black/60 text-white">
                    <Image
                        alt="tazama gallery photos"
                        className="absolute left-0 right-0 top-0 -z-50 h-screen w-screen object-cover opacity-80"
                        src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730209662/lodges/sametu-camp/SC_Twin_7_djjpto.jpg"
                        layout="fill"
                    />

                    <div className="container">
                        <h1 className="font-base absolute left-1/2 top-1/2 mx-auto w-full -translate-x-1/2 -translate-y-1/2 px-2 text-center text-6xl sm:px-12 lg:w-2/3 xl:text-7xl">
                            Sametu Camp
                        </h1>
                    </div>
                </div>
            </div>

            <div className="mb-20 mt-28 max-w-5xl mx-auto md:px-8 px-4">
                <section>
                    <h3 className="text-5xl text-center mb-4 text-primary">Discover the Magic of Serengeti with <br />Sametu Camp</h3>
                    <p>
                        The opulent suites of <Link href="https://wetu.com/iBrochure/en/Home/44066/serengeti_sametu_camp" className='text-primary'>Sametu Camp</Link> form a splendid silhouette resembling a bird in flight across the pale-yellow savannah. The renowned panoramic vistas of the Serengeti that Sametu offers will truly astonish you. As you gaze upon these vistas, you'll be captivated by the sight of resident wildebeest, zebra, antelope, and elephants leisurely grazing alongside the suites. These animals revel in the security provided by the lodge, shielded from watchful eyes like those of lions and cheetahs. These predators tend to make appearances only during the early hours before sunrise and in the cover of the nighttime.
                    </p>
                    <br />
                    <p>
                        With open arms, the lodge invites you to experience its collection of 16 luxurious suites, each designed to provide the utmost comfort for family groups. Here, you'll have the opportunity to revel in exhilarating scenes while enjoying a bush meal, sipping wine during sunset, and embarking on balloon safaris.
                    </p>
                </section>
                <div className="flex items-center justify-center gap-4 mt-8">
                    <div className="relative w-full h-72">
                        <Image
                            src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730277295/lodges/sametu-camp/sc_swimming_pool_52_hdfv5y.jpg"
                            alt=""
                            layout="fill"
                            objectFit="cover"
                            className="w-full object-cover h-full"
                        />
                    </div>
                    <div className="relative w-full h-72">
                        <Image
                            src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730277214/lodges/sametu-camp/sc_bush_dining_4_ldtc7w.jpg"
                            alt=""
                            layout="fill"
                            objectFit="cover"
                            className="w-full object-cover h-full"
                        />
                    </div>
                </div>
                <br /><br />
                <section>
                    <h4 className="text-4xl text-primary mb-3">Activities</h4>
                    <ul className='list-disc pl-4 mb-4'>
                        {activities.map((activity, index) => (
                            <li className="ml-4 mt-2" key={index}>
                                <p><span className='font-semibold'>{activity.title}</span>: {activity.description}</p>
                            </li>
                        ))}
                    </ul>
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <div className="relative w-full h-72">
                            <Image
                                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730278597/lodges/sametu-camp/sc_balloon_2_ztktv9.jpg"
                                alt=""
                                layout="fill"
                                objectFit="cover"
                                className="w-full object-cover h-full"
                            />
                        </div>
                        <div className="relative w-full h-72">
                            <Image
                                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730278640/lodges/sametu-camp/sametu_-_family_-_4_c5slpq.jpg"
                                alt=""
                                layout="fill"
                                objectFit="cover"
                                className="w-full object-cover h-full"
                            />
                        </div>
                    </div>
                </section>
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
            </div>

            <CallToAction />
        </>
    )
}

export default Page