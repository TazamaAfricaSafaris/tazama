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

export const sixDayAmboseliMaasaiMaraSafari: ItineraryDay[] = [
  {
    id: 1,
    day: "Day 1: Amboseli National Park",
    description: [
      "Welcome to your safari adventure! After meeting our team, we'll explain the next steps and set out to Amboseli National Park, where Mt. Kilimanjaro provides a stunning backdrop. Famous for its large elephant population and diverse wildlife, Amboseli offers a classic safari experience."
    ],
    highlights: "Transfer to Amboseli, Afternoon game drive, Mt. Kilimanjaro views",
    note: "Morning: Transfer by Road to Wilson Airstrip, Mid-morning: Transfer by Air to Amboseli National Park, Afternoon: Game drive, Late Afternoon: Leisure",
    totalDays: 6
  },
  {
    id: 2,
    day: "Day 2: Amboseli National Park",
    description: [
      "Explore Amboseli further with game drives that provide excellent opportunities to see elephants, lions, cheetahs, and more, along with beautiful birdwatching. Optionally, visit a Maasai village for a cultural experience."
    ],
    highlights: "Morning & Afternoon game drives, Optional Maasai cultural visit",
    note: "Optional Afternoon: Maasai cultural visit",
    totalDays: 6
  },
  {
    id: 3,
    day: "Day 3: Masai Mara National Reserve",
    description: [
      "Embark on a thrilling safari in the Masai Mara National Reserve, renowned for its abundant big cats and stunning landscapes. Enjoy daily game drives, and optionally, take a breathtaking balloon safari over the Mara plains."
    ],
    highlights: "Transfer to Masai Mara, Afternoon game drive",
    note: "Mid-morning: Transfer by Air from Amboseli to Masai Mara, Afternoon: Game drive, Late Afternoon: Leisure",
    totalDays: 6
  },
  {
    id: 4,
    day: "Day 4: Masai Mara National Reserve",
    description: [
      "Continue exploring the magnificent Masai Mara with morning and afternoon game drives. Experience the reserve's incredible wildlife and breathtaking landscapes with opportunities to spot the Big Five."
    ],
    highlights: "Morning & Afternoon game drives in Masai Mara",
    totalDays: 6
  },
  {
    id: 5,
    day: "Day 5: Masai Mara National Reserve",
    description: [
      "Spend your final full day in the Masai Mara with extensive game drives. Optional activities include a Maasai cultural visit or an early morning balloon safari over the Mara plains for a unique aerial perspective."
    ],
    highlights: "Morning & Afternoon game drives, Optional Maasai cultural visit, Optional balloon safari",
    note: "Optional Early Morning: Balloon safari over the Masai Mara. Optional Afternoon: Maasai cultural visit",
    totalDays: 6
  },
  {
    id: 6,
    day: "Day 6: Nairobi City",
    description: [
      "Conclude your safari with a final game drive in the Masai Mara. Afterward, transfer back to Nairobi for your return journey. We hope you leave with unforgettable memories of your time in Kenya."
    ],
    highlights: "Final morning game drive, Transfer to Nairobi",
    note: "Early Morning: Game drive, Mid-morning: Transfer by Air to Wilson Airstrip, Afternoon: Transfer by Road to Jomo Kenyatta International Airport",
    totalDays: 6
  }
];

export const fourDaysAndBeyondInKenya: ItineraryDay[] = [
  {
    id: 1,
    day: "Day 1: Mara Triangle Conservancy",
    description: [
      "The Mara Triangle, located within the Masai Mara National Reserve, offers an exclusive safari experience with its breathtaking landscapes and rich wildlife. Known for the Great Migration, this area allows you to witness thrilling encounters with lions, elephants, cheetahs, and even elusive leopards in a less crowded setting."
    ],
    highlights: "Transfer to Mara Triangle, Afternoon game drive, Dinner",
    note: "Morning: Transfer by Air from Wilson Airstrip to Kichwa Tembo airstrip, Mid-morning: Transfer to Masai Mara, Afternoon: Game drive",
    mealPlan: ["Lunch", "Dinner"],
    totalDays: 4
  },
  {
    id: 2,
    day: "Day 2: Mara Triangle Conservancy",
    description: [
      "Continue exploring the stunning Mara Triangle, where the vibrant ecosystem offers unmatched opportunities to spot wildlife amidst the iconic Mara River and open savannahs."
    ],
    highlights: "Morning & Afternoon game drives in Mara Triangle",
    mealPlan: ["Breakfast", "Lunch", "Dinner"],
    totalDays: 4
  },
  {
    id: 3,
    day: "Day 3: Mara Triangle Conservancy",
    description: [
      "Spend another memorable day in the Masai Mara, enjoying both game drives and a special picnic lunch amidst the beautiful wilderness."
    ],
    highlights: "Morning & Afternoon game drives, Picnic lunch in the Mara",
    note: "Lunch: Picnic in Masai Mara National Reserve",
    mealPlan: ["Breakfast", "Lunch", "Dinner"],
    totalDays: 4
  },
  {
    id: 4,
    day: "Day 4: Nairobi City",
    description: [
      "As your safari draws to a close, enjoy a final morning game drive before returning to Nairobi. We hope you carry home cherished memories of this unforgettable experience."
    ],
    highlights: "Final morning game drive, Transfer to Nairobi",
    note: "Morning: Game drive, Mid-morning: Transfer by Road to Kichwa Tembo airstrip, Transfer by Air to Wilson Airport",
    mealPlan: ["Breakfast"],
    totalDays: 4
  }
];

export const fiveDaysTemboSafariAmboseliandTsavo: ItineraryDay[] = [
  {
    id: 1,
    day: "Day 1: Amboseli National Park",
    description: [
      "Begin your safari journey with us as we introduce you to Amboseli National Park. Known for its stunning views of Mt Kilimanjaro and close encounters with elephants, Amboseli offers some of the best wildlife experiences in Kenya. Capture unforgettable moments with elephants, lions, cheetahs, and more, all set against the breathtaking backdrop of Africa's highest peak."
    ],
    highlights: "Transfer to Amboseli, Mt. Kilimanjaro views",
    note: "Morning: Airport meet and greet at Jomo Kenyatta International Airport, Transfer by Road to Amboseli National Park",
    mealPlan: ["Lunch", "Dinner"],
    totalDays: 5
  },
  {
    id: 2,
    day: "Day 2: Amboseli National Park",
    description: [
      "Continue exploring Amboseli National Park with morning and afternoon game drives. Experience close encounters with elephants against the backdrop of Mt. Kilimanjaro, along with lions, cheetahs, and diverse birdlife."
    ],
    highlights: "Morning & Afternoon guided game drives through Amboseli",
    mealPlan: ["Breakfast", "Lunch", "Dinner"],
    totalDays: 5
  },
  {
    id: 3,
    day: "Day 3: Tsavo East National Park",
    description: [
      "Explore the vast and rugged landscapes of Tsavo East, one of Kenya's largest parks, famous for its 'red' elephants and unique wildlife. You'll encounter lions, cheetahs, Somali ostriches, and perhaps even the rare hirola antelope. Nearly 500 bird species have also been recorded here, making it a birdwatcher's paradise."
    ],
    highlights: "Transfer to Tsavo East, Afternoon game drive, Red elephants",
    note: "Morning: Transfer by Air from Amboseli to Tsavo East, Mid-morning: Transfer by Road from Airstrip to park, Afternoon: Game drive",
    mealPlan: ["Breakfast", "Lunch", "Dinner"],
    totalDays: 5
  },
  {
    id: 4,
    day: "Day 4: Tsavo East National Park",
    description: [
      "Continue your exploration of Tsavo East with full-day game drives through the rugged landscapes. Spot the park's famous red elephants, big cats, and an impressive variety of birdlife."
    ],
    highlights: "Morning & Afternoon guided game drives through Tsavo East",
    mealPlan: ["Breakfast", "Lunch", "Dinner"],
    totalDays: 5
  },
  {
    id: 5,
    day: "Day 5: Nairobi City",
    description: [
      "As your safari draws to a close, enjoy a final morning in Tsavo East before returning to Nairobi. We hope you leave with cherished memories of this remarkable adventure and look forward to welcoming you back on safari in the future."
    ],
    highlights: "Transfer to Nairobi via Wilson Airstrip",
    note: "Mid-morning: Transfer by Road to Airstrip, Mid-Day: Transfer by Air to Wilson Airstrip, Afternoon: Transfer by Road to Jomo Kenyatta International Airport",
    mealPlan: ["Breakfast"],
    totalDays: 5
  }
];

export const threeDayAmboseliSafari: ItineraryDay[] = [
  {
    id: 1,
    day: "Day 1: Amboseli National Park",
    description: [
      "Start your safari adventure with an introduction to Amboseli National Park, one of Kenya's premier parks. As you explore, Mt Kilimanjaro provides a stunning backdrop to your encounters with elephants, lions, cheetahs, hyenas, wildebeest, and more. Every time the summit clears of clouds, it's an ideal moment for a memorable photo with Amboseli's wildlife against the iconic mountain."
    ],
    highlights: "Executive meet & assist, Transfer to Amboseli, Afternoon game drive",
    note: "Morning: Executive meet and assist at Jomo Kenyatta International Airport, Transfer to Wilson Airstrip, Mid-morning: Transfer to Amboseli Airport, Afternoon: Game drive",
    mealPlan: ["Lunch", "Dinner"],
    totalDays: 3
  },
  {
    id: 2,
    day: "Day 2: Amboseli National Park",
    description: [
      "Continue exploring Amboseli's diverse wildlife on guided game drives, with the iconic Mt Kilimanjaro as a backdrop. There will be opportunities to see more of the park's wildlife, and your guide will help you capture some breathtaking views and sightings."
    ],
    highlights: "Morning & Afternoon game drives, Optional nature walk, Optional Maasai cultural visit",
    note: "Optional Late Afternoon: Guided nature walk. Optional Mid-Day: Maasai cultural visit",
    mealPlan: ["Breakfast", "Lunch", "Dinner"],
    totalDays: 3
  },
  {
    id: 3,
    day: "Day 3: Nairobi City",
    description: [
      "As your safari comes to a close, enjoy a final morning game drive in Amboseli before your return journey to Nairobi. We hope you've had a truly memorable adventure and look forward to welcoming you on another safari in the future."
    ],
    highlights: "Final morning game drive, Transfer to Nairobi",
    note: "Morning: Game drive, Mid-morning: Transfer to Nairobi, Drop-off: Jomo Kenyatta International Airport",
    mealPlan: ["Breakfast"],
    totalDays: 3
  }
];

export const threeDayMasaiMaraSafari: ItineraryDay[] = [
  {
    id: 1,
    day: "Day 1: Mara Triangle Conservancy",
    description: [
      "Nestled within the Masai Mara National Reserve, the Mara Triangle offers an exclusive and intimate safari experience with stunning landscapes and abundant wildlife. Famous for the Great Migration, where millions of wildebeest and zebras cross the Mara River, this area offers breathtaking views and thrilling game drives with chances to see lions, elephants, cheetahs, leopards, and more. The Triangle is less crowded, giving you a truly immersive safari."
    ],
    highlights: "Executive meet & assist, Transfer to Mara Triangle, Afternoon game drive",
    note: "Morning: Executive meet and assist at Jomo Kenyatta International Airport, Transfer to Wilson Airstrip then to Keekorok Airstrip, Around Lunchtime: Lunch & Leisure, Afternoon: Game drive",
    mealPlan: ["Lunch", "Dinner"],
    totalDays: 3
  },
  {
    id: 2,
    day: "Day 2: Mara Triangle Conservancy",
    description: [
      "Continue your exploration of the Masai Mara National Reserve with guided game drives that offer a close look at the park's incredible wildlife and landscapes. With an expert guide, you'll experience the Mara's diversity of flora and fauna from the comfort of your safari vehicle."
    ],
    highlights: "Morning & Afternoon game drives, Optional hot-air balloon safari, Optional Maasai cultural visit",
    note: "Optional Early Morning: Hot-air balloon safari over the Mara for panoramic views. As per preference: Maasai cultural visit",
    mealPlan: ["Breakfast", "Lunch", "Dinner"],
    totalDays: 3
  },
  {
    id: 3,
    day: "Day 3: Nairobi City",
    description: [
      "Enjoy a final morning game drive in the Masai Mara before your return journey to Nairobi. We hope your safari has been a memorable adventure and look forward to seeing you again in the future."
    ],
    highlights: "Final morning game drive, Transfer to Nairobi",
    note: "Morning: Game drive, Mid-morning: Transfer to airstrip, Transfer to airport for departure",
    mealPlan: ["Breakfast"],
    totalDays: 3
  }
];