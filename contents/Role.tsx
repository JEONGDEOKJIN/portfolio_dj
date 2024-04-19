import React from "react";

const Role = ({ myRole }: any) => {
  return (
    <>
      <div className="mt-[16px] w-full h-full">
        <h5 className="text-[20px]  w-full">
          <strong>담당역할</strong>
        </h5>
        <span className="text-[16px] marginTopGlobalCSS   ">{myRole}</span>
      </div>
    </>
  );
};

export default Role;
