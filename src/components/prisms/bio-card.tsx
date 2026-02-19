import Image from 'next/image'

export default function BioCard() {
    return (
        <article className='my-8 mx-auto'>
            {/* Magazine-style header rule */}
            <div className='flex items-center gap-3 mb-7'>
                <div className='h-px flex-1 bg-zinc-800 max-md:hidden' />
                <span className='text-base tracking-[0.3em] uppercase font-semibold text-primary'>
                    Connie Bessette&apos;s Bio
                </span>
                <div className='h-px flex-1 bg-zinc-800 max-md:hidden' />
            </div>

            <div className='font-serif text-zinc-800 leading-relaxed text-[17px]'>
                {/* 
                    The trick: float the aside left with a margin, 
                    so the paragraph text wraps naturally around it — 
                    just like a print magazine pull-quote or photo.
                */}
                <aside className='md:float-left mr-7 mb-4 md:mb-0 w-full md:w-80 shrink-0'>
                    <div className='relative h-64 md:h-80 w-full shadow-lg'>
                        <Image
                            src='https://res.cloudinary.com/drhl0yu7y/image/upload/v1770122489/prisms-kili-climb/organizers/Connie_i1a6cj.jpg'
                            alt='Connie Bessette'
                            fill
                            className='object-cover'
                        />
                    </div>
                    {/* Caption block sits beneath the image, still inside the float */}
                    <div className='border-l-2 border-zinc-800 pl-3 mt-3'>
                        <p className='text-base font-bold not-italic leading-tight text-primary'>
                            Connie Bessette
                        </p>
                        <p className='text-sm not-italic text-zinc-500 mt-0.5 tracking-wide'>
                            PRISMS Organizer
                        </p>
                    </div>
                </aside>

                {/* All paragraphs live outside the aside — they flow around the float automatically */}
                <p className='mb-4'>
                    My 55-year-old son Jonathan has SMS. He has many physical and
                    developmental features that are characteristic of SMS, such as a broad
                    forehead, arm hugging/squeezing, distinct broad-based gait, hearing
                    impairment, and he behaves like a young boy, reading and communicating
                    closer to a ten-year-old. When he was younger, he got frustrated to the
                    point of rage like so many with SMS, but his curiosity and smile would
                    light up a room.
                </p>
                <p className='mb-4'>
                    SMS, a rare neurobehavioral disorder, is globally underdiagnosed,
                    occurring between 1 out of every 15,000 to 25,000 births — which could
                    mean at least 300,000 people worldwide have SMS. To my knowledge there are fewer than 2000 individuals currently diagnosed with SMS.
                    Smith-Magenis Syndrome is caused by particular genetic changes on
                    chromosomal region 17p11.2, which contains the gene <em>RAI1</em>.
                </p>
                <p className='mb-4'>
                    We need more people in the world to know about this disorder. That means doctors, teachers, mothers, fathers, therapists, dentists, emergency departments, etc. And we need more money to support struggling families and to continue the research that is being conducted at research centers and major hospitals. 
                </p>
                <p className='mb-4'>
                    My wish is that through raising awareness campaigns like this Kilimanjaro
                    climb to the roof of Africa, more people will be informed about the
                    characteristics of this complex disorder and receive support from PRISMS.
                </p>

                {/* Clears the float so the sign-off sits below everything */}
                <p className='md:clear-left mb-0 text-base not-italic'>
                    Contact me Connie Bessette at{' '}
                    <a
                        href='mailto:cbessett4@gmail.com'
                        className='text-primary underline underline-offset-2 decoration-primary hover:decoration-primary transition-colors'
                    >
                        cbessett4@gmail.com
                    </a>{' '}
                    or{' '}
                    <a
                        href='mailto:info@prisms.org'
                        className='text-primary underline underline-offset-2 decoration-primary hover:decoration-primary transition-colors'
                    >
                        info@prisms.org
                    </a>{' '}
                    for more information. <strong>Join us in this challenge.</strong>
                </p>
            </div>
        </article>
    )
}