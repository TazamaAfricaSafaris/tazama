/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable react/no-unescaped-entities */
import { array } from 'fast-web-kit'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CallToAction from '~/components/CallToAction'
import Carousel, { CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '~/components/Carousel'
import ContentSection from '~/components/ContentSection'
import PrimaryHeader from '~/components/PrimaryHeader'
import HeadSEO from '~/components/ui/Head'
import { rwandaContent } from '~/data/east-africa'
import { base_keywords } from '~/lib/constants'

const kenya = () => {
  return (
    <>
      <HeadSEO title='Tazama Africa Safaris | Rwanda' keywords={base_keywords} />
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

      <section className='max-w-5xl my-20 mx-auto px-4'>
        <h4 className="text-4xl text-primary">Our Itenaries</h4>
        <br />
        <Carousel className='w-full max-w-sm md:max-w-none'>
          <CarouselPrevious />
          <CarouselContent>
            {
              itenaries.map(itenary => (
                <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={itenary.link}>
                  <Link href={`rwanda/${itenary.link}`}>
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

      <section className='max-w-5xl my-20 mx-auto text-center px-4'>
        <p>Planning to visit Rwanda? Book with us via the form below</p>
      </section>

      <br /><br /><br />
      <CallToAction />
    </>
  )
}

export default kenya

const itenaries = [
  {
    link: 'rwanda-gorilla-safari',
    title: 'Rwanda Gorilla Safari',
    img: 'https://res.cloudinary.com/drhl0yu7y/image/upload/v1730709645/east-africa/rwanda/rwanda-gorilla-trekking/49197853001_362e5dca1e_k_lpuofw.webp'
  },
  {
    link: '4-day-gorilla-trekking',
    title: '4 Day Gorilla Trekking',
    img: 'https://res.cloudinary.com/drhl0yu7y/image/upload/v1730707076/east-africa/rwanda/4-day-gorilla-trekking/35303680765_e4d19f5a46_k_jqahjx.webp'
  },
  {
    link: '5-day-rwanda-itenary',
    title: '5 Day Rwanda Safari',
    img: 'https://res.cloudinary.com/drhl0yu7y/image/upload/v1730709939/east-africa/rwanda/5-day-rwanda-safari/51912508047_1719d91c62_k_nejeon.webp'
  },
  {
    link: '6-day-rwanda-safari',
    title: '6 Day Rwanda Safari',
    img: 'https://res.cloudinary.com/drhl0yu7y/image/upload/v1730710201/east-africa/rwanda/6-day-rwanda-safari/40185985184_8a3cd7cad6_k_ud0kay.webp'
  },
]