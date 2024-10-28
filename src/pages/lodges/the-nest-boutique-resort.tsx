/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import HeadSEO from '~/components/ui/Head'
import { base_keywords } from '~/lib/constants'
import { Masonry } from "react-plock"
import { MasonryGallery } from '../gallery'
import useFetchImages from '~/hooks/useFetchImages'
import { type ImageProps } from '~/lib/generateBlurPlaceHolder'

const Page = ({ images }: { images: ImageProps[] }) => {
    return (
        <>
            <HeadSEO title='Tazama Africa Safari | The Nest Boutique' keywords={base_keywords} />

            <div className="relative h-screen">
                <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-start justify-center bg-black/60 text-white overflow-hidden">
                    <Image
                        alt="tazama gallery photos"
                        className="absolute left-0 right-0 top-0 -z-50 h-screen w-screen object-cover opacity-80"
                        src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730107648/lodges/the-nest/the-nest-boutique-resort_rwkhny.jpg"
                        layout="fill"
                    />

                    <div className="container">
                        <h1 className="font-base absolute left-1/2 top-1/2 mx-auto w-full -translate-x-1/2 -translate-y-1/2 px-2 text-center text-6xl sm:px-12 lg:w-2/3 xl:text-7xl">
                            The Nest Boutique Resort
                        </h1>
                    </div>
                </div>
            </div>

            <div className='mb-20 mt-28 max-w-5xl mx-auto md:px-8 px-4'>
                <section>
                    <h3 className="text-5xl text-center mb-4 text-primary">The Nest Boutique Resort</h3>
                    <p>
                        Natural simplicity defines the essence of <Link className='text-primary' href='https://thenest.art'>The Nest</Link>. Guests wandering through this beachfront hotel will discover a unique structure that provides a magical setting for an authentic experience, enhanced by diverse architecture and exceptional service within a native <Link className='text-primary' href='/safaris/zanzibar'>Zanzibari</Link> ambiance. The Nest proudly hosts the first 100% vegetarian restaurant on the beach of Paje. Guided by a philosophy of non-violence (Ahimsa), the team strives to minimize environmental impact, aiming to avoid harm to any conscious beings. Sourced with local and fresh ingredients, the restaurant offers distinctive and healthy plates.
                    </p>
                    <br />
                    <p>
                        Nestled among palms and facing the Indian Ocean, the restaurant is situated on the first floor of an impressive two-story wooden structure. Its bohemian decor blends seamlessly with the natural surroundings, while the professional and friendly local staff create a welcoming atmosphere. Guests can relax as the ocean breeze flows through and marvel at the sight of skilled kitesurfers gliding across the water.
                    </p>

                    <div className="flex items-center justify-center gap-4 mt-8">
                        <div className='relative w-full h-72'>
                            <Image
                                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730108494/lodges/the-nest/the-nest-kite-beach-resort_q9euj5.jpg"
                                alt=""
                                layout='fill'
                                objectFit='cover'
                                className="w-full object-cover h-full"
                            />
                        </div>
                        <div className='relative w-full h-72'>
                            <Image
                                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730108623/lodges/the-nest/the-nest-boutique-resort_1_gbsevo.jpg"
                                alt=""
                                layout='fill'
                                objectFit='cover'
                                className="w-full object-cover h-full"
                            />
                        </div>
                    </div>
                </section>
                <br /><br /><br />

                <section>
                    <h4 className='text-4xl text-primary mb-3'>Gallery</h4>
                    <MasonryGallery images={images}/>
                </section>
            </div>
        </>
    )
}

export default Page

export async function getStaticProps() {
    const images = await useFetchImages({ folderName: "lodges/the-nest/gallery" });
    return {
      props: {
        images,
      },
    };
  }

//   https://res.cloudinary.com/drhl0yu7y/image/upload/v1730110390/lodges/the-nest/gallery/the-nest-kite-beach-resort_aoulip.jpg