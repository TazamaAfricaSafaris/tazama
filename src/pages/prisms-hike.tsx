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

const MinimalStyles = () => (
    <style>{`
    /* Safari card hover zoom */
    .safari-card-img { transition: transform 0.6s ease; }
    .safari-card:hover .safari-card-img { transform: scale(1.04); }
    .safari-card:hover .safari-link-pill {
      background: rgba(255,255,255,0.15);
      border-color: rgba(255,255,255,0.6);
    }
    .safari-arrow { display: inline-block; transition: transform 0.2s; }
    .safari-card:hover .safari-arrow { transform: translateX(3px); }
  `}</style>
)


const PrismsHike = () => {
    const includes = [
        "Professional mountain guides and support crew",
        "Park fees and climbing permits",
        "Accommodation on the mountain",
        "Accommodation before and after the climb",
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
                title='Tazama X PRISMS Kilimanjaro Climb'
                keywords="Tazama, PRISMS, Kilimanjaro Climb, Mount Kilimanjaro, Group Climb, Support for Research, Smith-Magenis Syndrome, PRISMS"
                description="Join us on a guided group climb of Mount Kilimanjaro in support of the PRISMS and research into Smith-Magenis Syndrome (SMS). This climb brings together purpose, community, and a once-in-a-lifetime experience on Africa's highest mountain."
            />
            <MinimalStyles />

            {/* ── Hero ── */}
            {/* FIX: was h-[50vh] md:h-[70vh] lg:h-screen — fine, but 50 vh on a short phone is cramped.
                Bumped the mobile floor to 55 vh and added a min-height so it never collapses. */}
            <div className='relative w-full h-[55vh] min-h-[280px] md:h-[70vh] lg:h-screen'>
                <Image
                    src='https://res.cloudinary.com/drhl0yu7y/image/upload/v1772126152/prisms-kili-climb/tazama_x_prism_foundation_3_k5uglz.png'
                    alt='Kilimanjaro Hike'
                    fill
                    className='object-cover'
                    priority
                />
            </div>

            {/* ── Intro ── */}
            <section className='mx-auto max-w-5xl px-4 md:px-8 mb-12 md:mb-20 mt-10 md:mt-24 lg:mt-36'>
                <div>
                    {/* FIX: text-3xl → text-2xl on mobile so it doesn't overflow narrow screens */}
                    <h3 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary'>
                        Climbing Mount Kilimanjaro For a Cause
                    </h3>
                    <br />
                    <p className='max-w-4xl text-sm md:text-base'>
                        Join us on a guided group climb of Mount Kilimanjaro in support of the PRISMS and research into
                        Smith-Magenis Syndrome (SMS). This climb brings together purpose, community, and a
                        once-in-a-lifetime experience on Africa&apos;s highest mountain.
                    </p>
                    <br />
                    <ZohoFormButton
                        title='Tazama X PRISMS Kilimanjaro Climb Registration'
                        btnTitle='Register Here'
                        link='https://forms.zohopublic.com/tazamaafricatourssafari1/form/REGISTERINGFORKILIMANJAROCLIMBinsupportofthePRISMS/formperma/tnMr5IILLzMDCOY59PORCWqlbFBiCbliY68AB9ZnCss'
                    />
                </div>

                {/* FIX: added mt-8 gap between the CTA and the image pair */}
                <div className='w-full flex flex-col md:flex-row items-center gap-4 mt-8'>
                    <div className='relative w-full h-56 sm:h-64 md:h-96'>
                        <Image
                            src='https://res.cloudinary.com/drhl0yu7y/image/upload/v1770647279/prisms-kili-climb/kilimanjaro_jnigpr.avif'
                            alt='Kilimanjaro Hike'
                            fill
                            className='rounded-lg object-cover'
                        />
                    </div>
                    <div className='relative w-full h-56 sm:h-64 md:h-96'>
                        <Image
                            src='https://res.cloudinary.com/drhl0yu7y/image/upload/v1770114265/prisms-kili-climb/david-magalhaes-Yz8r_LeSuow-unsplash_lkqvbe.jpg'
                            alt='Kilimanjaro Hike'
                            fill
                            className='rounded-lg object-cover'
                        />
                    </div>
                </div>
            </section>

            {/* ── About PRISMS ── */}
            <section className='mx-auto max-w-5xl px-4 md:px-8 mt-12 md:mt-24 lg:mt-36 mb-12 md:mb-20'>
                <h3 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary'>About the Cause: PRISMS</h3>
                <br />
                <div className='max-w-4xl text-sm md:text-base'>
                    <p>
                        PRISMS is dedicated to supporting individuals and families affected by Smith-Magenis Syndrome
                        (SMS) through research, advocacy, education, and community support.
                    </p>
                    <br />
                    <p>
                        Increasing awareness through this climb will help inform doctors, parents, and teachers about
                        this rare genetic disorder that is underdiagnosed. It will help advance research initiatives,
                        raise funds, and provide resources to families navigating life with SMS. Every step we take on
                        the mountain contributes to a larger mission of knowledge, understanding, support, and hope.
                    </p>
                </div>
                <br />
                <Link href='https://www.prisms.org' target='_blank'>
                    <button className='bg-primary text-white px-4 md:px-6 py-2 md:py-3 text-sm md:text-base rounded-full block hover:bg-primary-dark transition w-full md:w-auto'>
                        Learn More About PRISMS
                    </button>
                </Link>
            </section>

            {/* ── About the Climb ── */}
            <section className='mx-auto max-w-5xl px-4 md:px-8 mt-12 md:mt-24 lg:mt-32 mb-12 md:mb-20'>
                <div className='w-full flex flex-col lg:flex-row items-start relative gap-8 lg:gap-12'>
                    <div className='w-full py-4 lg:sticky lg:top-2'>
                        <h3 className='text-2xl sm:text-3xl md:text-4xl text-primary mb-4'>About the climb</h3>
                        <p className='text-sm md:text-base'>
                            Mount Kilimanjaro is one of the world&apos;s most iconic and accessible high-altitude climbs.
                            No technical climbing experience is required — just a sense of adventure and a willingness to
                            challenge yourself.
                        </p>
                        <br />
                        <p className='text-sm md:text-base'>Key details:</p>
                        <ul className='list-inside list-disc pl-4 text-sm md:text-base'>
                            <li><span className="font-semibold">Mountain:</span> Mount Kilimanjaro, Tanzania</li>
                            <li><span className="font-semibold">Route:</span> 9-days Lemosho</li>
                            <li><span className="font-semibold">Duration:</span> 9 days (including ascent and descent)</li>
                            <li><span className="font-semibold">Group size:</span> Small, supported group</li>
                            <li><span className="font-semibold">Dates:</span> 9 January 2027 – 20 January 2027</li>
                            <li><span className="font-semibold">Support:</span> Fully guided by experienced local mountain crew</li>
                        </ul>
                        <br />
                        <p className='text-sm md:text-base'>
                            This climb is designed to be supportive, well-paced, and achievable for people with a
                            reasonable level of fitness.
                        </p>
                        <br />
                        <Link href='https://wetu.com/ItineraryOutputs/Discovery/9ec618f1-594d-44a0-b581-c05709ed3555' target='_blank'>
                            <button className='bg-primary text-white px-4 md:px-6 py-2 md:py-3 text-sm md:text-base rounded-full block hover:bg-primary-dark transition w-full md:w-auto'>
                                Click to View Full itinerary
                            </button>
                        </Link>
                    </div>

                    {/* FIX: removed bare `border` (renders a 1 px line while image loads) — use rounded-lg overflow-hidden instead */}
                    <div className='relative h-64 sm:h-80 md:h-96 lg:h-[34rem] w-full rounded-lg overflow-hidden'>
                        <Image
                            src='https://res.cloudinary.com/drhl0yu7y/image/upload/v1770119700/prisms-kili-climb/daniel-vargas-FyrplABOofM-unsplash_gsxw4i.jpg'
                            alt=''
                            fill
                            className='object-cover'
                        />
                    </div>
                </div>

                <br /><br />

                {/* ── Who is This For ── */}
                <div className='w-full flex flex-col lg:flex-row-reverse items-start relative gap-8 lg:gap-12 mt-8'>
                    <div className='w-full py-4 lg:sticky lg:top-2'>
                        <h3 className='text-2xl sm:text-3xl md:text-4xl text-primary mb-4'>Who is This Climb For?</h3>
                        <p className='text-sm md:text-base'>This experience is ideal for:</p>
                        <ul className='list-inside list-disc text-sm md:text-base'>
                            <li>Supporters of PRISMS and the SMS community</li>
                            <li>Individuals seeking a meaningful personal challenge</li>
                            <li>Friends, family members, and advocates climbing with purpose</li>
                            <li>People from around the world looking to connect through a shared cause</li>
                        </ul>
                        <br />
                        <p className='text-sm md:text-base'>
                            You do not need prior high-altitude or mountaineering experience — just commitment, training,
                            preparation, and heart.
                        </p>
                    </div>

                    <div className='relative h-64 sm:h-80 md:h-96 lg:h-[34rem] w-full rounded-lg overflow-hidden'>
                        <Image
                            src='https://res.cloudinary.com/drhl0yu7y/image/upload/v1770206196/prisms-kili-climb/to-the-mountains-kilimanjaro-trekkers-marangu-route-near-peak_un5lay.webp'
                            alt=''
                            fill
                            className='object-cover'
                        />
                    </div>
                </div>
            </section>

            {/* ── Cost Includes / Excludes ── */}
            <section className='mx-auto max-w-5xl px-4 md:px-8 mt-12 md:mt-20 mb-12 md:mb-20'>
                <div className="max-w-5xl mx-auto">
                    {/* FIX: text-5xl with no mobile fallback → scale down */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl text-primary mt-2 mb-3">
                        Cost Includes &amp; Excludes
                    </h2>
                    <p className="leading-relaxed mb-12">
                        A full packing list and preparation guide will be shared with confirmed participants.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                        <div>
                            <h3 className="text-2xl md:text-3xl mb-5 flex items-center gap-3">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#7BB464] flex-shrink-0" />
                                Included
                            </h3>
                            {includes.map(item => (
                                <div key={item} className="flex items-start gap-3 py-3 border-b border-white/8 text-sm leading-snug">
                                    <FaCheck size={10} color="#7BB464" className="mt-1 flex-shrink-0" />
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                        <div>
                            <h3 className="text-2xl md:text-3xl mb-5 flex items-center gap-3">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#C45A4A] flex-shrink-0" />
                                Not Included
                            </h3>
                            {excludes.map(item => (
                                <div key={item} className="flex items-start gap-3 py-3 border-b border-white/8 text-sm leading-snug">
                                    <FaXmark size={11} color="#C45A4A" className="mt-0.5 flex-shrink-0" />
                                    <p>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <br />
            </section>

            {/* ── Pricing ── */}
            <section className="max-w-5xl mx-auto px-4 md:px-6 pb-20">
                {/* FIX: text-6xl → scale down for mobile */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-primary mb-4">
                    Pricing
                </h2>
                <p className="text-base leading-relaxed text-[#4A3728] mb-10">
                    Our goal is to keep the process clear and accessible, while maximising support for PRISMS&apos; work.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                    <div className="bg-[#F0E9DC] border-l-4 border-[#C4623A] p-6 md:p-7">
                        <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#7A5C3E] mb-1">Per person (shared)</p>
                        <p className="font-cormorant text-3xl text-primary leading-none">$3,465</p>
                    </div>
                    <div className="bg-[#F0E9DC] border-l-4 border-[#D4922A] p-6 md:p-7">
                        <p className="text-xs font-medium tracking-[0.15em] uppercase text-[#7A5C3E] mb-1">Single supplement</p>
                        <p className="font-cormorant text-3xl text-primary leading-none">$966</p>
                        <p className="text-xs text-[#7A5C3E] mt-2">Solo hotel + mountain tent</p>
                    </div>
                </div>

                <p className="text-sm leading-relaxed text-[#4A3728] mb-6">
                    Once you register and confirm, a 30% deposit secures your spot. Full payment details and next steps
                    will be shared at that stage.
                </p>

                <div className="bg-amber-50 border border-amber-300 rounded-lg p-4 md:p-5 mb-8">
                    <p className="text-sm font-semibold text-amber-800 mb-2">⭐ Please Note</p>
                    <p className="text-sm text-amber-800 leading-relaxed mb-1">
                        After your deposit, you&apos;ll be added to a WhatsApp group and monthly meetings to keep you updated.
                    </p>
                    <p className="text-sm text-amber-800 leading-relaxed">
                        The <strong>registration deadline</strong> is <strong>September 1, 2026</strong> — but we encourage early
                        registration as monthly preparation calls begin soon.
                    </p>
                </div>

                <ZohoFormButton
                    title="Tazama X PRISMS Kilimanjaro Climb Registration"
                    btnTitle="Register Here"
                    link="https://forms.zohopublic.com/tazamaafricatourssafari1/form/REGISTERINGFORKILIMANJAROCLIMBinsupportofthePRISMS/formperma/tnMr5IILLzMDCOY59PORCWqlbFBiCbliY68AB9ZnCss"
                />

                <div className='relative w-full h-56 sm:h-64 md:h-96 mt-2'>
                    <Image
                        src='https://res.cloudinary.com/drhl0yu7y/image/upload/v1770191933/prisms-kili-climb/kilimanjaro-climbing-guide-1_dbcqzp.webp'
                        alt='Kilimanjaro Hike'
                        fill
                        className='my-8 rounded-lg object-cover'
                    />
                </div>
            </section>

            {/* ── Meet The Organizers ── */}
            <section className='mx-auto max-w-5xl px-4 md:px-8 mt-24 lg:mt-32 mb-12 md:mb-20'>
                <div className='max-w-4xl mb-8'>
                    <h3 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary'>Meet The Organizers</h3>
                    <br />
                    <p className='text-sm md:text-base'>
                        This climb is organised in partnership between Tazama Africa and dedicated supporters of PRISMS.
                    </p>
                    <br />
                    <p className='text-sm md:text-base'>
                        Tazama Africa is a Tanzania-based safari and trekking company with deep experience guiding
                        international travellers on Mount Kilimanjaro. Their team provides professional, responsible, and
                        safety-focused mountain support.
                    </p>
                    <br />
                    <p className='text-sm md:text-base'>
                        The PRISMS organisers bring personal commitment, purpose, and community leadership to this climb
                        — ensuring it is as meaningful off the mountain as it is on it.
                    </p>
                </div>

                {/* FIX: px-6 → px-4 md:px-6 so the card doesn't clip on narrow phones */}
                <div className='px-4 md:px-6 py-2 bg-amber-400/10 rounded-2xl border border-primary'>
                    <BioCard />
                    <JoanneQuote />
                </div>
            </section>

            {/* ── Extend Your Adventure ── */}
            <div className="bg-[#fff9ef] py-16 md:py-20 px-4 md:px-6 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

                <div className="max-w-5xl px-0 md:px-8 mx-auto relative">
                    {/* FIX: text-6xl with no mobile fallback */}
                    <h2 className="text-3xl sm:text-4xl md:text-5xl text-primary mt-2 mb-4">
                        Extend Your Adventure
                    </h2>
                    <p className="text-base leading-relaxed mb-10 md:mb-12">
                        Tanzania&apos;s wildlife and landscapes are unlike anywhere on earth. After your climb, make the most
                        of your journey — explore the Serengeti, Ngorongoro, and beyond.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {/* FIX: min-h-[420px] is too tall on mobile — use min-h-[320px] sm:min-h-[380px] md:min-h-[420px] */}
                        <Link
                            href="/tours"
                            className="safari-card relative rounded-lg overflow-hidden min-h-[320px] sm:min-h-[380px] md:min-h-[420px] flex flex-col justify-end"
                        >
                            <div
                                className="safari-card-img absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url('https://res.cloudinary.com/dnh7qyiis/image/upload/v1780309164/tazama-img_qavidx.webp')` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                            <div className="relative z-10 p-6 md:p-8">
                                <span className="text-[0.68rem] font-medium tracking-[0.18em] uppercase text-[#D4922A] block mb-3">Our Safaris</span>
                                <h3 className="font-cormorant text-3xl md:text-4xl text-white mb-3 leading-tight">Tazama Africa Tours</h3>
                                <p className="text-sm text-white/65 leading-relaxed mb-5">
                                    Browse our full range of Tanzania safaris — Serengeti, Ngorongoro, Zanzibar and beyond.
                                    As your climb organiser, we know Tanzania inside out.
                                </p>
                                <span className="safari-link-pill inline-flex items-center gap-2 text-sm text-white border border-white/30 rounded-full px-4 md:px-5 py-2 transition-all duration-200">
                                    Explore Our Tours <span className="safari-arrow">→</span>
                                </span>
                            </div>
                        </Link>

                        <Link
                            href="https://itineraries.safariportal.app/PRISMS/1657826735724430850"
                            target="_blank"
                            className="safari-card relative rounded-lg overflow-hidden min-h-[320px] sm:min-h-[380px] md:min-h-[420px] flex flex-col justify-end"
                        >
                            <div
                                className="safari-card-img absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url('https://res.cloudinary.com/dnh7qyiis/image/upload/v1780312540/img-9263_orig_pktcks.jpg')` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />
                            <div className="relative z-10 p-6 md:p-8">
                                <span className="text-[0.68rem] font-medium tracking-[0.18em] uppercase text-[#D4922A] block mb-3">Partner Experience</span>
                                <h3 className="font-cormorant text-3xl md:text-4xl text-white mb-3 leading-tight">Dorobo Safaris</h3>
                                <p className="text-sm text-white/65 leading-relaxed mb-5">
                                    A curated PRISMS-group itinerary crafted by Dorobo Safaris — immersive, community-centred
                                    wildlife experiences in authentic East Africa.
                                </p>
                                <span className="safari-link-pill inline-flex items-center gap-2 text-sm text-white border border-white/30 rounded-full px-4 md:px-5 py-2 transition-all duration-200">
                                    View Dorobo Itinerary <span className="safari-arrow">→</span>
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* ── How to Join ── */}
            <section className='mx-auto max-w-5xl px-4 md:px-8 mt-12 md:mt-16 mb-12 md:mb-20'>
                <div>
                    <h3 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-primary'>How to Join?</h3>
                    <br />
                    <p className='max-w-4xl text-sm md:text-base'>
                        If you&apos;re interested in learning more or potentially joining the climb, please register your
                        interest below. This is not a commitment — simply a way for us to share more information,
                        timelines, and next steps.
                    </p>
                    <br />
                    <ZohoFormButton
                        title='Tazama X PRISMS Kilimanjaro Climb Registration'
                        btnTitle='Register Here'
                        link='https://forms.zohopublic.com/tazamaafricatourssafari1/form/REGISTERINGFORKILIMANJAROCLIMBinsupportofthePRISMS/formperma/tnMr5IILLzMDCOY59PORCWqlbFBiCbliY68AB9ZnCss'
                    />
                </div>
            </section>

            {/* ── What Happens After ── */}
            <section className="max-w-5xl mx-auto px-4 md:px-6">
                {/* FIX: no mobile scale on this heading */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-primary mb-8 md:mb-10">
                    What Happens <em className="italic text-[#31180f]">After</em> You Register?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#7A5C3E]/20 border border-[#7A5C3E]/20 overflow-hidden">
                    {whatHappens.map((item, i) => (
                        <div key={i} className="bg-[#fff9ee] p-7 md:p-10">
                            <span className="font-serif text-6xl md:text-7xl font-light text-primary/20 leading-none block mb-4">0{i + 1}</span>
                            <p className="text-sm text-[#4A3728] leading-relaxed">{item}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── FAQ ── */}
            <section className='mx-auto max-w-5xl px-4 md:px-8 mt-12 md:mt-24 lg:mt-32 mb-12 md:mb-20'>
                {/* FIX: text-6xl with no mobile fallback */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal text-primary mb-8">
                    Your Questions, <em className="italic text-[#3D2B1A]">Answered</em>
                </h2>
                <div>
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
                </div>

                {/* Donate block */}
                <div className="mt-12 md:mt-16 bg-amber-100 border border-amber-400 rounded-2xl p-6 md:p-8 max-w-5xl mb-20">
                    <p className="text-sm text-amber-800 leading-relaxed mb-6">
                        If the climb doesn&apos;t work out for you at this time, please consider making a donation to PRISMS
                        directly. Every contribution moves the mission forward.
                    </p>
                    <Link
                        href="https://www.prisms.org/donate" target="_blank"
                        className="inline-flex items-center gap-2 border-[1.5px] border-primary text-primary text-sm font-medium tracking-wide px-6 md:px-7 py-3 rounded-full hover:bg-primary hover:text-white transition-all duration-200"
                    >
                        Donate to PRISMS →
                    </Link>
                    <div className="bg-amber-50 border border-amber-300 rounded-lg p-4 mt-5">
                        <p className="text-sm font-semibold text-amber-800 mb-1">⭐ Note for donors</p>
                        <p className="text-sm text-amber-800">
                            Please mention &quot;Kilimanjaro Climb&quot; in the PRISMS instructions box when donating.
                        </p>
                    </div>
                </div>

                {/* Final CTA image */}
                {/* FIX: The original used absolute-positioned button with bottom-6/10/20 + left-1/2 translate — on narrow
                    phones the button could overflow or clip under the image. Replaced with a flex overlay that
                    centres cleanly at every width, and ensured the container has overflow-hidden. */}
                <div className='w-full relative overflow-hidden h-64 sm:h-72 md:h-96 lg:h-[32rem] rounded-2xl'>
                    <Image
                        src="https://res.cloudinary.com/drhl0yu7y/image/upload/v1772126565/prisms-kili-climb/tazama_x_prism_foundation_2_txtvom.png"
                        alt="Kilimanjaro Climb"
                        fill
                        className='object-cover'
                    />
                    {/* dark gradient at bottom so button is always legible */}
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />

                    <div className='absolute inset-x-0 bottom-6 md:bottom-10 lg:bottom-16 flex justify-center px-4'>
                        <ZohoFormButton
                            title='Tazama X PRISMS Kilimanjaro Climb Registration'
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