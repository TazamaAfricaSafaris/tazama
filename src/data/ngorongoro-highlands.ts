/* eslint-disable @typescript-eslint/no-explicit-any */
interface ItineraryDay {
  id: number;
  day: string;
  description?: string[];
  mealPlan?: string[];
  accomodation?: string;
  totalDays?: number;
  note?: string;
  gallery?: { src: string; alt?: string }[];
  hotelDescription?: string;
  amenities?: string[];
  descriptionPortable?: any[];
  highlights?: string;
  transferTime?: string;
  distance?: string;
  tripType?: string;
}

export const ngorongoroHighlands: ItineraryDay[] = [
  {
    id: 1,
    day: "Arrival at Kilimanjaro International Airport (KIA) - Transfer to Arusha",
    description: [
      "Upon arrival at Kilimanjaro International Airport, you will be warmly welcomed by your Tazama guide and transferred to your accommodation in Arusha.",
      "After your long journey, today is all about rest and recovery. Enjoy the comforts of a peaceful lodge surrounded by nature, where you can refresh, relax, and prepare for the adventure ahead."
    ],
    totalDays: 6
  },
  {
    id: 2,
    day: "Arusha to Ngorongoro Crater Game Drive - Camp at Nainokanoka",
    description: [
      "After breakfast, depart Arusha and head to one of the most famous natural wonders in Africa, the Ngorongoro Crater. This is the world's largest intact volcanic caldera, descending over 600 meters below the highlands.",
      "Enjoy a full day of game driving through this UNESCO World Heritage Site, home to black rhinos, lions, elephants, and large herds of buffalo and wildebeest.",
      "After your safari, ascend back to the crater rim and continue to Nainokanoka village, a highland campsite nestled beneath Olmoti Crater. Here, you will camp with panoramic views over the Highlands."
    ],
    accomodation: "Nainokanoka Camp",
    note: "Altitude: 2,800 meters",
    totalDays: 6,
    gallery: [
        { src: "https://res.cloudinary.com/drhl0yu7y/image/upload/v1764885674/ngorongoro-highlands/1_z8ryfv.jpg", alt: "Ngorongoro Crater Game Drive" },
        { src: "https://res.cloudinary.com/drhl0yu7y/image/upload/v1764885674/ngorongoro-highlands/2_izwhue.jpg", alt: "Nainokanoka Camp" }
    ]
  },
  {
    id: 3,
    day: "Trek from Nainokanoka to Olmoti Crater - Transfer to Empakaai Crater",
    description: [
      "Wake up to the cool, misty air of the Highlands. After breakfast, begin a short trek from Nainokanoka to the Olmoti Crater. This lesser-known crater rewards hikers with views of waterfalls cascading into the lush caldera below and wide-open highland scenery dotted with Maasai bomas.",
      "Return to Nainokanoka for lunch before driving through scenic highlands to Empakaai Crater, where your next campsite awaits at the crater's rim.",
      "In the afternoon, hike down into Empakaai's emerald green depths. At the bottom, discover its alkaline lake, often dotted with flamingos and other birdlife.",
      "Return to camp on the rim for the night. Expect one of the most peaceful nights, surrounded only by nature's sounds."
    ],
    accomodation: "Empakaai Crater Rim Camp",
    distance: "8-10 km",
    note: "Altitude at camp: Approx. 2,700 meters",
    totalDays: 6,
    gallery: [
        { src: "https://res.cloudinary.com/drhl0yu7y/image/upload/v1764885800/ngorongoro-highlands/3_mxu56u.jpg", alt: "Empakaai Crater Rim Camp" },

    ]
  },
  {
    id: 4,
    day: "Empakaai Crater to Acacia Camp via Naiyobi Village",
    description: [
      "Today's trek takes you along the edge of Empakaai's dramatic rim, offering sweeping views across the Great Rift Valley below and even as far as Kenya's Mount Meru on a clear day.",
      "Continue through traditional Maasai lands until you reach Naiyobi Village. Here, you will enjoy a packed lunch and a brief rest while witnessing authentic highland Maasai life untouched by tourism.",
      "In the afternoon, continue your journey with a short walk to the tranquil Acacia Campsite, nestled beneath the shade of ancient acacia trees."
    ],
    accomodation: "Acacia Camp",
    distance: "12-15 km",
    note: "Altitude: Descending gradually towards 1,900 meters",
    totalDays: 6,
    gallery: [
        { src: "https://res.cloudinary.com/drhl0yu7y/image/upload/v1764885867/ngorongoro-highlands/4_rkrpb6.jpg", alt: "Acacia Camp" },
    ]
  },
  {
    id: 5,
    day: "Trek to the Rift Valley - Transfer to Lake Natron",
    description: [
      "An early start today for one of the most breathtaking walks of the journey. Descend through golden grasslands and scattered acacia groves down the steep Rift Valley escarpment. The views are simply unforgettable, stretching across endless volcanic plains towards Lake Natron and Ol Doinyo Lengai, the sacred Maasai Mountain of God.",
      "At the base, your vehicle will meet you and transfer you to the serene Lake Natron Camp. After days of trekking, this is your place to relax fully—cool off in the natural spring pools, enjoy a massage, or simply take in the wild beauty around you.",
      "Activities here include hikes to dramatic waterfalls, flamingo walks on the shores of Lake Natron, and visiting ancient hominid footprints, estimated to be over 100,000 years old."
    ],
    accomodation: "Lake Natron Camp",
    distance: "10-12 km",
    note: "Altitude: Descend from 1,900 meters to approx. 600 meters",
    totalDays: 6,
    gallery: [
        { src: "https://res.cloudinary.com/drhl0yu7y/image/upload/v1764885944/ngorongoro-highlands/5_t7rcel.jpg", alt: "Lake Natron Camp" },
    ]
  },
  {
    id: 6,
    day: "Lake Natron to Arusha / Optional Maasai Village Stay",
    description: [
      "Today, you can either return to Arusha, marking the end of this once-in-a-lifetime journey, or choose to extend your stay with a visit to a nearby Maasai community for a deeper cultural experience."
    ],
    transferTime: "Approx. 6-7 hours",
    note: "Drive time back to Arusha: Approx. 6-7 hours",
    totalDays: 6
  }
];