/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import PrimaryHeader from '~/components/PrimaryHeader'
import ContentSection, { type contentSectionData } from '~/components/ContentSection'

import Carousel, { CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '~/components/Carousel'
import { kenyaContent } from '~/data/east-africa'
import { array } from 'fast-web-kit'

import Link from 'next/link'
import Image from 'next/image'
import HeadSEO from '~/components/ui/Head'
import { base_keywords } from '~/lib/constants'
import CallToAction from '~/components/CallToAction'

const kenya = () => {
  return (
    <>
      <HeadSEO title='Tazama Africa Safaris | Kenya' keywords={`kenya, Kenaya ${base_keywords}`}/>
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

      <section className='max-w-5xl my-20 mx-auto px-4'>
        <h4 className="text-4xl text-primary">Our Itenaries</h4>
        <br />
        <Carousel className='w-full max-w-sm md:max-w-none'>
          <CarouselPrevious />
          <CarouselContent>
            {
              itenaries.map(itenary => (
                <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={itenary.link}>
                  <Link href={`kenya/${itenary.link}`}>
                    <div className='bg-black w-full h-80 md:h-96 relative overflow-hidden'>
                      <Image
                        src={itenary.img}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        className='w-full h-full object-cover brightness-90'
                      />
                    </div>
                    <p className='mt-2 text-xl z-10'>{itenary.title}</p>
                  </Link>
                </CarouselItem>
              ))
            }
          </CarouselContent>
          <CarouselNext />
        </Carousel>
      </section>


      <section className='max-w-5xl my-20 mx-auto text-center'>
        <p className='mb-8'>
          Kenya offers an array of activities to make your safari memorable. You can hike Mount Kenya, witness the Wildebeest Migration, scuba dive in the Indian Ocean, sail the Lamu Archipelago, enjoy bird watching, take a hot air balloon ride over the Maasai Mara, or embark on game drives across the country’s famed parks. Kenya truly has something for everyone.
        </p>
        <p>Planning to visit Kenya? Book with us via the form below</p>
      </section>

      <br /><br /><br />
      <CallToAction />
    </>
  )
}

export default kenya

const itenaries = [
  {
    link: '3-days-amboseli-safari',
    title: '3 Days Amboseli Fly-in Safari',
    img: 'https://res.cloudinary.com/drhl0yu7y/image/upload/v1731333470/east-africa/kenya/3-day-amboseli-safari/adore-africa-kenya-amboseli-slider-03_zf7oup.jpg'
  },
  {
    link: '3-days-masai-mara-safari',
    title: '3 Days Masai Mara Fly-in Safari',
    img: 'https://res.cloudinary.com/drhl0yu7y/image/upload/v1731335119/east-africa/kenya/3-day-masai-mara-safari/wildebeest-zebra-maasai-mara-national-reserve-kenya-africa_kk6cpk.webp'
  },
  {
    link: '4-days-and-beyond-luxury-safari',
    title: '4 Days and Beyond Luxury Safari',
    img: 'https://res.cloudinary.com/drhl0yu7y/image/upload/v1731329695/east-africa/kenya/4-days-and-beyond-luxury-safari/Masai-Mara-National-Reserve_zdzfci.jpg'
  },
  {
    link: '5-days-kenya-safari-amboseli-and-tsavo',
    title: '5 Days Kenya Safari – Amboseli and Tsavo',
    img: 'https://res.cloudinary.com/drhl0yu7y/image/upload/v1731332122/east-africa/kenya/5-days-kenya-safari/Tsavo-West-leopards_o8fnib.jpg'
  },
  {
    link: '6-day-amboseli-maasai-mara-fly-in',
    title: '6 Day Amboseli-Maasai Mara Fly-in Safari',
    img: 'https://res.cloudinary.com/drhl0yu7y/image/upload/v1731328470/east-africa/kenya/6-day-amboselu-maasai-safari/_copyright_beverly_joubert_oldonyo_wildlife_kenya_5717_gr6dpt.webp'
  },
]