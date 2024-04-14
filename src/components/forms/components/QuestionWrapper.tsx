import { motion } from "framer-motion";
import React from "react";

export default function QuestionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.9 }}
    >
      {children}
    </motion.div>
  );
}
