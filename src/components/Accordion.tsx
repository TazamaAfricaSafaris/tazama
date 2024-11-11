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
      <div className="border-b border-b-gray-700/10">
        <p
          className="flex cursor-pointer items-center justify-between gap-4 capitalize hover:bg-[#f0ece6] p-2"
          onClick={() => setAccordion(!accordion)}
        >
          <span className="text-lg text-gray-950">{props.question}</span>
          <span
            className={`transition duration-200 ${accordion ? "rotate-0" : "rotate-180"
              }`}
          >
            <TfiArrowCircleUp className="text-2xl text-gray-950/40" />
          </span>
        </p>
        <AnimatePresence>
          {accordion && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
              className={`mt-2 overflow-clip text-gray-950/75 pl-4 py-2`}
            >
              <p className="font-now">{props.answer}</p>
              {props.listHeader && <p className="pt-4 font-now underline-offset-2 underline">{props.listHeader}</p>}
              {props.list ? (
                <ul className="mt-1" style={{ listStyleType: "disc" }}>
                  {props.list.map((item, index) => (
                    <li className="font-now " key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
              {props.listHeader2 && <p className="pt-4 font-now underline-offset-2 underline">{props.listHeader2}</p>}
              {props.list2 ? (
                <ul className="mt-1" style={{ listStyleType: "disc" }}>
                  {props.list2.map((item, index) => (
                    <li className="font-now " key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
              {props.note ? (
                <p className="font-now mt-3 ">{props.note}</p>
              ) : null}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  },
);

export default Accordion;
