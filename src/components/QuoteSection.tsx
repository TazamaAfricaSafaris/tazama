import { motion } from "framer-motion";
import React from "react";

type quoteSection = {
  quote: string;
  subText?: string;
};

const QuoteSection = (props: quoteSection) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 0.5,
      }}
      className="flex min-h-[400px] w-full flex-col items-center justify-center bg-[#A87133] p-20 text-center text-white "
    >
      <h2 className="mb-10 text-3xl md:text-4xl">“{props.quote}”</h2>
      {props.subText ? (
        <p className="font-now text-lg md:text-2xl">{props.subText}</p>
      ) : null}
    </motion.div>
  );
};

export default QuoteSection;
