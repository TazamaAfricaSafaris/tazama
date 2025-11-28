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


export const ugandaGorillaSafariFlyIn: ItineraryDay[] = [
  {
    id: 1,
    day: "Day 1: Arrival in Entebbe and Flight to Bwindi",
    description: [
      "Arrive in Entebbe, meet with representative, and take a domestic flight to Bwindi. After landing, transfer to your lodge. Enjoy lunch and relax. Dinner included."
    ],
    mealPlan: ["Full Board"],
    note: "Optional Activity ($30 per person): Batwa Cultural Trail – A 3-hour experience showcasing the traditional lifestyle of the Batwa people.",
    totalDays: 3
  },
  {
    id: 2,
    day: "Day 2: Gorilla Tracking Day",
    description: [
      "After breakfast, attend a briefing at the park office, then track mountain gorillas. Spend 1-2 hours observing and photographing them. Return to lodge afterward and enjoy a relaxed afternoon. Dinner included."
    ],
    highlights: "Mountain gorilla tracking",
    mealPlan: ["Full Board"],
    totalDays: 3,
    tripType: "trekking"
  },
  {
    id: 3,
    day: "Day 3: Transfer to Airstrip and Flight Back to Entebbe",
    description: [
      "After breakfast, transfer to the airstrip for your return flight to Entebbe. Optional dayroom with lunch or a Shoebill tour at Mabamba Swamp can be arranged."
    ],
    note: "Optional: Dayroom with lunch or Shoebill tour at Mabamba Swamp",
    mealPlan: ["Breakfast"],
    totalDays: 3
  }
];

export const ugandaChimpsWildlifeFishingSafari: ItineraryDay[] = [
  {
    id: 1,
    day: "Day 1: Welcome to Uganda!",
    description: [
      "Arrive at Entebbe International Airport and meet your safari guide. Transfer to Kampala, check into your hotel, and enjoy some leisure time. Optional excursions include a Kampala City Tour or Mabamba Shoebill Tour."
    ],
    note: "Optional excursions: Kampala City Tour or Mabamba Shoebill Tour",
    mealPlan: ["Bed and Breakfast"],
    totalDays: 6
  },
  {
    id: 2,
    day: "Day 2: Journey to Kibale with a Taste of Tradition",
    description: [
      "Begin the day with a scenic drive to Kibale National Park. Enjoy a traditional lunch at Tinka's Homestead and explore the culture of the Bigodi Community with banana beer, coffee, cultural dances, and art."
    ],
    highlights: "Traditional lunch at Tinka's Homestead, Bigodi Community cultural experience",
    mealPlan: ["Half Board (Dinner and Breakfast)"],
    totalDays: 6
  },
  {
    id: 3,
    day: "Day 3: Into the Wild – Chimpanzee Habituation Adventure",
    description: [
      "Spend the day in Kibale National Park for a chimpanzee habituation experience, observing these intelligent primates closely. Encounter other wildlife, such as red-tailed and L'Hoest's monkeys, rare butterflies, and over 300 bird species."
    ],
    highlights: "Chimpanzee habituation experience, red-tailed and L'Hoest's monkeys, 300+ bird species",
    mealPlan: ["Full Board"],
    totalDays: 6,
    tripType: "trekking"
  },
  {
    id: 4,
    day: "Day 4: Scenic Journey to Bwindi – Into the Heart of the Jungle",
    description: [
      "Travel to Bwindi Impenetrable National Park, a UNESCO World Heritage Site. Enjoy changing landscapes and a relaxing lunch en route before arriving at your lodge to soak in the forest atmosphere."
    ],
    highlights: "UNESCO World Heritage Site - Bwindi Impenetrable National Park",
    mealPlan: ["Full Board"],
    totalDays: 6
  },
  {
    id: 5,
    day: "Day 5: Gorilla Habituation – A Day in the Wild",
    description: [
      "Join guides for a rare gorilla habituation experience, spending up to four hours observing a family of mountain gorillas in the dense forest and witnessing their unique behaviors."
    ],
    highlights: "Gorilla habituation experience (up to 4 hours)",
    mealPlan: ["Full Board"],
    totalDays: 6,
    tripType: "trekking"
  },
  {
    id: 6,
    day: "Day 6: Golden Monkeys and Lake Mutanda's Hidden Wonders",
    description: [
      "Start with a trek in Mgahinga Gorilla National Park to see the lively golden monkeys. Then, enjoy a peaceful boat cruise on Lake Mutanda, exploring islands, meeting local communities, and taking in views of the Virunga volcanoes."
    ],
    highlights: "Golden monkey trekking, Lake Mutanda boat cruise, Virunga volcanoes views",
    mealPlan: ["Half Board (Dinner and Breakfast)"],
    totalDays: 6,
    tripType: "trekking"
  }
];