/* eslint-disable react/display-name */
import React from "react";
import { TfiArrowCircleUp } from "react-icons/tfi";
import { motion, AnimatePresence } from "framer-motion";

export type accordion = {
  question: string;
  answer?: string;
  list?: string[];
  note?: string;
  listHeader?: string;
  list2?: string[];
  listHeader2?: string;
  list3?: string[];
  listHeader3?: string;
  default?: boolean;
};

const Accordion: React.FunctionComponent<accordion> = React.memo(
  (props: accordion) => {
    const [accordion, setAccordion] = React.useState(props.default ? props.default : false);
    return (
      <div className="relative">
        {/* Header (clickable) */}
        <div
          className="flex flex-row justify-between items-center rounded-3xl cursor-pointer md:pl-3 md:p-2 gap-2"
          onClick={() => setAccordion(!accordion)}
        >
          <p className="text-lg md:text-xl text-dark capitalize flex-1 p-2">{props.question}</p>
          <span
            className={`transition-transform duration-200 ${accordion ? "rotate-0" : "rotate-180"}`}
          >
            <TfiArrowCircleUp className="text-2xl text-primary" />
          </span>
        </div>

        <AnimatePresence>
          {accordion && (
            <motion.div
              className="overflow-hidden"
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
            >
              {/* Timeline rail */}
              <div className="relative pl-4 md:pl-10">
                <div className="absolute left-5 md:left-9 top-4 bottom-0 border-l-2 border-dashed border-primary" />
                <div className="ml-8 md:ml-4 py-4 flex flex-col gap-5">
                  {/* Answer */}
                  {props.answer && (
                    <div className="flex flex-col gap-3 text-neutral-800">
                      <p className="font-now pt-4">{props.answer}</p>
                    </div>
                  )}

                  {/* First List */}
                  {props.list && (
                    <div className="flex flex-col gap-2">
                      {props.listHeader && (
                        <p className="font-now underline-offset-2 underline text-neutral-800 font-semibold">
                          {props.listHeader}
                        </p>
                      )}
                      <ul className="mt-1 space-y-1" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                        {props.list.map((item, index) => (
                          <li className="font-now text-neutral-800" key={index}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Second List */}
                  {props.list2 && (
                    <div className="flex flex-col gap-2">
                      {props.listHeader2 && (
                        <p className="font-now underline-offset-2 underline text-neutral-800 font-semibold">
                          {props.listHeader2}
                        </p>
                      )}
                      <ul className="mt-1 space-y-1" style={{ listStyleType: "disc", paddingLeft: "1.5rem" }}>
                        {props.list2.map((item, index) => (
                          <li className="font-now text-neutral-800" key={index}>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Note */}
                  {props.note && (
                    <div className="border-amber-200 bg-amber-50 p-4 rounded-lg border">
                      <p className="font-now text-sm text-amber-800">
                        {props.note}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  },
);

export default Accordion;