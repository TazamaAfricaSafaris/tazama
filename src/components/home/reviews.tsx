/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaTripadvisor } from 'react-icons/fa'

interface Review {
    name: string;
    image: string;
    contributions?: number;
    stars: number
    title?: string
    date?: string
    participants?: string
    review: string[];
}

const reviews: Review[] = [
    {
        name: "Essenia B",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/df/99/default-avatar-2020-40.jpg?w=100&h=100&s=1",
        stars: 5,
        contributions: 1,
        title: "A once-in-a-lifetime experience!",
        date: "Oct 2025",
        participants: "Couples",
        review: [
            "We did a five-day safari with Tazama Africa Tours – and it was absolutely incredible. The entire trip was perfectly tailored to us, every little detail was just right. From the very beginning, we felt comfortable and truly welcomed. We’re beyond happy to have found a family in Tanzania. Our guide was amazing – warm, professional, and so passionate about sharing his country and its wildlife with us. We can genuinely recommend booking with Tazama – trust us, it will be one of the best decisions of your life."
        ]
    },
    {
        name: "kristincoellesmith",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/e9/60/default-avatar-2020-64.jpg?w=100&h=100&s=1",
        stars: 5,
        contributions: 3,
        title: "Huge gratitude to Tazama Africa – My Dream Team!",
        date: "Oct 2025",
        participants: "Friends",
        review: [
            "The strength, dedication, and heart from the Tazama Team was second to none! The team was knowledgeable beyond belief, professional while also being personal and caring; all leading to an experience exceeding all of my expectations. If you are looking for a climbing tour, nature and wildlife tour, or beach vacation I can’t imagine that you would find any better.",
        ]
    },
    {
        name: "Steph C",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/f2/eb/default-avatar-2020-27.jpg?w=100&h=100&s=1",
        stars: 5,
        contributions: 1,
        title: "Epic journey of climbing Mount Kilimanjaro",
        date: "Oct 2025",
        participants: "Friends",
        review: [
            "Tazama organised us a journey of a life time. Something has shifted in my soul from this experience. It wouldn’t be possible with each and everyone involved.",
        ]
    }
]

const Reviews = () => {
    return (
        <>
            <div className="mb-8 mt-10 space-y-4 flex flex-col items-center">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden relative bg-tripadvisorLight flex items-center justify-center">
                        <FaTripadvisor className="text-black text-2xl" />
                    </div>
                    <h3 className="text-3xl font-poppins font-bold">Join our many satisfied customers</h3>
                </div>
            </div>
            {/* TRIPADVISOR REVIEWS */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    reviews.map((review, index) => (
                        <div key={index} className="border rounded-2xl space-y-4 p-4">
                            <div className="flex items-center gap-2">
                                <div className="bg-tripadvisorDark w-10 h-10 rounded-full overflow-hidden relative">
                                    <Image
                                        src={review.image}
                                        alt={review.name}
                                        layout='fill'
                                        className='object-cover w-full h-full'
                                    />
                                </div>
                                <div>
                                    <p className="font-bold text-sm font-poppins text-tripadvisorDark">{review.name}</p>
                                    <p className="text-xs font-poppins">{review.contributions === 1 ? "1 contribution" : `${review.contributions} contributions`}</p>
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
                                    {review.title}
                                </p>
                                <p className="text-sm font-poppins text-tripadvisorDark">{review.date} • {review.participants}</p>
                            </div>

                            {
                                review.review.map((review, index) => (
                                    <p key={index} className="text-sm text-neutral-600 font-poppins line-clamp-5">
                                        {review}
                                    </p>
                                ))
                            }
                        </div>
                    ))
                }
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

export default Reviews