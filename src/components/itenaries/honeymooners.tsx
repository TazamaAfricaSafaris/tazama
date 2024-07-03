import React from "react";
import Accordion from "~/components/Accordion";
import { honeyMooners } from "~/data/honeyMooners";
import { Button } from "../ui/button";
import Image from "next/legacy/image";
import Link from "next/link";

const Page = () => {
  const [category, setCategory] = React.useState("itenary");

  return (
    <>
      <div className="mx-auto mt-48 max-w-5xl px-4 py-20 md:px-8 lg:mt-5 lg:py-10">
        <h3 className="text-center text-4xl uppercase tracking-wider text-[#A87133]">
          Itinerary
        </h3>

        <div className="mt-10 flex flex-col items-start gap-4 text-[#757371] md:flex-row md:gap-8">
          <aside className="w-full md:w-1/3">
            <ul className="font-now flex flex-col items-start gap-2 md:gap-5">
              <li>
                <Button className="font-now text-white ">
                  Request Custom Itinerary
                </Button>
              </li>

              <li className="relative h-[300px] w-[300px] bg-zinc-900">
                <Link href="https://wetu.com/Itinerary/Landing/EC03E682-B66F-4924-AB41-549AF4117281">
                  <>
                    <Image
                      src="/assets/images/gallery/honey-moon-trip.webp"
                      layout="fill"
                      className="object-cover  opacity-30"
                    />

                    <p className="font-now absolute left-[25%] top-[45%] text-center text-2xl font-bold text-white">
                      View Itinerary
                    </p>
                  </>
                </Link>
              </li>
            </ul>
          </aside>
          <section className="flex w-full flex-col space-y-3 md:w-2/3">
            {honeyMooners.map((item, index) => {
              if (item.category === category)
                return (
                  <div key={index}>
                    <Accordion
                      question={item.qn}
                      answer={item.ans}
                      list={item.list}
                      note={item.note}
                    />
                  </div>
                );
              return null;
            })}
          </section>
        </div>
      </div>
    </>
  );
};

export default Page;
