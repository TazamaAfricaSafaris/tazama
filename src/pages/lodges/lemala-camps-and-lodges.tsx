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
        'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720091951/lodges/lemala-camps/gallery/4_x7mwa2.jpg',
        'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720091944/lodges/lemala-camps/gallery/2_s4qwbu.jpg',
        'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720091944/lodges/lemala-camps/gallery/1_fu05nq.jpg',
        'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720091943/lodges/lemala-camps/gallery/7_zkjncu.jpg',
        'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720091943/lodges/lemala-camps/gallery/3_dcv8rd.jpg',
        'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720091942/lodges/lemala-camps/gallery/6_v1kbun.jpg',
        'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720091941/lodges/lemala-camps/gallery/8_he5z7b.jpg',
        'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720091941/lodges/lemala-camps/gallery/9_rwj7tq.jpg',

    ]

    const activities = [
        {
            title: "Game Drives",
            description: "Explore the Serengeti on guided game drives, where you can witness the Big Five and other fascinating wildlife in their natural habitat."
        },
        {
            title: "Bush Walks",
            description: "Experience the smaller details of the Serengeti ecosystem on foot, led by knowledgeable guides."
        },
        {
            title: "Bird Watching",
            description: "Discover a diverse array of bird species that call the Serengeti home."
        },
        {
            title: "Cultural Visits",
            description: "Engage with the local Maasai communities and learn about their traditions and way of life."
        }
    ]

    return (
        <>
            <HeadSEO 
                title='Lemala Camps and Lodges | Tazama Africa Safari' 
                keywords={`${base_keywords}, Lemala safari camps, luxury tented camps Tanzania, Serengeti accommodation, Ngorongoro luxury lodges, wildlife viewing camps, boutique safari accommodation, migration camps Tanzania, eco-friendly safari lodges, exclusive Tanzania camps, authentic safari experience`}
                description="Experience the wilderness in style with Lemala Camps and Lodges. These intimate, luxury tented camps and lodges offer exceptional wildlife viewing, gourmet dining, and authentic safari experiences in Tanzania's most spectacular locations."
            />
            <PrimaryHeader title="Lemala Camps and Lodge" image='lodges/lemala-camps/lemala-nanyukie-bonfire.jpg' />

            <div className='my-20 max-w-5xl mx-auto md:px-8 px-4'>
                <section>
                    <h3 className="text-5xl text-center mb-4 text-primary">Lemala Camps & Lodges (Nanyukie)</h3>
                    <p>
                        Nestled in the heart of the Serengeti, Lemala Nanyukie offers an unparalleled safari experience. This luxurious tented camp is situated in a secluded area, providing guests with a sense of intimacy and exclusivity amidst the vast savannah plains. The camp features spacious tents, each elegantly designed with contemporary furnishings and equipped with all modern amenities to ensure a comfortable stay.
                    </p>
                    <br /><br />
                    <h4 className='text-4xl mb-3 text-primary'>Accommodation</h4>
                    <p>
                        The tents at Lemala Nanyukie are thoughtfully positioned to maximize privacy and stunning views of the Serengeti. Each tent includes a king-sized bed, en-suite bathroom with hot shower, and a private deck where guests can unwind while observing the wildlife. The interior decor blends rustic charm with modern luxury, creating a cozy yet sophisticated ambiance.
                    </p>
                    <br /><br />
                    <h4 className='text-4xl mb-3 text-primary'>Dining</h4>
                    <p>
                        Guests at Lemala Nanyukie can savor delectable meals prepared by skilled chefs using fresh, locally sourced ingredients. The dining experience is enhanced by the breathtaking surroundings, whether you're enjoying a bush breakfast, a picnic lunch, or a candlelit dinner under the stars. The camp also offers a well-stocked bar where you can relax with a refreshing drink after a day of adventure.
                    </p>
                    <br /><br />
                    <h4 className='text-4xl mb-3 text-primary'>Activities</h4>
                    <p>
                        Lemala Nanyukie is well placed to offer classic safari activities including game drives, walking safaris and so on.
                    </p>
                    <br />
                    <ul className='list-disc pl-4 mb-4'>
                        {activities.map((activity, index) => (
                            <li className="ml-4" key={index}>
                                <p><span>{activity.title}</span>: {activity.description}</p>
                            </li>
                        ))}
                    </ul>
                </section>
                <br />
                <section>
                    <p>
                        Whether you're seeking a thrilling safari adventure or a tranquil retreat in nature, Lemala Nanyukie promises an unforgettable experience. With its luxurious accommodations, exceptional dining, and a wide range of activities, this camp offers the perfect blend of comfort and wilderness. Book your stay at Lemala Nanyukie and embark on a journey into the heart of the Serengeti.
                    </p>
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
                    <h4 className='text-4xl mb-3 text-primary'>Gallery</h4>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {
                            imageIds.map(img => (
                                <div key={img} className="w-full h-60">
                                    <Image width={320} height={320} src={`${img}`} alt={`Lemala Image ${img}`} className='w-full h-full object-cover' loading='lazy' />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <CallToAction />
        </>
    )
}

export default Page;