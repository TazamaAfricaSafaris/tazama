/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import PrimaryHeader from '~/components/PrimaryHeader'
import SafariCarousel from '~/components/safari-carousel'
import HeadSEO from '~/components/ui/Head'
import { base_keywords } from '~/lib/constants'

import { MasonryGallery } from "../gallery"
import useFetchImages from "~/hooks/useFetchImages"
import { type ImageProps } from "~/lib/generateBlurPlaceHolder"

import CallToAction from '~/components/CallToAction'

const Page = ({ images }: { images: ImageProps[] }) => {

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
            <HeadSEO
                title="Zuri Zanzibar | Tazama Africa Safari"
                keywords={`${base_keywords}, Zuri Zanzibar resort, luxury beach accommodation Tanzania, design hotel Zanzibar, sustainable beach resort, private beach villas, wellness retreat Zanzibar, spice garden resort, Indian Ocean luxury stay, honeymoon resort Zanzibar, water sports Tanzania`}
                description="Indulge in luxury at Zuri Zanzibar, an award-winning design hotel offering private beach bungalows, exceptional dining experiences, and a world-class wellness center. Experience the perfect blend of African and contemporary design in this sustainable paradise."
            />
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
                <div className="w-full mx-auto relative overflow-hidden mt-20">
                    <MasonryGallery images={images} />
                </div>
                <br /><br /><br />
            </div>
            <CallToAction />
        </>
    )
}

export default Page

export async function getStaticProps() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const images = await useFetchImages({ folderName: "lodges/zuri" });
    return {
        props: {
            images,
        },
    };
}