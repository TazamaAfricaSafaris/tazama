import React from 'react'
import PrimaryHeader from '~/components/PrimaryHeader'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'
import { ZohoFormButton } from './tours/[slug]'
import Link from 'next/link'
import ContentSection from '~/components/ContentSection'
import Accordion from '~/components/Accordion'
import HeadSEO from '~/components/ui/Head'

const PrismsHike = () => {
    const children_images = [
        {
            src: 'https://res.cloudinary.com/drhl0yu7y/image/upload/v1770114970/prisms-kili-climb/prisms-child_luf1n3.jpg',
            alt: 'Kilimanjaro H'
        },
        {
            src: 'https://res.cloudinary.com/drhl0yu7y/image/upload/v1770114970/prisms-kili-climb/prisms-child-2_vorhxq.jpg',
            alt: 'Kilimanjaro H'
        },
        {
            src: 'https://res.cloudinary.com/drhl0yu7y/image/upload/v1770114970/prisms-kili-climb/prisms-child-3_brrphy.jpg',
            alt: 'Kilimanjaro H'
        }
    ]

    const includes = [
        "Professional mountain guides and support crew",
        "Park fees and climbing permits",
        "Accommodation on the mountain",
        "Accommodation before and after the climb.",
        "All meals during the climb",
        "Group coordination and on-the-ground support by Tazama Africa"
    ]

    const excludes = [
        "International flights",
        "Travel insurance (required)",
        "Personal climbing gear",
        "Tips for mountain crew"
    ]

    const whatHappens = [
        "You’ll receive additional details about the climb and preparation",
        "We’ll share pricing, timelines, and fundraising information",
        "You’ll have the opportunity to ask questions before confirming your participation"
    ]

    return (
        <>
            <HeadSEO
                title='Tazama X PRISMS Foundation Kilimanjaro Climb'
                keywords='Tazama, PRISMS Foundation, Kilimanjaro Climb, Mount Kilimanjaro, Group Climb, Support for Research, Smith-Magenis Syndrome, PRISMS'
                description='Join us on a guided group climb of Mount Kilimanjaro in support of the PRISMS Foundation and research into Smith-Magenis Syndrome (SMS). This climb brings together purpose, community, and a once-in-a-lifetime experience on Africa’s highest mountain.'
            />
            <PrimaryHeader
                title='Tazama X PRISMS Foundation'
                imageUrl='https://images.pexels.com/photos/31121292/pexels-photo-31121292.jpeg'
            />

            <section className='mx-auto max-w-5xl px-4 md:px-8 mb-20 mt-36'>
                <div>
                    <h3 className='text-5xl text-primary text-center'>Climbing Mount Kilimanjaro For a Cause</h3>
                    <br />
                    <p className='text-center mx-auto max-w-3xl'>
                        Join us on a guided group climb of Mount Kilimanjaro in support of the PRISMS Foundation and research into Smith-Magenis Syndrome (SMS). This climb brings together purpose, community, and a once-in-a-lifetime experience on Africa’s highest mountain.
                    </p>
                    <br />
                    <div className='mx-auto flex justify-center'>
                        <ZohoFormButton
                            title='Tazama X PRISMS Foundation Kilimanjaro Climb Registration'
                            btnTitle='Register Here'
                            link='https://forms.zohopublic.com/tazamaafricatourssafari1/form/REGISTERINGFORKILIMANJAROCLIMBinsupportofthePRISMS/formperma/tnMr5IILLzMDCOY59PORCWqlbFBiCbliY68AB9ZnCss'
                        />
                    </div>
                </div>

                <div className='w-full flex items-center gap-4'>
                    <div className='relative w-full h-96'>
                        <Image
                            src='https://res.cloudinary.com/drhl0yu7y/image/upload/v1770114027/prisms-kili-climb/tom-cleary-vdMllb3x-1s-unsplash_1_bojfey.jpg'
                            alt='Kilimanjaro Hike'
                            fill
                            className='my-8 mx-auto rounded-lg object-cover'
                        />
                    </div>
                    <div className='relative w-full h-96'>
                        <Image
                            src='https://res.cloudinary.com/drhl0yu7y/image/upload/v1770114265/prisms-kili-climb/david-magalhaes-Yz8r_LeSuow-unsplash_lkqvbe.jpg'
                            alt='Kilimanjaro Hike'
                            fill
                            className='my-8 mx-auto rounded-lg object-cover'
                        />
                    </div>
                </div>
            </section>

            <section className='mx-auto max-w-5xl px-4 md:px-8 mt-36 mb-20'>
                <h3 className='text-5xl text-primary text-center'>About the Cause: PRISMS Foundation</h3>
                <br />
                <div className='text-center max-w-4xl mx-auto'>
                    <p>
                        The PRISMS Foundation is dedicated to supporting individuals and families affected by Smith-Magenis Syndrome (SMS) through research, advocacy, education, and community support.
                    </p>
                    <br />
                    <p>
                        Funds raised through this climb will help advance research initiatives, increase awareness, and provide resources to families navigating life with SMS. Every step we take on the mountain contributes to a larger mission of understanding, support, and hope.
                    </p>
                </div>
                <br />
                <div className='mx-auto flex justify-center'>
                    <ZohoFormButton
                        title='Tazama X PRISMS Foundation Kilimanjaro Climb Registration'
                        btnTitle='Register Here'
                        link='https://forms.zohopublic.com/tazamaafricatourssafari1/form/REGISTERINGFORKILIMANJAROCLIMBinsupportofthePRISMS/formperma/tnMr5IILLzMDCOY59PORCWqlbFBiCbliY68AB9ZnCss'
                    />
                </div>

                <div className='w-full flex items-center gap-4'>
                    {children_images.map((image, index) => (
                        <div key={index} className='relative w-full h-72 md:h-96'>
                            <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className='my-8 mx-auto rounded-lg object-cover'
                            />
                        </div>
                    ))}
                </div>
            </section>

            <section className='mx-auto max-w-5xl px-4 md:px-8 mt-32 mb-20'>
                <div className='w-full flex items-start relative gap-12'>
                    <div className='w-full py-4 sticky top-2'>
                        <h3 className='text-4xl text-primary mb-4'>
                            About the climb
                        </h3>
                        <p>
                            Mount Kilimanjaro is one of the world’s most iconic and accessible high-altitude climbs. No technical climbing experience is required  just a sense of adventure and a willingness to challenge yourself.
                        </p>
                        <br />
                        <p>Key details:</p>
                        <ul className='list-inside list-disc pl-4'>
                            <li>Mountain: Mount Kilimanjaro, Tanzania</li>
                            <li>Route: 9-days Lemosho</li>
                            <li>Duration: 9 days (including ascent and descent)</li>
                            <li>Group size: Small, supported group</li>
                            {/* <li>Dates: January 8 - </li> */}
                            <li>Support: Fully guided by experienced local mountain crew</li>
                        </ul>
                        <br />
                        <p>
                            This climb is designed to be supportive, well-paced, and achievable for people with a reasonable level of fitness.
                        </p>
                        <br />
                        <Link href='https://wetu.com/ItineraryOutputs/Discovery/9ec618f1-594d-44a0-b581-c05709ed3555' target='_blank'>
                            <button className='bg-primary text-white px-6 py-3 rounded-lg block hover:bg-primary-dark transition'>
                                Click to View Full itinerary
                            </button>
                        </Link>
                    </div>

                    <div className='relative h-[34rem] w-full border'>
                        <Image
                            src='https://res.cloudinary.com/drhl0yu7y/image/upload/v1770119700/prisms-kili-climb/daniel-vargas-FyrplABOofM-unsplash_gsxw4i.jpg'
                            alt=''
                            fill
                            className='w-full mx-auto rounded-lg object-cover'
                        />
                    </div>
                </div>

                <br /><br /><br />

                <div className='w-full flex flex-row-reverse items-start relative gap-12'>
                    <div className='w-full py-4 sticky top-2'>
                        <h3 className='text-4xl text-primary mb-4'>
                            Who is This Climb For?
                        </h3>
                        <p>This experience is ideal for:</p>
                        <ul className='list-inside list-disc'>
                            <li>Supporters of PRISMS and the SMS community</li>
                            <li>Individuals seeking a meaningful personal challenge</li>
                            <li>Friends, family members, and advocates climbing with purpose</li>
                            <li>People from around the world looking to connect through a shared cause</li>
                        </ul>
                        <br />
                        <p>You do not need prior high-altitude or mountaineering experience, just commitment, preparation, and heart.</p>
                    </div>

                    <div className='relative h-[34rem] w-full border'>
                        <Image
                            src='https://res.cloudinary.com/drhl0yu7y/image/upload/v1770191655/prisms-kili-climb/to-the-mountains-kilimanjaro-trekkers-marangu-route-near-peak_yj7vzo.webp'
                            alt=''
                            fill
                            className='w-full mx-auto rounded-lg object-cover'
                        />
                    </div>
                </div>
            </section>

            <section className='mx-auto max-w-5xl px-4 md:px-8 mt-20 mb-20'>
                <p>
                    A full packing list and preparation guide will be shared with confirmed participants. Costs paid for the climb includes and excludes as fellows:
                </p>
                <br />
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                <FaCheck color="#fff" />
                            </div>
                            <h5 className="text-3xl">Cost Includes</h5>
                        </div>
                        <ul className="list-inside list-disc flex flex-col gap-3">
                            {includes.map((item: string) => (
                                <li key={item} className="ml-4 list-item">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                                <FaXmark color="#fff" />
                            </div>
                            <h5 className="text-3xl">Cost Excludes</h5>
                        </div>
                        <ul className="list-inside list-disc flex flex-col gap-3">
                            {excludes.map((item: string) => (
                                <li key={item} className="ml-4 list-item">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <br />
            </section>

            <section className='mx-auto max-w-5xl px-4 md:px-8 mt-32 mb-20'>
                <div>
                    <h3 className='text-5xl text-primary text-center'>Pricing & Fundraising</h3>
                    <br />
                    <p className='text-center mx-auto max-w-3xl'>
                        Climb pricing and fundraising details will be shared directly with registered participants. Our goal is to keep the process clear, transparent, and accessible, while maximising support for PRISMS’ work.
                    </p>
                    <br />
                    <div className='mx-auto flex justify-center'>
                        <ZohoFormButton
                            title='Tazama X PRISMS Foundation Kilimanjaro Climb Registration'
                            btnTitle='Register Here'
                            link='https://forms.zohopublic.com/tazamaafricatourssafari1/form/REGISTERINGFORKILIMANJAROCLIMBinsupportofthePRISMS/formperma/tnMr5IILLzMDCOY59PORCWqlbFBiCbliY68AB9ZnCss'
                        />
                    </div>

                    <div className='relative w-full h-96'>
                        <Image
                            src='https://res.cloudinary.com/drhl0yu7y/image/upload/v1770191933/prisms-kili-climb/kilimanjaro-climbing-guide-1_dbcqzp.webp'
                            alt='Kilimanjaro Hike'
                            fill
                            className='my-8 mx-auto rounded-lg object-cover'
                        />
                    </div>
                </div>
            </section>

            <section className='mx-auto max-w-5xl px-4 md:px-8 mt-32 mb-20'>
                <div className='max-w-4xl mx-auto text-center'>
                    <h3 className='text-5xl text-primary'>Meet The Organizers</h3>
                    <br />
                    <p>
                        This climb is organised in partnership between Tazama Africa and dedicated supporters of the PRISMS Foundation.
                    </p>
                    <br />
                    <p>
                        Tazama Africa is a Tanzania-based safari and trekking company with deep experience guiding international travellers on Mount Kilimanjaro. Their team provides professional, responsible, and safety-focused mountain support.
                    </p>
                    <br />
                    <p>
                        The PRISMS organisers bring personal commitment, purpose, and community leadership to this climb ensuring it is as meaningful off the mountain as it is on it.
                    </p>
                </div>

                <div className='w-full flex max-md:flex-col items-center gap-4'>
                    <div className='relative w-full h-72 md:h-96'>
                        <Image
                            src='https://res.cloudinary.com/drhl0yu7y/image/upload/v1770122281/prisms-kili-climb/organizers/Joann_entx2b.jpg'
                            alt='Kilimanjaro Hike'
                            fill
                            className='my-8 mx-auto rounded-lg object-cover'
                        />

                        <div className='absolute -bottom-4 right-4 bg-white p-4 rounded-tl-2xl rounded-br-2xl'>
                            <p className='text-base font-bold'>Joann Geddes</p>
                            <p className='text-xs mt-1'>PRISMS Foundation Organizer</p>
                        </div>
                    </div>
                    <div className='relative w-full h-72 md:h-96'>
                        <Image
                            src='https://res.cloudinary.com/drhl0yu7y/image/upload/v1770122489/prisms-kili-climb/organizers/Connie_i1a6cj.jpg'
                            alt='Kilimanjaro Hike'
                            fill
                            className='my-8 mx-auto rounded-lg object-cover'
                        />

                        <div className='absolute -bottom-4 right-4 bg-white p-4 rounded-tl-2xl rounded-br-2xl'>
                            <p className='text-base font-bold'>Connie Bessette</p>
                            <p className='text-xs mt-1'>PRISMS Foundation Organizer</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='mx-auto max-w-5xl px-4 md:px-8 mt-32 mb-20'>
                <div>
                    <h3 className='text-5xl text-primary text-center'>How to Join?</h3>
                    <br />
                    <p className='text-center mx-auto max-w-3xl'>
                        If you’re interested in learning more or potentially joining the climb, please register your interest below. This is not a commitment, simply a way for us to share more information, timelines, and next steps.
                    </p>
                    <br />
                    <div className='mx-auto flex justify-center'>
                        <ZohoFormButton
                            title='Tazama X PRISMS Foundation Kilimanjaro Climb Registration'
                            btnTitle='Register Here'
                            link='https://forms.zohopublic.com/tazamaafricatourssafari1/form/REGISTERINGFORKILIMANJAROCLIMBinsupportofthePRISMS/formperma/tnMr5IILLzMDCOY59PORCWqlbFBiCbliY68AB9ZnCss'
                        />
                    </div>
                </div>
            </section>

            <section className='mx-auto max-w-5xl px-4 md:px-8 mt-24 mb-20'>
                <h3 className='text-5xl text-primary text-center'>What Happens Next?</h3>
                <br />
                <p className='text-center'>Once you submit the form:</p>
                <br />
                <div className='grid grid-cols-3 gap-8'>
                    {
                        whatHappens.map((item, index) => (
                            <div className='text-center p-4 border border-primary rounded-lg flex flex-col justify-center items-center h-48 bg-amber-400/10' key={index}>
                                <h3 className='text-4xl mb-4 text-primary'>{index + 1}</h3>
                                <p>{item}</p>
                            </div>
                        ))
                    }
                </div>
            </section>

            <section className='mx-auto max-w-5xl px-4 md:px-8 mt-32 mb-20'>
                <div className='text-center'>
                    <h3 className='text-5xl text-primary capitalize mb-4'>Do you have any questions?</h3>
                    <p>
                        We’re happy to help. You’ll have plenty of time to connect, prepare, and decide if this climb is right for you.
                    </p>
                </div>
                <br />
                <Accordion
                    question="How does the fundraising component work?"
                    answer="Fundraising details will be shared with registered participants. The aim is to raise meaningful support for PRISMS while keeping the process transparent and manageable."
                    default={true}
                />
                <Accordion
                    question="When do I need to commit?"
                    answer="Registering your interest is not a commitment. Once you’ve received full details, you’ll have time to ask questions and decide whether to participate."
                    default={true}
                />
                <Accordion
                    question="How will we stay connected as a group?"
                    answer="Confirmed participants will be invited to a shared communication space (such as WhatsApp or email updates) for planning, updates, and support leading up to the climb."
                    default={true}
                />

                <div className='w-full relative mx-auto overflow-hidden h-72 md:h-[32rem] mt-16 rounded-2xl'>
                    <Image
                        src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1770177477/prisms-kili-climb/Tazama_Africa_Kili_MERU_RATES_2025-2026.jpg_oszq7p.jpg"
                        alt="Kilimanjaro Climb"
                        fill
                        className='mx-auto object-cover'
                    />

                    <div className='absolute bottom-10 md:bottom-20 left-1/2 -translate-x-1/2'>
                        <ZohoFormButton
                            title='Tazama X PRISMS Foundation Kilimanjaro Climb Registration'
                            btnTitle='Register Here'
                            link='https://forms.zohopublic.com/tazamaafricatourssafari1/form/REGISTERINGFORKILIMANJAROCLIMBinsupportofthePRISMS/formperma/tnMr5IILLzMDCOY59PORCWqlbFBiCbliY68AB9ZnCss'
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default PrismsHike