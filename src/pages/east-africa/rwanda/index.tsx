/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { array } from "fast-web-kit";
import React from "react";
import CallToAction from "~/components/CallToAction";
import ContentSection from "~/components/ContentSection";
import PrimaryHeader from "~/components/PrimaryHeader";
import HeadSEO from "~/components/ui/Head";
import { rwandaContent } from "~/data/east-africa";
import { ItineraryCard } from "../uganda";

const Rwanda = () => {
  return (
    <>
      <HeadSEO
        title="Tazama Africa Safaris | Rwanda"
        description="Experience the wonders of Rwanda with our exclusive safari tours, including gorilla trekking and wildlife encounters."
      />
      <PrimaryHeader title="Rwanda" image="rwanda/rwanda.jpg" />
      <section className="mx-auto max-w-5xl ">
        <div className="my-20">
          <p className="text-left leading-relaxed">
            Rwanda, a country renowned for its stunning biodiversity, volcanoes,
            and lush highland rainforests, offers a safari experience unlike any
            other. Although small in size, Rwanda is bursting with natural
            beauty, welcoming people, and rich culture. The highlight of any
            Rwandan safari is gorilla trekking, where you’ll have the
            once-in-a-lifetime opportunity to observe the majestic and
            endangered mountain gorillas in their natural habitat. Rwanda’s
            capital, Kigali, is known for its clean streets, developed
            infrastructure, and five-star accommodations, making it a perfect
            base for your adventure. A trip to Rwanda is more than just a
            safari; it&apos;s a chance to experience the heart of Africa in its
            purest form.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-y-8 lg:mt-0 lg:gap-y-14">
        {array.sort(rwandaContent, "asc", "rank").map((content: any) => (
          <ContentSection
            key={content.rank}
            rank={content.rank}
            image={content.image}
            title={content.title}
            reverse={content.reverse}
            description={content.description}
          />
        ))}
      </section>

      <section className="mx-auto my-20 max-w-5xl px-4">
        <h4 className="text-4xl text-primary">Our Itenaries</h4>
        <br />
        <div className="relative grid w-full grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {itenaries.map((itenary, index) => (
            <ItineraryCard key={index} itinerary={itenary} />
          ))}
        </div>
      </section>

      <section className="mx-auto my-20 max-w-5xl px-4 text-center">
        <p>Planning to visit Rwanda? Book with us via the form below</p>
      </section>

      <br />
      <br />
      <br />
      <CallToAction />
    </>
  );
};

export default Rwanda;

const itenaries = [
  {
    link: "/east-africa/rwanda/rwanda-gorilla-safari",
    title: "Rwanda Gorilla Safari",
    img: "https://res.cloudinary.com/drhl0yu7y/image/upload/v1730709645/east-africa/rwanda/rwanda-gorilla-trekking/49197853001_362e5dca1e_k_lpuofw.webp",
    days: 4,
  },
  {
    link: "/east-africa/rwanda/4-day-gorilla-trekking",
    title: "4 Day Gorilla Trekking",
    img: "https://res.cloudinary.com/drhl0yu7y/image/upload/v1730707076/east-africa/rwanda/4-day-gorilla-trekking/35303680765_e4d19f5a46_k_jqahjx.webp",
    days: 4,
  },
  {
    link: "/east-africa/rwanda/5-day-rwanda-itenary",
    title: "5 Day Rwanda Safari",
    img: "https://res.cloudinary.com/drhl0yu7y/image/upload/v1730709939/east-africa/rwanda/5-day-rwanda-safari/51912508047_1719d91c62_k_nejeon.webp",
    days: 5,
  },
  {
    link: "/east-africa/rwanda/6-day-rwanda-safari",
    title: "6 Day Rwanda Safari",
    img: "https://res.cloudinary.com/drhl0yu7y/image/upload/v1730710201/east-africa/rwanda/6-day-rwanda-safari/40185985184_8a3cd7cad6_k_ud0kay.webp",
    days: 6,
  },
];
