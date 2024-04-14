import React from "react";
import { TfiArrowCircleUp } from "react-icons/tfi";
import { motion, AnimatePresence } from "framer-motion";

type accordion = {
  question: string;
  answer?: string;
  list?: string[];
  note?: string;
  listHeader?: string;
};

const Accordion: React.FunctionComponent<accordion> = React.memo(
  (props: accordion) => {
    const [accordion, setAccordion] = React.useState(false);
    return (
      <div className="rounded-md bg-white px-4 py-2 shadow-sm">
        <p
          className="flex cursor-pointer items-center justify-between gap-4 text-sm capitalize text-gray-600 md:text-base"
          onClick={() => setAccordion(!accordion)}
        >
          <span className=" font-now">{props.question}</span>
          <span
            className={`transition duration-200 ${
              accordion ? "rotate-0" : "rotate-180"
            }`}
          >
            <TfiArrowCircleUp />
          </span>
        </p>
        <AnimatePresence>
          {accordion && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3 }}
              className={`mt-2 overflow-clip text-justify text-gray-500`}
            >
              <p className="font-now text-sm">{props.answer}</p>
              {props.listHeader && <h3 className="pt-4 font-now">{props.listHeader}</h3>}
              {props.list ? (
                <ul className="mt-3" style={{ listStyleType: "disc" }}>
                  {props.list.map((item, index) => (
                    <li className="font-now text-sm" key={index}>
                      • {item}
                    </li>
                  ))}
                </ul>
              ) : null}
              {props.note ? (
                <p className="font-now mt-3 text-sm">{props.note}</p>
              ) : null}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  },
);

export default Accordion;
