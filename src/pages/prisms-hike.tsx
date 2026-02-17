import React from 'react'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'
import { ZohoFormButton } from './tours/[slug]'
import Link from 'next/link'
import Accordion from '~/components/Accordion'
import HeadSEO from '~/components/ui/Head'
import BioCard from '~/components/prisms/bio-card'
import JoanneQuote from '~/components/prisms/joanne-quote'

const PrismsHike = () => {
    const includes = [
        "Professional mountain guides and support crew",
        "Park fees and climbing permits",
        "Accommodation on the mountain",
        "Accommodation before and after the climb.",
        "All meals during the climb",
        "Group coordination and on-the-ground support by Tazama Africa",
        "Sleeping bags",
        "Tents, cots and private toilets"
    ]

    const excludes = [
        "International flights",
        "Travel insurance (required)",
        "Personal climbing gear",
        "Tips for mountain crew"
    ]

    const whatHappens = [
        "You'll receive additional details about the climb and preparation",
        "We'll share timelines and other relevant information",
        "You'll have the opportunity to ask questions before confirming your participation"
    ]

    return (
        <>
            <HeadSEO
                title='Tazama X PRISMS Foundation Kilimanjaro Climb'
                keywords="Tazama, PRISMS Foundation, Kilimanjaro Climb, Mount Kilimanjaro, Group Climb, Support for Research, Smith-Magenis Syndrome, PRISMS"
                description="Join us on a guided group climb of Mount Kilimanjaro in support of the PRISMS Foundation and research into Smith-Magenis Syndrome (SMS). This climb brings together purpose, community, and a once-in-a-lifetime experience on Africa's highest mountain."
            />
            <div className='relative w-full h-[50vh] md:h-[70vh] lg:h-screen'>
                <Image
                    src='https://res.cloudinary.com/drhl0yu7y/image/upload/v1770795234/prisms-kili-climb/tazama_x_prism_foundation_1_k7jbyb.webp'
                    alt='Kilimanjaro Hike'
                    fill
                    className=' object-cover'
                />
            </div>

            <section className=' mx-auto max-w-5xl px-4 md:px-8 mb-12 md:mb-20 mt-12 md:mt-24 lg:mt-36'>
                <div>
                    <h3 className='text-3xl md:text-4xl lg:text-5xl text-primary'>Climbing Mount Kilimanjaro For a Cause</h3>
                    <br />
                    <p className='max-w-4xl text-sm md:text-base'>
                        Join us on a guided group climb of Mount Kilimanjaro in support of the PRISMS Foundation and research into Smith-Magenis Syndrome (SMS). This climb brings together purpose, community, and a once-in-a-lifetime experience on Africa&apos;s highest mountain.
                    </p>
                    <br />
                    <ZohoFormButton
                        title='Tazama X PRISMS Foundation Kilimanjaro Climb Registration'
                        btnTitle='Register Here'
                        link='https://forms.zohopublic.com/tazamaafricatourssafari1/form/REGISTERINGFORKILIMANJAROCLIMBinsupportofthePRISMS/formperma/tnMr5IILLzMDCOY59PORCWqlbFBiCbliY68AB9ZnCss'
                    />
                </div>

                <div className='w-full flex flex-col md:flex-row items-center gap-4'>
                    <div className='relative w-full h-64 md:h-96'>
                        <Image
                            src='https://res.cloudinary.com/drhl0yu7y/image/upload/v1770647279/prisms-kili-climb/kilimanjaro_jnigpr.avif'
                            alt='Kilimanjaro Hike'
                            fill
                            className='my-8  rounded-lg object-cover'
                        />
                    </div>
                    <div className='relative w-full h-64 md:h-96'>
                        <Image
                            src='https://res.cloudinary.com/drhl0yu7y/image/upload/v1770114265/prisms-kili-climb/david-magalhaes-Yz8r_LeSuow-unsplash_lkqvbe.jpg'
                            alt='Kilimanjaro Hike'
                            fill
                            className='my-8  rounded-lg object-cover '
                        />
                    </div>
                </div>
            </section>

            <section className=' mx-auto max-w-5xl px-4 md:px-8 mt-24 lg:mt-36 mb-12 md:mb-20'>
                <h3 className='text-3xl md:text-4xl lg:text-5xl text-primary'>About the Cause: PRISMS Foundation</h3>
                <br />
                <div className='max-w-4xl text-sm md:text-base'>
                    <p>
                        The PRISMS Foundation is dedicated to supporting individuals and families affected by Smith-Magenis Syndrome (SMS) through research, advocacy, education, and community support.
                    </p>
                    <br />
                    <p>
                        Increasing awareness through this climb will help inform doctors, parents, and teachers about this rare genetic disorder that is underdiagnosed. It will help advance research initiatives, raise funds, and provide resources to families navigating life with SMS. Every step we take on the mountain contributes to a larger mission of knowledge, understanding, support, and hope.
                    </p>
                </div>
                <br />
                <Link href='https://www.prisms.org' target='_blank'>
                    <button className='bg-primary text-white px-4 md:px-6 py-2 md:py-3 text-sm md:text-base rounded-lg block hover:bg-primary-dark transition w-full md:w-auto'>
                        Learn More About PRISMS
                    </button>
                </Link>
            </section>

            <section className=' mx-auto max-w-5xl px-4 md:px-8 mt-12 md:mt-24 lg:mt-32 mb-12 md:mb-20'>
                <div className='w-full flex flex-col lg:flex-row items-start relative gap-8 lg:gap-12'>
                    <div className='w-full py-4 lg:sticky lg:top-2'>
                        <h3 className='text-3xl md:text-4xl text-primary mb-4'>
                            About the climb
                        </h3>
                        <p className='text-sm md:text-base'>
                            Mount Kilimanjaro is one of the world&apos;s most iconic and accessible high-altitude climbs. No technical climbing experience is required  just a sense of adventure and a willingness to challenge yourself.
                        </p>
                        <br />
                        <p className='text-sm md:text-base'>Key details:</p>
                        <ul className='list-inside list-disc pl-4 text-sm md:text-base'>
                            <li>Mountain: Mount Kilimanjaro, Tanzania</li>
                            <li>Route: 9-days Lemosho</li>
                            <li>Duration: 9 days (including ascent and descent)</li>
                            <li>Group size: Small, supported group</li>
                            <li>Dates: 9 January 2027 - 20 January 2027</li>
                            <li>Support: Fully guided by experienced local mountain crew</li>
                        </ul>
                        <br />
                        <p className='text-sm md:text-base'>
                            This climb is designed to be supportive, well-paced, and achievable for people with a reasonable level of fitness.
                        </p>
                        <br />
                        <Link href='https://wetu.com/ItineraryOutputs/Discovery/9ec618f1-594d-44a0-b581-c05709ed3555' target='_blank'>
                            <button className='bg-primary text-white px-4 md:px-6 py-2 md:py-3 text-sm md:text-base rounded-lg block hover:bg-primary-dark transition w-full md:w-auto'>
                                Click to View Full itinerary
                            </button>
                        </Link>
                    </div>

                    <div className='relative h-64 md:h-96 lg:h-[34rem] w-full border'>
                        <Image
                            src='https://res.cloudinary.com/drhl0yu7y/image/upload/v1770119700/prisms-kili-climb/daniel-vargas-FyrplABOofM-unsplash_gsxw4i.jpg'
                            alt=''
                            fill
                            className='w-full  rounded-lg object-cover'
                        />
                    </div>
                </div>

                <br /><br /><br />

                <div className='w-full flex flex-col lg:flex-row-reverse items-start relative gap-8 lg:gap-12'>
                    <div className='w-full py-4 lg:sticky lg:top-2'>
                        <h3 className='text-3xl md:text-4xl text-primary mb-4'>
                            Who is This Climb For?
                        </h3>
                        <p className='text-sm md:text-base'>This experience is ideal for:</p>
                        <ul className='list-inside list-disc text-sm md:text-base'>
                            <li>Supporters of PRISMS and the SMS community</li>
                            <li>Individuals seeking a meaningful personal challenge</li>
                            <li>Friends, family members, and advocates climbing with purpose</li>
                            <li>People from around the world looking to connect through a shared cause</li>
                        </ul>
                        <br />
                        <p className='text-sm md:text-base'>You do not need prior high-altitude or mountaineering experience, just commitment, training, preparation, and heart.</p>
                    </div>

                    <div className='relative h-64 md:h-96 lg:h-[34rem] w-full border'>
                        <Image
                            src='https://res.cloudinary.com/drhl0yu7y/image/upload/v1770206196/prisms-kili-climb/to-the-mountains-kilimanjaro-trekkers-marangu-route-near-peak_un5lay.webp'
                            alt=''
                            fill
                            className='w-full  rounded-lg object-cover'
                        />
                    </div>
                </div>
            </section>

            <section className=' mx-auto max-w-5xl px-4 md:px-8 mt-12 md:mt-20 mb-12 md:mb-20'>
                <p className='text-sm md:text-base'>
                    A full packing list and preparation guide will be shared with confirmed participants. Costs paid for the climb includes and excludes as fellows:
                </p>
                <br />
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12'>
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <FaCheck color="#fff" className='w-4 h-4 md:w-5 md:h-5' />
                            </div>
                            <h5 className="text-2xl md:text-3xl">Cost Includes</h5>
                        </div>
                        <ul className="list-inside list-disc flex flex-col gap-3 text-sm md:text-base">
                            {includes.map((item: string) => (
                                <li key={item} className="ml-4 list-item">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-8 h-8 md:w-10 md:h-10 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                                <FaXmark color="#fff" className='w-4 h-4 md:w-5 md:h-5' />
                            </div>
                            <h5 className="text-2xl md:text-3xl">Cost Excludes</h5>
                        </div>
                        <ul className="list-inside list-disc flex flex-col gap-3 text-sm md:text-base">
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

            <section className=' mx-auto max-w-5xl px-4 md:px-8 mt-12 md:mt-24 lg:mt-28 mb-12 md:mb-20'>
                <div>
                    <h3 className='text-3xl md:text-4xl lg:text-5xl text-primary '>Pricing</h3>
                    <br />
                    <p className=' max-w-4xl text-sm md:text-base'>
                        Trek pricing details will be shared directly with registered participants. Our goal is to keep the process clear, transparent, and accessible, while maximizing support for PRISMS&apos; work.
                    </p>
                    <br />
                    <p className=' max-w-4xl text-sm md:text-base'>
                        To join the 9-day guided Lemosho Route climb, the price is $3,465 USD per person.
                        If you prefer single occupancy (hotel and mountain tent), the single supplement is $966 USD.
                        <br /><br />
                        Once you register and confirm your decision to join the climb, a 30% deposit will be required to secure your spot. Full payment details and next steps will be shared at that stage.
                    </p>

                    <div className=' bg-yellow-100 text-yellow-800 text-xs md:text-sm p-3 rounded-2xl border border-yellow-300 mt-8 text-left'>
                        <p className='font-semibold text-sm md:text-base mb-2'>⭐ Please Note:</p>
                        <p>
                            Once a deposit is made, you will be added to a WhatsApp group and join monthly meetings to keep you updated on the climb progress.
                        </p>
                        <p>
                            The <strong>deadline</strong> for registering for the Kilimanjaro Climb is <strong>September 1st, 2027</strong>.
                        </p>
                    </div>

                    <br />
                    <ZohoFormButton
                        title='Tazama X PRISMS Foundation Kilimanjaro Climb Registration'
                        btnTitle='Register Here'
                        link='https://forms.zohopublic.com/tazamaafricatourssafari1/form/REGISTERINGFORKILIMANJAROCLIMBinsupportofthePRISMS/formperma/tnMr5IILLzMDCOY59PORCWqlbFBiCbliY68AB9ZnCss'
                    />

                    <div className='relative w-full h-64 md:h-96'>
                        <Image
                            src='https://res.cloudinary.com/drhl0yu7y/image/upload/v1770191933/prisms-kili-climb/kilimanjaro-climbing-guide-1_dbcqzp.webp'
                            alt='Kilimanjaro Hike'
                            fill
                            className='my-8  rounded-lg object-cover'
                        />
                    </div>
                </div>
            </section>

            <section className=' mx-auto max-w-5xl px-4 md:px-8 mt-24 lg:mt-32 mb-12 md:mb-20'>
                <div className='max-w-4xl mb-8'>
                    <h3 className='text-3xl md:text-4xl lg:text-5xl text-primary'>Meet The Organizers</h3>
                    <br />
                    <p className='text-sm md:text-base'>
                        This climb is organised in partnership between Tazama Africa and dedicated supporters of the PRISMS Foundation.
                    </p>
                    <br />
                    <p className='text-sm md:text-base'>
                        Tazama Africa is a Tanzania-based safari and trekking company with deep experience guiding international travellers on Mount Kilimanjaro. Their team provides professional, responsible, and safety-focused mountain support.
                    </p>
                    <br />
                    <p className='text-sm md:text-base'>
                        The PRISMS organisers bring personal commitment, purpose, and community leadership to this climb ensuring it is as meaningful off the mountain as it is on it.
                    </p>
                </div>

                <div className='px-6 py-2 bg-amber-400/10 rounded-2xl border border-primary'>
                    <BioCard />
                    <JoanneQuote />
                </div>
            </section>

            <section className=' mx-auto max-w-5xl px-4 md:px-8 mt-12 md:mt-16 mb-12 md:mb-20'>
                <div>
                    <h3 className='text-3xl md:text-4xl lg:text-5xl text-primary '>How to Join?</h3>
                    <br />
                    <p className=' max-w-4xl text-sm md:text-base'>
                        If you&apos;re interested in learning more or potentially joining the climb, please register your interest below. This is not a commitment, simply a way for us to share more information, timelines, and next steps.
                    </p>
                    <br />
                    <ZohoFormButton
                        title='Tazama X PRISMS Foundation Kilimanjaro Climb Registration'
                        btnTitle='Register Here'
                        link='https://forms.zohopublic.com/tazamaafricatourssafari1/form/REGISTERINGFORKILIMANJAROCLIMBinsupportofthePRISMS/formperma/tnMr5IILLzMDCOY59PORCWqlbFBiCbliY68AB9ZnCss'
                    />
                </div>
            </section>

            <section className=' mx-auto max-w-5xl px-4 md:px-8 mt-12 md:mt-24 mb-12 md:mb-20'>
                <h3 className='text-3xl md:text-4xl lg:text-5xl text-primary text-center'>What Happens Next?</h3>
                
                <br />
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8'>
                    {
                        whatHappens.map((item, index) => (
                            <div className='p-4 border border-primary rounded-lg flex flex-col justify-center items-center h-auto md:h-48 bg-amber-400/10 text-center' key={index}>
                                <h3 className='text-3xl md:text-4xl mb-4 text-primary'>{index + 1}</h3>
                                <p className='text-sm md:text-base'>{item}</p>
                            </div>
                        ))
                    }
                </div>
            </section>

            <section className=' mx-auto max-w-5xl px-4 md:px-8 mt-12 md:mt-24 lg:mt-32 mb-12 md:mb-20'>
                <div className=''>
                    <h3 className='text-3xl md:text-4xl lg:text-5xl text-primary capitalize mb-4'>Do you have any questions?</h3>
                    <p className='text-sm md:text-base'>
                        We&apos;re happy to help. You&apos;ll have plenty of time to connect, prepare, and decide if this climb is right for you.
                    </p>
                </div>
                <br />
                <Accordion
                    question="When do I need to commit?"
                    answer="Registering your interest is not a commitment. Once you've received full details, you'll have time to ask questions and decide whether to participate."
                    default={true}
                />
                <Accordion
                    question="How will we stay connected as a group?"
                    answer="Confirmed participants will be invited to a shared communication space (such as WhatsApp or email updates) for planning, updates, and support leading up to the climb."
                    default={true}
                />
                <Accordion
                    question="How does the fundraising component work?"
                    answer="Individual participants will have the option to donate and work with the organization to raise funds. Because Tazama will make a donation in your name, you will already be donating!"
                    default={true}
                />

                <div className='text-center my-12 md:my-16 mx-auto max-w-4xl'>
                    <p className='text-sm md:text-base'>
                        Please join us in this adventure. If, however, it doesn&apos;t work out for you at this time, please consider a donation to PRISMS.
                    </p>
                    <br />
                    <Link
                        href='https://www.prisms.org/donate'
                        target='_blank'
                        className='w-fit'
                    >
                        <button className='bg-primary text-white px-4 md:px-6 py-2 md:py-3 text-sm md:text-base rounded-lg block hover:bg-primary-dark transition mx-auto'>
                            Donate to PRISMS
                        </button>
                    </Link>

                    <div className='inline-block bg-yellow-100 text-yellow-800 text-xs md:text-sm p-3 rounded-2xl border border-yellow-300 mt-8 text-left'>
                        <p className='font-semibold text-sm md:text-base'>⭐Please Note:</p>
                        <p>
                            If donating, please note that you are with the Kilimanjaro Climb in the Prisms instruction box.
                        </p>
                    </div>
                </div>

                <div className='w-full relative  overflow-hidden h-72 md:h-96 lg:h-[32rem] rounded-2xl'>
                    <Image
                        src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1770276925/prisms-kili-climb/Tazama_Africa_Kili_MERU_RATES_2025-2026_Video.jpg_1_ih55rt.jpg"
                        alt="Kilimanjaro Climb"
                        fill
                        className=' object-cover'
                    />

                    <div className='absolute bottom-6 md:bottom-10 lg:bottom-20 left-1/2 -translate-x-1/2 w-full px-4'>
                        <div className='flex justify-center'>
                            <ZohoFormButton
                                title='Tazama X PRISMS Foundation Kilimanjaro Climb Registration'
                                btnTitle='Register Here'
                                link='https://forms.zohopublic.com/tazamaafricatourssafari1/form/REGISTERINGFORKILIMANJAROCLIMBinsupportofthePRISMS/formperma/tnMr5IILLzMDCOY59PORCWqlbFBiCbliY68AB9ZnCss'
                            />
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default PrismsHike