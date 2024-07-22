"use client";
import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
  const ref = useRef(null);
  const data = [
    {
      id: 1,
      name: "vaibhav",
    },
  ];

  return (
    <>
      <div ref={ref} className="h-screen w-full  fixed z-[3]">
        {/* <div ref={ref} className="fixed z-[3]"> */}
        {data.map((item) => {
          return <Card key={item.id} data={item} reference={ref} />;
        })}
      </div>
    </>
  );
};

export default Foreground;
