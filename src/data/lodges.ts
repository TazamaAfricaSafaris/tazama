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
        img: 'zuri-zanzibar/zuri-zanzibar-header.webp',
        link: 'zuri-zanzibar-hotel-and-resort',
        category: 'Beach',
    },
    {
        title: 'Siringit Camp',
        img: 'siringit-camps/siringit-camps.jpg',
        link: 'siringit-camps',
        category: 'Safari'
    },
    {
        title: 'Upendo Beach Zanzibar',
        img: 'upendo-beach-resort/upendo-beach-resort-header.jpg',
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
        img: 'tulia-beach-resort/tulia-beach-resort.jpg',
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