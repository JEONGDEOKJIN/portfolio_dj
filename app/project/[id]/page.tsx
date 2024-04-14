"use client";

import FeedDetail from "@/components/FeedDetail";
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
      <FeedDetail />
    </>
  );
};

export default page;
