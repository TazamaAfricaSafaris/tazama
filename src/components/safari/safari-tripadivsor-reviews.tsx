/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaTripadvisor } from 'react-icons/fa'

const SafariTripadivsorReviews = () => {
    return (
        <>
            <div className="mb-8 mt-10 space-y-4 flex flex-col items-center">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden relative bg-tripadvisorLight flex items-center justify-center">
                        <FaTripadvisor className="text-black text-2xl" />
                    </div>
                    <h3 className="text-3xl font-poppins font-bold">Our Safari reviews</h3>
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
                                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/f2/eb/default-avatar-2020-27.jpg?w=100&h=100&s=1"
                                alt="Gordon S"
                                layout='fill'
                                className='object-cover w-full h-full'
                            />
                        </div>
                        <div>
                            <p className="font-bold text-sm font-poppins text-tripadvisorDark">Steph C</p>
                            <p className="text-xs font-poppins">1 contributions</p>
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
                        <p className="text-sm font-semibold font-poppins text-tripadvisorDark">
                            Epic journey of climbing Mount Kilimanjaro
                        </p>
                        <p className="text-sm font-poppins text-tripadvisorDark">Oct 2025 • Friends</p>
                    </div>

                    <p className="text-sm text-neutral-600 font-poppins">
                        Tazama organised us a journey of a life time. Something has shifted in my soul from this experience. It wouldn’t be possible with each and everyone involved.
                        From Walter, the guides, and his team he lead. To Watson and the “energy provisions” he indulged us in, Zacheriea who served us so enthusiastically and generously!
                        <br />
                        The “Internet cafe” where we all downloaded much more than we wanted to 😅🫢 thanks for making that as pleasant as can be!
                        <br />
                        Every single person on the 21 person team was outstanding- happy, guenuine, beyond helpful.
                        We are spoilt and enriched by this journey and thank you 🙏 Asante sana
                    </p>
                </div>

                {/* REVIEW 2 */}
                <div className="border rounded-2xl space-y-4 p-4">
                    <div className="flex items-center gap-2">
                        <div className="bg-tripadvisorDark w-10 h-10 rounded-full overflow-hidden relative">
                            <Image
                                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/df/99/default-avatar-2020-40.jpg?w=100&h=100&s=1"
                                alt="Essenia B"
                                layout='fill'
                                className='object-cover w-full h-full'
                            />
                        </div>
                        <div>
                            <p className="font-bold text-sm font-poppins text-tripadvisorDark">Felix K</p>
                            <p className="text-xs font-poppins">1 contributions</p>
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
                        <p className="text-sm font-semibold font-poppins text-tripadvisorDark">
                            A once-in-a-lifetime experience!
                        </p>
                        <p className="text-sm font-poppins text-tripadvisorDark">Oct 2025 • Couples</p>
                    </div>

                    <p className="text-sm text-neutral-600 font-poppins">
                        We did a five-day safari with Tazama Africa Tours – and it was absolutely incredible. The entire trip was perfectly tailored to us, every little detail was just right. From the very beginning, we felt comfortable and truly welcomed. We’re beyond happy to have found a family in Tanzania. Our guide was amazing – warm, professional, and so passionate about sharing his country and its wildlife with us. We can genuinely recommend booking with Tazama – trust us, it will be one of the best decisions of your life.
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

export default SafariTripadivsorReviews