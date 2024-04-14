import React from "react";

const BadgeIconText = ({ desc } : any) => {
  return (
    <>
      <span className="bg-[#28466c] w-fit text-neutral-50 px-[14px] py-[6px] rounded-[50px] text-[13px] ml-2">
        {desc}
      </span>
    </>
  );
};

export default BadgeIconText;
