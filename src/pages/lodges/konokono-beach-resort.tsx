import React from "react"
import Image from "next/image"
import Link from "next/link"
import HeadSEO from "~/components/ui/Head"
import { base_keywords } from "~/lib/constants"
import SafariCarousel from "~/components/safari-carousel"
import CallToAction from "~/components/CallToAction"

const Page = () => {
    return (
        <>
            <HeadSEO title='Tazama Africa Safari | Konokono Beach Resort & Spa' keywords={base_keywords} />

            <div className="relative h-screen">
                <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-start justify-center bg-black/60 text-white">
                    <Image
                        alt="tazama gallery photos"
                        className="absolute left-0 right-0 top-0 -z-50 h-screen w-screen object-cover opacity-80"
                        // style={{
                        //     transform: "translate3d(0, 0, 0)",
                        //     imageRendering: "crisp-edges",
                        // }}
                        src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1729688549/lodges/konokono-lodge/pic-konokono-beach-resort-michamvi-kae-90_jr4zdp.jpg"
                        layout="fill"
                    />

                    <div className="container">
                        <h1 className="font-base absolute left-1/2 top-1/2 mx-auto w-full -translate-x-1/2 -translate-y-1/2 px-2 text-center text-6xl sm:px-12 lg:w-2/3 xl:text-7xl">
                            Konokono Beach <br /> Resort & Spa
                        </h1>
                    </div>
                </div>
            </div>

            <div className='mb-20 mt-28 max-w-5xl mx-auto md:px-8 px-4'>
                <section>
                    <h3 className="text-5xl text-center mb-4 text-primary">Konokono Beach Resort & Spa</h3>
                    <p>
                        <Link href="https://konokonozanzibar.com" className="text-primary">Konokono Beach Resort</Link> is located on the Michamvi Peninsula, on the South East Coast of Zanzibar - one of the most authentic and secluded places on the island - and overlooks the wonderful Chwaka Bay. Several kilometres of white pristine beach face Konokono. The resort is a quiet paradise offering privacy and tranquility in the heart of nature. In this quiet surrounding you will find all the modern luxuries such as a choice of luxury villas, beach bar, restaurant, pool and spa, all designed with your comfort in mind.
                    </p>
                    <br /><br />

                    <h4 className="text-4xl mb-4 text-primary">Taste, Charm and Unforgettable Views</h4>
                    <p>
                        Perched on top of a cliff, the restaurant offers a panoramic view of Michamvi bay. Guests will enjoy splendid cocktails and dinners while viewing sunsets, or star-filled nights. The 900-m2 restaurant offers the guest a unique culinary experience which matches its location and the menu, a fusion of local and international flavours, is conceived to satisfy all sensory needs. The attentive service offered by our staff meet all of what can be expected of 5-star service. The restaurant overlooks includes an infinity pool.
                    </p>

                    <div className="flex items-center justify-center gap-4 mt-8">
                        <Image
                            src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1729689413/lodges/konokono-lodge/Screenshot_2024-10-23_161626_eiuraw.png"
                            alt=""
                            width={380}
                            height={283}
                            className="w-full object-cover h-full"
                        />
                        <Image
                            src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1729689867/lodges/konokono-lodge/Screenshot_2024-10-23_162202_niijk0.png"
                            alt=""
                            width={388}
                            height={289}
                            objectFit="cover"
                            className="w-full object-cover h-full"
                        />
                    </div>

                    <br /><br /><br />
                    <h4 className="text-4xl mb-4 text-primary">Indulge in Peace and Quiet</h4>
                    <p>
                        The pool at Konokono is an oasis of relaxation. The white and blue hues of the pool mirror the colours of the sea and its vast white beach stretching several kilometres. Guests can enjoy long private walks along the beach surrounded by lush forests. At the end of the day beautiful sunsets will provide the perfect setting for sundowners. With its huge white pristine beach, Konokono is the ideal place to indulge in rest and regeneration. The resort’s unique and exclusive atmosphere is present also in the Infinity pool, overlooking the magnificent Chwaka Bay.
                    </p>

                    <div className="flex items-center justify-center gap-4 mt-8">
                        <Image
                            src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1729691364/lodges/konokono-lodge/Screenshot_2024-10-23_164815_pt1yw4.png"
                            alt=""
                            width={380}
                            height={283}
                            className="w-full object-cover h-full"
                        />
                        <Image
                            src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1729691478/lodges/konokono-lodge/Screenshot_2024-10-23_164846_rjp2vz.png"
                            alt=""
                            width={388}
                            height={289}
                            objectFit="cover"
                            className="w-full object-cover h-full"
                        />
                    </div>

                    <br /><br /><br />
                    <h4 className="text-4xl mb-4 text-primary">Blissful Pleasure for Body and Mind</h4>
                    <p>
                        Well-being and exclusiveness, the Jungle Health spa is the place to achieve this. The spa will energize your body and mind to experience a perfect and relaxing holiday.
                        Through the use of world-renowned and local products the Jungle Health spa promotes physical and mental regeneration thanks to purifying and invigorating treatments offered by our highly trained staff, including massages with essential oils.
                    </p>

                    <div className="flex items-center justify-center gap-4 mt-8">
                        <div className="h-[288px] w-full relative">
                            <Image
                                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1731319246/lodges/konokono-lodge/161544875_nuk97e.jpg"
                                alt=""
                                layout="fill"
                                objectFit="cover"
                                className="w-full object-cover h-full"
                            />
                        </div>
                        <div className="h-[288px] w-full relative">
                            <Image
                                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1731319346/lodges/konokono-lodge/images_zuxlpj.jpg"
                                alt=""
                                layout="fill"
                                objectFit="cover"
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
            </div>

            <CallToAction />
        </>
    )
}

export default Page