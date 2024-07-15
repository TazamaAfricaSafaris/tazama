import React from "react";
import Accordion from "~/components/Accordion";
import { lemoshoItenary } from "~/data/lemosho";

const Page = () => {
  const [category, setCategory] = React.useState("itenary");

  return (
    <>
      <div className=" max-w-5xl  lg:mt-5 ">
        <div className=" flex flex-col items-start gap-4 text-[#757371] md:flex-row md:gap-8">
          <section className="flex w-full flex-col space-y-3">
            {lemoshoItenary.map((item, index) => {
              if (item.category === category)
                return (
                  <div key={index}>
                    <Accordion question={item.qn} answer={item.ans} />
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
