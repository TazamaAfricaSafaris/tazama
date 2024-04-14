import {
  accordionQn,
  carousel,
  checkBoxOptions,
  itenaryProperties,
  navLink,
  selectOptions,
  specialOffersProperties,
} from "./index";

export const adventureData = [
  {
    img: "great-migration.webp",
    name: "The Great Migration",
  },
  {
    img: "kilimanjaro.webp",
    name: "Climb Kilimanjaro",
  },
  {
    img: "beach-holiday.webp",
    name: "Beach Holidays",
  },
  {
    img: "family-travel.webp",
    name: "Family Travel",
  },
  {
    img: "classic-safaris.webp",
    name: "Classic Safaris",
  },
  {
    img: "group-departure.webp",
    name: "Scheduled Group Departures",
  },
];

export const carouselData: carousel[] = [
  {
    rank: 1,
    heading: "Safari",
    images: [
      
      {
        rank: 1,
        imageSource: "classic-safaris.webp",
        title: "Classic Safari",
        link: "https://wetu.com/Itinerary/Landing/ba846c15-7182-4c70-ae4c-1c5b7993d227",
        description:
          "Embarking on a safari in Tanzania is an expedition that encapsulates the very essence of adventure. This 5-day safari is the perfect taster for those with limited time that want to see as much as possible.",
      },
      {
        link: "/itenaries?itenary=safari",
        rank: 2,
        imageSource: "migration.webp",
        title: "Migration",
        description:
          "Witness one of nature's most epic events- over two million wildebeest, zebra and gazelle making their annual journey to greener pastures.  It's sure to leave you breathless at its shear power and raw beauty.",
      },
      {
        imageSource: "family-trip.webp",
        title: "Family Trip",
        rank: 3,
        link: "#",
        description:
          "Visiting Africa with your loved ones can be one of the most exciting, fun and educational vacations you might ever take as a family. ",
      },
      {
        imageSource: "honey-moon-trip.webp",
        title: "Honeymoon Trip",
        rank: 4,
        link: "#",
        description:
          "We are not shy about saying Tanzania is the perfect place to honeymoon. Imagine taking an early morning air balloon ride above the grasslands of the Serengeti or enjoying a private candle lit dinner on the Indian Ocean.",
      },
    ],
  },
  {
    rank: 2,
    heading: "Trekking",
    images: [
      {
        imageSource: "mount-kilimanjaro.webp",
        title: "Mount Kilimanjaro",
        rank: 1,
        link: "/itenaries?itenary=mount-kilimanjaro",
        description:
          "Mount Kilimanjaro is one of the 'seven summits' and is the only one that does not require technical gear. Climbing Kilimanjaro is like walking from the equator to the North Pole in a week, providing dramatic changes in vegetation and animal life day by day. ",
      },
      {
        imageSource: "mount-meru.webp",
        title: "Mount Meru",
        rank: 2,
        link: "/itenaries?itenary=mount-meru",
        description:
          "Standing at 4,568m high, Mount Meru is the second highest mountain in Tanzania and the fifth highest in Africa.  The main summit is on the western edge, perched above a dramatic and still active Ash Cone inside the caldera. A physically demanding trek but worth it when you make it to the top.",
      },
      {
        imageSource: "gorilla-and-chimps.webp",
        title: "Gorrila",
        rank: 4,
        link: "/itenaries?itenary=gorilla-and-chimps",
        description:
          "Our passion for discovery drives us to uncover hidden gems and unique experiences in every destination, ensuring you unearth the extraordinary in your travels.",
      },
      {
        imageSource: "chimps.webp",
        title: "Chimps",
        rank: 3,
        link: "/itenaries?itenary=gorilla-and-chimps",
        description:
          "Our passion for discovery drives us to uncover hidden gems and unique experiences in every destination, ensuring you unearth the extraordinary in your travels.",
      },
    ],
  },
  {
    rank: 3,
    heading: "Beach Holiday",
    images: [
      {
        imageSource: "beach-holiday.webp",
        title: "Zanzibar",
        rank: 1,
        link: "/itenaries?itenary=beach-holiday",
        description:
          "Zanzibar is made up of fifty islands off the coast of Tanzania. It is a place steeped in centuries of tradition. It is often referred to as a cultural melting pot due to its prominence as a major trading port during the 19th century as well as being one of the last open slave markets in the world.",
      },
      {
        imageSource: "pemba.webp",
        title: "Pemba",
        rank: 3,
        link: "/itenaries?itenary=beach-holiday",
        description:
          "Our passion for discovery drives us to uncover hidden gems and unique experiences in every destination, ensuring you unearth the extraordinary in your travels.",
      },
      {
        imageSource: "mafia.webp",
        title: "Mafia",
        rank: 2,
        link: "/itenaries?itenary=beach-holiday",
        description:
          "What this tiny paradise offers is something for the more active beach goers - the largest marine park in East Africa, with whale sharks in residence all year round.",
      },
    ],
  },
];

export const navMainContent: navLink[] = [
  {
    title: "About Tazama",
    link: "/about",
  },
  {
    title: "Mount Kilimanjaro",
    link: "/itenaries?itenary=mount-kilimanjaro",
  },
  {
    title: "Mount Meru",
    link: "/itenaries?itenary=mount-meru",
  },
  {
    title: "Safari",
    link: "/itenaries?itenary=safari",
  },
  {
    title: "Beach Holiday",
    link: "/itenaries?itenary=beach-holiday",
  },
  {
    title: "Gorrila & Chimps Trekking",
    link: "/itenaries?itenary=gorilla-and-chimps",
  },
];

export const navSubContent: navLink[] = [
  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "Positive Impact",
    link: "/itenaries?itenary=",
  },
  {
    title: "FAQ",
    link: "/faq",
  },
  {
    title: "Special Offers",
    link: "/offer",
  },
  {
    title: "Photos and Videos",
    link: "/gallery",
  },
];

export const accordionQns: accordionQn[] = [
  {
    category: "safari",
    qn: "WHAT EXPECTATIONS SHOULD I HAVE ON SAFARI?",
    ans: "While we work to provide our guests with exceptional comfort and luxury while on safari, it is important to remember that a safari is by definition a journey and one in a pretty harsh environment compared to a holiday in Disneyland.  For most first-time safari-goers, safety is rightly a concern. Ensure you are following your guide’s instructions and not doing anything foolish, and your safety should not be in jeopardy at all while on a safari. Expect dust, insects, noisy animals, bumpy game drives and early mornings. However, those are small discomforts when you’re surrounded by a herd of dozens of elephants right in front of your eyes.",
  },
  {
    category: "safari",
    qn: "WHAT IS THE BEST TIME OF YEAR TO GO ON SAFARI?",
    ans: "East Africa has a dry season, which is the more popular option for safari, and the green season. Safaris in the dry season generally see animals congregated at waterholes and a less dense bush, which makes spotting animals easier. The green season offers more opportunities to see animals more spread out and a beautiful and lush green bush with plenty of birds. Depending on the time of year you wish to travel we will help you design a trip that maximizes wildlife viewing.",
  },
  {
    category: "safari",
    qn: "WHEN IS THE BEST TIME OF YEAR TO VIEW THE GREAT MIGRATION?",
    ans: "The Great Migration traditionally follows the rain as animals migrate towards better pastures. Therefore, it is difficult to determine precisely when it will happen. Working on the assumption of a 'normal' year, the migration generally begins in early April, May, and June, when the calves are strong enough and the journey north begins. From June/July the wildebeest gather in the Western Corridor of the Serengeti National Park and in August/September they cross the Grumeti River and head towards the Masai Mara in Kenya. From October to December, the animals begin to move back into the Serengeti heading south into Ndutu. Here they prepare to give birth, which usually occurs at the beginning of February.",
  },
  {
    category: "safari",
    qn: "HOW IS THE BIRDING IN TANZANIA?",
    ans: "Tanzania is an excellent all-year-round birding destination. It boasts over 1000 bird species, with Lake Manyara alone being home to more than 400. Thousands of flamingos on the lake make for a spectacular sight and photographic opportunity. At the height of the northern winter, some 160 species of migrants make their way south, adding to the local birdlife.",
  },
  {
    category: "safari",
    qn: "WHAT KIND OF CLOTHING SHOULD I PACK?",
    ans: "Casual, comfortable clothing is suitable throughout the year. Due to the high altitude on the rim of Ngorongoro Crater it can be cold at night (even in summer); therefore it is very important to pack warm clothing for the nights. The most practical items to pack are:",
    list: [
      "Khaki, brown, white, green and beige colors.",
      "Light cotton tops and cotton trousers/shorts in summer",
      "Long sleeved blouses/shirts for game drives, safari trousers for evenings and cooler days",
      "A fleece or sweater and a warm jacket for game drives in the early morning(and at the Ngorongoro Crater)",
      "Swimwear is a must for the beach",
      "A hat, sunglasses and sunscreen",
      "Comfortable walking shoes",
      "For climbing Mount Kilimanjaro and Meru: Thermal underwear, light layers, sweater, warm jacket, good socks and sturdy boots.",
    ],
    note: "*Please note: brighter colours like blue or red are proven to attract insects while the tan range of colors show dirt less obviously and also do not absorb heat as much as darker colors.",
  },
  {
    category: "safari",
    qn: "ARE THERE SPECIAL REQUIREMENTS TO GET INTO TANZANIA?",
    ans: "Visitors must be vaccinated against yellow fever no less than ten days before travel to Tanzania and need to produce a Yellow Fever Vaccination Certificate at the point of entry. If you do not have one, you could be required to get an injection at the airport. If you cannot have a yellow fever injection for medical reasons, you will need to produce a doctor's letter stating these reasons. Areas of Tanzania still face issues with malaria and malaria prophylactics are highly recommended. Please consult your medical practitioner when planning your trip.",
  },
  {
    category: "safari",
    qn: "WILL THERE BE WIFI AVAILABLE?",
    ans: "Most lodging accommodations will have Wi-Fi available. It is important to note that while Wi-Fi is available in most areas, it is most likely not the speed you are used to but should be efficient enough to check email and communicate back home.",
  },
  {
    category: "safari",
    qn: "HOW MUCH SHOULD I TIP MY SAFARI GUIDE?",
    ans: `We recognize tipping isn’t customary throughout the world. We pay our guides above industry standards so that they are not reliant on tips or commissions. We believe this also allows them to focus on delivering an outstanding experience without needing to worry about tips at the end. That being said, if you’d like to give your guide a tip to appreciate a job well done - we highly encourage you to do so. A general rule of thumb is $10 USD per day per person. <a href="#">For more information on tipping in Tanzania, please visit our blog post about tipping</a>.`,
  },
  {
    category: "kili",
    qn: "WHAT TIME OF YEAR SHOULD I CLIMB KILIMANJARO ?",
    ans: "We have scheduled climbs year-round. If you have a particular event or day you would like to be standing on the summit; we can arrange that.  Typically the months of January-February and July - October see less precipitation on the mountain.",
  },
  {
    category: "kili",
    qn: "HOW DO I PREPARE FOR MY CLIMB UP KILIMANJARO?",
    ans: "Even if you are using the relatively 'easy' Marangu route, the high altitude (thus low oxygen supply levels), and the physical strain of the long treks still require you to be both physically and mentally ready for the challenge. You should start physically preparing for the climb at least two months before the actual climb. Regular hiking is probably the best training exercise you can undertake for climbing Mt Kilimanjaro. If you have access to hiking trails with moderate elevation, make the most out of it. It conditions your legs for the strenuous uphill and downhill climbs you will encounter on the mountain. At the very least, you should trek for one hour, two to three times a week, with more extended treks during the weekend. You can also make use of the stair master machine if you have access to a gym. Aerobic training can also enhance your body's ability to function efficiently when oxygen supply is low. Simple exercises such as cycling and running can help build your aerobic capacity. If you have access to high altitude training systems, it can help you to pre-acclimatize to high altitude, thus improving your chances for success Check out our blog post on exercises you can do to prepare for your trek!",
  },
  {
    category: "kili",
    qn: "WHAT GEAR IS SUPPLIED BY TAZAMA AFRICA?",
    ans: "We supply all necessary camping gear, including waterproof 4-season tents, sleeping bags, sleeping pads, tables and chairs, cooking gear and private portable toilet if you’ve opted for that package. You can also rent trekking poles or other gear for a small additional cost",
  },
  {
    category: "kili",
    qn: "WHAT ROUTE IS THE BEST FOR ME?",
    ans: "Which route you choose is a personal choice and will depend on many factors, including your vacation time available, budget, and personal preference. We can recommend that generally speaking, the more days you spend on the mountain, the higher the rate of a successful summit. Other things to consider when choosing a route is how scenic you’d like the trek to be and if you’d like to avoid the majority of crowds.",
  },
  {
    category: "kili",
    qn: "OKAY, BUT WHAT ROUTE DO YOU RECOMMEND?",
    ans: "Lemosho is considered the most beautiful route on Kilimanjaro and grants panoramic vistas on various sides of the mountain. It is our favorite route because it offers an outstanding balance of low traffic, scenic views, and a high summit success rate. Thus, Lemosho comes highly recommended for its great chance for acclimatization, and most of our clients use Lemosho. The Machame route is also popular for its scenically beautiful with great views and a great chance of acclimatization. However, due to the heavy crowds, it loses some of its splendor.",
  },
  {
    category: "kili",
    qn: "WHY SHOULD I CLIMB WITH TAZAMA?",
    list: [
      " We focus on safety above else – from the twice-daily health checks to the safety gear carried on each climb (oxygen, stretchers, first-aid kits, pulse oximeters, radios, satellite phones, and medical evacuation coverage)",
      " Your guides and crew – Your mountain crew has been hand-selected, and many have been with us from when we started. Your guides carry Wilderness First Responder Certifications. Their energy will keep you going when it gets difficult, and you’ll leave with new friends at the end.",
      "Your gear on the mountain – we use Mountain Hardwear Trango-3 4-season tents. These keep you warm and comfortable in even the windiest of conditions.",
      " Our menu - a well-planned menu based on your dietary requirements designed to keep you fit and healthy on the mountain.",
      "Environmental responsibility on and off the mountain – We have developed procedures to ensure waste is minimal on and off the mountain. You’ll be encouraged to use your disposable bags for used tissue on the trail (unfortunately, this practice is not practiced by most operators on the mountain- tissue is left on the trail). Additionally, our porters are rewarded for bringing down extra trash off the mountain.",
      "Social responsibility – we adhere to all guidelines set by KPAP to ensure the fair and ethical treatment of porters on the mountain. You can climb assured that your money is going towards stable and fair employment.",
      "Experience – We set out to create an experience from the moment you arrive, which is personal, authentic, and exclusive. We genuinely care about delivering an experience that goes beyond expectations and is indeed the trip of a lifetime.",
    ],
  },
  {
    category: "kili",
    qn: "WHO ARE YOUR GUIDES?",
    ans: "Our guides are enthusiastic and accommodating. They ‘show you the ropes’ and encourage you every step of the way. Our guides have Wilderness First Responder Training, and we receive constant training in other facets of their work throughout the year.",
  },
  {
    category: "kili",
    qn: "HOW FAR WILL I TREK EACH DAY?",
    ans: "Depending upon the selected route, you may trek and average of 4-8 hours per day with the summit day being the longest.",
  },
  {
    category: "kili",
    qn: "WHAT WILL I NEED TO CARRY IN MY DAY PACK?",
    ans: "We advise you to carry all valuable assets, 3 liters of water, medications, trekking poles, rain clothes, snacks, warm jacket, sun hat, sunscreen, sanitizers, warm hat, and sunglasses.",
  },
  {
    category: "kili",
    qn: "WILL SAFETY EQUIPMENT BE AVAILABLE?",
    ans: "Kilimanjaro is a non-technical climb but goes to a very high altitude, so safety measures need to be taken very seriously. Our team is highly trained in high-altitude issues and recognizing and treating symptoms. They have both the skills and equipment they need to assess these issues at the moment and daily. Our support staff in the office are trained to handle these types of evacuations. \n\n Our guides always carry a first aid kit with them, and we also have a dedicated medical porter that walks with your group. We have emergency oxygen tanks on hand, as well as a stretcher. And if the condition is more serious, we do helicopter evacuations to the nearby high-altitude clinic for assessment. In a medical emergency, the first course of action is always to get you off the mountain in the quickest and safest way possible. \n\n We also carry radios, cellphones, and satellite phones on each climb to aid in quick and easy communication.",
  },
  {
    category: "kili",
    qn: "WHAT IMMUNIZATIONS DO I NEED BEFORE ENTERING TANZANIA?",
    ans: "Check the vaccines and medicines list and visit your doctor at least a month before your trip to get vaccines or medicines you may need. Refer to the CDC's website (https://wwwnc.cdc.gov/travel/destinations/traveler/none/tanzania) for the most up to date information.",
  },
  {
    category: "kili",
    qn: "WHAT IS THE FOOD LIKE ON THE MOUNTAIN?",
    ans: "We eat well on our trips, which feature an abundance of fresh, local, and delicious food. A filter purifies all water used for cooking and drinking, or it’s boiled. We can also accommodate special dietary requests (vegetarian, food allergies, etc.); just let us know.",
  },
  {
    category: "kili",
    qn: "HOW MUCH SHOULD I TIP THE STAFF?",
    ans: "We usually recommend each climber to tip a total of 15-20% of what they are paid for their climb. You can read our tipping guidelines here",
  },
  {
    category: "kili",
    qn: "WHAT CAN I DO WITH ITEMS I DON’T BRING ON THE CLIMB?",
    ans: "Most of the time, we take care of the extra items at our office and bring them when we come to meet you after the climb/safari.",
  },
  {
    category: "kili",
    qn: "SHOULD I USE ATTITUDE MEDICATION?",
    ans: "We highly recommend it, but you should consult with your doctor first before taking Diamox.",
  },
  {
    category: "kili",
    qn: "IS THE WATER SAFE TO DRINK?",
    ans: "Yes, we usually boil the water and treat or purify the water. But most of the time, we prefer boiling because with purifying, some clients might be allergic to the chemicals in the water purifiers.",
  },
  {
    category: "kili",
    qn: "DO I NEED TRAVELERS INSURANCE?",
    ans: "Yes. Travel insurance to cover theft and illness is essential. Emergency medical cover is the most vital element of your travel insurance. If you suffer an injury, medical costs can start to stack up quickly, especially if an emergency medical evacuation is required.",
  },
  {
    category: "kili",
    qn: "WHAT ARE THE TANZANIAN VISA REQUIREMENTS TO ENTER THE COUNTRY?",
    ans: "The Visa to enter Tanzania is $100 for US citizens and $50 for all others. These can be purchased upon arrival at Kilimanjaro International Airport or beforehand. Refer to this https://eservices.immigration.go.tz/visa/ for the most up to date information. Ensure your passport is valid at least 6 months from the entry date into Tanzania.",
  },
  {
    category: "kili",
    qn: "WHAT CURRENCY IS USED IN TANZANIA; CAN I USE CREDIT CARDS?",
    ans: "The Tanzanian Shilling is the national currency. US Dollars are widely accepted throughout Moshi and Arusha and park entrances throughout safari. Credit cards are only accepted at the airlines and major hotels within Tanzania. Plan on traveling with sufficient US Dollars.",
  },
  {
    category: "kili",
    qn: "HOW MUCH TRAINING SHOULD I BE DOING?",
    ans: "Climbing Kilimanjaro doesn’t require you to have prior experience on a mountain or be an athlete. Still, a successful climb generally requires some commitment beforehand to training and a general level of activity.",
  },
  {
    category: "kili",
    qn: "WHAT ELECTRICITY IS USED?",
    ans: "The local electricity supply is 220 volts Type G or D. You should bring your own international adapter.",
  },
  {
    category: "kili",
    qn: "WHAT IS THE TEMPERATURE ON KILIMANJARO?",
    ans: "The temperature during your trek can vary greatly. During the first day of the climb, the weather is typically between 70-90F, reaching temps of -10F at the summit. Once you get above the treeline, you’ll find a typical day's weather to be between 30-50F. Remember that weather can change quickly on the mountain, so don’t forget your waterproof layers in your day pack.",
  },
  {
    category: "kili",
    qn: "WHAT IS TAZAMA’S SUMMIT SUCCESS RATE?",
    ans: "This varies from the route. In 2022, we had a 100% success rate on Lemosho, 95% on Machame, 100% on Rongai, 100% on Northern Circuit, and 100% on Marangu.",
  },
];


export const safaris = [
  {
    id: 1,
    name: "HoneyMoon Safaris",
    img: "honey-moon-trip.webp",
    href: "/safaris/honeymooners",
  },
  {
    id: 2,
    name: "Family Safaris",
    img: "family-trip.webp",
    href: "/safaris/family-safaris",
  },
  {
    id: 3,
    name: "Wildlife and Nature",
    img: "blog.webp",
    href: "/safaris/wildlife-adventures",
  },
  {
    id: 4,
    name: "Adventure Seekers",
    img: "about.webp",
    href: "/safaris/adventure-seekers",
  },

  {
    id: 6,
    name: "Classic Safaris",
    img: "discovery.webp",
    href: "/safaris/classic-safaris",
  },
  {
    id: 7,
    name: "Offbeaten Path",
    img: "chimps.webp",
    href: "/safaris/off-beaten-path",
  },
  {
    id: 8,
    name: "Best of Tanzania",
    img: "gorilla-and-chimps.webp",
    href: "/safaris/arushaNationalPark",
  },
  {
    id: 9,
    name: "Migration Safaris",
    img: "lioness.webp",
    href: "/safaris/migration-safaris",
  },
  {
    id: 10,
    name: 'Beach Holiday',
    img: "zanzibar.jpg",
    href: "/safaris/zanzibar"
  }
];
