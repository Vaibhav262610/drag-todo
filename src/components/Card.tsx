"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";

const Card = ({ data, reference }) => {
  return (
    <>
      <motion.div
        drag
        dragConstraints={reference}
        whileDrag={{ scale: 1.1  }}
        dragTransition={{ bounceStiffness: 300, bounceDamping: 5 }}
        className="h-72 w-60 rounded-xl bg-zinc-700 flex justify-center items-center"
      >
        <h1>{data.name}</h1>
      </motion.div>
    </>
  );
};

export default Card;
