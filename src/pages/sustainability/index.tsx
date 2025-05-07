/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Link from "next/link"
import PrimaryHeader from '~/components/PrimaryHeader'
import Image from 'next/image'
import HeadSEO from '~/components/ui/Head'
import { base_keywords } from '~/lib/constants'

const Page = () => {
    return (
        <>
            <HeadSEO 
                title='Tazama Africa Safari | Sustainability' 
                keywords={`${base_keywords}, sustainable tourism, eco-friendly safaris, responsible travel, conservation efforts, community engagement, environmental protection, wildlife conservation, plastic reduction, local employment, educational outreach, TazamaEdu, Kafika House, Tanzania conservation`} 
                description="Discover Tazama Africa Safari's commitment to sustainable tourism in Tanzania. Our comprehensive initiatives focus on environmental protection, community support, and responsible business practices to preserve Tanzania's natural beauty for future generations."
            />
            <PrimaryHeader title='Sustainability with Tazama' image='sustainability/sustainability-header.jpg' />
            <div className='max-w-5xl mx-auto my-20'>
                <div className="px-4 md:px-8 lg:px-4">
                    <h3 className='text-5xl text-center mb-6 text-primary'>Our Commitment to Sustainability</h3>
                    <p>
                        At <Link href={'/about'} className='underline underline-offset-4'>Tazama Africa Safari</Link>, sustainability is not just a buzzword but a guiding principle embedded in every aspect of our operations. As a leading Tanzanian tour company, we recognize our responsibility to preserve the natural beauty of our environment, support our local communities, and operate in a manner that ensures long-term viability. We are proud of our efforts and remain committed to making a positive impact through our comprehensive sustainability initiatives.
                    </p>
                </div>

                <section className='mt-16 px-4 md:px-8 lg:px-4'>
                    <h4 className="text-3xl text-primary mb-3">Environmental Sustainability</h4>
                    <p>
                        ●	<span className='font-semibold'>Pollution Reduction</span>: We are dedicated to reducing pollution, particularly plastic waste, in our safari operations. To combat the pervasive issue of single-use plastics, we provide our guests and staff with reusable water bottles. This initiative significantly cuts down on plastic waste, ensuring that our tours do not contribute to the pollution of Tanzania's stunning landscapes.
                    </p>
                    <p className="mt-3">
                        ●	<span className='font-semibold'>Sustainable Safaris</span>: Our safaris are designed with sustainability at their core. We promote low-impact tourism activities. We strive to protect the natural habitats we explore, ensuring that wildlife can thrive for generations to come.
                    </p>
                </section>
                <br /><br />
                <section>
                    <div className='flex flex-col md:flex-row gap-8'>
                        <div className='w-full px-4 md:py-8 md:px-8 lg:px-4'>
                            <h4 className="text-3xl text-primary mb-3">Social Sustainability</h4>
                            <p>
                                ●	<span className='font-semibold'>Community Engagement</span>: We have built strong, supportive relationships with local communities around us. By sourcing products and services locally, we ensure that our growth directly benefits those who live in the areas we operate. For instance, we collaborate with local artisans, particularly women at the Maasai Market, purchasing gifts and accessories that reflect Tanzania's rich cultural heritage.
                            </p>
                            <p className='mt-3'>
                                ●	<span className='font-semibold'>Partnership with Kafika House</span>: Our partnership with Kafika House, a non-profit organization and residential rehabilitation center, exemplifies our commitment to social sustainability. Kafika House supports children with correctable disabilities, such as clubfoot, cleft lip and palate, fluorosis, burn scar contractures, and neurological conditions like spina bifida and hydrocephalus. By supporting Kafika House, we help improve the lives of these children, enabling them to lead healthier, more fulfilling lives.
                            </p>
                            <p className="mt-3">
                                ●	<span className='font-semibold'>Local Employment</span>: We are dedicated to creating job opportunities for local residents. By hiring locally, we not only provide employment but also invest in the future of Tanzania's communities. This approach ensures that the benefits of tourism are felt broadly, fostering economic stability and growth.
                            </p>
                            <p className="mt-3">
                                ●	<span className='font-semibold'>Educational Outreach - TazamaEdu</span>: Through our TazamaEdu initiative, we engage with local schools to foster a love and understanding of wildlife and nature among the youth. This program includes experiential learning trips to national parks, giving students firsthand experience with conservation efforts. By educating the next generation, we aim to cultivate future conservationists who will continue to protect and preserve Tanzania's natural treasures.
                            </p>
                        </div>
                        <div className='w-full max-md:h-80'>
                            <Image
                                width={300}
                                height={300} src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1720012496/sustainability/sustainability-img3_cmb18m.jpg" alt="Sustainability" className='w-full h-full object-cover' />
                        </div>
                    </div>
                </section>
                <br /><br />
                <section>
                    <h4 className="text-3xl text-primary mb-3">Economic Sustainability</h4>
                    <p>
                        At Tazama Africa Safari, we believe in conducting our business responsibly and ethically. We adhere to principles of corporate governance, ensuring transparency and accountability in all our operations.
                    </p>
                </section>
                <br /><br />
                <section>
                    <h4 className='text-4xl text-primary mb-3'>The Impact of Our Efforts</h4>
                    <p>Our sustainability initiatives have had a profound impact on the environment, our communities, and the economy. By reducing plastic waste, supporting local businesses, providing educational opportunities, and ensuring responsible business practices, we are making a positive difference every day.</p>
                </section>
                <br /><br />
                <section className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        sustainabilityProjects.map((item, index) => (
                            <div className='group' key={index}>
                                <Link href={item.link} className="relative cursor-pointer">
                                    <>
                                        <div className="relative h-[200px] w-full">
                                            <Image
                                                src={`${item.img}`}
                                                alt=""
                                                layout="fill"
                                                className="object-cover group-hover:brightness-95"
                                            />
                                        </div>
                                        <p className="mt-3 text-xs text-primary sm:text-sm md:text-lg">
                                            {item.title}
                                        </p>
                                    </>
                                </Link>
                            </div>
                        ))
                    }
                </section>
            </div>
        </>
    )
}

export default Page

const sustainabilityProjects = [
    {
        title: 'TazamaEdu',
        img: 'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720013053/tazamaedu/tazama-edu-img4_xqlrd9.jpg',
        link: '/sustainability/tazamaedu'
    },
    {
        title: 'Kafika House',
        img: 'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720010826/partners/kafika-house/kafika-house-img2_ex1cfi.jpg',
        link: '/partners/kafika-house'
    },
    {
        title: 'Seed Bombs Tanzania',
        img: 'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720012717/partners/seed-bombs/seed-bombs-header_alg2df.jpg',
        link: '/partners/seed-bombs-tanzania'
    },
]