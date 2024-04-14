import React from "react";
import Accordion from "~/components/Accordion";
import {
  twoDayTrip,
  threeDayTrip,
  fourDayTrip,
  fiveDayTrip,
  sixDayTrip,
  sevenDayTrip,
} from "~/data/adventure-seekers";
import { Button } from "~/components/ui/button";
import Link from "next/link";

export const TwoDayTripItienary = () => {
  const [category, setCategory] = React.useState("itenary");

  return (
    <>
      <div className="mx-auto mt-48 max-w-7xl px-4 py-20 md:px-8 lg:mt-5 lg:py-10">
        <h3 className="text-center text-4xl uppercase tracking-wider text-[#A87133]">
          Two Day trip Itinerary
        </h3>

        <div className="mt-10 flex flex-col items-start gap-4 text-[#757371] md:flex-row md:gap-8">
          <aside className="w-full md:w-1/3">
            <ul className="font-now flex flex-col items-start gap-2 md:gap-5">
              <li>
                <Link href="/contact">
                  <Button className="font-now text-white">
                    Request Custom Itinerary
                  </Button>
                </Link>
              </li>
            </ul>
          </aside>
          <section className="flex w-full flex-col space-y-3 md:w-2/3">
            {twoDayTrip.map((item, index) => {
              return (
                <div key={index}>
                  <Accordion question={item.qn} answer={item.ans} />
                </div>
              );
            })}
          </section>
        </div>
      </div>
    </>
  );
};

export const ThreeDayTrip = () => {
  return (
    <div className="mx-auto mt-48 max-w-7xl px-4 py-20 md:px-8 lg:mt-5 lg:py-10">
      <h3 className="text-center text-4xl uppercase tracking-wider text-[#A87133]">
        Three Day trip Itinerary
      </h3>

      <div className="mt-10 flex flex-col items-start gap-4 text-[#757371] md:flex-row md:gap-8">
        <aside className="w-full md:w-1/3">
          <ul className="font-now flex flex-col items-start gap-2 md:gap-5">
            <li>
              <Link href="/contact">
                <Button className="font-now text-white">
                  Request Custom Itinerary
                </Button>
              </Link>
            </li>
          </ul>
        </aside>
        <section className="flex w-full flex-col space-y-3 md:w-2/3">
          {threeDayTrip.map((item, index) => {
            return (
              <div key={index}>
                <Accordion question={item.qn} answer={item.ans} />
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export const FourDayTrip = () => {
  return (
    <div className="mx-auto mt-48 max-w-7xl px-4 py-20 md:px-8 lg:mt-5 lg:py-10">
      <h3 className="text-center text-4xl uppercase tracking-wider text-[#A87133]">
        Four Day trip Itinerary
      </h3>

      <div className="mt-10 flex flex-col items-start gap-4 text-[#757371] md:flex-row md:gap-8">
        <aside className="w-full md:w-1/3">
          <ul className="font-now flex flex-col items-start gap-2 md:gap-5">
            <li>
              <Link href="/contact">
                <Button className="font-now text-white">
                  Request Custom Itinerary
                </Button>
              </Link>
            </li>
          </ul>
        </aside>
        <section className="flex w-full flex-col space-y-3 md:w-2/3">
          {fourDayTrip.map((item, index) => {
            return (
              <div key={index}>
                <Accordion
                  question={item.qn}
                  answer={item.ans}
                  list={item.list}
                  listHeader={item.listHeader}
                />
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export const FiveDayTrip = () => {
  return (
    <div className="mx-auto mt-48 max-w-7xl px-4 py-20 md:px-8 lg:mt-5 lg:py-10">
      <h3 className="text-center text-4xl uppercase tracking-wider text-[#A87133]">
        Five Days trip Itinerary
      </h3>

      <div className="mt-10 flex flex-col items-start gap-4 text-[#757371] md:flex-row md:gap-8">
        <aside className="w-full md:w-1/3">
          <ul className="font-now flex flex-col items-start gap-2 md:gap-5">
            <li>
              <Link href="/contact">
                <Button className="font-now text-white">
                  Request Custom Itinerary
                </Button>
              </Link>
            </li>
          </ul>
        </aside>
        <section className="flex w-full flex-col space-y-3 md:w-2/3">
          {fiveDayTrip.map((item, index) => {
            return (
              <div key={index}>
                <Accordion
                  question={item.qn}
                  answer={item.ans}
                  list={item.list}
                  listHeader={item.listHeader}
                />
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export const SixDayTrip = () => {
  return (
    <div className="mx-auto mt-48 max-w-7xl px-4 py-20 md:px-8 lg:mt-5 lg:py-10">
      <h3 className="text-center text-4xl uppercase tracking-wider text-[#A87133]">
        Six Days trip Itinerary
      </h3>

      <div className="mt-10 flex flex-col items-start gap-4 text-[#757371] md:flex-row md:gap-8">
        <aside className="w-full md:w-1/3">
          <ul className="font-now flex flex-col items-start gap-2 md:gap-5">
            <li>
              <Link href="/contact">
                <Button className="font-now text-white">
                  Request Custom Itinerary
                </Button>
              </Link>
            </li>
          </ul>
        </aside>
        <section className="flex w-full flex-col space-y-3 md:w-2/3">
          {sixDayTrip.map((item, index) => {
            return (
              <div key={index}>
                <Accordion
                  question={item.qn}
                  answer={item.ans}
                  list={item.list}
                  listHeader={item.listHeader}
                />
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

export const SevenDayTrip = () => {
  return (
    <div className="mx-auto mt-48 max-w-7xl px-4 py-20 md:px-8 lg:mt-5 lg:py-10">
      <h3 className="text-center text-4xl uppercase tracking-wider text-[#A87133]">
        Seven Days trip Itinerary
      </h3>

      <div className="mt-10 flex flex-col items-start gap-4 text-[#757371] md:flex-row md:gap-8">
        <aside className="w-full md:w-1/3">
          <ul className="font-now flex flex-col items-start gap-2 md:gap-5">
            <li>
              <Link href="/contact">
                <Button className="font-now text-white">
                  Request Custom Itinerary
                </Button>
              </Link>
            </li>
          </ul>
        </aside>
        <section className="flex w-full flex-col space-y-3 md:w-2/3">
          {sevenDayTrip.map((item, index) => {
            return (
              <div key={index}>
                <Accordion
                  question={item.qn}
                  answer={item.ans}
                  list={item.list}
                  listHeader={item.listHeader}
                />
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};
