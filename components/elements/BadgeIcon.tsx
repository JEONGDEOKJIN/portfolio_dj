import React from "react";

const BadgeIcon = ({desc} : any ) => {
  return (
    <>
      <span className="bg-[#1c5eff1a] w-fit text-[#1c5eff] px-[14px] py-[6px] rounded-[50px] text-[13px]">
        {desc}
      </span>
    </>
  );
};

export default BadgeIcon;
