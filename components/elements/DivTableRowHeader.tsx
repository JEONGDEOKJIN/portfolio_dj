import React from "react";

interface DivTableRowHeaderProps {
  criteria_1: string;
  criteria_2: string;
  criteria_3: string;
  // criteria_4: string;
  // criteria_5: string;
  // criteria_6: string;
}

const DivTableRowHeader: React.FC<DivTableRowHeaderProps>= ({
  criteria_1,
  criteria_2,
  criteria_3,

}) => {
  return (
    <>
      <div className="flex text-[16px] text-gray-900 border-t-[1px] border-neutral-200 ">
        <div className="w-[10%]  grow  border-r-[1px] border-neutral-200 text-center py-3">
          {criteria_1}
        </div>
        <div className="w-[12%]  grow  border-r-[1px] border-neutral-200 text-center py-3">
          {criteria_2}
        </div>
        <div className="w-[20%]  grow   border-neutral-200 text-center py-3">
          {criteria_3}
        </div>
        {/* <div className="w-[20%]  grow border-b-[1px] border-r-[1px] border-neutral-200 text-center py-3">
          {criteria_4}
        </div> */}
        {/* <div className="w-[20%]  grow border-b-[1px] border-r-[1px] border-neutral-200 text-center py-3">
          {criteria_5}
        </div> */}
        {/* <div className="w-[50%]  grow border-b-[1px]  border-neutral-200 text-center py-3">
          {criteria_6}
        </div> */}
      </div>
    </>
  );
};

export default DivTableRowHeader;
