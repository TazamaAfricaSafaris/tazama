/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import Image from 'next/image'
import HeadSEO from '~/components/ui/Head'
import { base_keywords } from '~/lib/constants'
import Link from 'next/link'
import useFetchImages from '~/hooks/useFetchImages'
import { MasonryGallery } from '../gallery'
import { type ImageProps } from '~/lib/generateBlurPlaceHolder'
import SafariCarousel from '~/components/safari-carousel'
import CallToAction from '~/components/CallToAction'

const Page = ({ images }: { images: ImageProps[] }) => {
    return (
        <>
            <HeadSEO title="Tazama Africa Safari | Elephant's Spring Camp" keywords={base_keywords} />
            <div className="relative h-screen">
                <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-start justify-center bg-black/60 text-white overflow-hidden">
                    <Image
                        alt="tazama gallery photos"
                        className="absolute left-0 right-0 top-0 -z-50 h-screen w-screen object-cover opacity-80"
                        src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730199754/lodges/elephant-springs/ES_Dining_2-scaled_w65ijr.jpg"
                        layout="fill"
                    />

                    <div className="container">
                        <h1 className="font-base absolute left-1/2 top-1/2 mx-auto w-full -translate-x-1/2 -translate-y-1/2 px-2 text-center text-6xl sm:px-12 lg:w-2/3 xl:text-7xl">
                            Elephant Spring Camps
                        </h1>
                    </div>
                </div>
            </div>

            <div className="mb-20 mt-28 max-w-5xl mx-auto md:px-8 px-4">
                <section>
                    <h3 className="text-5xl text-center mb-4 text-primary">A Virtual Safari to the Wild</h3>
                    <p>
                        Discover the serenity of <Link href="https://www.tripadvisor.com/Hotel_Review-g297913-d27745946-Reviews-Tarangire_Elephant_Springs-Arusha_Arusha_Region.html" className="text-primary">Tarangire Elephant Springs</Link>, the retreat in the heart of Tarangire National Park. Surrounded by the captivating landscapes of the African wilderness, their accommodations offer a peaceful escape amidst nature's splendor. Immerse yourself in the natural beauty of the park, where the iconic baobab trees stand tall and the gentle giants of the savannah, the elephants, roam freely.
                    </p>
                    <br />
                    <p>
                        Experience the authentic essence of safari life as you embark on unforgettable wildlife encounters. At Tarangire Elephant Springs, find solace in nature's embrace and create timeless memories of your African adventure.
                    </p>

                    <div className="flex items-center justify-center gap-4 mt-8">
                        <div className="relative w-full h-72">
                            <Image
                                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730199601/lodges/elephant-springs/ES_Swimming_Pool_3-scaled_yvhbjg.jpg"
                                alt=""
                                layout="fill"
                                objectFit="cover"
                                className="w-full object-cover h-full"
                            />
                        </div>
                        <div className="relative w-full h-72">
                            <Image
                                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730201209/lodges/elephant-springs/ES_Double_5-scaled_uedcxh.jpg"
                                alt=""
                                layout="fill"
                                objectFit="cover"
                                className="w-full object-cover h-full"
                            />
                        </div>
                    </div>
                </section>

                <br /><br />

                <section>
                    <h4 className="text-4xl text-primary mb-3">Dining Areas</h4>
                    <p>
                        The dining areas offer a variety of meals, featuring both international and African-inspired cuisine to satisfy every guest's preference. Options include a barbecue breakfast, picnic lunch, and dinner. Guests can enjoy meals in their preferred location, served by a team of well-trained, friendly, and organized staff. Bush dinners are available under the stars, and bush breakfasts provide a scenic experience as the sun rises.
                    </p>
                    <br /><br />
                    <h4 className="text-4xl text-primary mb-3">Well-Stocked Bar and Lounge</h4>
                    <p>
                        The well-stocked bar and lounge offers a wide selection of drinks, including local cocktails, wines, spirits, and international beers. Guests can relax with a cocktail or mocktail while taking in the breathtaking views of the park and the surrounding area.
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

                <h4 className="text-4xl text-primary mb-3 mt-16">Gallery</h4>
                <MasonryGallery images={images} />

            </div>
            <CallToAction />
        </>
    )
}

export default Page

export async function getStaticProps() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const images = await useFetchImages({ folderName: "lodges/elephant-springs/gallery" });
    return {
        props: {
            images,
        },
    };
}