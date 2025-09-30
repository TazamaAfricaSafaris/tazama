import React from "react"
import Image from "next/image"
import Link from "next/link"

const KilimanjaroItinerariesCallToAction = () => {
  return (
    <div className="relative overflow-hidden h-80 rounded-xl w-full">
      <Image
        src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1759133497/kilimanjaro/call-to-action/itinerary-cta-4_y8z4uu.jpg"
        alt="Found out why Tazama's Kilimanjaro trek is the best out there"
        layout="fill"
        className="object-cover w-full h-full brightness-75"
      />

      <div className="absolute left-20 top-1/2 -translate-y-1/2 w-full flex flex-col gap-4 items-start max-w-2xl">
        <h4 className="text-5xl text-left text-white font-normal">View our Kilimanjaro itineraries</h4>
        <Link href='/safaris/kilimanjaro/itineraries' className="border border-white rounded-md px-4 lg:px-6 py-2 md:text-lg text-xl font-raleway text-white hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer no-underline">See more</Link>
      </div>
    </div>
  )
}

export default KilimanjaroItinerariesCallToAction

// export async function getStaticProps({ draftMode = false }) {
//   const client = getClient(draftMode ? token : undefined);
//   const itineraries = await client.fetch<SanityDocument[]>(itineraryQueries.byLocationContains, { pattern: "*mount kilimanjaro*" });

//   return {
//     props: {
//       itineraries,
//       draftMode,
//       token: draftMode ? token : "",
//     },
//   };
// }