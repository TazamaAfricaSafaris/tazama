import React from 'react'

import HeadSEO from '~/components/ui/Head'
import { base_keywords } from '~/lib/constants'

import Image from 'next/image'
import Link from 'next/link'

import { MasonryGallery } from "../gallery"
import useFetchImages from "~/hooks/useFetchImages"
import { type ImageProps } from "~/lib/generateBlurPlaceHolder"

const activities = [
    {
        title: "Game Drives",
        description: "Guided game drives at Jabali Ridge are offered twice daily in six-seater, open-sided vehicles with canvas roofs and roll-down sides in case of rain. Each vehicle has power points for recharging devices and a fridge to keep drinks frosty, with the option to book a private vehicle in advance. Enjoy a breakfast picnic under a baobab tree on morning drives, or a sunset gin & tonic in the bush on evening drives."
    },
    {
        title: "Walking Safaris",
        description: "Experience the bush up close on a walking safari from Jabali Ridge, accompanied by an experienced guide and a local tracker. Walking safaris offer an intimate look at the wildlife, awakening your senses to the sights, sounds, and scents of the African wilderness."
    },
    {
        title: "Night Game Drives",
        description: "Discover the secrets of the bush after dark with a night game drive from Jabali Ridge. As the sun sets, witness the elusive nocturnal animals come to life, offering a unique perspective on the bush's hidden wonders."
    },
    {
        title: "Photographic Vehicle",
        description: "For avid photographers, join a photographic safari in our specially designed vehicles with drop-down sides for eye-level shots. Equipped with beanbags, foam camera rests, power points, fridges, and 360º swivel seats, this experience is tailored to capture the perfect wildlife shots. (Additional cost applies.)"
    }
];


const Page = ({ images }: { images: ImageProps[] }) => {
    return (
        <>
            <HeadSEO title="Tazama Africa Safari | Roho Ya Selous" keywords={base_keywords} />
            <div className="relative h-screen">
                <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-start justify-center bg-black/60 text-white overflow-hidden">
                    <Image
                        alt="tazama gallery photos"
                        className="absolute left-0 right-0 top-0 -z-50 h-screen w-screen object-cover opacity-80"
                        src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730364344/lodges/jabali_ridge/Jabali_Ridge_Infinity_Pool_uryvob.jpg"
                        layout="fill"
                    />

                    <div className="container">
                        <h1 className="font-base absolute left-1/2 top-1/2 mx-auto w-full -translate-x-1/2 -translate-y-1/2 px-2 text-center text-6xl sm:px-12 lg:w-2/3 xl:text-7xl">
                            Jabali Ridge
                        </h1>
                    </div>
                </div>
            </div>

            <div className="mb-20 mt-28 max-w-5xl mx-auto md:px-8 px-4">
                <section>
                    <h3 className="text-5xl text-center mb-4 text-primary">Jabali Ridge</h3>
                    <p>
                        <Link href="https://wetu.com/iBrochure/en/Launch/90778/jabali_ridge/Landing" className="text-primary">Jabali Ridge</Link> offers eight expansive and romantic suites surrounded by ancient giant granite boulders. The setting provides stunning views across a sprawling baobab forest and the grasslands beyond. Each suite features king-sized beds with breathtaking vistas from your living area, en suite bathroom, and private veranda with a sunken lounge outdoor seating area. Between safari adventures, soak up the view from your hammock, relax in the infinity pool, or rejuvenate tired muscles in the spa.
                    </p>
                    <br />
                    <p>
                        Situated close to the seasonal Mwagusi River, the lodge is strategically positioned in the core game viewing area of the park, where large herds of elephant and buffalo are frequently watched by resident prides of lion. The area is also home to leopard, cheetah, wild dog, a variety of antelope, giraffe, and over 550 species of birds.
                    </p>

                    <div className="flex items-center justify-center gap-4 mt-8 max-sm:flex-wrap">
                        <div className="relative w-full h-72">
                            <Image
                                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730364256/lodges/jabali_ridge/Jabali_Ridge_Room_Deck_ugttgt.jpg"
                                alt=""
                                layout="fill"
                                objectFit="cover"
                                className="w-full object-cover h-full"
                            />
                        </div>
                        <div className="relative w-full h-72">
                            <Image
                                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730363956/lodges/jabali_ridge/sunset_from_room_jabali_iifyty.jpg"
                                alt=""
                                layout="fill"
                                objectFit="cover"
                                className="w-full object-cover h-full"
                            />
                        </div>
                    </div>
                    <br /><br />
                    <h4 className="text-4xl text-primary mb-3">Activities</h4>
                    <ul className='list-disc pl-4 mb-4'>
                        {activities.map((activity, index) => (
                            <li className="ml-4 mt-2" key={index}>
                                <p><span className='font-semibold'>{activity.title}</span>: {activity.description}</p>
                            </li>
                        ))}
                    </ul>
                </section>
                <br />
                <section>
                    <h4 className="text-4xl text-primary mb-3">Gallery</h4>
                    <MasonryGallery images={images} />
                </section>
            </div>
        </>
    )
}

export default Page

export async function getStaticProps() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const images = await useFetchImages({ folderName: "lodges/jabali_ridge/gallery" });
    return {
        props: {
            images,
        },
    };
}