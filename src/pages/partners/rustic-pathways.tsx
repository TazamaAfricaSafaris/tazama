/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import React from 'react'
import CallToAction from '~/components/CallToAction'
import PrimaryHeader from '~/components/PrimaryHeader'
import HeadSEO from '~/components/ui/Head'
import { base_keywords } from '~/lib/constants'

const Page = () => {
  return (
    <>
      <HeadSEO 
        title='Rustic Pathways | Tazama Africa Safari Educational Partner' 
        keywords={`${base_keywords}, Rustic Pathways Tanzania, educational travel, student travel programs, youth travel Tanzania, experiential learning, cultural immersion, global education, student safari experiences, educational tourism, transformative travel`}
        description="Explore Tazama Africa Safari's partnership with Rustic Pathways, offering transformative travel experiences for youth and students in Tanzania. Our collaboration helps young travelers expand their horizons through meaningful cultural immersion and adventure."
      />
      <PrimaryHeader title={'Rustic Pathways'} image={'partners/rustic-pathways/rustic-pathways-header.jpg'} />

      <div className='max-w-5xl mx-auto'>
        <section className='mt-20'>
          <h3 className='text-5xl text-center mb-6 text-primary'>Our Partnership With Rustic Pathways</h3>
          <p><Link href={'https://www.rusticpathways.com'} className='underline underline-offset-4'>Rustic Pathways</Link> is renowned for leading iconic teen travel tours, meticulously designed to create extraordinary memories. Their itineraries are crafted with precision, purpose, passion, and adventure, ensuring that every travel moment is transformative. <Link href={'https://www.rusticpathways.com'} className='underline underline-offset-4'>Rustic Pathways</Link> empowers students to positively impact lives and communities around the world through education, travel, and philanthropy.</p>
          <br />
          <p><Link href={'https://www.rusticpathways.com'} className='underline underline-offset-4'>Rustic Pathways</Link> is committed to creating a world where:</p>
          <ul className='ml-6 mt-1.5'>
            <li>●	Travel is accepted as an essential part of every education.</li>
            <li>●	Travel is a model of sustainable development.</li>
            <li>●	All people are connected by a shared humanity, and all decisions are made with a global perspective</li>
          </ul>
        </section>
        <br />
        <br />
        <section className='mb-20'>
          <h4 className='text-4xl mb-2'>How We Partner with Rustic Pathways</h4>
          <p>At Tazama Africa Safari, we are proud to be the trusted travel partner of <Link href={'https://www.rusticpathways.com'} className='underline underline-offset-4'>Rustic Pathways</Link> in Tanzania. Together, we organize and plan incredible trips that allow youth to explore the beauty of Tanzania while also making meaningful contributions to local communities.</p>
          <br />
          <br />
          <h5 className='text-3xl mb-2'>How We Partner for Positive Impact</h5>
          <ul className='ml-6 flex flex-col gap-2'>
            <li>●	<span className='font-semibold'>Planning and Organizing Trips</span>: We work closely with Rustic Pathways to design and execute well-planned itineraries that offer students a blend of adventure, education, and community engagement. From the majestic plains of the Serengeti to the cultural richness of local villages, our trips provide students with unforgettable experiences.</li>
            <li>●	<span className='font-semibold'>Community Contributions</span>: Our partnership emphasizes philanthropy and sustainable development. Students on Rustic Pathways tours participate in various community service projects, helping to improve local infrastructure, support education, and engage in environmental conservation efforts. These activities not only benefit the communities but also instill a sense of global responsibility in the students.</li>
            <li>●	<span className='font-semibold'>Cultural Immersion</span>: We ensure that students get a genuine taste of Tanzanian culture. Through interactions with local communities, participation in traditional activities, and guided tours, students gain a deeper understanding and appreciation of the local way of life.</li>
            <li>●	<span className='font-semibold'>Safety and Comfort</span>: As Rustic Pathways' trusted partner, we prioritize the safety and comfort of the students. Our experienced guides and staff are dedicated to providing a secure and supportive environment throughout the journey.</li>
          </ul>
          <br />

        </section>
      </div>

      <br /><br /><br />
      <CallToAction />
    </>
  )
}

export default Page