"use client";

import React, { RefObject, useState } from "react";
import { motion } from "framer-motion";

interface CardProps {
  data: {
    id: number;
    name: string;
  };
  reference: RefObject<HTMLDivElement>;
  color: string;
}

const Card: React.FC<CardProps> = ({ data, reference, color }) => {
  //   const colorGenerator = () => {};
  //   const color = ["--yellow", "--pink", "--purple", "--blue"];
  //   let randomColor = color[Math.floor(Math.random() * color.length)];
  //   console.log(randomColor);

  //   const bg = "yellow";

  const [isDragging, setIsDragging] = useState(false);

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1, opacity: 0.8 }}
      dragTransition={{ bounceStiffness: 700, bounceDamping: 10 }}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className={`h-72 w-60 rounded-xl cursor-grab  flex flex-col gap-8 justify-center items-center`}
      style={{
        backgroundColor: color,
        zIndex: isDragging ? 10 : 1,
        position: isDragging ? "relative" : "static",
      }}
    >
      <h1>{data.name}</h1>
    </motion.div>
  );
};

export default Card;
