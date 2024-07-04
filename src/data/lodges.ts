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
        img: 'lemala-camps/lemala-nanyukie-card.jpg',
        link: 'lemala-camps-and-lodges',
        category: 'Safari',
        activities: [
            {
                title: "Game Drives",
                description: "Explore the Serengeti on guided game drives, where you can witness the Big Five and other fascinating wildlife in their natural habitat."
            },
            {
                title: "Bush Walks",
                description: "Experience the smaller details of the Serengeti ecosystem on foot, led by knowledgeable guides."
            },
            {
                title: "Bird Watching",
                description: "Discover a diverse array of bird species that call the Serengeti home."
            },
            {
                title: "Cultural Visits",
                description: "Engage with the local Maasai communities and learn about their traditions and way of life."
            }
        ]
    },
    {
        title: 'Namiri Plains Camp',
        img: 'namiri-plains/namiri-plains-header.jpg',
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
        img: 'nimali-camp/nimali-camp-header.jpg',
        link: 'nimali-central-serengeti-camps',
        category: 'Safari'
    },
]