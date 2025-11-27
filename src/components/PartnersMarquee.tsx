'use client'

import Link from 'next/link'
import { memo } from 'react'
import { Marquee } from './ui/marquee'

const PARTNERS = [
    {
        name: 'Kafika House',
        image: '/assets/images/logos/partners/kafika-house.png',
        href: '/partners/kafika-house',
        width: 160,
    },
    {
        name: 'Rustic Pathways',
        image: '/assets/images/logos/partners/rustic-pathways.png',
        href: '/partners/rustic-pathways',
        width: 384,
    },
    {
        name: 'Tato',
        image: '/assets/images/logos/partners/tato.png',
        href: 'https://www.tatotz.org/',
        width: 208,
    },
]

const PartnerCard = memo(({ partner }: { partner: (typeof PARTNERS)[0] }) => (
    <Link
        href={partner.href}
        className="group transition-all duration-200 shrink-0 w-fit h-28"
        // style={{ width: `${partner.width}px` }}
    >
        <img
            src={partner.image || "/placeholder.svg"}
            alt={`${partner.name} Logo`}
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-200"
            loading="lazy"
        />
    </Link>
))

PartnerCard.displayName = 'PartnerCard'

const PartnersMarquee = memo(() => {
    return (
        <div className="flex overflow-hidden relative">
            <div className='h-full w-72 absolute left-0 bg-gradient-to-r from-white to-transparent z-10'></div>
            {/* Main marquee row */}
            <Marquee pauseOnHover>
                {PARTNERS.map((partner) => (
                    <PartnerCard key={`main-${partner.name}`} partner={partner} />
                ))}
            </Marquee>
            <div className='h-full w-72 absolute right-0  bg-gradient-to-l from-white to-transparent z-10'></div>
        </div>
    )
})

PartnersMarquee.displayName = 'PartnersMarquee'

export default PartnersMarquee
