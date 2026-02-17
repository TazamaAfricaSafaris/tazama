import Image from 'next/image'

export default function JoanneQuote() {
    return (
        <article className='mb-8 mt-16 mx-auto'>
            {/* Magazine-style header rule */}
            <div className='flex items-center gap-3 mb-7'>
                <div className='h-px flex-1 bg-zinc-800 max-md:hidden' />
                <span className='text-base tracking-[0.3em] uppercase font-semibold text-primary'>
                    A Quote from Joann Geddes
                </span>
                <div className='h-px flex-1 bg-zinc-800 max-md:hidden' />
            </div>

            <div className='font-serif text-zinc-800 leading-relaxed text-[17px]'>
                {/* Image floated RIGHT this time for visual variety */}
                <aside className='md:float-right md:ml-7 mb-4 w-full md:w-80 shrink-0'>
                    <div className='relative h-64 md:h-80 w-full shadow-lg'>
                        <Image
                            src='https://res.cloudinary.com/drhl0yu7y/image/upload/v1770122281/prisms-kili-climb/organizers/Joann_entx2b.jpg'
                            alt='Joann Geddes'
                            fill
                            className='object-cover'
                        />
                    </div>
                    {/* Caption sits beneath the image */}
                    <div className='border-l-2 border-zinc-800 pl-3 mt-3'>
                        <p className='text-base font-bold not-italic leading-tight text-primary'>
                            Joann Geddes
                        </p>
                        <p className='text-sm not-italic text-zinc-500 mt-0.5 tracking-wide'>
                            PRISMS Foundation Supporter
                        </p>
                    </div>
                </aside>

                <p className='mb-4'>
                    Why Tazama? After much research, we are convinced that selecting Tazama
                    as our partner is the best choice possible. They are very supportive of
                    our climbing and philanthropic goals, and they come highly recommended
                    by those in the know.
                </p>
                <p className='mb-4'>
                    We look forward to working together with you and them — and to bringing
                    greater awareness to Smith-Magenis Syndrome through this remarkable
                    journey to the roof of Africa.
                </p>

                {/* Clears both floats */}
                <div className='clear-both' />
            </div>
        </article>
    )
}