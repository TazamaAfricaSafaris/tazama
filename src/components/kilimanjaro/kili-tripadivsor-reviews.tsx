import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaTripadvisor } from 'react-icons/fa'

const KiliTripadivsorReviews = () => {
    return (
        <>
            <div className="mb-8 mt-10 space-y-4 flex flex-col items-center">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden relative bg-tripadvisorLight flex items-center justify-center">
                        <FaTripadvisor className="text-black text-2xl" />
                    </div>
                    <h3 className="text-3xl font-poppins font-bold">Our Kilimanjaro reviews</h3>
                </div>

                {/* <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                        <div className="bg-tripadvisor w-4 h-4 rounded-full"></div>
                        <div className="bg-tripadvisor w-4 h-4 rounded-full"></div>
                        <div className="bg-tripadvisor w-4 h-4 rounded-full"></div>
                        <div className="bg-tripadvisor w-4 h-4 rounded-full"></div>
                        <div className="bg-tripadvisor w-4 h-4 rounded-full"></div>
                    </div>

                    <Link
                        href="https://www.tripadvisor.com/Attraction_Review-g6940195-d13368802-Reviews-Tazama_Africa_Tours_and_Safari-Arusha_National_Park_Arusha_Region.html"
                        target="_blank"
                        className="border-b border-tripadvisor font-poppins"
                    >
                        66 Reviews
                    </Link>
                </div> */}
            </div>
            {/* TRIPADVISOR REVIEWS */}
            <div className="grid md:grid-cols-2 gap-4">

                {/* REVIEW 1 */}
                <div className="border rounded-2xl space-y-4 p-4">
                    <div className="flex items-center gap-2">
                        <div className="bg-tripadvisorDark w-10 h-10 rounded-full overflow-hidden relative">
                            <Image
                                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1759145397/kilimanjaro/reviews/greg-h_zjyad0.jpg"
                                alt="gahudnall"
                                layout='fill'
                                className='object-cover w-full h-full'
                            />
                        </div>
                        <div>
                            <p className="font-bold text-sm font-poppins text-tripadvisorDark">gahudnall</p>
                            <p className="text-xs font-poppins">19 contributions</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-1">
                        <div className="bg-tripadvisor w-5 h-5 rounded-full"></div>
                        <div className="bg-tripadvisor w-5 h-5 rounded-full"></div>
                        <div className="bg-tripadvisor w-5 h-5 rounded-full"></div>
                        <div className="bg-tripadvisor w-5 h-5 rounded-full"></div>
                        <div className="bg-tripadvisor w-5 h-5 rounded-full"></div>
                    </div>

                    <div>
                        <p className="text-sm font-semibold font-poppins text-tripadvisorDark">Amazing Kilimanjaro Hike!</p>
                        <p className="text-sm font-poppins text-tripadvisorDark">March 2025 • Friends</p>
                    </div>

                    <p className="text-sm text-neutral-600 font-poppins">
                        Tazama did a great job catering to a group of guys that were primarily in Tanzania to hike Kilimanjaro. We added on a few days for a safari. The guide, chef, and porters were all amazing for the hike - I would HIGHLY recommend their guided hike of Mount Kilimanjaro. It was a superb experience from airport to summit and back to Arusha. The safari was good, but we lacked some details in the planning and it was evident when we got in country.
                    </p>
                </div>

                {/* REVIEW 2 */}
                <div className="border rounded-2xl space-y-4 p-4">
                    <div className="flex items-center gap-2">
                        <div className="bg-tripadvisorDark w-10 h-10 rounded-full overflow-hidden relative">
                            <Image
                                src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1759145397/kilimanjaro/reviews/essenia_epkayd.jpg"
                                alt="Essenia B"
                                layout='fill'
                                className='object-cover w-full h-full'
                            />
                        </div>
                        <div>
                            <p className="font-bold text-sm font-poppins text-tripadvisorDark">Essenia B</p>
                            <p className="text-xs font-poppins">1 contribution</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-1">
                        <div className="bg-tripadvisor w-5 h-5 rounded-full"></div>
                        <div className="bg-tripadvisor w-5 h-5 rounded-full"></div>
                        <div className="bg-tripadvisor w-5 h-5 rounded-full"></div>
                        <div className="bg-tripadvisor w-5 h-5 rounded-full"></div>
                        <div className="bg-tripadvisor w-5 h-5 rounded-full"></div>
                    </div>

                    <div>
                        <p className="text-sm font-semibold font-poppins text-tripadvisorDark">Amazing Kilimanjaro Hike!</p>
                        <p className="text-sm font-poppins text-tripadvisorDark">Feb 2025 • Friends</p>
                    </div>

                    <p className="text-sm text-neutral-600 font-poppins">
                        Climbing Kilimanjaro can be challenging - altitude, weather conditions, etc - and you want the best team to accompany you in this adventure. Don’t search further, Tazama is an excellent expedition organiser.
                        <br /><br />
                        Our main goal was to climb to Uhuru peak, the roof of Africa. The accompanying team and the tour leaders Walter and Joshua were excellent, truly knowledgeable and reliable. We managed to the top in best conditions. Amazing attention to detail made the experience unforgettable and truly unique. Thank you Tazama!
                    </p>
                </div>
            </div>

            <br />
            <Link
                href="https://www.tripadvisor.com/Attraction_Review-g6940195-d13368802-Reviews-Tazama_Africa_Tours_and_Safari-Arusha_National_Park_Arusha_Region.html"
                target="_blank"
                className="border-2 border-tripadvisor font-poppins flex items-center gap-4 w-fit px-6 py-2 hover:bg-tripadvisor rounded-full mx-auto"
            >
                <FaTripadvisor className="text-black text-4xl" />
                <span>See more of our reviews</span>
            </Link>
        </>
    )
}

export default KiliTripadivsorReviews