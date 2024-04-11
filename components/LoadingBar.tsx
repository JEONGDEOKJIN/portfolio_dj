"use client";

import React from "react";
import { BarLoader } from "react-spinners"; // 참고:https://www.davidhu.io/react-spinners/

const LoadingBar = () => {
  return (
    <div className="w-full">
      <BarLoader color="#36d7b7" cssOverride={{ width: "100%" }} />
    </div>
    // <div>loading</div>
  );
};

export default LoadingBar;
