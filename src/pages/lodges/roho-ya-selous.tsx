import React from 'react'

import HeadSEO from '~/components/ui/Head'
import { base_keywords } from '~/lib/constants'

import Image from 'next/image'
import Link from 'next/link'

import { MasonryGallery } from "../gallery"
import useFetchImages from "~/hooks/useFetchImages"
import { type ImageProps } from "~/lib/generateBlurPlaceHolder"
import SafariCarousel from '~/components/safari-carousel'
import CallToAction from '~/components/CallToAction'

const activities = [
    {
        title: "Game Drives",
        description: "From verdant swamps and palm-fringed rivers to miombo woodlands and open plains, Nyerere National Park offers stunning landscapes for game drives. Guests can explore the park early in the morning or in the afternoon, spotting wildlife before returning for dinner. Roho ya Selous vehicles are open-sided for uninterrupted views and come equipped with shade roofs, charging points, and cooler boxes to keep sundowner drinks perfectly chilled."
    },
    {
        title: "Walking Safaris",
        description: "Lace up your walking boots and discover the bush on foot, guided by an expert who will bring the environment to life. Walking safaris awaken all the senses, allowing guests to feel, smell, and hear the bush, not just see it. Please note that walking safaris are only available to individuals aged 16 and over."
    },
    {
        title: "Boating Safaris",
        description: "No safari in Nyerere is complete without time spent on the water. Morning and evening boating safaris at Roho ya Selous allow guests to cruise alongside hippos and spot crocodiles sunning on sandbanks. These boat trips also offer excellent birdwatching opportunities, with close-up views of nesting colonies and other aquatic birds."
    },
    {
        title: "Catch and Release Fishing",
        description: "Spend a relaxing afternoon on the water with a catch-and-release fishing experience. Nyerere National Park’s rivers are teeming with a variety of fish, including catfish and the prized tiger fish. Roho ya Selous provides all the equipment needed; simply cast your line, relax, and enjoy the tranquility of the surroundings."
    }
];

const Page = ({ images }: { images: ImageProps[] }) => {
    return (
        <>
            <HeadSEO 
                title="Roho ya Selous | Luxury Safari Camp in Nyerere National Park" 
                keywords={`${base_keywords}, Roho ya Selous, Nyerere National Park, Selous Game Reserve, luxury tented camp, boating safari Tanzania, walking safari Tanzania, fishing safari, waterside safari camp, southern Tanzania safari, exclusive wilderness camp`}
                description="Experience the wild heart of Nyerere National Park at Roho ya Selous, a luxury tented camp offering exceptional game drives, walking safaris, boating adventures, and fishing experiences in Tanzania's largest protected area."
            />
            <div className="relative h-screen">
                <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-start justify-center bg-black/60 text-white overflow-hidden">
                    <Image
                        alt="tazama gallery photos"
                        className="absolute left-0 right-0 top-0 -z-50 h-screen w-screen object-cover opacity-80"
                        src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730286314/lodges/roho_ya_selous/Roho_ya_Selous_Pool_area_h7euqr.jpg"
                        layout="fill"
                    />

                    <div className="container">
                        <h1 className="font-base absolute left-1/2 top-1/2 mx-auto w-full -translate-x-1/2 -translate-y-1/2 px-2 text-center text-6xl sm:px-12 lg:w-2/3 xl:text-7xl">
                            Roho Ya Selous
                        </h1>
                    </div>
                </div>
            </div>

            <div className="mb-20 mt-28 max-w-5xl mx-auto md:px-8 px-4">
                <section>
                    <h3 className="text-5xl text-center mb-4 text-primary">Roho Ya Selous</h3>
                    <p>
                        Set on a small peninsula, <Link href="https://wetu.com/iBrochure/en/Home/107120/roho_ya_selous" className="text-primary">Roho ya Selous</Link> overlooks a key waterway linking Lake Manze to Lake Nzerakera, in the heart of the core game-viewing area of Nyerere National Park. This comfortable and stylish camp offers game drives, walking safaris, boating, and catch-and-release fishing, and is ideally situated for exploring this diverse and beautiful reserve.
                    </p>
                    <br />
                    <p>
                        The stretch canvas tents, complete with en suite bathrooms and both indoor and outdoor showers, offer guests exceptional privacy and comfort. An ‘evening breeze’ cooling system positioned over the bed provides a restful and relaxing sleep, especially during the warmer months. From the canvas-roofed dining and lounge areas, guests can savor tranquil views of wildlife around the lake; slate flooring keeps these spaces cool throughout the day. The swimming pool offers a refreshing escape from the afternoon heat or a rejuvenating cool-down after a walking safari. In the evenings, guests can gather around the fire for sundowner drinks, accompanied by the sounds of nearby hippos.
                    </p>

                    <div className="flex items-center justify-center gap-4 mt-8 max-sm:flex-wrap">
                        <div className="relative w-full h-72">
                            <Image
                                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730282700/lodges/katambuga_house/Katambuga_House_Double_room_mr8upa.jpg"
                                alt=""
                                layout="fill"
                                objectFit="cover"
                                className="w-full object-cover h-full"
                            />
                        </div>
                        <div className="relative w-full h-72">
                            <Image
                                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730290490/lodges/roho_ya_selous/gallery/Roho_ya_Selous_Sunset_barbecue_v2kvcw.jpg"
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
                <section className='mt-16'>
                    <h4 className="text-4xl text-primary mb-3">Gallery</h4>
                    <MasonryGallery images={images} />
                </section>
            </div>

            <CallToAction />
        </>
    )
}

export default Page

export async function getStaticProps() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const images = await useFetchImages({ folderName: "lodges/roho_ya_selous/gallery" });
    return {
        props: {
            images,
        },
    };
}