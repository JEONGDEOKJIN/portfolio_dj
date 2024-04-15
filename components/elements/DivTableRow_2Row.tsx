import React from "react";

interface DivTableRow_2Row {
  criteriaDesc_1: string;
  criteriaDesc_2: string;
  criteriaDesc_3: string;
//   functionalRequirement: any;
//   desc: string;
}

const DivTableRow_2Row: React.FC<DivTableRow_2Row> = ({
  criteriaDesc_1,
  criteriaDesc_2,
  criteriaDesc_3,
//   functionalRequirement,
//   desc,
}) => {
  return (
    <>
      {/* {functionalRequirement.map((item: any, index: any) => {
        return ( */}
          <div className="flex text-[16px] text-gray-800 border-t-[1px] border-neutral-200">
            <div className="flex items-center justify-center w-[300px] shrink-0 border-b-[1px] border-r-[1px] border-neutral-200 p-3">
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

export default DivTableRow_2Row;
