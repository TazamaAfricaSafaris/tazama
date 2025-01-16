interface SafariOfferType {
    title: string
    image: string
    price: number
    days: {
        title: string
        description: string
    }[]
}

export const services = [
    "Bespoke Safari Adventures",
    "Mount Kilimanjaro Treks",
    "Beach Holidays",
    "Gorilla & Chimp Trekking",
    "Cultural Immersion and Community Engagement",
    "Sustainable & Eco-friendly Travel"
]

export const safariOffers: SafariOfferType[] = [
    {
        title: "1 Day Safari - Arrival and Exploration",
        image: "https://res.cloudinary.com/drhl0yu7y/image/upload/v1736413100/special-offers/boabab-tarangire-national-park_l2eump.jpg",
        price: 239,
        days: [
            {
                title: "Tarangire National Park",
                description: "Enjoy a safari through Tarangire's vast landscapes, famous for its massive elephant heards and towering boabab trees"
            },
            {
                title: "Lake Manyara National Park",
                description: "Discover the unique wildlife of Lake Manyara, home to tree-climbing lions, flamingos and diverse bird species"
            },
            {
                title: "Arusha National Park",
                description: "Explore the scenic beauty of Arusha National Park, with its lush forests, volcanic landscapes and diverse wildlife near Mount Meru"
            }
        ]
    },
    {
        title: "2 Day Safari - Tarangire & Ngorongoro",
        image: "https://res.cloudinary.com/drhl0yu7y/image/upload/v1736413505/special-offers/22091085778_5412f866c9_b_modtnz.jpg",
        price: 1413,
        days: [
            {
                title: "Tarangire National Park",
                description: "Tarangire is a true wildlife haven, famous for its huge elephant herds and stunning baobab trees. The park offers a chance to get up close with a variety of animals, from lions to wildebeests in a strikingly beautiful landscape"
            },
            {
                title: "Ngorongoro Crater",
                description: "A visit to Ngorongoro Crater is like stepping into another world - lush grasslands, dense forests and a rich array of wildlife, all set within a collapsed volcano. It's one of the best places to spot the Big Five in a single day!"
            },
        ]
    },
    {
        title: "2 Day Safari - Arusha National Park (walking and canoe)",
        image: "https://res.cloudinary.com/drhl0yu7y/image/upload/v1736413655/special-offers/arusha-national-park_ndf27j.jpg",
        price: 677.43,
        days: [
            {
                title: "Arusha National Park Walking and Canoeing",
                description: "Enjoy a thrilling walking safari through the diverse landscapes of Arusha, from lush forests to an open savannah, guided by expert rangers. You'll also canoe across serene Momella Lake, where you can paddle past hippos, flamingos and breathtaking views of Mount Meru"
            },
        ]
    },
    {
        title: "3 Day Safari - 2 days in Tarangire & Ngorongoro Crater",
        image: "https://res.cloudinary.com/drhl0yu7y/image/upload/v1736413759/special-offers/Ngorongoro_Crater_Lodge_2_ditbzf.jpg",
        price: 1413.10,
        days: [
            {
                title: "Day 1: Tarangire National Park",
                description: "Kick off your safari in Tarangire, famous for its massive elephant herds and stunning baobab trees. Spend the day exploring the park's diverse wildlife, from lions to zebras, in a truly unique landscape"
            },
            {
                title: "Day 2: Ngorongoro Crater",
                description: "Descend into the Ngorongoro Crater, a wildlife-rich caldera teeming with with the Big Five. The vast scenic crater floor offers an unforgettable safari experience with close-up views of abundant wildlife"
            },
            {
                title: "Day 3: Tarangire National Park",
                description: "Head back to Tarangire for another exciting day of safari, where you'll encounter even more elephants, lions and a variety of birds in this beautiful, expansive park. A perfect finish to your adventure"
            },
        ]
    },
    {
        title: "3 Day Safari - Safari and Culture (Mto wa Mbu and Hadzabe cultural activities and Ngorongoro Crater)",
        image: "https://res.cloudinary.com/drhl0yu7y/image/upload/v1736413893/special-offers/mto-wa-mbu-and-great-rift-valleywall-bicycle-tour_ldabxj.jpg",
        price: 1028.30,
        days: [
            {
                title: "Day 1: Mto wa Mbu Cultural Activities",
                description: "Start your adventure with a cultural immersion in Mto wa Mbu, where you can visit local villages, explore vibrant markets and experience traditional farming practices. Enjoy a guided walk through the area and learn about the rich heritage of the diverse tribes."
            },
            {
                title: "Day 2: Hadzabe Tribe Experience",
                description: "Venture into the bush to meet the Hadzabe, one of the last remaining hunter-gatherer tribes in Africa. Experience their unique way of life, learn about their traditional hunting techniques and witness their fascinating survival skills in the wild."
            },
            {
                title: "Day 3: Ngorongoro Crater",
                description: "Conclude your journey with a day at Ngorongoro Crater, where you'll spot the Big Five and other incredible wildlife in a breathtaking volcanic landscape. The vast, game-filled caldera offers a surreal safari experience with panoramic views"
            },
        ]
    },
    {
        title: "4 Day Safari - Arusha National Park walk, 2 Days in Tarangire and Ngorongoro Crater",
        image: "https://res.cloudinary.com/drhl0yu7y/image/upload/v1736414123/special-offers/tarangire-2-4_yikcsx.jpg",
        price: 1916.00,
        days: [
            {
                title: "Day 1: Arusha National Park - Walking Safari",
                description: "Embark on a guided walking safari in Arusha, where you'll explore diverse landscapes and encounter giraffes, zebras and monkeys. Enjoy stunning views of Mount Meru and the tranquil Momella Lakes"
            },
            {
                title: "Day 2: Tarangire National Park",
                description: "Discover Tarangire's vast savannahs and iconic baobab trees, home to large, elephant herds and abundant wildlife. A day filled with amazing sightings and dramatic landscapes."
            },
            {
                title: "Day 3: Tarangire National Park",
                description: "Return to Tarangire for another day of safari, where you'll explore different areas of the park and encounter more lions, giraffes and diverse wildlife in a stunning setting"
            },
            {
                title: "Day 4: Ngorongoro Crater",
                description: "Descend into the Ngorongoro Crater for a full day of wildlife viewing in one of the world's most unique ecosystems where the Big Five roam the caldera floor amid breathtaking landscapes."
            }
        ]
    },
    {
        title: "6 Day Safari - Wilderbeest Migration Safari (Tarangire, Ngorongoro, 1 night Central Serengeti, 2 nights Kogatende then to fly to Arusha)",
        image: "https://res.cloudinary.com/drhl0yu7y/image/upload/v1736414253/special-offers/WhatsApp-Image-2024-10-02-at-15.07.11_sxncmh.jpg",
        price: 4295.59,
        days: [
            {
                title: "Day 1: Tarangire National Park",
                description: "Start your adventure in Tarangire, where you'll witness huge herds of elephants and abundant wildlife in a stunning landscape of baobab trees. A perfect introduction to Tanzania's incredible wildlife."
            },
            {
                title: "Day 2: Ngorongoro Crater",
                description: "Descend into the Ngorongoro Crater for a day of wildlife viewing in this breathtaking caldera. Spot the Big Five and enjoy panoramic views of lush crater floor, teeming with animals."
            },
            {
                title: "Day 3: Central Serengeti",
                description: "Return to Tarangire for another day of safari, where you'll explore different areas of the park and encounter more lions, giraffes and diverse wildlife in a stunning setting."
            },
            {
                title: "Day 4: Kogatende (Northern Serengeti)",
                description: "Travel to Kogatende in Northern Serengeti where the wildebeest migration reaches it's peak. Witness thousands of wildebeests crossing the Mara River in dramatic fashion, along with plenty of predators following closely behind"
            },
            {
                title: "Day 5: Kogatende (Northern Serengeti)",
                description: "Spend another day in Kogatende, exploring the migration up close. The region offers spectacular wildlife viewing, including river crossings, big cats and the massive herds of wildebeests and zebras"
            },
            {
                title: "Day 6: Fly to Arusha",
                description: "Spend another day in Kogatende, exploring the migration up close. The region offers spectacular wildlife viewing, including river crossings, big cats and the massive herds of wildebeests and zebras"
            },
        ]
    },
    {
        title: "7 Day Safari - Off beaten path (Safari and hike) - Ngorongoro Crater, Empakai Crater hike, Ngorongoro hike, 2 nights at Lake Natron",
        image: "https://res.cloudinary.com/drhl0yu7y/image/upload/v1736414351/special-offers/18622205_10154648507493683_695843075491731933_n_y2wkpe.jpg",
        price: 5587.53,
        days: [
            {
                title: "Day 1: Ngorongoro Crater",
                description: "Visit Ngorongoro Crater and enjoy a safari with stunning views of wildlife, including the Big Five. The caldera offers a unique landscape full of animals and natural beauty."
            },
            {
                title: "Day 2: Empakai Crater Hike",
                description: "Hike to Empakai Crater, a peaceful and scenic spot with a beautiful crater lake. Enjoy the quiet, lush surroundings and spot flamingos and other wildlife."
            },
            {
                title: "Day 3: Ngorongoro Highlands Hike",
                description: "Hike through the Ngorongoro Highlands, where you'll get amazing views of the Rift Valley. Visit Maasai villages to learn about their culture and way of life."
            },
            {
                title: "Day 4: Lake Natron",
                description: "Travel to Lake Natron, a surreal, alkaline lake surrounded by volcanic landscapes. Explore the area and see the flamingos that gather by the water."
            },
            {
                title: "Day 5: Ol Doinyo Lengai Hike",
                description: "Hike to Ol Doinyo Lengai, an active volcano and enjoy panoramic views of the landscape. Feel the power of the volcano and the wild beauty of the area."
            },
            {
                title: "Day 6: Lake Natron Waterfall Hike",
                description: "Take a hike to beautiful waterfalls near Lake Natron, surrounded by dramatic scenery. Enjoy a refreshing dip in the cool water after your hike."
            },
            {
                title: "Day 7: Return to Arusha",
                description: "Drive back to Arusha, wrapping up your off-beaten-path adventure with unforgettable memories of hikes, wildlife and unique landscapes."
            },
        ]
    },
    {
        title: "9 Day - Safari and Zanzibar (Tarangire, Ngorongoro, 1 night in Central Serengeti, 2 night Kogatende and 3 nights in Zanzibar)",
        image: "https://res.cloudinary.com/drhl0yu7y/image/upload/v1736414459/special-offers/zanzibar-beach_h3gy4i.jpg",
        price: 5483.53,
        days: [
            {
                title: "Day 1: Arusha to Tarangire",
                description: "Drive to Tarangire National Park and enjoy an afternoon game. Stay overnight at a lodge or camp in Tarangire."
            },
            {
                title: "Day 2: Manyara to Ngorongoro Crater",
                description: "Drive to Ngorongoro park overnight at a lodge near the crater rim."
            },
            {
                title: "Day 3: Ngorongoro to Central Serengeti",
                description: "Drive to the Central Serengeti with an afternoon game drive. Stay overnight at a lodge or camp in Central Serengeti."
            },
            {
                title: "Day 4: Central Serengeti to Kogatende",
                description: "Morning game drive in Central Serengeti, then head to Kogatende in the north. Check-in at your lodge/camp in Kogatende, Serengeti."
            },
            {
                title: "Day 5: Kogatende - Northern Serengeti",
                description: "Full-day game drives in Kogatended, ideal for witnessing the wildebeest migration. Enjoy evening game viewing and relax at your camp/lodge."
            },
            {
                title: "Day 6: Serengeti to Zanzibar",
                description: "Morning game drive in Serengeti, then fly to Zanzibar in the afternoon. Check into your Zanzibar hotel, relax or explore Stone Town."
            },
            {
                title: "Day 7 - 8: Beach & Exploration",
                description: "Spend the day relaxing on Zanzibar's beaches or exploring Stone Town."
            },
            {
                title: "Day 9 - Departure",
                description: "Enjoy a final morning on the beach or shopping in Stone Town. Transfer to Zanzibar Airport for your flight home."
            }
        ]
    }
]

export const safariOffersIncludes = [
    "All park fees and conservation fees",
    "English speaking guide",
    "Private 4x4 Land Cruiser",
    "All accomodation as listed on the itenary",
    "All meals listed on Safari",
    "Airport Transfer",
];

export const safariOffersExcludes = [
    "Tanzania Visa (can be obtainded on arrival or online)",
    "Items of a personal nature",
    "International flight",
    "Tipping your safari driver guide is highly recommended",
    "The guidelines is USD 25 per person per day",
]


export const trekkingOffers = [
  {
    offer: "Mount Meru Day Hike",
    price: 595,
  },
  {
    offer: "Mount Meru 3 Days Hike",
    price: 650,
  },
  {
    offer: "Mount Meru 4 Days Hike",
    price: 1100,
  },
  {
    offer: "Mount Kilimanjaro Day Hike",
    price: 650,
  },
  {
    offer: "Mount Kilimanjaro Marangu route - 5 days",
    price: 1712,
  },
  {
    offer: "Mount Kilimanjaro Marangu route - 6 days",
    price: 2196,
  },
  {
    offer: "Mount Kilimanjaro Marangu route - 7 days",
    price: 2537,
  },
  {
    offer: "Mount Kilimanjaro Marangu route - 8 days",
    price: 2998,
  },
];

export const trekkingOffersIncludes = [
    "All meals on the mount",
    "Drinking water",
    "Tents",
    "Sleeping pads and Sleeping bags",
    "Tea/coffee/juice",
    "Transfers to and from the gate",
    "All park fees",
    "Ranger fees",
    "Village/forest fees",
    "Wilderness certified first-aid guides",
    "Emergency oxygen",
    "Daily health checks",
    "Pulse oximeter",
    "Portable stretcher",
    "Portable private toilet",
    "Proffessional crew",
    "Emergency evacuation"
];

export const trekkingOffersExcludes = [
    "Accomodations before and after the trek",
    "Medical evacuation insurance",
    "Tips for crew",
    "Alcohol",
    "Items of personal nature",
    "Tanzanian visa"
]
