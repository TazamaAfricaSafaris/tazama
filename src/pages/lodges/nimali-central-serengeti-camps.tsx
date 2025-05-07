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
        'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720096145/lodges/nimali-camps/7_e7pofr.jpg',
        'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720096143/lodges/nimali-camps/6_hskjos.jpg',
        'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720096141/lodges/nimali-camps/4_ai3spz.jpg',
        'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720096139/lodges/nimali-camps/3_fct7pe.jpg',
        'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720096140/lodges/nimali-camps/5_vgczcx.jpg',
        'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720096139/lodges/nimali-camps/1_v9cy1z.jpg',
        'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720096139/lodges/nimali-camps/2_lgkmzt.jpg'
    ]

    const activities = [
        {
            title: "Game Drives",
            description: "Experience thrilling game drives led by expert guides, where you can see the Big Five and other iconic wildlife. Morning, afternoon, and night drives are available."
        },
        {
            title: "Bush Walks",
            description: "Experience the smaller details of the Serengeti ecosystem on foot, led by knowledgeable guides."
        },
        {
            title: "Bird Watching",
            description: "Spot a variety of bird species in their natural habitat. The Serengeti is a birdwatcher's paradise with over 500 species."
        },
        {
            title: "Hot Air Balloon Safaris",
            description: "Take to the skies for a unique perspective of the Serengeti. Enjoy a sunrise hot air balloon ride followed by a champagne breakfast in the bush."
        },
        {
            title: "Photographic Safaris",
            description: "Capture stunning photos of wildlife and landscapes with the guidance of professional photographers."
        },
        {
            title: "Sundowner Experiences",
            description: "Enjoy evening cocktails at scenic spots, watching the sunset over the Serengeti."
        },
    ]

    return (
        <>
            <HeadSEO 
                title="Nimali Central Serengeti | Luxury Safari Camp in Tanzania" 
                keywords={`${base_keywords}, Nimali Central Serengeti, luxury tented camp, Serengeti migration camp, big cat safari, central Serengeti accommodation, wildlife viewing Tanzania, exclusive safari experience, boutique safari camp, Serengeti National Park lodging, eco-friendly safari accommodation`}
                description="Stay at Nimali Central Serengeti, an intimate luxury camp in the heart of Tanzania's most famous national park. Enjoy exceptional wildlife viewing, elegant tented suites, and personalized service in this prime location for witnessing the Great Migration."
            />
            <PrimaryHeader title="Nimali Central Serengeti Camps" image='lodges/nimali-camps/nimali-camp-header.jpg' />
            <div className='my-20 max-w-5xl mx-auto md:px-8 px-4'>
                <section>
                    <h3 className="text-5xl text-center mb-4 text-primary">Nimali Central Serengeti Camps</h3>
                    <p>
                        Immerse yourself in the heart of the Serengeti at Nimali Central Serengeti Camps. This luxurious tented camp offers an authentic safari experience with elegant accommodations and exceptional wildlife viewing opportunities.
                    </p>
                    <br /><br />
                    <h4 className='text-4xl mb-3 text-primary'>Accommodation</h4>
                    <p>
                        Nimali Central Serengeti Camps features spacious tents equipped with all the comforts of home, including en-suite bathrooms, comfortable beds, and private decks with stunning views of the surrounding landscape.
                    </p>
                    <br /><br />
                    <h4 className='text-4xl mb-3 text-primary'>Dining</h4>
                    <p>
                        Guests can enjoy gourmet meals prepared by talented chefs, featuring fresh and locally sourced ingredients. Dining at Nimali Central Serengeti Camps is a delight, with options ranging from bush breakfasts to elegant dinners under the stars.
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