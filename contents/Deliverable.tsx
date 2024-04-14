import IconSmallRoundedRect from "@/components/elements/IconSmallRoundedRect";
import Image from "next/image";
import React from "react";

const Deliverable = () => {
  return (
    <>
      <div className="relative mt-[16px] w-[800px] h-[500px] bg-blue-500  ">
        <h5 className="text-[20px] leading-[1.6em]  ">
          <strong>
            산출물
          </strong>
        </h5>

        <section className="flex flex-row gap-5 w-full marginTopGlobalCSS">
          <IconSmallRoundedRect 
            linkHref={"https://dbdiagram.io/d/6541ab467d8bbd64653cf50b"} 
            imgSrc = {"/img/ERD_example.png"}
            desc = {"ERD"}
            circleColor = {"#28466c"}
            />

          <IconSmallRoundedRect 
            linkHref={"https://dbdiagram.io/d/6541ab467d8bbd64653cf50b"} 
            imgSrc = {"/img/archi_example.webp"}
            desc = {"아키텍처"}
            circleColor = {"#28466c"}
            />

          <IconSmallRoundedRect 
            linkHref={"https://dbdiagram.io/d/6541ab467d8bbd64653cf50b"} 
            imgSrc = {"/img/API_example.png"}
            desc = {"API"}
            circleColor = {"#28466c"}
            />

          <IconSmallRoundedRect 
            linkHref={"https://dbdiagram.io/d/6541ab467d8bbd64653cf50b"} 
            imgSrc = {"/img/UIUX_example.png"}
            desc = {"UX/UI"}
            circleColor = {"#28466c"}
            />

          <IconSmallRoundedRect 
            linkHref={"https://dbdiagram.io/d/6541ab467d8bbd64653cf50b"} 
            imgSrc = {"/img/requirement_example.JPG"}
            desc = {"요구사항 정의"}
            circleColor = {"#28466c"}
            />

        </section>

        <section className="p-10"/> 

      </div>
    </>
  );
};

export default Deliverable;
