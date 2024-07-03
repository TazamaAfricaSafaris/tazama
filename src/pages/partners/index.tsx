import React from 'react'
import PrimaryHeader from '../../components/PrimaryHeader'
import HeadSEO from '../../components/ui/Head'
import { base_keywords } from '../../lib/constants'
import ContentSection from '~/components/ContentSection'

const index = () => {
    return (
        <>
            <HeadSEO title='Tazama Africa | Our Partners' keywords={base_keywords} />
            <PrimaryHeader image="partners-header.jpg" title="Our Partners" />

            <section className='my-20 max-w-5xl mx-auto md:px-8 px-4 text-center'>
                <h3 className='text-[2.5rem] text-primary'>Our Trusted Collaborators</h3>
                <p className='px-4 mt-4'>
                    At <a href="/about-us" className='underline underline-offset-4'>Tazama Africa Safaris</a>, we pride ourselves on collaborating with top-tier partners to ensure our guests receive the best experiences Africa has to offer. Our partnerships are carefully selected to align with our commitment to quality, sustainability, and exceptional service. Here’s a look at some of our esteemed partners who help us create unforgettable adventures.
                </p>
            </section>

            <section>
                <ContentSection
                    rank={0}
                    image={'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720009809/partners/kafika-house-img2_twpyre.jpg'}
                    title={'Kafika House'}
                    reverse={false}
                    description={'Kafika House is a residential rehabilitation center dedicated to helping children with correctable disabilities such as clubfoot, cleft lip and palate, fluorosis, burn scar contracture, masses, and neurological conditions like spina bifida and hydrocephalus.'}
                    action='/partners/kafika-house'
                    actionTitle='More on Kafika House' />
                <br />
                <br />
                <ContentSection
                    rank={0}
                    image={'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720009808/partners/rustic-pathways-img_f740wq.jpg'}
                    title={'Rustic Pathways'}
                    reverse={true}
                    description={"Rustic Pathways is an organization that organizes trips around the world for youth and students helping them to help push students' boundaries and their comfort zones through travel"}
                    action='/partners/rustic-pathways'
                    actionTitle='More on Rustic Pathways' />
                <br />
                <br />
                <ContentSection
                    rank={0}
                    image={'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720011400/partners/seed-bombs/seed-bombs-img1_ovlnro.jpg'}
                    title={'Seedbombs Tanzania'} reverse={false}
                    description={'Seedbombs Tanzania is an organization that brings people together to learn and engage directly with seeds and trees to promote a deeper appreciation for the natural world.'}
                    action='/partners/seed-bombs-tanzania'
                    actionTitle='More on Seed Bombs Tanzania' />
            </section>
        </>
    )
}

export default index