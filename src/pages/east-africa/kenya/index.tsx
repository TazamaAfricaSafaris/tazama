/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import PrimaryHeader from '~/components/PrimaryHeader'
import ContentSection, { contentSectionData } from '~/components/ContentSection'
import { kenyaContent } from '~/data/east-africa'
import { array } from 'fast-web-kit'

const kenya = () => {
  return (
    <>
      <PrimaryHeader title='Kenya' image='kenya/kenya.jpg' />
      <div className='max-w-5xl mx-auto my-20'>
        <p className='text-left leading-relaxed'>
          Kenya safaris offer a magical mix of wildlife adventures and scenic beauty, drawing visitors from all corners of the globe. Renowned for its incredible wildlife and world-famous safari destinations, Kenya offers a true African safari experience that is hard to match. Imagine seeing the Big Five (lion, leopard, buffalo, elephant, and rhinoceros) in iconic national parks like the Maasai Mara, Amboseli, and Tsavo, or relaxing on the pristine coastline near Mombasa.
          <br /><br />
          From spotting vast herds of animals during the Great Migration to exploring Kenya’s coastal treasures, this country offers something for every kind of traveler. With a rich diversity of landscapes and a warm, welcoming culture, Kenya safaris deliver unforgettable experiences.

        </p>

        <section className='my-16'>
          <h3 className='text-5xl mb-2 text-primary'>Why Visit Kenya</h3>
          <p className='leading-relaxed'>
            Kenya’s landscapes are breathtaking, featuring a dramatic mix of calderas, mountain ranges, and the Great Rift Valley, which divides the country. Adventure seekers will love hiking Mount Kenya’s snow-capped peaks, while those seeking relaxation can enjoy the hot springs and natural geysers of Hell's Gate National Park. A Kenya safari combines all of these wonders with world-class wildlife viewing, making it a must-visit destination for nature lovers and adventurers alike.
          </p>
        </section>

      </div>
      <section className='flex flex-col gap-y-8 lg:gap-y-14 lg:mt-0'>
        {
          array
            .sort(kenyaContent, "asc", "rank")
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

      <section className='max-w-5xl my-20 mx-auto text-center'>
        <p className='mb-8'>
          Kenya offers an array of activities to make your safari memorable. You can hike Mount Kenya, witness the Wildebeest Migration, scuba dive in the Indian Ocean, sail the Lamu Archipelago, enjoy bird watching, take a hot air balloon ride over the Maasai Mara, or embark on game drives across the country’s famed parks. Kenya truly has something for everyone.
        </p>
        <p>Planning to visit Kenya? Book with us via the form below</p>
      </section>
    </>
  )
}

export default kenya