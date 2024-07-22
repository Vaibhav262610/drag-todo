"use client";
import React, { useRef } from "react";
import Card from "./Card";


const Foreground = () => {
  const ref = useRef(null);
  const data = [
    {
      name: "vaibhav",
    },
  ];

  return (
    <>
      <div ref={ref} className="h-screen w-full  fixed z-[3]">
      {/* <div ref={ref} className="fixed z-[3]"> */}
        {data.map((item) => {
          return <Card data={item} reference={ref} />;
        })}
      </div>
    </>
  );
};

export default Foreground;
