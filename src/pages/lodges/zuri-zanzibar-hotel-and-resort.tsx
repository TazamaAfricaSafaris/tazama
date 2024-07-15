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
            title: "Water Sports",
            description: "Enjoy a range of water activities including snorkeling, diving, and kayaking. Explore vibrant coral reefs and marine life just steps from the resort."
        },
        {
            title: "Spa and Wellness",
            description: "Relax and unwind with a variety of spa treatments and wellness programs. Enjoy massages, facials, and holistic therapies in a tranquil setting."
        },
        {
            title: "Cultural Tours",
            description: "Explore the rich culture and history of Zanzibar with guided tours to local attractions. Visit Stone Town, spice farms, and traditional villages to immerse yourself in the island's heritage."
        }
    ]

    return (
        <>
            <HeadSEO title='Tazama Africa Safari | Zuri Zanzibar Hotel and Resort' keywords={base_keywords} />
            <PrimaryHeader title="Zuri Zanzibar Hotel and Resort" image='lodges/zuri-zanzibar/zuri-zanzibar-header.webp' />
            <div className='my-20 max-w-5xl mx-auto md:px-8 px-4'>
                <section>
                    <h3 className="text-5xl text-primary text-center mb-4">Zuri Zanzibar Hotel and Resort</h3>
                    <p>
                        Escape to the tropical paradise of Zuri Zanzibar Hotel & Resort, located on the pristine beaches of Zanzibar. This luxurious beachfront resort offers stunning ocean views, world-class amenities, and a serene atmosphere perfect for relaxation and rejuvenation.
                    </p>
                    <br /><br />
                    <h4 className='text-4xl text-primary mb-3'>Accommodation</h4>
                    <p>
                        The rooms and suites at Zuri Zanzibar are designed with comfort and elegance in mind. Each accommodation features modern decor, plush bedding, and private balconies or terraces where guests can enjoy breathtaking views of the Indian Ocean.
                    </p>
                    <br /><br />
                    <h4 className='text-4xl text-primary mb-3'>Dining</h4>
                    <p>
                        Indulge in a culinary journey at Zuri Zanzibar's restaurants, where expert chefs prepare a variety of international and local dishes using fresh, local ingredients. From beachside barbecues to fine dining, the resort offers a dining experience for every palate.
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
                <div className="w-full h-[40rem] mx-auto relative overflow-hidden">
                    <iframe src="https://www.zurizanzibar.com/gallery/photos/" loading='lazy' className='w-full h-full absolute left-0 -top-24'></iframe>
                </div>
                <br />
            </div>
        </>
    )
}

export default Page