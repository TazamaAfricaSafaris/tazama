/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import Image from 'next/image'
import HeadSEO from '~/components/ui/Head'
import { base_keywords } from '~/lib/constants'
import Link from 'next/link'
import SafariCarousel from '~/components/safari-carousel'
import CallToAction from '~/components/CallToAction'

const Page = () => {
    return (
        <>
            <HeadSEO 
                title="Katambuga House | Tazama Africa Safari" 
                keywords={`${base_keywords}, Katambuga House, Arusha accommodation, safari starting point, luxury villa Tanzania, exclusive safari lodge, private safari accommodation, family safari lodge, pre-safari stay, post-safari relaxation, northern Tanzania accommodation`}
                description="Begin or end your safari journey at Katambuga House, an exclusive private villa near Arusha. Enjoy personalized service, elegant accommodations, and beautiful gardens in this perfect gateway to Tanzania's northern safari circuit."
            />
            <div className="relative h-screen">
                <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-start justify-center bg-black/60 text-white overflow-hidden">
                    <Image
                        alt="tazama gallery photos"
                        className="absolute left-0 right-0 top-0 -z-50 h-screen w-screen object-cover opacity-80"
                        src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730282377/lodges/katambuga_house/Katambuga_House_detail_x6pdzu.jpg"
                        layout="fill"
                    />

                    <div className="container">
                        <h1 className="font-base absolute left-1/2 top-1/2 mx-auto w-full -translate-x-1/2 -translate-y-1/2 px-2 text-center text-6xl sm:px-12 lg:w-2/3 xl:text-7xl">
                            Katambuga House
                        </h1>
                    </div>
                </div>
            </div>

            <div className="mb-20 mt-28 max-w-5xl mx-auto md:px-8 px-4">
                <section>
                    <h3 className="text-5xl text-center mb-4 text-primary">Katambuga House</h3>
                    <p>
                        <Link href="https://wetu.com/iBrochure/en/Home/107884/katambuga_house" className="text-primary">Katambuga House</Link>, an elegant eight-room lodge near Arusha, offers tranquility within flowering gardens and expansive coffee estates on the Endurance Estate. Its peaceful surroundings, attention to detail, and warm hospitality make it a destination in its own right, perfect for travelers seeking a serene retreat.
                    </p>
                    <br />
                    <p>
                        The lodge’s main house and two family cottages provide stylish, comfortable accommodations, each room featuring private bathrooms, large beds, and amenities like ceiling fans, mosquito nets, and writing desks. The cozy main house, decorated with African art and original photography, enhances the atmosphere of casual elegance, while spacious verandas overlook tropical gardens, offering guests a relaxing space to unwind.
                    </p>
                    <br />
                    <p>
                        Guests can enjoy a full breakfast of fresh bread, seasonal fruits, cereals, and eggs prepared to taste, served in the main room each morning. Katambuga House also provides complimentary fresh drinking water, daily maid service, free Wi-Fi, and laundry upon request, ensuring a convenient and comfortable stay. The welcoming pool and birdwatching opportunities in the gardens further enhance the experience, while the spectacular Mount Meru provides a scenic backdrop.
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
                                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730282928/lodges/katambuga_house/Katambuga_House_exterior_1_wy92tx.jpg"
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
                    <h4 className="text-4xl text-primary mb-3">The Lodge</h4>
                    <p>
                        The main house features four bedrooms with king-sized beds. An additional four bedrooms are located in the adjacent family cottages, each offering two interconnecting rooms. Katambuga House has a swimming pool to help counter any summer heat and the lodge gardens are the perfect sanctuary for any bird-watching enthusiast.
                    </p>
                    <br />
                    <p>
                        The lodge is located less than 10 minutes from Arusha airport in a perfect location to serve as a starting point for a North Tanzanian safari.
                    </p>
                    <br />
                    <div className="relative w-full h-96">
                        <Image
                            src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730283263/lodges/katambuga_house/Katambuga_House_fireplace_s35b5h.jpg"
                            alt=""
                            layout="fill"
                            objectFit="cover"
                            className="w-full object-cover h-full"
                        />
                    </div>
                </section>

                <br /><br />
                <h4 className="text-4xl text-primary mb-3">Experiences & Activities</h4>
                <p>
                    There is plenty to do around Katambuga House. Coffee production is a primary source of income for Tanzanians and a visit to the Burka estate is a must, or hike and cycle in the Arusha countryside, explore the Arusha National Park – and possibly even climb Mount Meru.
                </p>
                <br />
                <p>
                    On an Arusha city tour you will experience the vibrant chaos and the juxtaposition between colonial, traditional, and new. Visit the Cultural Heritage Centre for African Art, gemstone centres, or the Shanga Centre for disabled artists, where you will be amazed by glasswork, beadwork, jewellery and handmade clothing.
                </p>
                <div className="flex items-center justify-center gap-4 mt-8 max-sm:flex-wrap">
                    <div className="relative w-full h-72">
                        <Image
                            src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730283621/lodges/katambuga_house/Katambuga_House_dining_area_qky6qh.jpg"
                            alt=""
                            layout="fill"
                            objectFit="cover"
                            className="w-full object-cover h-full"
                        />
                    </div>
                    <div className="relative w-full h-72">
                        <Image
                            src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1730283665/lodges/katambuga_house/Katambuga_House_Lunch_1_yipgin.jpg"
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

            </div>
            <CallToAction />
        </>
    )
}

export default Page