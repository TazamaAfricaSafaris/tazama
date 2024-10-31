/* eslint-disable react/no-unescaped-entities */
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
        title: "Game Drive",
        description: `Guests journey into the heart of Africa’s untouched and remote wilderness areas offering intimate connections with nature and encounters with the continent’s magnificent wildlife. Each tailor-made exploration with a Field Guide allows guests to spend unfiltered time in open spaces. Early morning drives capture the warmth of the African sun lighting up the treetops and grasslands, creating a sense of excitement and serenity as the bush awakens. Evening drives end with sundowner stops in exclusive settings, encapsulating the romance of the safari with breathtaking sunsets, cool breezes, and star-filled skies on the journey back to the lodge.`
    },
    {
        title: "Warmth & Wisdom",
        description: "Singita’s expert Field Guides and Trackers share a wealth of knowledge, intuitively responding to each guest's interests. Their deep understanding of the local ecosystem—from plants and insects to birds, mammals, and predators—makes every encounter meaningful, fostering a deeper connection with nature."
    },
    {
        title: "Key Species to Spot",
        description: "During a stay at Singita, guests may encounter a diverse array of wildlife, including cheetahs, bearded wildebeests, bat-eared foxes, Maasai giraffes, lions, elephants, buffalo, leopards, and the rare Colobus monkey."
    },
    {
        title: "Wildebeest Migration",
        description: "The wildebeest migration is an endless journey for food and water, with around 400,000 calves born between late January and mid-March. Migration paths vary based on environmental conditions, generally moving from the wet plains in the Serengeti’s south and east from November to March, through the central and western regions, and finally to the dry northern areas near the Mara River from May through October."
    },
    {
        title: "Community Tour",
        description: "At Singita Grumeti, guests can visit the Environmental Education Centre to meet students and learn about programs aimed at educating local youth on the Serengeti Ecosystem. The Centre promotes an understanding of protected areas and addresses environmental issues on local and global levels."
    },
    {
        title: "Boutique and Gallery",
        description: "Singita’s Boutique and Gallery offer unique treasures sourced from across Africa, including collectable sculptures, authentic carvings, and locally crafted jewelry. Guests can take home fine art prints, safari-inspired homeware, and specially designed pieces. With a worldwide shipping service, items can be conveniently sent directly to guests' homes."
    },
    {
        title: "Premier Wine Boutique",
        description: "Singita’s cellars hold an impressive selection of sought-after private reserves and vintage wines. Whether a connoisseur or casual enthusiast, guests can explore varietals with guidance from expert sommeliers. Through Singita Premier Wine Direct, wines can be purchased for immediate take-home or delivered to guests’ doors, including exclusive wines like ‘Icons,’ ‘Single Vineyard,’ and ‘Limited Release’ collections."
    },
    {
        title: "Wellness",
        description: "Set in the African wilderness, Singita offers a sanctuary for relaxation and rejuvenation. Massage treatments incorporate indigenous wisdom and essential oils, designed to replenish and revive. Every treatment is customized to ensure a personalized experience, reflecting the peace and vibrant energy of the surroundings."
    },
    {
        title: "Fitness Centre",
        description: "Fully equipped fitness centers with picturesque bush views are available for guests, allowing them to stay active while enjoying the natural beauty around them."
    }
];



const Page = ({ images }: { images: ImageProps[] }) => {
    return (
        <>
            <HeadSEO title="Tazama Africa Safari | Faru Faru" keywords={base_keywords} />
            <div className="relative h-screen">
                <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-start justify-center bg-black/60 text-white overflow-hidden">
                    <Image
                        alt="tazama gallery photos"
                        className="absolute left-0 right-0 top-0 -z-50 h-screen w-screen object-cover opacity-80"
                        src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730366312/lodges/farufaru/Singita_Faru_Faru_Lodge_Food_fgggml.jpg"
                        layout="fill"
                    />

                    <div className="container">
                        <h1 className="font-base absolute left-1/2 top-1/2 mx-auto w-full -translate-x-1/2 -translate-y-1/2 px-2 text-center text-6xl sm:px-12 lg:w-2/3 xl:text-7xl">
                            Faru Faru Lodge
                        </h1>
                    </div>
                </div>
            </div>

            <div className="mb-20 mt-28 max-w-5xl mx-auto md:px-8 px-4">
                <section>
                    <h3 className="text-5xl text-center mb-4 text-primary">Faru Faru Lodge</h3>
                    <p>
                        Situated in the western corridor of the legendary Serengeti, Singita Faru Faru Lodge overlooks a natural waterhole and the tree line of the Grumeti River. The nine stone, canvas and thatched suites (including a family suite and a 2-bedroom villa) have the air of a classic safari camp, yet the interiors offer the ultimate in contemporary chic with panoramic glass windows, mirrored room dividers and claw-foot baths.
                    </p>
                    <br />
                    <p>
                        Due to the natural watering hole on-site, guests needn’t ever leave, as here, the safari comes to you. The surrounding grassland is so awash with wildlife that guests can lounge in the swimming pool overlooking the waterhole, recline in the Lodge's elevated viewing decks, or unwind in the comfort of your luxurious room and watch as predators and prey are drawn right up to the lodge.
                    </p>

                    <div className="flex items-center justify-center gap-4 mt-8 max-sm:flex-wrap">
                        <div className="relative w-full h-72">
                            <Image
                                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730366163/lodges/farufaru/Singita_Faru_Faru_Lodge_Deck_jmfqv6.jpg"
                                alt=""
                                layout="fill"
                                objectFit="cover"
                                className="w-full object-cover h-full"
                            />
                        </div>
                        <div className="relative w-full h-72">
                            <Image
                                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730366360/lodges/farufaru/Singita_Faru_Faru_Lodge_Interactive_Kitchen_oj5tgu.jpg"
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
    const images = await useFetchImages({ folderName: "lodges/farufaru/gallery" });
    return {
        props: {
            images,
        },
    };
}