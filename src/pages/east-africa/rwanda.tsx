/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/no-unescaped-entities */
import { array } from 'fast-web-kit'
import React from 'react'
import ContentSection from '~/components/ContentSection'
import PrimaryHeader from '~/components/PrimaryHeader'
import { rwandaContent } from '~/data/east-africa'

const kenya = () => {
  return (
    <>
      <PrimaryHeader title='Rwanda' image='rwanda/rwanda.jpg' />
      <section className='max-w-5xl mx-auto '>
        <div className='my-20'>
          <p className='text-left leading-relaxed'>
            Rwanda, a country renowned for its stunning biodiversity, volcanoes, and lush highland rainforests, offers a safari experience unlike any other. Although small in size, Rwanda is bursting with natural beauty, welcoming people, and rich culture. The highlight of any Rwandan safari is gorilla trekking, where you’ll have the once-in-a-lifetime opportunity to observe the majestic and endangered mountain gorillas in their natural habitat. Rwanda’s capital, Kigali, is known for its clean streets, developed infrastructure, and five-star accommodations, making it a perfect base for your adventure. A trip to Rwanda is more than just a safari; it's a chance to experience the heart of Africa in its purest form.
          </p>
        </div>
      </section>

      <section className='flex flex-col gap-y-8 lg:gap-y-14 lg:mt-0'>
        {
          array
            .sort(rwandaContent, "asc", "rank")
            .map(content => (
              <ContentSection
                key={content.rank}
                rank={content.rank}
                image={content.image}
                title={content.title}
                reverse={content.reverse}
                description={content.description}
              />
            ))
        }
      </section>

      <section className='max-w-5xl my-20 mx-auto text-center'>
        <p>Planning to visit Rwanda? Book with us via the form below</p>
      </section>
    </>
  )
}

export default kenya