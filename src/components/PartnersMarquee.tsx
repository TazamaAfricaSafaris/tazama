/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'

const PartnersMarquee = () => {
    return (
        <div className='flex space-x-16 overflow-hidden'>
            <div className='mx-auto px-6 md:px-0 flex items-center space-x-16'>
                <div className="mx-auto px-6 md:px-0 flex items-center gap-6 animate-marquee">
                    <Link href={"/partners/kafika-house"} className="group transition-all duration-200 w-40">
                        <img src={"/assets/images/logos/partners/kafika-house.png"} alt="Kafika House Logo" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-200" loading="lazy" />
                    </Link>

                    <Link href={"/partners/rustic-pathways"} className="group transition-all duration-200 w-96">
                        <img src={"/assets/images/logos/partners/rustic-pathways.png"} alt="Rustic Pathways Logo" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-200" loading="lazy" />
                    </Link>

                    <Link href={"https://www.tatotz.org/"} className="group transition-all duration-200 w-52">
                        <img src={"/assets/images/logos/partners/tato.png"} alt="Tato Logo" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-200" loading="lazy" />
                    </Link>
                </div>
            </div>
            <div className='mx-auto px-6 md:px-0 flex items-center space-x-16' aria-hidden="true">
                <div className="mx-auto px-6 md:px-0 flex items-center gap-6 animate-marquee">
                    <Link href={"/partners/kafika-house"} className="group transition-all duration-200 w-40">
                        <img src={"/assets/images/logos/partners/kafika-house.png"} alt="Kafika House Logo" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-200" loading="lazy" />
                    </Link>

                    <Link href={"/partners/rustic-pathways"} className="group transition-all duration-200 w-96">
                        <img src={"/assets/images/logos/partners/rustic-pathways.png"} alt="Rustic Pathways Logo" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-200" loading="lazy" />
                    </Link>

                    <Link href={"https://www.tatotz.org/"} className="group transition-all duration-200 w-52">
                        <img src={"/assets/images/logos/partners/tato.png"} alt="Tato Logo" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-200" loading="lazy" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default PartnersMarquee