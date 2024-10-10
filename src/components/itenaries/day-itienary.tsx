import { CloudinaryImage } from "../ui/GalleryImage";
import ParallaxImg from "../ui/ParallaxImg";
import Image from "next/image";

interface ItienaryProps {
  public_id: string;
  format: string;
  blurDataUrl: string;
  title: string;
  desc: string;
  imgs?: Array<string>;
}

export const honeyMooners = [
  {
    id: 1,
    title: "Arrival Day - Kilimanjaro to Arusha",
    desc: ` Upon your arrival at Kilimanjaro Airport, a Tazama driver will warmly welcome you and facilitate your transfer to your hotel in Arusha. Enjoy the evening at your leisure, relaxing and preparing for the adventure ahead.
    Transfer Time: 1 hour`,
    public_id: "honeymoon/uwyfpsmmmtfdeiwt5frb",
    imgs: [
      "https://images.unsplash.com/photo-1631546099508-f0fddd188361?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGhvbmV5bW9vbiUyMHNhZmFyaXN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1591030314864-832142bbc826?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGhvbmV5bW9vbiUyMHNhZmFyaXN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1706622419139-54404cc465ad?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjF8fGhvbmV5bW9vbiUyMHNhZmFyaXN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1689917860008-d103d60a7114?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NzV8fHxlbnwwfHx8fHw%3D",
    ],
    additionalImgs: [""],
  },
  {
    id: 2,
    title: "Day 1 - Tarangire National Park",
    public_id: "honeymoon/liqxlgzshrqp7cjxmfrp",
    imgs: [
      "https://images.unsplash.com/photo-1693921148796-c177e9275501?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NTB8fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1689918028538-ad1483ff5cd7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NTl8fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1689917860008-d103d60a7114?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NzV8fHxlbnwwfHx8fHw%3D",
      "https://images.unsplash.com/photo-1688999991648-6752550a45f7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8ODF8fHxlbnwwfHx8fHw%3D",
    ],
    desc: `In the early morning you will meet your guide and after a short briefing, you’ll pile into your very own 4×4 safari vehicle for the start of your adventure to Tarangire National Park. This is one of Africa’s most underrated parks. Elephants dot the landscape like cattle; it has the second highest concentration of wildlife after the Serengeti and reportedly the highest concentration of elephants in the world. With over 450 species of bird, it is also arguably the best bird watching destination in Tanzania. In the evening, make your way to camp.`,
  },
  {
    id: 3,
    title: "Day 2 - Ngorongoro Crater",
    public_id: "honeymoon/Honeymoon_Safari_Sababu_Safaris_joa2iw",
    imgs: [
      "https://images.unsplash.com/photo-1568050878862-c8b4bdc99bc3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fGhvbmV5bW9vbiUyMHNhZmFyaXN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1522075095137-d9848901097e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fGhvbmV5bW9vbiUyMHNhZmFyaXN8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1642764984408-29b02079d034?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI0fHxob25leW1vb24lMjBzYWZhcmlzfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1668435528344-b70cedd6df88?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQwfHxob25leW1vb24lMjBzYWZhcmlzfGVufDB8fDB8fHww",
    ],
    desc: `Rise with the sun and venture into the Ngorongoro Crater as the dawn breaks, setting the stage for an exhilarating half-day's exploration. This compact sanctuary spanning 300 km² is a treasure trove of diverse wildlife, boasting an estimated population of 35,000 animals, including the majestic zebra, powerful buffalo, regal lions, and venerable bull elephants among many others. Notably, it stands as one of the prime locations for encountering the elusive black rhinoceros. Following a delightful picnic lunch against the stunning backdrop of the crater floor, the journey continues as you overnight on the crater rim.`,
  },

  {
    id: 4,
    title: "Day 3 - Empakai Crater Hike",
    public_id: "honeymoon/empakai-crater-ngorongoro-highlands-tanzania_bh46xq",
    desc: `This morning we’ll adventure outside the vehicle into the highlands of the Ngorongoro Conservation Area. 
    Trekking the Empakai Crater and its enchanting waterfall in Tanzania offers not just a day of natural wonder 
    but a panoramic vista of the region's majesty. As you traverse the rugged trails into the heart of the crater, verdant landscapes surround you, revealing diverse wildlife along the way. The crater's rim frames a stunning view, presenting the distant, snow-capped peak of Kilimanjaro and the graceful 
    silhouette of Mount Lengai in the horizon. 
  
    The hidden gem within this natural amphitheater is the magnificent Empakai Waterfall, where the cascading waters 
    add a touch of tranquility to the picturesque surroundings. Standing at the base of the falls provides a serene
    moment to absorb the sheer beauty of nature's spectacle, leaving an enduring impression on all who venture into 
     this pristine setting. Once you’ve finished your hike we will  make our way to Serengeti National Park. 
     Once you enter the park we will make our way to camp for the night.
    `,
    imgs: [
      "https://images.unsplash.com/photo-1629269473324-e972d75fb347?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTUwfHxob25leW1vb24lMjBzYWZhcmlzfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1581939878396-76c68e35ef6c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGhvbmV5bW9vbiUyMHNhZmFyaXN8ZW58MHwwfDB8fHww",
      "https://images.unsplash.com/photo-1688999989501-256963e1878b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGhvbmV5bW9vbiUyMHNhZmFyaXN8ZW58MHwwfDB8fHww",
      "https://images.unsplash.com/photo-1522071029546-163a17006ad2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGhvbmV5bW9vbiUyMHNhZmFyaXN8ZW58MHwwfDB8fHww",
    ],
  },

  {
    id: 5,
    title: "Day 4 - 5 Full days in Serengeti National Park",
    public_id: "honeymoon/blaoxccrbsa3bzefmq8h",
    desc: ` Throughout each day of the safari, your guide will personalize the schedule to suit your preferences, 
    optimizing the best timings for your activities. You might opt for a morning game drive, heading back to camp for a leisurely lunch and relaxation, followed by an afternoon game drive. Alternatively, you could embark on an all-day game drive, enjoying a delightful picnic lunch amidst the stunning wilderness. Your guide will collaborate with you to tailor the safari experience to your desires, ensuring an itinerary that perfectly matches your preferences.`,
    imgs: [
      "https://images.unsplash.com/photo-1668435528344-b70cedd6df88?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGhvbmV5bW9vbiUyMHNhZmFyaXN8ZW58MHwwfDB8fHww",
      "https://images.unsplash.com/photo-1663105301926-2b1652aafcd2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI2fHxob25leW1vb24lMjBzYWZhcmlzfGVufDB8MHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1495559277740-ec9a706843d7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQzfHxob25leW1vb24lMjBzYWZhcmlzfGVufDB8MHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1582294543759-43f1674be557?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU1fHxob25leW1vb24lMjBzYWZhcmlzfGVufDB8MHwwfHx8MA%3D%3D",
    ],
  },
  {
    id: 6,
    title: "Day 6 - Serengeti National Park - Zanzibar",
    public_id: "honeymoon/lzrgopsdtphonriuq3bt",
    desc: `
  Embarking on your final morning in the majestic Serengeti offers an exhilarating immersion into Africa's
   untamed beauty. In the late morning, a flight to Zanzibar awaits, promising an enchanting transition from 
   the wild plains to the serene, sun-kissed shores of the vibrant island. The Serengeti's grandeur and the thrill 
   of the wildlife sightings lay the perfect foundation for the relaxation and cultural exploration that Zanzibar 
   promises to offer. Once you touch down in Zanzibar we will transfer you to your romantic hideaway on the pristine 
   beaches of Zanzibar. `,
    imgs: [
      "https://images.unsplash.com/photo-1522071029546-163a17006ad2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODF8fGhvbmV5bW9vbiUyMHNhZmFyaXN8ZW58MHwwfDB8fHww",
      "https://images.unsplash.com/photo-1678038542196-e87c8842edd6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTA4fHxob25leW1vb24lMjBzYWZhcmlzfGVufDB8MHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1677243408820-8862088bafa4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTY4fHxob25leW1vb24lMjBzYWZhcmlzfGVufDB8MHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1678038541432-a5b25b41591e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcxfHxob25leW1vb24lMjBzYWZhcmlzfGVufDB8MHwwfHx8MA%3D%3D",
    ],
  },
  {
    id: 7,
    title: "Day 7 - 9 Zanzibar",
    public_id: "honeymoon/Zanzibar-Honeymoon-Guide-2-1024x1014_y2nw8k",
    desc: `
  With idyllic beaches at your doorstep, indulge in leisurely days under the sun, 
  perhaps embarking on a mesmerizing sunset dhow cruise or savoring a private dinner by the water's edge. 
  The rich cultural tapestry of Zanzibar adds a layer of depth to this romantic escape, promising an unforgettable
   honeymoon experience immersed in beauty, tranquility, and the warmth of Swahili hospitality.
`,
    imgs: [
      "https://images.unsplash.com/photo-1666707779140-eb7dea00030e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc5fHxob25leW1vb24lMjBzYWZhcmlzfGVufDB8MHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1639125241802-a274a5647740?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA0fHxob25leW1vb24lMjBzYWZhcmlzfGVufDB8MHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1689918028538-ad1483ff5cd7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE0fHxob25leW1vb24lMjBzYWZhcmlzfGVufDB8MHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1666707490667-bfed51347f02?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjIxfHxob25leW1vb24lMjBzYWZhcmlzfGVufDB8MHwwfHx8MA%3D%3D",
    ],
  },

  {
    id: 8,
    title: "Day 10 - Zanzibar - Home",
    public_id: "honeymoon/cb29a826-4a96-477a-8b2e-d828c0f7d97b_tvgrjs",
    desc: `
    Today you’ll be transferred to Karume International Airport to catch your international flight back home. 

    `,
    imgs: [
      "https://images.unsplash.com/photo-1582294543473-8d081fd6e0f7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE1fHxob25leW1vb24lMjBzYWZhcmlzfGVufDB8MHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1706611114394-2e78c139acdd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM2fHxob25leW1vb24lMjBzYWZhcmlzfGVufDB8MHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1689917810871-a19c8cb3df8c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA3fHxob25leW1vb24lMjBzYWZhcmlzfGVufDB8MHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1689917904276-3bf3d688704c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjEwfHxob25leW1vb24lMjBzYWZhcmlzfGVufDB8MHwwfHx8MA%3D%3D",
    ],
  },
];

export default function ItienaryViewer(props: ItienaryProps) {
  return (
    <div className="mx-auto px-4 pt-10 md:pt-[80px] relative">
      <section className="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-5 ">
        <div className="flex items-center justify-center pt-5">
          <ParallaxImg
            format={props.format!}
            publicId={props.public_id!}
            blurDataUrl={props.blurDataUrl!}
          />
        </div>
        <div className="h-fit sticky top-0">
          <p className="pt-5 text-lg font-bold text-primary lg:text-xl">
            {props.title}
          </p>
          <ul className="list-disc pl-10 md:pl-5">
            <li className="pt-5">{props.desc}</li>
          </ul>
        </div>
      </section>
      <div className="mx-auto mt-5 flex w-full flex-col  space-y-1 px-4 lg:flex-row lg:space-x-1 lg:space-y-0">
        {props.imgs?.map((item, inx) => (
          <Image
            alt="tazama gallery photos"
            className="transform rounded-lg object-cover brightness-90 transition will-change-auto group-hover:brightness-110"
            style={{ transform: "translate3d(0, 0, 0)" }}
            src={item}
            width={300}
            height={200}
            key={inx}
          />
        ))}
        {/* <div className="relative h-[200px] lg:w-[33%] ">
          <CloudinaryImage
            public_id={props.public_id}
            format={props.format}
            blurDataUrl={props.blurDataUrl!}
          />
        </div>

        <div className="relative h-[200px]  lg:w-[33%]  ">
          <CloudinaryImage
            public_id={props.public_id}
            format={props.format}
            blurDataUrl={props.blurDataUrl!}
          />
        </div>
        <div className="relative h-[200px]  lg:w-[34%]  ">
          <CloudinaryImage
            public_id={props.public_id}
            format={props.format}
            blurDataUrl={props.blurDataUrl!}
          />
        </div> */}
      </div>
    </div>
  );
}
