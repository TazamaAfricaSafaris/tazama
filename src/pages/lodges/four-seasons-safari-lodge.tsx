/* eslint-disable react/no-unescaped-entities */
import React from "react"

import HeadSEO from "~/components/ui/Head"
import { base_keywords } from "~/lib/constants"

import Image from "next/image"
import useFetchImages from "~/hooks/useFetchImages"

import { type ImageProps } from "~/lib/generateBlurPlaceHolder"
import { MasonryGallery } from "../gallery"

import SafariCarousel from "~/components/safari-carousel"
import CallToAction from "~/components/CallToAction"

const Page = ({ images }: { images: ImageProps[] }) => {
    return (
        <>
            <HeadSEO 
                title="Four Seasons Safari Lodge Serengeti | Tazama Africa Safari" 
                keywords={`${base_keywords}, Four Seasons Serengeti, luxury safari lodge, Serengeti accommodation, infinity pool safari lodge, spa safari Tanzania, five-star safari accommodation, wildlife viewing lodge, Serengeti luxury stay, family safari lodge, exclusive Tanzania accommodation`}
                description="Experience unparalleled luxury at Four Seasons Safari Lodge Serengeti. Enjoy pristine infinity pools, exceptional dining, and world-class service while witnessing spectacular wildlife from the heart of Tanzania's most famous national park."
            />
            <div className="relative h-screen">
                <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-start justify-center bg-black/60 text-white overflow-hidden">
                    <Image
                        alt="tazama gallery photos"
                        className="absolute left-0 right-0 top-0 -z-50 h-screen w-screen object-cover opacity-80"
                        src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730454796/lodges/four-seasons/twin-room-four-seasons-serengeti-tanzania_c8hcab.jpg"
                        layout="fill"
                    />

                    <div className="container">
                        <h1 className="font-base absolute left-1/2 top-1/2 mx-auto w-full -translate-x-1/2 -translate-y-1/2 px-2 text-center text-6xl sm:px-12 lg:w-2/3 xl:text-7xl">
                            Four Seasons Safari Lodge
                        </h1>
                    </div>
                </div>
            </div>

            <div className="mb-20 mt-28 max-w-5xl mx-auto md:px-8 px-4">
                <section>
                    <h3 className="text-5xl text-center mb-4 text-primary">Four Seasons Safari Lodge</h3>
                    <p>
                        Deep within Africa’s renowned Serengeti National Park, Four Seasons Safari Lodge welcomes you to a sanctuary of trademark comfort. Each beautifully furnished guest room offers furnished sundecks, pristine infinity-edge pools and outdoor showers for the ultimate combination of luxury and memorable ambience.
                    </p>
                    <br />
                    <p>
                        Whether savouring a grilled delicacy around the central fire pit in the Boma Grill, enjoying contemporary flavours and theatre – style cooking in Kula’s Restaurant or snacking on fresh organic salads and African tapas at the Maji bar, expect menus that cater for every taste and preference. Experience thrilling Serengeti game drives and rare opportunities to connect with the local people and culture, then return to the lodge where an elegant spa and infinity pool promise a luxurious respite.
                    </p>
                </section>

                <br /><br />
                <section>
                    <h4 className="text-4xl text-primary mb-3">Why Choose Four Seasons Safari Lodge</h4>
                    <ul className="list-disc pl-4 mb-4">
                        <li className="ml-4 mt-2">Sip on a refreshing gin and tonic and take in the spectacular views from a popular waterhole.</li>
                        <li className="ml-4 mt-2">Sip on a refreshing gin and tonic and take in the spectacular views from a popular waterhole.</li>
                    </ul>
                </section>

                <div className="flex items-center justify-center gap-4 mt-8 max-sm:flex-wrap">
                    <div className="relative w-full h-72">
                        <Image
                            src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730454370/lodges/four-seasons/SBT_928_original_ttq2zc.jpg"
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
    const images = await useFetchImages({ folderName: "lodges/four-seasons/gallery" });
    return {
        props: {
            images,
        },
    };
}