import React from 'react'
import Carousel, { CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './Carousel'
import Image from 'next/image'
import Link from 'next/link'

const HomeTrekkingCarousel = () => {
  return (
    <Carousel
      opts={{
        align: 'start'
      }}
      className='w-full relative mt-36 mb-16'
    >
      <CarouselContent>
        <CarouselItem className=' w-full min-h-[80vh] md:h-screen relative '>
          {/* <div className='w-full bg-gradient-to-b from-[#f5f1eb] py-10 absolute top-0 left-0 z-20' /> */}
          <div className='z-20 absolute top-1/2 p-4 max-w-4xl left-[5%] -translate-y-1/2'>
            <h3 className='text-white text-6xl'>Mount Kilimanjaro</h3>
            <p className='text-[#f5f1eb]'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum rem accusantium rerum minima sequi totam quisquam, nam quibusdam nobis laborum necessitatibus corrupti voluptas distinctio beatae. Architecto nisi quaerat optio. Nostrum?
            </p>
            <br />
            <Link href='safaris/kilimanjaro' className="border border-white rounded-md px-4 lg:px-6 py-2 mt-4 md:text-lg text-xl font-raleway text-white hover:bg-white/90 hover:text-primary transition-colors duration-200">
              See More
            </Link>
          </div>
          <Image
            layout='fill'
            className='object-cover brightness-50'
            src='https://res.cloudinary.com/drhl0yu7y/image/upload/v1724412906/home/harshil-gudka--2qN2QQwT8s-unsplash_sjlhig.jpg'
            alt='Mount Meru'
          />
        </CarouselItem>
        <CarouselItem className='relative'>
          {/* <div className='w-full bg-gradient-to-b from-[#f5f1eb] py-10 absolute top-0 left-0 z-20' /> */}
          <div className='z-20 absolute top-1/2 p-4 max-w-4xl left-[5%] -translate-y-1/2'>
            <h3 className='text-white text-6xl'>Mount Meru</h3>
            <p className='text-[#f5f1eb]'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum rem accusantium rerum minima sequi totam quisquam, nam quibusdam nobis laborum necessitatibus corrupti voluptas distinctio beatae. Architecto nisi quaerat optio. Nostrum?
            </p>
            <br />
            <Link href='safaris/mount-meru' className="border border-white rounded-md px-4 lg:px-6 py-2 mt-4 md:text-lg text-xl font-raleway text-white hover:bg-white/90 hover:text-primary transition-colors duration-200">
              See More
            </Link>
          </div>
          <Image
            layout='fill'
            className='object-cover brightness-75'
            src='https://res.cloudinary.com/drhl0yu7y/image/upload/v1724408229/home/20111101_meru-1044-edit_custom-d148e1f741740cd0ce864e2790f37948955e2859_grzpjx.webp'
            alt='Mount Meru'
          />
        </CarouselItem>
      </CarouselContent>
      <div className='absolute bottom-20 left-2 lg:left-16'>
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  )
}

export default HomeTrekkingCarousel