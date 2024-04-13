import React from "react";

interface DivTableRow_5Row {
  criteriaDesc_1: string;
  criteriaDesc_2: string;
  criteriaDesc_3: string;
  width?: string;
//   functionalRequirement: any;
//   desc: string;
}

const DivTableRow_5Row: React.FC<DivTableRow_5Row> = ({
  criteriaDesc_1,
  criteriaDesc_2,
  criteriaDesc_3,
  width
//   functionalRequirement,
//   desc,
}) => {
  return (
    <>
      {/* {functionalRequirement.map((item: any, index: any) => {
        return ( */}
          <div className="flex text-[14px] text-gray-800  ">
            <div className="flex items-center justify-center w-[200px] shrink-0 border-b-[1px] border-r-[1px] border-neutral-200 p-3">
              {criteriaDesc_1} 
            </div>
            <div className="flex flex-wrap items-center justify-start  grow border-b-[1px]  border-neutral-200 p-3">
              <p>
                {criteriaDesc_2}
              </p>
              <p>
                {criteriaDesc_3}
              </p>
            </div>

            {/* <div className="flex items-center justify-center w-[20%] grow border-b-[1px]  border-neutral-200 p-3">
              {criteriaDesc_3}
            </div> */}
          
          </div>
        {/* );
      })} */}
    </>
  );
};

export default DivTableRow_5Row;
