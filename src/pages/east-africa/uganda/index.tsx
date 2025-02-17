/* eslint-disable react/no-unescaped-entities */
import { array } from 'fast-web-kit'
import Link from 'next/link'
import React from 'react'
import { CarouselContent, CarouselPrevious, Carousel, CarouselItem, CarouselNext } from '~/components/Carousel'
import ContentSection, { type contentSectionData } from '~/components/ContentSection'
import PrimaryHeader from '~/components/PrimaryHeader'
import { ugandaContent } from '~/data/east-africa'

import Image from "next/image"
import HeadSEO from '~/components/ui/Head'
import { base_keywords } from '~/lib/constants'
import CallToAction from '~/components/CallToAction'

const uganda = () => {
    return (
        <>
            <HeadSEO title='Tazama Africa Safaris | Uganda' keywords={base_keywords} />
            <PrimaryHeader title='Uganda' image={'chimps.webp'} />
            <section className='max-w-5xl mx-auto '>
                <div className='my-20'>
                    <h3 className='text-4xl mb-2 text-primary'>Discover the Magic of Uganda Safaris</h3>
                    <p className='text-left leading-relaxed'>
                        Uganda, affectionately known as the "Pearl of Africa," is a land rich in biodiversity, vibrant culture, and breathtaking beauty. From its stunning landscapes to its diverse wildlife, Uganda has it all for any traveler. Whether it's the magnificent gorilla trekking, exploring crystal-clear lakes, or experiencing the power of the world’s strongest waterfall, Uganda offers a true adventure that feels like a fairy tale. Winston Churchill wasn't wrong when he described Uganda as an enchanting and unique destination. With its moderate climate and unparalleled diversity of experiences, Uganda should be on every traveler's bucket list. The only way to truly understand its magic is by exploring it for yourself.
                    </p>
                </div>

                <div className='my-16'>
                    <h3 className='text-4xl mb-2 text-primary'>Why Choose Uganda for Your Safari Adventure</h3>
                    <p>
                        Uganda offers a unique blend of wildlife experiences that are hard to match. Imagine trekking through lush jungles in search of mountain gorillas or taking in the stunning views of snow-capped mountains. For wildlife lovers, Uganda provides unforgettable encounters with gorillas, chimpanzees, and the famous Big Six (elephants, leopards, lions, buffalos, rhinos, and gorillas). Be sure to visit Bwindi Impenetrable National Park, Queen Elizabeth National Park, and Murchison Falls National Park – they are the heart and soul of Uganda’s safari experiences.
                        <br /><br />
                        Wildlife Safaris in Uganda: Where Nature Comes Alive
                        Uganda’s wildlife is incredibly diverse, thanks to its vast savannah grasslands and dense tropical forests. Unlike any other East African country, Uganda is home to both gorilla and chimpanzee trekking opportunities, making it the ultimate destination for primate lovers. In addition, you can see tree-climbing lions in the Ishasha region of Queen Elizabeth National Park – a rare sight only shared with Tanzania’s Lake Manyara.
                        <br /><br />
                        The combination of lush landscapes, diverse animal species, and the thrill of tracking primates in their natural habitats makes Uganda a premier destination for wildlife enthusiasts.
                    </p>
                </div>
            </section>

            <section className='flex flex-col gap-y-8 lg:gap-y-14 lg:mt-0'>
                {
                    array
                        .sort(ugandaContent, "asc", "rank")
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
                                    <Link href={`uganda/${itenary.link}`}>
                                        <div className='bg-light w-full h-80 md:h-96 relative overflow-hidden'>
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
                <p>Planning to visit Uganda? Book with us via the form below</p>
            </section>

            <br /><br /><br />
            <CallToAction />
        </>
    )
}

export default uganda

const itenaries = [
    {
        link: 'chimps-wildlife-fishing-safari',
        title: 'Chimps, Wildlife and Fishing Safari',
        img: 'https://res.cloudinary.com/drhl0yu7y/image/upload/v1730711197/east-africa/uganda/chimps-wildlife-fishing-safari/49198076118_4fa0090611_k_bbsmqo.jpg'
    },
    {
        link: 'uganda-gorilla-safari-fly-in',
        title: '4 Day Gorilla Trekking',
        img: 'https://res.cloudinary.com/drhl0yu7y/image/upload/v1730711559/east-africa/uganda/uganda-gorilla-safari/26022685797_fb352d1d64_k_eqveca.webp'
    },
]