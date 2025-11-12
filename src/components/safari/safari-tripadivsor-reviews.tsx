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
                                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/f6/0d/default-avatar-2020-34.jpg?w=100&h=100&s=1"
                                alt="Gordon S"
                                layout='fill'
                                className='object-cover w-full h-full'
                            />
                        </div>
                        <div>
                            <p className="font-bold text-sm font-poppins text-tripadvisorDark">Gordon S</p>
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
                        <p className="text-sm font-semibold font-poppins text-tripadvisorDark">Arusha, Ngorongoro Crater and Eastern Serengeti safari trip</p>
                        <p className="text-sm font-poppins text-tripadvisorDark">Jun 2023</p>
                    </div>

                    <p className="text-sm text-neutral-600 font-poppins">
                        Tazama Tours did an excellent job of tailoring our safari trip to our desires and personal needs! The staff was very helpful, friendly and courteous. In preparation we had great communication back and forth with staff being very helpful and timely to answer questions and address concerns. There was a lot of coordination pulling together the different lodges and local flights and paper work etc necessary to give us a great experience! They did it all! We would certainly book thru Tazama again and share them with our friends who are looking for unique and personal travel experiences! Gordon and Betty
                    </p>
                </div>

                {/* REVIEW 2 */}
                <div className="border rounded-2xl space-y-4 p-4">
                    <div className="flex items-center gap-2">
                        <div className="bg-tripadvisorDark w-10 h-10 rounded-full overflow-hidden relative">
                            <Image
                                src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/e3/1f/default-avatar-2020-46.jpg?w=100&h=100&s=1"
                                alt="Essenia B"
                                layout='fill'
                                className='object-cover w-full h-full'
                            />
                        </div>
                        <div>
                            <p className="font-bold text-sm font-poppins text-tripadvisorDark">Yun Chin Ng</p>
                            <p className="text-xs font-poppins">6 contribution</p>
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
                        <p className="text-sm font-semibold font-poppins text-tripadvisorDark">Amazing safari in Ngrongoro Crater, Serengiti and Zanzibar</p>
                        <p className="text-sm font-poppins text-tripadvisorDark">Sep 2023 • Friends</p>
                    </div>

                    <p className="text-sm text-neutral-600 font-poppins">
                        My friends who have never been to Africa, finally came for Safari. With the help of Tazama, I manage to put together a tour included Ngorongoro crater, North Serengiti - The Great Migration and Zanzibar. In the planning stage of the trip Jaffary was very helpful and patient to address all our concerns. Even in the pre safari day, they have sent us a cheerful and informative driver/guide Humphrey to drive us around Arusha. Our guide Safari ( Yes that is his real name) is warm, friendly and very patient with six ladies have lots of questions. In Zanzibar we stay at Michamvi where has the most beautiful sunset, and sunset dhow ride is amazing. Thanks Tazama
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