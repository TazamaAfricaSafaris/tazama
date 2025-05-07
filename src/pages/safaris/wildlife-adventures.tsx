/* eslint-disable react/no-unescaped-entities */
import PrimaryHeader from "~/components/PrimaryHeader";

import Image from "next/legacy/image";
import HeadSEO from "~/components/ui/Head";
import { base_keywords } from "~/lib/constants";
import CallToAction from "~/components/CallToAction";

const honeyMooners = [
  {
    id: 1,
    src: "/assets/images/gallery/family-trip.webp",
  },
  {
    id: 2,
    src: "/assets/images/gallery/maasai.webp",
  },
  {
    id: 3,
    src: "/assets/images/gallery/blog.webp",
  },
  {
    id: 4,
    src: "/assets/images/gallery/offer.webp",
  },
  {
    id: 5,
    src: "/assets/images/gallery/classic-safaris.webp",
  },
  {
    id: 6,
    src: "/assets/images/gallery/discovery.webp",
  },
];

const MemoryImage = ({ src }: { src: string }) => {
  return (
    <div className="relative h-[200px] w-[80%] md:h-[300px] lg:w-[400px]">
      <Image src={src} layout="fill" className="rounded-sm object-cover" />
    </div>
  );
};
const AboutPage = () => {
  return (
    <>
      <HeadSEO
        title="Wildlife Adventures in Tanzania | Tazama Africa Safari"
        keywords={`${base_keywords}, Tanzania wildlife safari, wildlife photography, animal migration, bird watching Tanzania, conservation safari, wildlife enthusiast tour, guided wildlife safari, African wildlife experience, nature safari, wildlife conservation`}
        description="Immerse yourself in Tanzania's diverse ecosystems with Tazama's Wildlife Adventures. Our expert-guided safaris offer intimate wildlife encounters, conservation insights, and unforgettable experiences for nature enthusiasts."
      />
      <PrimaryHeader image="classic-safaris.webp" title="Wildlife Adventures" />

      <div className="mx-auto mt-10 max-w-5xl px-4 pt-[2rem]">
        <div className="">
          <h3 className="text-4xl text-[#A87133]">Wildlife Adventures</h3>
          <p className="mb-3 mt-5 text-[#757371]">
            Step into the wild heart of Africa with Tazama Africa Safaris, where
            your passion for wildlife and nature transforms into an
            extraordinary journey. For enthusiasts like you, each safari is more
            than just a trip; it's an immersive plunge into the depths of the
            natural world, a quest to connect with the untamed and the free.
          </p>

          <p className="mb-3 mt-5 text-[#757371]">
            Your experience with us is a deep dive into the diverse ecosystems
            of Africa. Envision yourself in the midst of the Serengeti's endless
            plains or the lush wetlands of the Okavango Delta, each area teeming
            with wildlife. These are the moments that define a true wildlife
            enthusiast's dream - up close with nature, observing the intricate
            details of animal behaviors and interactions in their natural
            habitats.
          </p>
          <p className="mb-3 mt-5 text-[#757371]">
            Our safaris do more than just showcase wildlife; they educate and
            inspire. Led by our expert guides, who are as passionate about
            wildlife conservation as they are knowledgeable, you'll gain
            insights into the delicate balance of Africa's ecosystems. This
            educational aspect enriches your experience, offering a deeper
            understanding of the wildlife you encounter and their role in the
            environment.
          </p>
        </div>
        <div className="mt-5 flex flex-col items-center justify-center space-y-5 lg:flex-row lg:space-x-5 lg:space-y-0">
          <div className="relative h-[400px] w-full lg:w-[50%] ">
            <Image
              src="/assets/images/gallery/discovery.webp"
              className="object-cover"
              layout="fill"
              alt="cover-img"
            />
          </div>

          <div className="relative h-[400px] w-full lg:w-[50%]">
            <Image
              src="/assets/images/gallery/group-departure.webp"
              className="object-cover"
              layout="fill"
              alt="cover-img"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-5xl px-4">
        <div className="">
          <p className="mb-3 mt-5 text-[#757371]">
            With a strong commitment to sustainable and responsible tourism, we
            ensure that your journey contributes positively to wildlife
            conservation. We carefully choose eco-friendly lodges and
            experiences that align with our ethos, helping to preserve the
            natural wonders for future generations.
            <br />
            <br />
            Whether you're a bird watching aficionado, a wildlife photography
            enthusiast, or simply someone who loves the raw beauty of nature,
            our safaris are crafted to cater to your specific interests. From
            the great wildebeest migration to the quiet observation of rare
            species, each day is a new chapter in your African wildlife story.
            <br />
            <br />
            Let's create your ultimate wildlife safari, a journey where each
            sighting and sound adds to a lifelong portfolio of memories. Reach
            out to us, and together, we'll tailor an adventure that brings you
            face-to-face with the wonders of Africa's wilderness.
          </p>
          <p className="mb-3 mt-5 text-[#757371]">
            You can choose any of the two safaris below or contact us and
            request a tailored and memorable experience
          </p>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-5xl px-4 pt-[2rem]">
        <div className="">
          <h3 className="text-4xl text-[#A87133]">Tarangire National Park</h3>
          <p className="mb-3 mt-5 text-[#757371]">
            We will collect you from your hotel in Arusha and following a 2-3
            hour drive, you will arrive at the Tarangire National Park. In this
            region, Hemmingway often went on big game hunting safaris. After the
            formation of the national parks in 1970, they turned the seasonal
            marshes and the endless savannah that one sees today into, once
            again, profitable hunting grounds. Today, however, cameras
            thankfully have replaced the elephant guns. The Tarangire National
            Park has the highest density of elephants in North Tanzania and you
            can view these animals all year round in which the herds often can
            reach an impressive number of 300 animals.
          </p>

          <p className="mb-3 mt-5 text-[#757371]">
            The Tarangire River has water all year round and during the dry
            season, between July and October, many animals from the surrounding
            areas come to the river for drinking. If you visit the park during
            the dry season, you will witness an unforgettable natural wonder as
            you can observe wonderful creatures such as lions, giraffes,
            buffaloes, wildebeests, and zebras as well as various types of
            antelopes and gazelles and with little luck, you can also spot a
            python! This area is during the dry season also a haven for bird
            watchers with over 550 different species including the Masai Ostrich
            -the world's largest bird. Around lunchtime, you will stop at a
            suitable picnic place before the afternoon is dedicated to more
            wildlife watching. Before sunset, you will be taken to lake Manyara.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-5xl px-4 pt-[2rem]">
        <div className="">
          <h3 className="text-4xl text-[#A87133]">Lake Manyara trip</h3>
          <p className="mb-3 mt-5 text-[#757371]">
            On this Day trip, we will visit Lake Manyara National Park. Lake
            Manyara National Park is a smaller, more varied park than the other
            parks as it's much greener, forestry, and has a huge lake of course
            which bears the same name. The lake takes up most of the space of
            the national park. Next to that, the park gains fame through the
            hippo pool, where many hippos spend their days and the diversity of
            its landscapes. Not to forget about the thousands of Flamingos that
            migrate here each year.
          </p>

          <p className="mb-3 mt-5 text-[#757371]">
            The day trip starts with an early morning departure from Arusha (or
            Moshi). From here we drive straight to Lake Manyara National Park,
            which will take about two and a half hours.
            <br />
            What to expect
            <br />
            You’ll be driving in a big 4×4 Landcruiser with a pop-up roof for
            360-degree vision. During the day trip in Lake Manyara National
            Park, you might encounter animals like hippo flamingo, giraffe,
            zebra, wildebeest, warthog, impala, buffalo, baboons, blue velvet
            monkeys, and on a lucky day you might even find a lion relaxing in a
            tree. Of course, there’s many more wildlife waiting to be spotted!
          </p>

          <p className="mb-3 mt-5 text-[#757371]">
            Driving through the park is a nice and adventurous experience after
            all the great plains and stretched-out landscapes. Here you might
            come close to the animals, without you even knowing! So keep your
            eyes and ears open!
          </p>
          <p className="mb-3 mt-5 text-[#757371]">
            During the wet seasons (November/December and March to May), the
            lake itself can cover up to 60% of the Park’s total area – a vast
            231 km². During these months, the lake’s highly alkaline waters
            attract a variety of migratory waterbirds, including the famous
            flocks of pink flamingos.
          </p>
          <p className="mb-3 mt-5 text-[#757371]">
            After our lunch break, we will head out for another safari and try
            to find the animals that we might not have spotted yet, so we can
            cross as many animal experiences as possible of our list. Af the end
            of the day, we will get ready for the drive back to Arusha.{" "}
          </p>
        </div>
      </div>
      <div className="mt-10 flex flex-col items-center justify-center max-w-5xl mx-auto">
        <div className="mt-10 lg:mt-[10px] ">
          <div className="mt-[4px] flex flex-col items-center justify-center gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-0 mb-12">
            {honeyMooners.map((item) => (
              <MemoryImage src={item.src} key={item.id} />
            ))}
          </div>
        </div>
      </div>

      <br /><br /><br /> <br />
      <CallToAction />
    </>
  );
};

export default AboutPage;
