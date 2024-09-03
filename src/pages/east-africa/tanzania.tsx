/* eslint-disable react/no-unescaped-entities */
import { array } from 'fast-web-kit'
import React from 'react'
import ContentSection, { contentSectionData } from '~/components/ContentSection'
import PrimaryHeader from '~/components/PrimaryHeader'
import { tanzaniaContent } from '~/data/east-africa'

const tanzania = () => {
  return (
    <>
      <PrimaryHeader title={'Tanzania'} image='tanzania.jpg' />

      <section
        className='my-20 max-w-5xl px-4 xl:px-8 mx-auto'
      >
        <p className='text-left'>
          Tanzania is renowned for its stunning landscapes, rich biodiversity, abundant wildlife, it's rich culture and breath taking beaches making it the ultimate destination for for travellers and adventurers. Some of the most iconic wildlife sceneries as well as Africa's highest peak call Tanzania home. From the Serengeti to Kilimanjaro to the luxurious beaches of Zanzibar, Tanzania is a gallery of experiences waiting to be discovered.
        </p>
      </section>

      <section className='flex flex-col gap-y-8 lg:gap-y-14 lg:mt-0'>
        {
          array
            .sort(tanzaniaContent, "asc", "rank")
            .map((content: contentSectionData) => (
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

      <section className='max-w-5xl mx-auto my-16'>
        <p className='text-center'>
          Tanzania is a land of contrasts and surprises, where every corner of the country offers something new and exciting to discover. From the sweeping plains of the Serengeti to the towering peaks of Kilimanjaro, from the vibrant cultures of its people to the serene beauty of its beaches, Tanzania is a destination that captivates the heart and soul. A visit to Tanzania is more than just a trip; it’s an adventure that will leave you with memories to last a lifetime.
          <br /><br />
          Whether you’re a nature lover, a cultural enthusiast, or an adventurer at heart, Tanzania has something to offer you. So pack your bags and get ready to embark on a journey to one of the most beautiful and diverse countries in the world – Tanzania awaits!
        </p>
        <br />
        <p className='text-center'>Planning to visit Tanzania? Book with us via the form below</p>
      </section>
    </>
  )
}

export default tanzania