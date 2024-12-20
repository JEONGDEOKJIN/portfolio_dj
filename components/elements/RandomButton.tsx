"use client"

import { getRandomInt } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React from "react";

const RandomButton = ({ desc, icon }: any) => {
  const router = useRouter();

  const projectsLinks = [
    "/projects/sto",
    "/projects/monamis",
    "/projects/nobroker",
    "/projects/wesAnderson",
  ];

  const handleRandomButton = () => {
    const randomNum = getRandomInt(0, 3);

    router.push(`${projectsLinks[randomNum]}`);
  };

  return (
    <>
      <button
        onClick={handleRandomButton}
        className="z-50 pr-5 pl-6 py-3 mr-3 ml-auto text-sm font-[500] rounded-full cursor-pointer point-cursor bg-gray-950 text-gray-50 
          hover:bg-gray-600 transition-all duration-500 ease-in hover:shadow-lg "
        // onClick={handleRandomButton}
      >
        <span className="hover:animate-pulse">{desc}</span>
        <span className="rounded-xl hover:animate-pulse">{icon}</span>
      </button>
    </>
  );
};

export default RandomButton;
