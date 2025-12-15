/* eslint-disable react/no-unescaped-entities */
import { tagmanager } from 'googleapis/build/src/apis/tagmanager'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CallToAction from '~/components/CallToAction'
import PrimaryHeader from '~/components/PrimaryHeader'
import WishlistTable from '~/components/WishlistTable'
import HeadSEO from '~/components/ui/Head'
import { base_keywords } from '~/lib/constants'

const Page = () => {
  return (
    <>
      <HeadSEO
        title='Kafika House | Tazama Africa Safari Community Partner'
        keywords={`${base_keywords}, Kafika House Tanzania, children's rehabilitation center, disability support Africa, correctable disabilities, community support Tanzania, medical tourism, social responsibility, charitable travel, volunteer opportunities Tanzania, disability awareness`}
        description="Learn about Tazama Africa Safari's partnership with Kafika House, a rehabilitation center helping children with correctable disabilities in Tanzania. Discover how we support their mission and how you can contribute to this life-changing work."
      />

      <div className="relative h-screen">
        <div className="absolute bottom-0 left-0 right-0 top-0 flex flex-col items-start justify-center bg-black/60 text-white">
            <Image
              fill
              src={'https://res.cloudinary.com/drhl0yu7y/image/upload/v1765794414/partners/kafika-house/kafika-244_gwmznv.webp'}
              className="absolute left-0 right-0 top-0 -z-50 h-screen w-screen object-cover opacity-80"
              alt={'Kafika House'}
              sizes="100vw"
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2ZmZiIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PC9zdmc+"
            />
          <div className="container">
            <h1 className="absolute left-1/2 top-1/2 mx-auto w-full -translate-x-1/2 -translate-y-1/2 px-2 text-center text-5xl sm:px-12 lg:w-2/3 xl:text-6xl">
              Kafika House
            </h1>
          </div>
        </div>
      </div>

      <div className='max-w-5xl mx-auto'>
        <section className='mt-20'>
          <h3 className='text-5xl text-center mb-6 text-primary'>Our Partnership With Kafika House</h3>
          <p>
            At Tazama Africa Tours & Safari Ltd., we are deeply committed to making a positive impact on the communities we serve. One of the ways we do this is through our partnership with <Link href="https://kafikahouse.org/" className='underline underline-offset-4 font-semibold'>Kafika House</Link>, a residential rehabilitation center dedicated to helping children with correctable disabilities such as clubfoot, cleft lip and palate, fluorosis, burn scar contracture, masses, and neurological conditions like spina bifida and hydrocephalus.
          </p>
          <br />
          <p>
            <Link href="https://kafikahouse.org/" className='underline underline-offset-4 font-semibold'>Kafika House</Link> ensures that every child receives the treatment they deserve, regardless of cost. While parents are asked to contribute within their means, Kafika House covers the remaining expenses. This compassionate approach enables children to regain their health, attend school, and actively participate in community life.
          </p>
        </section>

        <section className="mt-20">
          <h3 className='text-3xl mb-6 text-primary'>How Tazama is Helping</h3>
          <ul className=' list-disc'>
            {
              howTazamaHelps.map((item, index) => (
                <li key={index} className='ml-6'><span className='font-semibold'>{item.title}: </span>{item.description}</li>
              ))
            }
          </ul>
        </section>

        <section className="mt-20">
          <h3 className='text-3xl mb-6 text-primary'>How You Can Support Kafika</h3>
          <div className='flex flex-col md:flex-row gap-6'>
            <div className='w-full h-64 md:h-72 lg:h-[26rem] relative'>
              <Image src={"https://res.cloudinary.com/drhl0yu7y/image/upload/v1765793659/partners/kafika-house/kafika-242_cslp76.webp"} alt='Employees at Kafika House helping children' className='w-full h-full object-cover' fill />
            </div>
            <div className='w-full'>
              <p>Your support can make a significant difference in the lives of children with disabilities. Here’s how you can help:</p>
              <br />
              <ul className='flex flex-col gap-y-3'>
                {
                  howToSupport.map((item, index) => (
                    <li key={index}>
                      <p>
                        <span className='font-semibold'>{item.title}</span>: {item.description}
                      </p>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </section>

        <section className='mt-20'>
          <h3 className='text-3xl mb-6 text-primary'>Kafika House Wishlist</h3>
          <WishlistTable />
        </section>

        <section className='my-20'>
          <h3 className='text-3xl mb-4 text-primary'>Make a Difference Today : Support Kafika House</h3>
          <p className='mb-4'>
            We believe that every child deserves a chance to lead a healthy, fulfilling life. Every day, we witness the incredible transformations that are possible when children with correctable disabilities receive the medical care they need. But we can't do it alone. We need your help to continue this life-changing work
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className='w-full h-80 relative'>
              <Image src={"https://res.cloudinary.com/drhl0yu7y/image/upload/v1765793577/partners/kafika-house/kafika2025-177_ucowvq.jpg"} alt='Employees at Kafika House helping children' className='w-full h-full object-cover' fill />
            </div>
            <div className='w-full h-80 relative'>
              <Image src={"https://res.cloudinary.com/drhl0yu7y/image/upload/v1765793853/partners/kafika-house/kafika2025-213_fvw6qz.webp"} alt='Employees at Kafika House helping children' className='w-full h-full object-cover' fill />
            </div>
          </div>
        </section>

      </div>
      <section className="mt-32 mb-20 bg-[url('https://res.cloudinary.com/drhl0yu7y/image/upload/v1765794217/partners/kafika-house/kafika-186_w8tqoc.jpg')] bg-no-repeat bg-cover bg-fixed">
        <div className='max-w-5xl mx-auto py-20 px-4'>
          <h3 className="text-3xl mb-4 text-white">Do You Want to Visit Kafika House?</h3>
          <p className='text-white/90'>Visiting Kafika House is a unique opportunity to see the life-changing work being done up close. Our guests who visit often leave inspired and moved by the experience. If you are interested in visiting, please let us know, and we will arrange a tour for you. A minimum contribution of $100 is requested for facility tours, which directly supports Kafika House's ongoing efforts.</p>
          <button className='bg-primary text-white px-6 py-2 mt-4 rounded-md'>Visit Kafika House</button>
        </div>
      </section>

      <br /><br /><br />
      <CallToAction />
    </>

  )
}

export default Page

const howTazamaHelps = [
  {
    title: "Transportation Support",
    description: "We provide transportation for children from their communities to Kafika House locations in Arusha, Moshi, or Karatu, ensuring they can access the medical care they need."
  },
  {
    title: "Facility Tours",
    description: "We offer tours of Kafika House as part of our Arusha activities, allowing our guests to witness the impactful work being done and potentially inspire further support."
  },
  {
    title: "Annual Cash Donations",
    description: "We donate a percentage of our bookings to support the ongoing needs of Kafika House, ensuring the sustainability of their programs."
  },
  {
    title: "Awareness Campaigns",
    description: "We include information about Kafika House in our guide training sessions and distribute outreach materials in the communities we visit to raise awareness about the available treatments for correctable disabilities."
  }
]

const howToSupport = [
  {
    title: "In-Kind Donations",
    description: "Bring items from the Kafika House wish list when you visit Tanzania. These contributions directly impact the center’s ability to serve the community."
  },
  {
    title: "Financial Donations",
    description: "Consider making a monetary donation to help cover operational costs and support long-term sustainability. Even small contributions can make a big difference."
  },
  {
    title: "Spread the Word",
    description: "Share information about Kafika House with your network. The more people know about the incredible work being done, the greater the support we can generate."
  },
  {
    title: "Visit Kafika House",
    description: "Take a tour of Kafika House to see firsthand the impact of your support. Your visit can inspire further engagement and provide valuable encouragement to the children and staff."
  }
]