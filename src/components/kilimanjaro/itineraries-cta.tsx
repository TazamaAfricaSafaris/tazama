import React from "react"
import Image from "next/image"
import Link from "next/link"

const KilimanjaroItinerariesCallToAction = () => {
  return (
    <div className="relative overflow-hidden h-80 rounded-xl w-full p-6 md:p-8">
      <Image
        src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1759133497/kilimanjaro/call-to-action/itinerary-cta-4_y8z4uu.jpg"
        alt="Found out why Tazama's Kilimanjaro trek is the best out there"
        fill
        className="object-cover brightness-75"
      />
      <div className="absolute inset-0 flex items-center justify-center md:justify-start md:left-20 p-6 md:p-0">
        <div className="flex flex-col gap-4 items-center md:items-start max-w-2xl w-full md:w-auto">
          <h4 className="text-4xl md:text-5xl text-center md:text-left text-white font-normal leading-tight px-4 md:px-0">
            View our Kilimanjaro itineraries
          </h4>
          <Link 
            href='/kilimanjaro/itineraries' 
            className="border border-white rounded-md px-6 py-2 text-lg md:text-xl font-raleway text-white hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer no-underline"
          >
            See more
          </Link>
        </div>
      </div>
    </div>
  )
}

export default KilimanjaroItinerariesCallToAction