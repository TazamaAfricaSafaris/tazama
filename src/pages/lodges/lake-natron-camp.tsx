import React from 'react'
import HeadSEO from '~/components/ui/Head'
import { base_keywords } from '~/lib/constants'

import Image from 'next/image'
import Link from 'next/link'
import useFetchImages from '~/hooks/useFetchImages'

import { ImageProps } from '~/lib/generateBlurPlaceHolder'
import { MasonryGallery } from '../gallery'
import SafariCarousel from '~/components/safari-carousel'
import CallToAction from '~/components/CallToAction'

const Page = ({ images }: { images: ImageProps[] }) => {
    return (
        <>
            <HeadSEO 
                title='Lake Natron Camp | Tazama Africa Safari' 
                keywords={`${base_keywords}, Lake Natron accommodation, flamingo viewing Tanzania, Ol Doinyo Lengai trek, ecological camp Tanzania, Maasai cultural experience, Rift Valley accommodation, hominid footprints, adventure safari camp, northern Tanzania lodging, natural pool accommodation`}
                description="Stay at the unique Lake Natron Camp, an ecological retreat in one of Tanzania's most dramatic landscapes. Experience flamingo breeding grounds, Ol Doinyo Lengai volcano treks, and Maasai culture in this extraordinary wilderness setting."
            />

            <div className="relative h-screen">
                <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-start justify-center bg-black/60 text-white overflow-hidden">
                    <Image
                        alt="tazama gallery photos"
                        className="absolute left-0 right-0 top-0 -z-50 h-screen w-screen object-cover opacity-80"
                        src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730117765/lodges/lake-natron-camp/ngare-sero-lake-natron_xglewy.jpg"
                        layout="fill"
                    />

                    <div className="container">
                        <h1 className="font-base absolute left-1/2 top-1/2 mx-auto w-full -translate-x-1/2 -translate-y-1/2 px-2 text-center text-6xl sm:px-12 lg:w-2/3 xl:text-7xl">
                            Lake Natron Camp
                        </h1>
                    </div>
                </div>
            </div>

            <div className='mb-20 mt-28 max-w-5xl mx-auto md:px-8 px-4'>
                <section>
                    <h3 className="text-5xl text-center mb-4 text-primary">Lake Natron Camp</h3>
                    <p>
                        <Link href="https://www.lake-natron-camp.com" className='text-primary'>Lake Natron Camp</Link> is a unique, ecological camp set in one of the most visually dramatic locations in the world! Home to the Maasai, abundant wildlife and over 1 million flamingos, our camp is perfectly situated for amazing adventures! Start or end your Great Rift Valley Trek or Walk In The Footsteps of Man to the Serengeti plains from Lake Natron Camp, Ngare Sero.
                    </p>
                    <br />
                    <p>
                        Lake Natron Camp is home to the Hominid footprints, the largest breeding ground for Lesser Flamingo, Ol Doinyo Lengai the only active carbonatite volcano in the world (and hardest 1 day hike in East Africa!), and a stunning environment & landscape all accessible right from Lake Natron Camp. Whilst in camp, relax with a glass of wine in our natural pool or have a massage from a local Maasai. Take a short walk to the lake or cool off in the waterfalls.
                    </p>
                </section>

                <br /><br />
                <section>
                    <h4 className="text-4xl mb-4 text-primary">The Rooms</h4>
                    <p>
                        Lake Natron Camp holds ten spacious guest tents, cleverly disguised under camouflaged shade netting. Each tent is comprised of a porch area, main bedroom and en-suite bathroom with a shower and eco toilet. The main bedroom is furnished with a comfy king size bed*, luxurious 300 thread count linen and furniture made from greenwood.
                    </p>

                    <div className="flex items-center justify-center gap-4 mt-8">
                        <div className='relative w-full h-72'>
                            <Image
                                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730117676/lodges/lake-natron-camp/Screen_Shot_2019-05-03_at_15.05.42_p7lntg.png"
                                alt=""
                                layout='fill'
                                objectFit='cover'
                                className="w-full object-cover h-full"
                            />
                        </div>
                        <div className='relative w-full h-72'>
                            <Image
                                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730117599/lodges/lake-natron-camp/Summits_Africa_MR_-7039_hpawhf.jpg"
                                alt=""
                                layout='fill'
                                objectFit='cover'
                                className="w-full object-cover h-full"
                            />
                        </div>
                    </div>
                </section>
                <br /><br />
                <section>
                    <h4 className="text-4xl mb-4 text-primary">The Mess / Dining Area</h4>
                    <p>
                        Guests can enjoy 360°views of the striking landscape that surrounds Lake Natron Camp. Look north to the lake where hundreds of thousands of flamingos come to breed; or to the south where Ol Doinyo Lengai dominates the landscape in every way. To the west, watch the sunset with a gin and tonic over the Masonic Mountain above the famous escarpment of the Great Rift Valley or just relax on our Bedouin style furniture (also made from waste plastic) and watch the world go by in one of the most peaceful environments you can imagine.
                    </p>
                    <br />
                    <p>
                        The mess is equipped with a bar, fridge, wifi and charging point for your cameras and phones. Please note this is the only place to “plug in” throughout the camp. Outside, guests can sit around the campfire in the evening and gaze at the millions of stars overhead from both the northern and southern hemisphere.
                    </p>

                    <div className="flex items-center justify-center gap-4 mt-8">
                        <div className='relative w-full h-72'>
                            <Image
                                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730118121/lodges/lake-natron-camp/Screen_Shot_2019-05-03_at_15.27.35_qby8jh.png"
                                alt=""
                                layout='fill'
                                objectFit='cover'
                                className="w-full object-cover h-full"
                            />
                        </div>
                        <div className='relative w-full h-72'>
                            <Image
                                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730118175/lodges/lake-natron-camp/Screen_Shot_2019-05-03_at_15.26.53_rkkan5.png"
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
                    <h4 className="text-4xl mb-4 text-primary">Gallery </h4>
                    <MasonryGallery images={images} />
                </section>
            </div>
            <CallToAction />
        </>
    )
}

export default Page;

export async function getStaticProps() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const images = await useFetchImages({ folderName: "lodges/lake-natron-camp/gallery" });
    return {
        props: {
            images,
        },
    };
}