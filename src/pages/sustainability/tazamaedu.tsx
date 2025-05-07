/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import PrimaryHeader from '~/components/PrimaryHeader'
import HeadSEO from '~/components/ui/Head'
import { base_keywords } from '~/lib/constants'

const Page = () => {
    return (
        <>
            <HeadSEO 
                title='TazamaEdu | Tazama Africa Safari Educational Initiative' 
                keywords={`${base_keywords}, TazamaEdu, conservation education, youth education Tanzania, wildlife education, experiential learning, national park visits, environmental stewardship, conservation program, domestic tourism, underprivileged youth support`} 
                description="TazamaEdu is Tazama Africa Safari's educational initiative fostering the next generation of conservationists in Tanzania through immersive national park experiences, bridging the gap between academic knowledge and real-world conservation efforts."
            />
            <PrimaryHeader title='TazamaEdu' image='/tazama-edu/tazama-edu-header.jpg' />
            <div className='max-w-5xl mx-auto my-20'>
                <h3 className='text-5xl mb-6 text-primary text-center'>Fostering Future Conservationists with TazamaEdu</h3>
                <p>
                    At Tazama Africa Safari, our commitment to conservation and community is at the heart of everything we do. Recognizing the vital role that education plays in preserving our natural heritage, we've launched <span className='font-semibold'>TazamaEdu</span>
                </p>

                <p className='mt-2'>
                    <span className='font-semibold'>TazamaEdu</span> is an initiative dedicated to nurturing the next generation of conservationists. Our mission is: to instill a deep love and understanding of wildlife and nature in the youth, ensuring the preservation of our environment for years to come.
                </p>

                <div className='flex flex-col md:flex-row gap-8 mt-16'>
                    <div className="w-full">
                        <h4 className='text-4xl text-primary mb-4'>Our Approach</h4>
                        <p>TazamaEdu bridges the gap between academic knowledge and real-world conservation efforts by engaging with local schools in our operational regions. We've crafted a comprehensive educational program that brings conservation to life for students in both primary and secondary schools</p>
                        <br /><br />
                        <h4 className='text-4xl text-primary mb-4'>Experiential Learning in National Parks</h4>
                        <p>
                            We believe that true passion for nature comes from firsthand experience. That's why we take students on immersive trips to national parks, where they receive the same first-class treatment as our esteemed guests. Accompanied by seasoned guides, these young explorers are introduced to the splendors of the parks and the critical importance of environmental stewardship.
                        </p>
                    </div>
                    <div className="w-full h-80 lg:h-[28rem]">
                        <Image
                            width={300}
                            height={300}
                            src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1720013053/tazamaedu/tazama-edu-img2_msfx4p.jpg"
                            alt="TazamaEdu"
                            className='object-cover h-full w-full' />
                    </div>
                </div>
                <div className='mt-16'>
                    <h4 className='text-4xl text-primary mb-4'>Addressing Domestic Tourism and Accessibility</h4>
                    <p>
                        Despite living in close proximity to national treasures, many local children have never had the opportunity to visit a national park. Domestic tourism often takes a backseat due to a lack of exposure and engagement with the natural world from a young age. TazamaEdu aims to change this narrative, showing young Tanzanians the value and beauty of their natural heritage.
                    </p>
                </div>
                <div className='flex flex-col md:flex-row-reverse gap-8 mt-16'>
                    <div className="w-full">
                        <h4 className='text-4xl text-primary mb-4'>Focus on Local Youth</h4>
                        <p>Our focus is particularly on the youth of Tanzania, especially those in the regions surrounding our operations. These are the young minds who will one day become the custodians of our tourism sector and the natural wonders it depends on. By sparking their interest and passion early on, we're investing in the future of our wildlife and the communities that coexist with it.</p>
                        <br /><br />
                        <h4 className='text-4xl text-primary mb-4'>Supporting Underprivileged Youth</h4>
                        <p>
                            We recognize that for many children, especially those facing hardship, a visit to a national park is an unattainable dream. Tazama Africa Safari is committed to making this dream a reality. Through TazamaEdu, we provide these experiences at no cost to the children, fostering a connection with nature that transcends socioeconomic barriers.
                        </p>
                    </div>
                    <div className="w-full h-80 lg:h-[28rem]">
                        <Image
                            width={300}
                            height={300}
                            src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1720013053/tazamaedu/tazama-edu-img4_xqlrd9.jpg"
                            alt=""
                            className='object-cover h-full w-full'
                        />
                    </div>
                </div>

                <div className='mt-16'>
                    <h4 className='text-4xl text-primary mb-4'>Giving Back and Moving Forward</h4>
                    <p>
                        TazamaEdu is more than just an educational program; it's our way of giving back to the community and promoting a sustainable future. By igniting a passion for conservation in the next generation, we're laying the groundwork for a future where wildlife thrives and communities prosper. Join us as we educate, inspire, and prepare the conservation leaders of tomorrow.
                    </p>
                </div>
            </div>
        </>
    )
}

export default Page