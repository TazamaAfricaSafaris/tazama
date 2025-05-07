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
        'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720093607/lodges/namiri-camps/gallery/1_rzw2ax.jpg',
        'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720093607/lodges/namiri-camps/gallery/4_ldzaaa.jpg',
        'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720093606/lodges/namiri-camps/gallery/6_s6a282.jpg',
        'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720093606/lodges/namiri-camps/gallery/7_jfaecl.jpg',
        'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720093606/lodges/namiri-camps/gallery/5_vsjtoq.jpg',
        'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720093605/lodges/namiri-camps/gallery/3_v1p3le.jpg'
    ]

    const activities = [
        {
            title: "Game Drives",
            description: "Experience thrilling game drives with expert guides, where you can see the Big Five and other iconic wildlife. Early morning and late afternoon drives offer the best sightings"
        },
        {
            title: "Bush Walks",
            description: "Experience the smaller details of the Serengeti ecosystem on foot, led by knowledgeable guides."
        },
        {
            title: "Bird Watching",
            description: "Spot a variety of bird species in their natural habitat. The camp offers guided bird watching tours."
        },
        {
            title: "Walking Safaris",
            description: "Explore the Serengeti on foot and discover the intricate details of the ecosystem. Walking safaris provide a closer look at the smaller creatures and plants."
        },
        {
            title: "Hot Air Balloon Safaris",
            description: "Take to the skies for a unique perspective of the Serengeti. Enjoy a sunrise hot air balloon ride followed by a champagne breakfast in the bush."
        },
        {
            title: "Bush Dinners",
            description: "Enjoy a special dining experience under the stars, surrounded by the sounds of the wild."
        }
    ]

    return (
        <>
                        <HeadSEO 
                title="Namiri Plains | Tazama Africa Safari" 
                keywords={`${base_keywords}, Namiri Plains camp, Serengeti eastern plains, big cat safari, cheetah viewing Tanzania, exclusive safari camp, remote Serengeti accommodation, luxury tented camp, predator territory lodge, wildlife photography camp, authentic safari experience`}
                description="Experience the untamed wilderness at Namiri Plains, an exclusive camp in the eastern Serengeti known for exceptional big cat sightings. Enjoy luxury tented accommodations, expert guiding, and unrivaled privacy in this remote safari paradise."
            />
            
            <PrimaryHeader title="Namiri Plains Camp" image='lodges/namiri-plains/namiri-plains-header.jpg' />
            <div className='my-20 max-w-5xl mx-auto md:px-8 px-4'>
                <section>
                    <h3 className="text-5xl text-primary text-center mb-4">Namiri Plains Camp</h3>
                    <p>
                        Experience the untamed beauty of the Serengeti at Namiri Plains Camp. This luxurious safari camp offers an exclusive and intimate experience, with exceptional wildlife viewing opportunities and elegant accommodations.
                    </p>
                    <br /><br />
                    <h4 className='text-4xl text-primary mb-3'>Accommodation</h4>
                    <p>
                        Namiri Plains Camp features spacious tents designed for comfort and luxury. Each tent includes an en-suite bathroom, comfortable furnishings, and a private deck with panoramic views of the Serengeti.
                    </p>
                    <br /><br />
                    <h4 className='text-4xl text-primary mb-3'>Dining</h4>
                    <p>
                        Enjoy gourmet meals prepared by skilled chefs, featuring fresh and locally sourced ingredients. Dining at Namiri Plains Camp is a memorable experience, with options for bush breakfasts, picnic lunches, and candlelit dinners.
                    </p>
                    <br /><br />
                    <h4 className='text-4xl text-primary mb-3'>Activities</h4>
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