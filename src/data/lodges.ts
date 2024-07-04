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
]