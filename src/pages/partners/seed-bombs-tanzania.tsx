/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link'
import React from 'react'
import PrimaryHeader from '~/components/PrimaryHeader'
import HeadSEO from '~/components/ui/Head'
import { base_keywords } from '~/lib/constants'

const Page = () => {
  return (
    <>
      <HeadSEO title='Our Partners | Seed Bombs Tanzania' keywords={base_keywords} />
      <PrimaryHeader title={'Seed Bombs Tanzania'} image={'/partners/seed-bombs/seed-bombs-header.jpg'} />

      <div className='max-w-5xl mx-auto'>
        <section className='mt-20'>
          <h3 className='text-5xl text-center mb-6 text-dark'>Our Partnership With Seed Bombs Tanzania</h3>
          <p>
            <Link href='https://www.seedbombstanzania.org' className='underline underline-offset-4'>Seed Bombs Tanzania</Link> is a non-profit organization dedicated to reforestation and climate change mitigation in Tanzania. Their mission revolves around three core pillars:
          </p>
          <br />
          <ul>
            <li><span className='font-bold'>Teach</span>: Providing education to local communities about reforestation and climate change mitigation strategies.</li>
            <li><span className='font-bold'>Plant</span>: Inspiring youth to develop the skills necessary for building a sustainable future by planting indigenous tree species that thrive in local environments.</li>
            <li><span className='font-bold'>Grow</span>: Nurturing the health of trees and supporting those who will grow up to conserve them.</li>
          </ul>
          <br />
          <p>
            <Link href='https://www.seedbombstanzania.org' className='underline underline-offset-4'>Seed Bombs Tanzania</Link> aims to support resilient communities, revitalizing natural environments, and promoting sustainable development practices for generations to come. Their innovative approach to reforestation involves the use of seed bombs – a simple propagation method popularized by permaculture master Masanobu Fukuoka. These seed bombs are made by rolling seeds into small balls of soil, clay, and organic fertilizer, which are then dispersed into nature to sprout and take root at their own pace.
          </p>
        </section>
        <section className='my-20'>
          <h4 className='text-4xl mb-4'>Our Partnership with Seed Bombs Tanzania</h4>
          <p>
            At Tazama Africa Safari, we are committed to combating deforestation and promoting reforestation in Tanzania. Our partnership with Seed Bombs Tanzania allows us to actively contribute to this cause while also involving our guests in meaningful environmental action.
          </p>
          <br />
          <br />
          <div className='flex flex-col md:flex-row gap-8 relative'>
            <div className='w-full h-[28rem]'>
              <img src="/assets/images/gallery/partners/seed-bombs/seed-bombs-img1.jpeg" alt="Students learning about seed bombs" className='w-full h-full object-cover' />
            </div>
            <div className='w-full sticky lg:top-1'>
              <h5 className='text-3xl mb-4'>How We Partner for Positive Impact</h5>
              <ul>
                <li className=' mb-2'><span className='font-semibold'>Guest Engagement</span>: As part of our reforestation efforts, we provide our guests with seed bombs from Seed Bombs Tanzania during their safari. We educate them about the impact of deforestation and the importance of reforestation. Guests are guided to throw these seed bombs in areas that require reforestation, ensuring they leave a positive impact by planting trees and contributing to the rejuvenation of Tanzania’s natural landscapes.</li>
                <li><span className='font-semibold'>Staff Involvement</span>: Our partnership extends beyond our guests. We also provide seed bombs to our staff, encouraging them to plant these in their home communities. This initiative not only helps in reforestation but also fosters a sense of environmental responsibility among our team members.</li>
              </ul>
            </div>
          </div>
          <br />
          <p>The seed bombs we use are approved by the Tanzania National Parks Authority (TANAPA), ensuring that our reforestation efforts are aligned with national conservation standards and regulations.</p>

          <br />
          <br />

          <div className='flex flex-col md:flex-row-reverse gap-8'>
            <div className='w-full h-[28rem]'>
              <img src="/assets/images/gallery/partners/seed-bombs/seed-bombs-img2.jpeg" alt="Students learning about seed bombs" className='w-full h-full object-cover' />
            </div>
            <div className='w-full'>
              <h5 className='text-3xl mb-4'>Join Us in Supporting Seed Bombs Tanzania</h5>
              <p className='mb-2'>
                We invite you to join us in supporting Seed Bombs Tanzania and their vital work. Your involvement can make a significant difference in combating deforestation and promoting sustainable practices. Here's how you can help:
              </p>
              <ul>
                <li><span className="font-semibold">Spread Awareness</span>: Share information about Seed Bombs Tanzania and their mission with your network. The more people know about their work, the greater the impact we can collectively make.</li>
                <li><span className="font-semibold">Get Involved</span>: Participate in our reforestation initiatives during your safari. By throwing seed bombs in designated areas, you directly contribute to the growth of indigenous trees and the revitalization of natural environments.</li>
                <li><span className="font-semibold">Donate</span>: Consider making a donation to Seed Bombs Tanzania to support their ongoing projects and initiatives.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Page