"use client";

import FeedDetail from "@/components/FeedDetail";
import Footer from "@/components/Footer";
import SkillSets from "@/contents/SkillSets";
import { sleep } from "@/lib/utils";
import React from "react";

const page = async (props: any) => {
  // console.log("props.params.id : " , props.params.id)
  // await sleep(2000); // 5초 동안 기다렸다가 실행해라

  // 클릭시 이렇게 가져올 수 있음
  {
    /* {props.params.id} */
  }

  return (
    <>
      {/* <FeedDetail /> */}
      <div className="w-full flex items-center justify-center ">
        <div className="w-full h-full flex items-center gap-10 justify-center max-w-[1200px] ">
          <SkillSets />
          <SkillSets />
          <SkillSets />
        </div>
      </div>
    </>
  );
};

export default page;
