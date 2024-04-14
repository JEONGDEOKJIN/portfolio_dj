import React from "react";

const ProjectName = ({projectName} : any) => {
  return (
    <>
      <h2 className="text-[48px] font-semibold leading-[1.1em]  text-left	">
        {projectName}
      </h2>
    </>
  );
};

export default ProjectName;
