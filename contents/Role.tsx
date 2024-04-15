import React from "react";

const Role = ({ myRole }: any) => {
  return (
    <>
      <div className="mt-[16px] w-full h-full">
        <h5 className="text-[20px] leading-[1.6em] w-full">
          <strong>본인 역할</strong>
        </h5>
        <span className="text-[14px] marginTopGlobalCSS ">{myRole}</span>
      </div>
    </>
  );
};

export default Role;
