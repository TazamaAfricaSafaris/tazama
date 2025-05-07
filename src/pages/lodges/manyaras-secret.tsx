/* eslint-disable react/no-unescaped-entities */
import React from "react"
import HeadSEO from "~/components/ui/Head"
import { base_keywords } from "~/lib/constants"

import Image from "next/image"
import Link from "next/link"
import { MasonryGallery } from "../gallery"
import useFetchImages from "~/hooks/useFetchImages"
import { type ImageProps } from "~/lib/generateBlurPlaceHolder"
import SafariCarousel from "~/components/safari-carousel"
import CallToAction from "~/components/CallToAction"

const Page = ({ images }: { images: ImageProps[] }) => {
    return (
        <>
            <HeadSEO 
                title="Manyara's Secret | Tazama Africa Safari" 
                keywords={`${base_keywords}, Manyara's Secret lodge, Lake Manyara accommodation, boutique safari lodge, tree house accommodation Tanzania, birdwatching lodge Tanzania, eco-friendly safari stay, luxury tree lodge, forest safari experience, unique safari accommodation, Lake Manyara National Park`}
                description="Discover Manyara's Secret, a unique tree house-style lodge offering an intimate safari experience near Lake Manyara National Park. Enjoy exceptional birdwatching, wildlife viewing, and a magical forest setting in this hidden gem."
            />

            <div className="relative h-screen">
                <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-start justify-center bg-black/60 text-white overflow-hidden">
                    <Image
                        alt="tazama gallery photos"
                        className="absolute left-0 right-0 top-0 -z-50 h-screen w-screen object-cover opacity-80"
                        src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730194330/lodges/manyaras-secret/1-1024x640_vorz3h.jpg"
                        layout="fill"
                    />

                    <div className="container">
                        <h1 className="font-base absolute left-1/2 top-1/2 mx-auto w-full -translate-x-1/2 -translate-y-1/2 px-2 text-center text-6xl sm:px-12 lg:w-2/3 xl:text-7xl">
                            Manyara's Secret
                        </h1>
                    </div>
                </div>
            </div>

            <div className="mb-20 mt-28 max-w-5xl mx-auto md:px-8 px-4">
                <section>
                    <h3 className="text-5xl text-center mb-4 text-primary">Breathtaking luxury at Lake Manyara</h3>
                    <p>
                        <Link href="https://manyarassecret.com" className="text-primary">Manyara's Secret</Link> is a spectacular and impressive lodge, not overly large, but exclusive and with personal attention and exquisite service. The owners are Dutch, they fell in love with Africa and have travelled extensively across this beautiful continent.
                    </p>
                    <br />
                    <p>
                        The boutique lodge was designed and built from their memories and experiences as they traveled throughout Africa, tagged on, was the influence of the local people and the environment. The moment you arrive you’ll clearly see this, and you’ll feel right at home.
                    </p>

                    <div className="flex items-center justify-center gap-4 mt-8">
                        <div className="relative w-full h-72">
                            <Image
                                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730195121/lodges/manyaras-secret/ManyarasSecret_2020_3235_sqd6o8.jpg"
                                alt=""
                                layout="fill"
                                objectFit="cover"
                                className="w-full object-cover h-full"
                            />
                        </div>
                        <div className="relative w-full h-72">
                            <Image
                                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730195120/lodges/manyaras-secret/ManyarasSecret_2020_1240_fb8tiv.jpg"
                                alt=""
                                layout="fill"
                                objectFit="cover"
                                className="w-full object-cover h-full"
                            />
                        </div>
                    </div>
                    <br /><br />
                    <p>
                        For couples who value their privacy, there are villas available with private plunge pools and for families we have villas where everyone can be together. You can almost smell the adventure; it’s tangible in the air.
                    </p>
                    <br />
                    <p>
                        The lodge overlooks Lake Manyara’s National Park, a mere 15 minutes by car, and Tarangire National Park is an hour drive away.
                    </p>
                    <br />
                    <p>
                        There are endless captivating possibilities from high adventure to total relaxation. At all times our team is ready and waiting to enhance your stay with excellent and unrivaled service.
                    </p>
                </section>
                <br />

                <section>
                    <h4 className="text-4xl text-primary mb-3">Accomodation</h4>
                    <p>
                        the Manyara Secret's villas include:
                    </p>
                    <ul className='list-disc pl-4 mb-4'>
                        <li className="ml-4">Two, four, six and eight person villas</li>
                        <li className="ml-4">Each villa has its own plunge or infinity pool</li>
                        <li className="ml-4">Every villa has an outdoor shower</li>
                        <li className="ml-4">You have your own personal host</li>
                        <li className="ml-4">All hotspots in Tanzania are accessible</li>
                        <li className="ml-4">Great atmosphere, ultimate comfort</li>
                        <li className="ml-4">Ecologically and socially responsible</li>
                    </ul>
                </section>

                <br />

                <section>
                    <h4 className="text-4xl text-primary mb-3">Dining</h4>
                    <p>
                        Manyara’s Secret is dedicated to catering to guests’ tastes and preferences. Whether it"s a wrap or ice cream, the team at Manyara’s Secret is happy to accommodate. Guests can enjoy a long lunch and a light salad for dinner—or the other way around—while the chef brings delightful surprises with each meal. Dining on a private terrace is always an option, and vegetarian preferences are warmly respected, with varied and flavorful dishes prepared to suit every choice.
                    </p>
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <div className="relative w-full h-72">
                            <Image
                                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730196582/lodges/manyaras-secret/keuken-1536x865_xjyp6n.jpg"
                                alt=""
                                layout="fill"
                                objectFit="cover"
                                className="w-full object-cover h-full"
                            />
                        </div>
                        <div className="relative w-full h-72">
                            <Image
                                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730196680/lodges/manyaras-secret/foto-gerecht-1536x1451_aolmbk.jpg"
                                alt=""
                                layout="fill"
                                objectFit="cover"
                                className="w-full object-cover h-full"
                            />
                        </div>
                    </div>
                    <br /><br />
                    <p>
                        At Manyara’s Secret, the focus is on allowing guests to fully embrace their holiday, shaping each experience to match their desires. However, they kindly request that guests communicate their wishes to help prevent waste, supporting the local environment they are committed to preserving.
                    </p>
                    <br />
                    <p>
                        Manyara’s Secret aims to create unforgettable memories, ensuring that each guest returns home with stories and experiences they’ll treasure.
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
                <section className="mt-16">
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
    const images = await useFetchImages({ folderName: "lodges/manyaras-secret/gallery" });
    return {
        props: {
            images,
        },
    };
}