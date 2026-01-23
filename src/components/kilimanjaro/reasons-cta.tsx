import React from "react"
import Image from "next/image"
import Link from "next/link"

const ReasonsCallToActionKilimanjaro = () => {
  return (
    <div className="relative overflow-hidden h-64 sm:h-80 md:h-96 rounded-xl">
        <Image 
            src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1759133537/kilimanjaro/call-to-action/cta-3_rhubqu.jpg"
            alt="Found out why Tazama's Kilimanjaro trek is the best out there"
            fill
            className="object-cover brightness-75"
        />

        <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-full flex flex-col gap-4 sm:gap-6 md:gap-8 items-center px-4">
            <h4 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-white max-w-2xl mx-auto">
              Find out what makes Tazama&apos;s Kilimanjaro Experience stand out
            </h4>
            <Link 
              href='/kilimanjaro/what-makes-kilimanjaro-tazama-trek-different' 
              className="border border-white rounded-md px-4 sm:px-5 lg:px-6 py-2 text-base sm:text-lg md:text-xl font-raleway text-white hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer"
            >
              See more
            </Link>
        </div>
    </div>
  )
}

export default ReasonsCallToActionKilimanjaro