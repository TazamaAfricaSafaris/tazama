export interface Lodge {
    title: string
    img: string
    link: string
    category: string
    activities?: {
        title: string
        description: string
    }[]
}
export const lodges: Lodge[] = [
    {
        title: 'Zuri Zanzibar Hotel & Resort',
        img: 'assets/images/gallery/lodges/zuri-zanzibar/zuri-zanzibar-header.webp',
        link: 'zuri-zanzibar-hotel-and-resort',
        category: 'Beach',
    },
    {
        title: 'Siringit Camp',
        img: 'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720097340/lodges/siringit-camps/1_jvlzqc.jpg',
        link: 'siringit-camps',
        category: 'Safari'
    },
    {
        title: 'Upendo Beach Zanzibar',
        img: 'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720099589/lodges/upendo-beach-zanzibar/6_dx1r30.jpg',
        link: 'upendo-beach-zanzibar',
        category: 'Beach'
    },
    {
        title: 'Lemala Camps & Lodges (Nanyukie)',
        img: 'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720091588/lodges/lemala-camps/lemala-nanyukie-card_q7trjz.jpg',
        link: 'lemala-camps-and-lodges',
        category: 'Safari',
    },
    {
        title: 'Namiri Plains Camp',
        img: 'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720093607/lodges/namiri-camps/gallery/4_ldzaaa.jpg',
        link: 'namiri-plains-camp',
        category: 'Safari'
    },
    {
        title: 'Tulia Beach Resort',
        img: 'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720098478/lodges/tulia-beach-resort/gallery/3_i1rqdt.jpg',
        link: 'tulia-beach-resort',
        category: 'Beach'
    },
    {
        title: 'Nimali Central Serengeti Camps',
        img: 'https://res.cloudinary.com/drhl0yu7y/image/upload/v1720096139/lodges/nimali-camps/3_fct7pe.jpg',
        link: 'nimali-central-serengeti-camps',
        category: 'Safari'
    },
    {
        title: 'Konokono Beach Resort & Spa',
        img: 'https://res.cloudinary.com/drhl0yu7y/image/upload/v1729687202/lodges/konokono-lodge/Screenshot_2024-10-23_153806_ib3uts.png',
        link: 'konokono-beach-resort',
        category: 'Beach'
    },
    {
        title: 'Matemwe Retreat',
        img: 'https://res.cloudinary.com/drhl0yu7y/image/upload/v1729843950/lodges/matemwe-retreat/matemwe-retreat-guest-suite_yogzka.jpg',
        link: 'matemwe-retreat',
        category: 'Beach',
    },
    {
        title: 'The Nest Boutique Resort',
        img: 'https://res.cloudinary.com/drhl0yu7y/image/upload/v1730108115/lodges/the-nest/the-nest-boutique-resort-2_frfhar.jpg',
        link: 'the-nest-boutique-resort',
        category: 'Beach'
    },
    {
        title: 'Lake Natron Camp',
        img: 'https://res.cloudinary.com/drhl0yu7y/image/upload/v1730116842/lodges/lake-natron-camp/_G8A1129_HDR_bd3xi1.jpg',
        link: 'lake-natron-camp',
        category: 'Safari'
    },
    {
        title: 'Gibb\'s Farm',
        img: 'https://res.cloudinary.com/drhl0yu7y/image/upload/v1730192116/lodges/gibbs-farm/gibbs-farm_401024-310_bldzlv.jpg',
        link: 'gibbs-farm',
        category: 'Safari'
    },
    {
        title: 'Manyara\'s Secret',
        img: 'https://res.cloudinary.com/drhl0yu7y/image/upload/v1730193689/lodges/manyaras-secret/ManyarasSecret_2020_1164-1536x1024_klqe6n.jpg',
        link: 'manyaras-secret',
        category: 'Safari'
    }
]