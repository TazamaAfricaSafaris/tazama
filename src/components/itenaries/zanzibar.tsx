import Link from "next/link";
import { Button } from "../ui/button";
import {
  eightDayTrip,
  nineDayTrip,
  tenDayTrip,
  twelveDayTrip,
  fourteenDayTrip,
} from "~/data/zanzibar";
import Accordion from "../Accordion";

export function EightDayTrips() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:mt-5 lg:py-10">
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
          {eightDayTrip.map((item, index) => {
            return (
              <div key={index}>
                <Accordion question={item.qn} answer={item.ans} />
              </div>
            );
          })}
        </section>
      </div>
      <div className="font-now mt-10">
        <h3 className="text-lg font-medium text-primary">Group Rates</h3>
        <p className="pt-2 text-base">Lodge Safaris</p>
        <ul className="list-inside list-disc pl-5 pt-3">
          <li>$4400 per person for travelers</li>
          <li>$3600 per person when traveling in a group of 2 4 people</li>
          <li>$3200, per person when traveling in a group of 5 6 people</li>
        </ul>

        <h3 className="mt-10 text-lg font-medium text-primary">
          Included in the package
        </h3>
        <p className="pt-2 text-base">
          We provide transportation, in comfortable 4X4 Toyota Land Cruisers
          with a pop up roof for optimal game viewing.
        </p>
        <ul className="list-inside list-disc pl-5 pt-3">
          <li>
            You will have two nights of accommodation before and after the
            safari.
          </li>
          <li> All park entry fees are taken care of.</li>
          <li> Government fees and taxes are included in the package.</li>
          <li>Enjoy full board accommodation while on your safari.</li>
          <li>The Ngorongoro Crater service fee is covered.</li>
          <li>
            You'll have an English speaking guide to accompany you throughout
            the trip.
          </li>
          <li>
            {" "}
            All meals are provided during the safari ensuring you don't go
            hungry.
          </li>
          <li>
            We offer than bottled mineral water to keep you hydrated throughout
            your adventure.
          </li>
          <li>
            Transfers to and from the International Airport and Moshi are
            included.
          </li>
        </ul>

        <h3 className="mt-10 text-lg font-medium text-primary">
          Not included:
        </h3>

        <ul className="list-inside list-disc pl-5 pt-3">
          <li>
            Please note that alcoholic beverages, sodas and any personal items
            are not part of the package
          </li>
          <li>Laundry service is not provided well. </li>
          <li>International flights need to be arranged by travelers. </li>
          <li>
            We highly recommend obtaining travel insurance for added peace of
            mind.
          </li>
          <li>
            Any additional safari add ons are not included in this package.
          </li>
          <li>
            As, for tipping it is customary to tip both your driver guide and
            cook as a group than individually.
          </li>
        </ul>
      </div>
    </div>
  );
}

export const NineDayTrip = () => {
  return (
    <div className="mx-auto mt-48 max-w-7xl px-4 py-20 md:px-8 lg:mt-5 lg:py-10">
      <h3 className="text-center text-4xl uppercase tracking-wider text-[#A87133]">
        Nine Days trip Itinerary
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
          {nineDayTrip.map((item, index) => {
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

export function TenDayTrips() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 md:px-8 lg:mt-5 lg:py-10">
      <h3 className="text-center text-4xl uppercase tracking-wider text-[#A87133]">
        Ten Days trip Itinerary
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
          {tenDayTrip.map((item, index) => {
            return (
              <div key={index}>
                <Accordion question={item.qn} answer={item.ans} />
              </div>
            );
          })}
        </section>
      </div>
      <div className="font-now mt-10">
        <h3 className="text-lg font-medium text-primary">Cost inclusive of;</h3>
        <ul className="list-inside list-disc pl-5 pt-3">
          <li>Transfer from Kilimanjaro/Arusha Airport</li>
          <li>Safari Lodges with full board accommodation</li>
          <li>Camping fees at designated campsites</li>
          <li>
            {" "}
            All reserve and park entrance fees according to the itinerary
          </li>
          <li> Ngorongoro crater entrance fee as per the itinerary</li>
          <li> Ngorongoro Crater service fee</li>
          <li>
            {" "}
            Service of an English speaking driver guide (Tips not included)
          </li>
          <li> Service of a cook (Tips not included)</li>
          <li> Game drive in a vehicle </li>
          <li> daily supply of drinking mineral water during the safari </li>
          <li> Meals as specified in the itinerary</li>
        </ul>

        <h3 className="mt-10 text-lg font-medium text-primary">
          Cost exclusive of:
        </h3>

        <ul className="list-inside list-disc pl-5 pt-3">
          <li>Flights to Kilimanjaro and from Kilimanjaro</li>
          <li>Internal flights from Kilimanjaro to Zanzibar </li>
          <li>
            Extras such as drinks, laundry service, etc. At lodges and hotels
          </li>
          <li>Tips for driver guide</li>
          <li>Visa entry fee, into Tanzania</li>
        </ul>
      </div>
    </div>
  );
}

export const TwelveDayTrip = () => {
  return (
    <div className="mx-auto mt-48 max-w-7xl px-4 py-20 md:px-8 lg:mt-5 lg:py-10">
      <h3 className="text-center text-4xl uppercase tracking-wider text-[#A87133]">
        Twelve Days trip Itinerary
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
          {twelveDayTrip.map((item, index) => {
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

export const FourteenDayTrip = () => {
  return (
    <div className="mx-auto mt-48 max-w-7xl px-4 py-20 md:px-8 lg:mt-5 lg:py-10">
      <h3 className="text-center text-4xl uppercase tracking-wider text-[#A87133]">
        Fourteen Days trip Itinerary
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
          {fourteenDayTrip.map((item, index) => {
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
