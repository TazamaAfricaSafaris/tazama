/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import PrimaryHeader from '~/components/PrimaryHeader'
import HeadSEO from '~/components/ui/Head'
import { base_keywords } from '~/lib/constants'

const Page = () => {

    const imageIds = [
        'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720099589/lodges/upendo-beach-zanzibar/7_pngrlc.jpg',
        'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720099589/lodges/upendo-beach-zanzibar/6_dx1r30.jpg',
        'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720099588/lodges/upendo-beach-zanzibar/4_ukld0f.jpg',
        'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720099587/lodges/upendo-beach-zanzibar/3_xc1894.jpg',
        'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720099587/lodges/upendo-beach-zanzibar/2_g7wf7o.jpg',
        'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720099587/lodges/upendo-beach-zanzibar/5_nkqja5.jpg',
        'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720099586/lodges/upendo-beach-zanzibar/1_l0ygea.jpg',
    ]

    const activities = [
        {
            title: "Water Activities",
            description: "Enjoy snorkeling, paddleboarding, and other water sports. Explore the vibrant marine life and coral reefs just off the beach."
        },
        {
            title: "Yoga and Wellness",
            description: "Participate in yoga sessions and wellness programs designed to rejuvenate your body and mind. Classes are held in beautiful beachfront settings."
        },
        {
            title: "Local Excursions",
            description: "Explore the island's attractions with guided tours and excursions. Visit historic Stone Town, spice plantations, and Jozani Forest."
        },
        {
            title: "Fishing Trips",
            description: "Experience deep-sea fishing adventures in the Indian Ocean, with opportunities to catch a variety of fish."
        },
        {
            title: "Fishing Trips",
            description: "Experience deep-sea fishing adventures in the Indian Ocean, with opportunities to catch a variety of fish."
        },
        {
            title: "Sunset Dhow Cruises",
            description: "Sail along the coast on a traditional dhow boat and enjoy stunning sunsets and refreshing cocktails."
        },
        {
            title: "Cooking Classes",
            description: "Learn to prepare traditional Zanzibari dishes with local chefs and take home new culinary skills."
        },
    ]

    return (
        <>
            <HeadSEO title='Tazama Africa Safari | Upendo Beach Resort' keywords={base_keywords} />
            <PrimaryHeader title="Upendo Beach Resort" image='lodges/upendo-beach-resort/upendo-beach-resort-header.jpg' />
            <div className='my-20 max-w-5xl mx-auto md:px-8 px-4'>
                <section>
                    <h3 className="text-5xl text-primary text-center mb-4">Upendo Beach Resort</h3>
                    <p>
                        Discover the perfect blend of luxury and tranquility at Upendo Beach Zanzibar. Located on the idyllic shores of Zanzibar, this boutique beach resort offers a serene escape with stunning ocean views and personalized service.
                    </p>
                    <br /><br />
                    <h4 className='text-4xl mb-3 text-primary'>Accommodation</h4>
                    <p>
                        The stylish and comfortable rooms at Upendo Beach Zanzibar are designed to provide a relaxing retreat. Each room features modern amenities, private terraces, and direct access to the beach.
                    </p>
                    <br /><br />
                    <h4 className='text-4xl mb-3 text-primary'>Dining</h4>
                    <p>
                        Savor delicious cuisine at Upendo Beach Zanzibar's restaurant, where you can enjoy a variety of international and local dishes made with fresh, seasonal ingredients. The resort also offers beachside dining experiences.
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
                <div>
                    <h4 className='text-4xl mb-3 text-primary'>Gallery</h4>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {
                            imageIds.map(img => (
                                <div key={img} className="w-full h-60">
                                    <Image width={280} height={280} src={`${img}`} alt={`Tulia Beach Resort ${img}`} className='w-full h-full object-cover' />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <br />
            </div>
        </>
    )
}

export default Page