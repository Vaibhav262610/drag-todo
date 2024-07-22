"use client";

import React from "react";
import { data } from "./Foreground";

const Background = () => {
  return (
    <>
      <div className="h-screen w-full absolute z-[2]">
        <h1 className="text-[10rem] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] font-bold text-zinc-700 ">
          Docs
        </h1>
        <h1 className="text-[3rem] absolute top-2/3 left-1/2 -translate-x-[50%] -translate-y-[90%]  font-bold text-yellow-800 ">
          {data.length}
        </h1>
      </div>
    </>
  );
};

export default Background;
