/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import CallToAction from '~/components/CallToAction'
import PrimaryHeader from '~/components/PrimaryHeader'
import SafariCarousel from '~/components/safari-carousel'
import HeadSEO from '~/components/ui/Head'
import { base_keywords } from '~/lib/constants'

const Page = () => {

    const imageIds = [
        'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720097343/lodges/siringit-camps/6_uqqz6r.jpg',
        'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720097341/lodges/siringit-camps/4_ehjn64.jpg',
        'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720097340/lodges/siringit-camps/1_jvlzqc.jpg',
        'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720097340/lodges/siringit-camps/5_ndmlux.jpg',
        'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720097340/lodges/siringit-camps/3_lyuchr.jpg',
        'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720097340/lodges/siringit-camps/2_jophih.jpg',
    ]

    const activities = [
        {
            title: "Game Drives",
            description: "Experience thrilling game drives led by expert guides, where you can see the Big Five and other iconic wildlife. Morning and evening drives provide the best opportunities for wildlife sightings."
        },
        {
            title: "Nature Walks",
            description: "Explore the Serengeti on foot and discover the intricate details of the ecosystem, from flora and fauna to tracking animal footprints."
        },
        {
            title: "Bird Watching",
            description: "Spot a variety of bird species in their natural habitat. The Serengeti is home to over 500 bird species, making it a paradise for bird enthusiasts."
        },
        {
            title: "Hot Air Balloon Safaris",
            description: "Take to the skies for a unique perspective of the Serengeti. Enjoy a sunrise hot air balloon ride followed by a champagne breakfast in the bush."
        }

    ]

    return (
        <>
            <HeadSEO 
                title="Siringit Camps | Luxury Safari Collection in Tanzania" 
                keywords={`${base_keywords}, Siringit Camps Tanzania, luxury safari collection, Serengeti accommodation, Ngorongoro luxury lodge, boutique safari experience, family safari accommodation, migration viewing camps, exclusive Tanzania lodges, sustainable luxury safari, wildlife photography camps`}
                description="Discover Siringit Camps, a collection of luxury safari accommodations across Tanzania's most iconic locations. Experience exceptional service, elegant design, and prime wildlife viewing in these intimate, eco-conscious camps and lodges."
            />
            <PrimaryHeader title="Siringit Camps" image='lodges/siringit-camps/siringit-camps.jpg' />
            <div className='my-20 max-w-5xl mx-auto md:px-8 px-4'>
                <section>
                    <h3 className="text-5xl text-center mb-4 text-primary">Siringit Camps</h3>
                    <p>
                        Experience the wild beauty of the Serengeti at Siringit Camp. This exclusive safari camp offers an intimate and authentic safari experience, with luxurious accommodations and unparalleled wildlife viewing opportunities.
                    </p>
                    <br /><br />
                    <h4 className='text-4xl mb-3 text-primary'>Accommodation</h4>
                    <p>
                        Siringit Camp features spacious tents equipped with all the comforts of home, including en-suite bathrooms, comfortable beds, and private decks with stunning views of the surrounding landscape.
                    </p>
                    <br /><br />
                    <h4 className='text-4xl mb-3 text-primary'>Dining</h4>
                    <p>
                        Guests can enjoy gourmet meals prepared by talented chefs, featuring fresh and locally sourced ingredients. Dining at Siringit Camp is a delight, with options ranging from bush breakfasts to elegant dinners under the stars.
                    </p>
                    <br /><br />
                    <h4 className='text-4xl mb-3 text-primary'>Activities</h4>
                    <br />
                    <ul className='list-disc pl-4 mb-4'>
                        {activities.map((activity, index) => (
                            <li className="ml-4" key={index}>
                                <p><span>{activity.title}</span>: {activity.description}</p>
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
                <div className='mt-16'>
                    <h4 className='text-4xl text-primary mb-3'>Gallery</h4>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {
                            imageIds.map(img => (
                                <div key={img} className="w-full h-60">
                                    <Image width={280} height={280} src={`${img}`} className='w-full h-full object-cover' alt='Namiri Plains Image' />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <br />
            </div>

            <CallToAction />
        </>
    )
}

export default Page