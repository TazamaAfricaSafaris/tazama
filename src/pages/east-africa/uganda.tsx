/* eslint-disable react/no-unescaped-entities */
import { array } from 'fast-web-kit'
import React from 'react'
import ContentSection, { contentSectionData } from '~/components/ContentSection'
import PrimaryHeader from '~/components/PrimaryHeader'
import { ugandaContent } from '~/data/east-africa'

const uganda = () => {
    return (
        <>
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

            <section className='max-w-5xl my-20 mx-auto text-center'>
                <p>Planning to visit Uganda? Book with us via the form below</p>
            </section>
        </>
    )
}

export default uganda