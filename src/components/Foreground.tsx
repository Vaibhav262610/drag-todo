"use client";
import React, { useRef } from "react";
import Card from "./Card";
import { motion } from "framer-motion";

export const data = [
  {
    id: 1,
    name: "vaibhav",
  },
  {
    id: 2,
    name: "mukul",
  },
  {
    id: 3,
    name: "luffy",
  },
  {
    id: 4,
    name: "zoro",
  },
  {
    id: 4,
    name: "zoro",
  },
  {
    id: 4,
    name: "zoro",
  },
  {
    id: 4,
    name: "zoro",
  },
  {
    id: 4,
    name: "zoro",
  },
];

const colors = ["#724cf9", "#ca7df9", "#f896d8", "#edf67e"];

interface DataItem {
  id: number;
  name: string;
}

const Foreground: React.FC = () => {
  const ref = useRef(null);

  return (
    <>
      <div
        ref={ref}
        className="h-screen w-full flex  flex-wrap gap-8 fixed z-[3]"
      >
        {/* <div ref={ref} className="fixed z-[3]"> */}
        {data.map((item, index) => {
          return (
            <motion.div key={item.id} className="">
              <Card
                data={item}
                reference={ref}
                color={colors[index % colors.length]}
              />
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default Foreground;
