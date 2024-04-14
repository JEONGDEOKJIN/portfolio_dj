import React from "react";
import Stacks from "./Stacks";

const ProjectName = ({projectName , stacks} : any) => {
  return (
    <>
    <div className="flex flex-col">
      <h2 className="text-[48px] font-semibold   text-left	">
        {projectName}
      </h2>
      <Stacks stacks={stacks}/>
    </div>

    </>
  );
};

export default ProjectName;
