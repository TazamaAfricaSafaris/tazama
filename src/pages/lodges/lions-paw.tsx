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
        title: "Bush Crater Breakfast or Lunch",
        description: "Experience a unique Crater Hot Breakfast or Lunch on the Ngorongoro Crater floor, surrounded by stunning views and diverse wildlife. This one-of-a-kind meal blends culinary delights with the sights and sounds of the African wilderness, creating an unforgettable dining adventure."
    },
    {
        title: "Maasai Village Visit",
        description: "A Maasai Village visit at Lion's Paw offers an immersive glimpse into the traditional lifestyle of the Maasai people. Guests explore a boma, engage with Maasai hosts, and experience their dances, music, and intricate craftsmanship, gaining a deep appreciation for this rich and enduring culture."
    },
    {
        title: "Walking Safari",
        description: "A walking safari at Lion's Paw provides an intimate exploration of the Ngorongoro Crater's diverse ecosystem, guided by experienced rangers. On foot, guests encounter wildlife up close and discover the finer details of nature, like tracks, insects, and plants, fostering a unique connection to this iconic African landscape."
    },
    {
        title: "Game Viewing",
        description: "Located just 10 minutes from the Ngorongoro Crater, Lion's Paw is perfect for game viewing, offering an excellent chance to see the Big Five. This prime location allows for early morning and late afternoon safaris, maximizing opportunities to witness lions, elephants, buffaloes, leopards, and rhinos in their natural habitat."
    },
    {
        title: "Private Photographer",
        description: "Enhance your safari experience at Ngorongoro Lion's Paw Camp by capturing every unforgettable moment with the assistance of a professional photographer. This service ensures that your memories are beautifully preserved, allowing you to relive your adventures through stunning, high-quality images."
    }
]

const Page = () => {
    return (
        <>
            <HeadSEO
                title="Lion's Paw Camp | Tazama Africa Safari"
                keywords={`${base_keywords}, Lion's Paw Camp Tanzania, Serengeti luxury tented camp, migration viewing accommodation, big cat safari lodge, exclusive safari camp, wildlife photography lodge, eco-friendly safari accommodation, authentic safari experience, Serengeti central accommodation`}
                description="Experience the heart of the Serengeti at Lion's Paw Camp, a luxury tented camp offering exceptional wildlife viewing, personalized service, and authentic safari experiences in one of Africa's most iconic wildlife destinations."
            />

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
                            Lion's Paw
                        </h1>
                    </div>
                </div>
            </div>

            <div className="mb-20 mt-28 max-w-5xl mx-auto md:px-8 px-4">
                <section>
                    <h3 className="text-5xl text-center mb-4 text-primary">The Untamed Beauty of Nature of Lion's Paw</h3>
                    <p>
                        Nestled on the Eastern rim of the Ngorongoro Crater, the luxurious Ngorongoro <Link href="https://wetu.com/iBrochure/en/Home/44123/ngorongoro_lions_paw_camp" className="text-primary">Lion's Paw</Link> presents captivating views of one of the world's most renowned natural wonders. This exquisite property features 19 opulent suites, offering guests a comfortable and stylish sanctuary as they embark on their unforgettable safari adventure.
                    </p>
                    <br />
                    <p>
                        Situated in prime proximity to the crater floor, just a 10-minute journey away, Lion's Paw delivers a truly exclusive experience. Guests are treated to unparalleled early access to the mesmerizing wildlife, while also having the privilege of being the last to bid adieu to the majestic crater each day.
                    </p>
                </section>
                <div className="flex items-center justify-center gap-4 mt-8">
                    <div className="relative w-full h-72">
                        <Image
                            src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730205339/lodges/lions-paw/LP_Lounge_Bar_5-scaled_hcj8ny.webp"
                            alt=""
                            layout="fill"
                            objectFit="cover"
                            className="w-full object-cover h-full"
                        />
                    </div>
                    <div className="relative w-full h-72">
                        <Image
                            src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730204863/lodges/lions-paw/LP_Lounge_Bar_8-1-scaled_tzqfeq.webp"
                            alt=""
                            layout="fill"
                            objectFit="cover"
                            className="w-full object-cover h-full"
                        />
                    </div>
                </div>
                <br /><br />

                <section>
                    <p>
                        With every room, lounge, and dining area boasting awe-inspiring vistas of the crater, Lion's Paw creates a serene atmosphere for guests to indulge in delectable meals or savor enchanting sundowners amidst the vibrant hues of an authentic Safari sunset.
                    </p>
                    <br />
                    <p>
                        Showcasing exceptional service, breathtaking surroundings, sumptuous accommodations, and a wealth of wildlife sightings, Ngorongoro Lion's Paw promises guests an unrivaled and unforgettable African safari experience, set against the enchanting backdrop of the Ngorongoro Crater.
                    </p>

                    <div className="flex items-center justify-center gap-4 mt-8">
                        <div className="relative w-full h-72">
                            <Image
                                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730205233/lodges/lions-paw/LP_Exterior_Public_Areas_17-scaled_1_sdorri.webp"
                                alt=""
                                layout="fill"
                                objectFit="cover"
                                className="w-full object-cover h-full"
                            />
                        </div>
                        <div className="relative w-full h-72">
                            <Image
                                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730205397/lodges/lions-paw/LP_Lounge_Bar_10-min-scaled_o2kfqj.webp"
                                alt=""
                                layout="fill"
                                objectFit="cover"
                                className="w-full object-cover h-full"
                            />
                        </div>
                    </div>
                    <br /><br />

                    <p>
                        Each room comes fully equiped with all the facilities you could expect in a regular lodge, including electricity, hot showers,  Flush toilets, Mosquito netting and more.
                    </p>
                    <br />
                    <p>
                        The Lions paw lodge is a perfect lodge for anyone who’d like to pay a visit to the Ngorongoro Crater, as it’s just a few minutes away from the entrace of the rim.  This does not only make the lodge a nice place to spend the night, but also an excellent logistic choice.
                    </p>

                    <br />
                    <h4 className="text-4xl text-primary mb-3">Activities</h4>
                    <ul className='list-disc pl-4 mb-4'>
                        {activities.map((activity, index) => (
                            <li className="ml-4 mt-2" key={index}>
                                <p><span className='font-semibold'>{activity.title}</span>: {activity.description}</p>
                            </li>
                        ))}
                    </ul>
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

export default Page;