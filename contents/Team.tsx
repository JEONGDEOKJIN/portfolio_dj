import DivTableRow from "@/components/elements/DivTableRow";
import DivTableRowHeader from "@/components/elements/DivTableRowHeader";
import React from "react";

const Team = () => {
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
            criteriaDesc_1={"2명"}
            criteriaDesc_2={"3명"}
            criteriaDesc_3={"컨트랙트 : 전원 개발"}
          />
        </article>
      </div>
    </>
  );
};

export default Team;
