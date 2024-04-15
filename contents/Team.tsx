import DivTableRow from "@/components/elements/DivTableRow";
import DivTableRowHeader from "@/components/elements/DivTableRowHeader";
import React from "react";

const Team = ({ teamData }: any) => {

  console.log("teamData" , teamData)

  return (
    <>
      <div className="mt-[16px] widthServiceDescglabalCSS h-full">
        <h5 className="text-[20px]   ">
          <strong>팀 구성 </strong>
        </h5>

        <article className="flex flex-col  border-neutral-200 w-[500px] h-full mt-[15px]">
          <DivTableRowHeader
            criteria_1={"Frontend"}
            criteria_2={"Backend"}
            criteria_3={"기타"}
          />

          <DivTableRow
            criteriaDesc_1={teamData.frontend}
            criteriaDesc_2={teamData.backend}
            criteriaDesc_3={teamData.etc}
          />
        </article>
      </div>
    </>
  );
};

export default Team;
