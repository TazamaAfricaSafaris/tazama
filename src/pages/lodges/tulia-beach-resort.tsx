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
        'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720098485/lodges/tulia-beach-resort/gallery/5_wnx4hd.jpg',
        'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720098483/lodges/tulia-beach-resort/gallery/7_z4siuz.jpg',
        'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720098481/lodges/tulia-beach-resort/gallery/8_qxlu2g.jpg',
        'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720098480/lodges/tulia-beach-resort/gallery/6_y3gsot.jpg',
        'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720098479/lodges/tulia-beach-resort/gallery/4_cknhue.jpg',
        'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720098478/lodges/tulia-beach-resort/gallery/3_i1rqdt.jpg',
        'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720098478/lodges/tulia-beach-resort/gallery/2_e3xgeb.jpg',
        'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720098478/lodges/tulia-beach-resort/gallery/1_l77pft.jpg'
    ]

    const activities = [
        {
            title: "Water Sports",
            description: "Enjoy a range of water activities including snorkeling, diving, and kayaking. Explore the vibrant coral reefs and marine life just steps from the resort."
        },
        {
            title: "Spa and Wellness",
            description: "Relax and rejuvenate with a variety of spa treatments and wellness programs. Enjoy massages, facials, and holistic therapies in a tranquil setting."
        },
        {
            title: "Cultural Tours",
            description: "Explore the rich culture and history of Zanzibar with guided tours to local attractions such as Stone Town, spice plantations, and Jozani Forest."
        },
        {
            title: "Sunset Cruises",
            description: "Embark on romantic sunset cruises along the coast, complete with refreshments and stunning views."
        },
        {
            title: "Yoga and Meditation",
            description: "Participate in yoga and meditation sessions on the beach, led by experienced instructors."
        },
        {
            title: "Cooking Classes",
            description: "Learn to prepare traditional Zanzibari dishes with local chefs, and take home new culinary skills."
        },
        {
            title: "Fishing Excursions",
            description: "Experience deep-sea fishing adventures in the Indian Ocean, with opportunities to catch a variety of fish."
        }
    ]

    return (
        <>
            <HeadSEO 
                title="Tulia Beach Resort | All-Inclusive Luxury in Zanzibar" 
                keywords={`${base_keywords}, Tulia Beach Resort Zanzibar, all-inclusive beach resort, luxury Zanzibar accommodation, beachfront villas Tanzania, infinity pool resort, water sports Zanzibar, family beach resort, honeymoon destination, fine dining Zanzibar, exclusive beach experience`}
                description="Relax at Tulia Beach Resort, an all-inclusive luxury retreat on Zanzibar's pristine coastline. Enjoy spacious beachfront villas, exceptional cuisine, and a wide range of activities from water sports to cultural excursions in this tropical paradise."
            />
            <PrimaryHeader title="Tulia Beach Resort" image='lodges/tulia-beach-resort/tulia-beach-resort.jpg' />
            <div className='my-20 max-w-5xl mx-auto md:px-8 px-4'>
                <section>
                    <h3 className="text-5xl text-primary text-center mb-4">Tulia Beach Resort</h3>
                    <p>
                        Escape to the serene beauty of Tulia Beach Resort, located on the stunning beaches of Zanzibar. This luxurious resort offers a tranquil and exclusive retreat with world-class amenities and exceptional service.
                    </p>
                    <br /><br />
                    <h4 className='text-4xl mb-3 text-primary'>Accommodation</h4>
                    <p>
                        The rooms and villas at Tulia Beach Resort are designed with elegance and comfort in mind. Each accommodation features modern amenities, private balconies or terraces, and stunning views of the Indian Ocean.
                    </p>
                    <br /><br />
                    <h4 className='text-4xl mb-3 text-primary'>Dining</h4>
                    <p>
                        Indulge in a culinary journey at Tulia Beach Resort's restaurants, where expert chefs prepare a variety of international and local dishes using fresh, local ingredients. The resort offers a dining experience for every palate, from casual beachside snacks to fine dining.
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

            <CallToAction />
        </>
    )
}

export default Page