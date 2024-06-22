"use client";

import FeedDetail from "@/components/FeedDetail";
import { sleep } from "@/lib/utils";
import React, { Suspense } from "react";

const page = async (props: any) => {
  // await sleep(5000); // 5초 동안 기다렸다가 실행해라

  return (
    <>
      <FeedDetail />
    </>
  );
};

export default page;
