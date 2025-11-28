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

export const fourDayGorillaTrekking: ItineraryDay[] = [
  {
    id: 1,
    day: "Day 1: Arrival in Kigali – Transfer to Volcanoes National Park",
    description: [
      "Upon arrival at Kigali International Airport, enjoy a warm welcome and a scenic 3-hour drive to Volcanoes National Park in Musanze. Check in at Singita Kwitonda Lodge, relax, and enjoy a delicious dinner prepared by the lodge's renowned chefs."
    ],
    transferTime: "3 hours",
    accomodation: "Singita Kwitonda Lodge",
    mealPlan: ["Dinner"],
    totalDays: 4,
    tripType: "trekking"
  },
  {
    id: 2,
    day: "Day 2: Gorilla Trekking and Conservation Insights",
    description: [
      "After breakfast at the lodge, experience an unforgettable mountain gorilla trekking adventure in Volcanoes National Park. After lunch, visit the Dian Fossey Gorilla Fund's Ellen DeGeneres Campus to learn about important conservation efforts. End the day with dinner at the lodge."
    ],
    highlights: "Mountain gorilla trekking, Dian Fossey Gorilla Fund visit",
    accomodation: "Singita Kwitonda Lodge",
    mealPlan: ["Breakfast", "Lunch", "Dinner"],
    totalDays: 4,
    tripType: "trekking"
  },
  {
    id: 3,
    day: "Day 3: Golden Monkey Trekking and Cultural Expedition",
    description: [
      "Start with breakfast before embarking on golden monkey trekking in Volcanoes National Park. After lunch, visit the Gorilla Guardians Village for a cultural experience, including traditional music, dance, and crafts. Return to the lodge for dinner."
    ],
    highlights: "Golden monkey trekking, Gorilla Guardians Village cultural experience",
    accomodation: "Singita Kwitonda Lodge",
    mealPlan: ["Breakfast", "Lunch", "Dinner"],
    totalDays: 4,
    tripType: "trekking"
  },
  {
    id: 4,
    day: "Day 4: Unforgettable Farewell Day in Rwanda",
    description: [
      "After breakfast, enjoy a scenic drive back to Kigali for a city tour, visiting the Kigali Genocide Memorial, art galleries, and craft markets. Have a gourmet lunch at Fusion Restaurant at the Retreat by Heaven before transferring to Kigali International Airport for departure."
    ],
    highlights: "Kigali Genocide Memorial, Art Galleries, Craft Markets",
    transferTime: "3 hours",
    mealPlan: ["Breakfast", "Lunch"],
    totalDays: 4,
    tripType: "trekking"
  }
];

export const fiveDayRwandaItinerary: ItineraryDay[] = [
  {
    id: 1,
    day: "Day 1: Welcome to Kigali - Rwanda",
    description: [
      "Upon arrival at Kigali International Airport, guests will be warmly welcomed and transferred to the iconic Hotel Des Mille Collines. After check-in, unwind and enjoy a delightful dinner."
    ],
    accomodation: "Hotel Des Mille Collines",
    mealPlan: ["Dinner with non-alcoholic beverages"],
    totalDays: 5
  },
  {
    id: 2,
    day: "Day 2: Kigali City Tour and Transfer to Volcanoes National Park",
    description: [
      "Start with breakfast at the hotel, followed by a city tour including the Kigali Genocide Memorial and Inema Arts Center. After lunch at Heaven Restaurant, transfer to Volcanoes National Park and check in to your hotel."
    ],
    highlights: "Kigali Genocide Memorial, Inema Arts Center",
    transferTime: "Approx. 3 hours",
    mealPlan: ["Breakfast", "Lunch", "Dinner with non-alcoholic beverages"],
    totalDays: 5
  },
  {
    id: 3,
    day: "Day 3: Gorilla Trekking and Conservation Insights",
    description: [
      "After breakfast, experience mountain gorilla trekking in Volcanoes National Park. Following lunch, visit the Dian Fossey Gorilla Fund to learn about conservation efforts. Enjoy dinner and reflect on the day."
    ],
    highlights: "Mountain gorilla trekking, Dian Fossey Gorilla Fund visit",
    mealPlan: ["Breakfast", "Lunch", "Dinner with non-alcoholic beverages"],
    totalDays: 5
  },
  {
    id: 4,
    day: "Day 4: Golden Monkey Trekking and Cultural Expedition",
    description: [
      "Start with breakfast, followed by golden monkey trekking in Volcanoes National Park. After lunch, visit Gorilla Guardians Village to experience local culture. Dinner at the hotel."
    ],
    highlights: "Golden monkey trekking, Gorilla Guardians Village",
    mealPlan: ["Breakfast", "Lunch", "Dinner with non-alcoholic beverages"],
    totalDays: 5
  },
  {
    id: 5,
    day: "Day 5: Transfer back to Kigali – Coffee Master Class and Departure",
    description: [
      "Travel back to Kigali and participate in a coffee masterclass, followed by a farewell lunch at Repub Lounge. Then transfer to Kigali International Airport for departure."
    ],
    highlights: "Coffee Masterclass, Farewell lunch at Repub Lounge",
    transferTime: "Approx. 3 hours",
    mealPlan: ["Breakfast", "Lunch with non-alcoholic beverages"],
    totalDays: 5
  }
];

export const sixDayRwandaSafari: ItineraryDay[] = [
  {
    id: 1,
    day: "Day 1: Welcome to Kigali - A Grand Beginning",
    description: [
      "Arrive at Kigali International Airport, greeted by our team for a luxurious stay at The Retreat. Enjoy a culinary experience at Fusion Restaurant, known for its exceptional dishes, and relax in your Superior King Suite to rest for the adventure ahead."
    ],
    accomodation: "The Retreat - Superior King Suite",
    mealPlan: ["All meals with beverages, wines, spirits, and liqueurs"],
    totalDays: 6
  },
  {
    id: 2,
    day: "Day 2: Journey to Nyungwe National Park - Canopy Walk Experience",
    description: [
      "After breakfast, fly to Rusizi, Kamembe, and settle into One & Only Nyungwe House. Enjoy lunch and embark on a canopy walk in Nyungwe National Park for breathtaking rainforest views. Return to the lodge for dinner and rest."
    ],
    highlights: "Canopy walk in Nyungwe National Park",
    accomodation: "One & Only Nyungwe House",
    mealPlan: ["All meals including premium beverages"],
    totalDays: 6
  },
  {
    id: 3,
    day: "Day 3: Chimpanzee Trekking & Tea Tour",
    description: [
      "Begin with breakfast, then set out for chimpanzee trekking in Nyungwe National Park. Afterward, enjoy lunch and a guided tea tour to experience Rwanda's tea culture. Reflect on the day over dinner in the lodge's serene surroundings."
    ],
    highlights: "Chimpanzee trekking, Guided tea tour",
    accomodation: "One & Only Nyungwe House",
    mealPlan: ["All meals including premium beverages"],
    totalDays: 6,
    tripType: "trekking"
  },
  {
    id: 4,
    day: "Day 4: Transfer to Volcanoes National Park via Kigali",
    description: [
      "After breakfast, visit the Kigali Genocide Memorial and Inema Art Center. Enjoy lunch at Boho Restaurant, then transfer to One & Only Gorilla's Nest in Musanze. Dinner awaits amidst views that build anticipation for the next day's adventure."
    ],
    highlights: "Kigali Genocide Memorial, Inema Art Center",
    accomodation: "One & Only Gorilla's Nest",
    mealPlan: ["All meals with premium wines and spirits"],
    totalDays: 6
  },
  {
    id: 5,
    day: "Day 5: Gorilla Trekking & Dian Fossey Gorilla Fund Visit",
    description: [
      "After breakfast, join expert trackers for a mountain gorilla trek in Volcanoes National Park. Afterward, enjoy lunch, then visit the Dian Fossey Gorilla Fund to learn about conservation efforts. End the day with a relaxing dinner."
    ],
    highlights: "Mountain gorilla trekking, Dian Fossey Gorilla Fund",
    accomodation: "One & Only Gorilla's Nest",
    mealPlan: ["All meals with premium beverages"],
    totalDays: 6,
    tripType: "trekking"
  },
  {
    id: 6,
    day: "Day 6: Farewell Rwanda",
    description: [
      "Enjoy a final breakfast before checking out. Drive back to Kigali, reflecting on the incredible experiences. Say goodbye to Rwanda, taking with you cherished memories of its wildlife and rich traditions."
    ],
    transferTime: "Approx. 3 hours",
    mealPlan: ["Breakfast"],
    totalDays: 6
  }
];

export const rwandaGorillaSafari: ItineraryDay[] = [
  {
    id: 1,
    day: "Day 1: Arrival in Kigali and Hotel Transfer",
    description: [
      "Arrive at Kigali International Airport, complete immigration procedures, and meet your guide in the waiting area. After a briefing, transfer to your hotel in Kigali City, check in, and enjoy the rest of the day at leisure."
    ],
    transferTime: "Less than 30 minutes",
    mealPlan: ["Bed and Breakfast"],
    totalDays: 4
  },
  {
    id: 2,
    day: "Day 2: Kigali City Tour and Transfer to Volcanoes National Park",
    description: [
      "After an early breakfast, explore the highlights of Kigali City, including the Kandt House, Mount Kigali, the Natural History Museum, the Presidential Museum, and the Kigali Genocide Memorial. Following the tour, transfer to Volcanoes National Park for lunch and a cultural tour."
    ],
    highlights: "Kandt House, Mount Kigali, Natural History Museum, Presidential Museum, Kigali Genocide Memorial, Iby'Iwacu Cultural Tour",
    transferTime: "Approx. 3 hours",
    note: "Iby'Iwacu Cultural Tour includes community walks, visiting a replica of the King's house, experiencing traditional dances, folktales, and local brewing practices.",
    mealPlan: ["Breakfast", "Lunch", "Dinner"],
    totalDays: 4
  },
  {
    id: 3,
    day: "Day 3: Gorilla Tracking Experience with Leisurely Afternoon",
    description: [
      "Begin with an early breakfast before heading to the Park headquarters for registration and a briefing on your gorilla tracking experience. After a trek through the Virunga slopes, enjoy observing and photographing these majestic gorillas. Upon return, relax at the lodge for the afternoon."
    ],
    highlights: "Gorilla tracking through the Virunga slopes",
    note: "Pickup Time: 05:30 am",
    mealPlan: ["Breakfast", "Lunch", "Dinner"],
    totalDays: 4,
    tripType: "trekking"
  },
  {
    id: 4,
    day: "Day 4: Transfer to Kigali Airport and Departure",
    description: [
      "Enjoy breakfast and a leisurely morning at the lodge. Depending on your travel arrangements, depart Volcanoes National Park and transfer to Kigali Airport for your onward flight."
    ],
    transferTime: "Approx. 3 hours",
    note: "Pickup Time: Flexible",
    mealPlan: ["Breakfast"],
    totalDays: 4
  }
];