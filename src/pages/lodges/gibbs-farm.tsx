/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import HeadSEO from '~/components/ui/Head'
import { base_keywords } from '~/lib/constants'

import Image from 'next/image'
import Link from 'next/link'
import useFetchImages from '~/hooks/useFetchImages'
import { MasonryGallery } from '../gallery'
import { type ImageProps } from '~/lib/generateBlurPlaceHolder'
import SafariCarousel from '~/components/safari-carousel'
import CallToAction from '~/components/CallToAction'

const Page = ({ images }: { images: ImageProps[] }) => {
    return (
        <>
            <HeadSEO 
                title="Gibb's Farm | Tazama Africa Safari" 
                keywords={`${base_keywords}, Gibb's Farm Tanzania, Ngorongoro luxury lodge, farm-to-table Tanzania, coffee plantation stay, historic lodge Tanzania, Karatu accommodation, organic farm lodge, cultural safari experience, sustainable luxury lodge, Ngorongoro Crater accommodation`}
                description="Experience the charm of Gibb's Farm, a historic farm lodge offering luxury accommodation near Ngorongoro Crater. Enjoy farm-to-table dining, coffee plantation tours, and a perfect sanctuary between safari adventures."
            />

            <div className="relative h-screen">
                <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-start justify-center bg-black/60 text-white">
                    <Image
                        alt="tazama gallery photos"
                        className="absolute left-0 right-0 top-0 -z-50 h-screen w-screen object-cover opacity-80"
                        // style={{
                        //     transform: "translate3d(0, 0, 0)",
                        //     imageRendering: "crisp-edges",
                        // }}
                        src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730121676/lodges/gibbs-farm/Gibbs-Farm-restaurant-path-1_dakt8u.jpg"
                        layout="fill"
                    />

                    <div className="container">
                        <h1 className="font-base absolute left-1/2 top-1/2 mx-auto w-full -translate-x-1/2 -translate-y-1/2 px-2 text-center text-6xl sm:px-12 lg:w-2/3 xl:text-7xl">
                            Gibb's Farm
                        </h1>
                    </div>
                </div>
            </div>

            <div className='mb-20 mt-28 max-w-5xl mx-auto md:px-8 px-4'>
                <section>
                    <h3 className="text-5xl text-center mb-4 text-primary">A Sanctuary For The Senses</h3>
                    <p>
                        A luxury lodge in Northern Tanzania, <Link href="https://www.tripadvisor.com/Hotel_Review-g317085-d597670-Reviews-Gibb_s_Farm-Ngorongoro_Conservation_Area_Arusha_Region.html" rel="noopener noreferrer" target="_blank" className='text-primary'>Gibb’s Farm</Link> offers a welcome respite for the East Africa safari traveller. Immerse yourself in a sanctuary for the senses, where the farm’s gentle rhythms impart a sense of peace and well-being. Experience a sense of place as you recline on your verandah, walk in the Ngorongoro Forest or explore the back roads of Karatu.
                    </p>
                    <br />
                    <p>
                        Replenish with inspired organic cuisine, fresh from the farm’s gardens, bakery and dairy. Surround yourself with the rich traditions of East African life, exclusive to Gibb’s Farm, and share an eternal sense of history and community.
                    </p>
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <div className='relative w-full h-72'>
                            <Image
                                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730121765/lodges/gibbs-farm/Gibbs-Farm-a-sense-of-purpose-1024x683_zbhxoa.jpg"
                                alt=""
                                layout='fill'
                                objectFit='cover'
                                className="w-full object-cover h-full"
                            />
                        </div>
                        <div className='relative w-full h-72'>
                            <Image
                                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730121819/lodges/gibbs-farm/Gibbs-Farm-a-sense-of-wellbeing-1024x683_fsq0jt.jpg"
                                alt=""
                                layout='fill'
                                objectFit='cover'
                                className="w-full object-cover h-full"
                            />
                        </div>
                    </div>
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
                    <h4 className='text-4xl text-primary mb-3'>Gallery</h4>
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
    const images = await useFetchImages({ folderName: "lodges/gibbs-farm/gallery" });
    return {
        props: {
            images,
        },
    };
}