import React from "react";


interface InformationProps {
  projectName? : string
  startDatePart? : string;
  endDatePart? : string;
  projectGit : string;
  projectGhantt : string;
}


const Information: React.FC<InformationProps> = ({projectName , startDatePart , endDatePart , projectGit, projectGhantt}) => {
  return (
    <>
      <div className="shadow w-[30%] shrink-0 rounded-[32px] bg-white p-8 flex gap-[12px] h-fit flex-col">
        <h5 className="text-[20px] font-normal"> Information </h5>

        <div className="flex justify-between">
          <span className="text-gray-600 text-[14px]">Project</span>
          <span className="text-[14px]">
            {projectName}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600 text-[14px]">프로젝트 기간</span>
          <span className="text-[14px]">
            {startDatePart} - {endDatePart}
            {/* {(() => {
              const startDatePart = {startDatePart}
                .split("T")[0]
                .split("-");
              const endDatePart = {endDatePart}
                .split("T")[0]
                .split("-");
              return `${startDatePart[0].slice(2, 4)}.${startDatePart[1]}.${
                startDatePart[2]
              }-${startDatePart[0].slice(2, 4)}.${endDatePart[1]}.${
                endDatePart[2]
              }`;
            })()} */}
          </span>
        </div>

        <div className="flex justify-between">
          <a className="text-[14px]  " href={projectGit}>
            <span className="text-gray-600 text-[14px]">프로젝트 깃 주소</span>
            <span className="text-[14px] flex  ">
              {projectGit}
            </span>
          </a>
        </div>

        <div className="flex justify-between">
          <a
            className="text-[14px] "
            href={projectGhantt}
          >
            <span className="text-gray-600 text-[14px]">프로젝트 일지</span>
            <span className="text-[14px] flex ">
              {projectGhantt}
            </span>
          </a>
        </div>

        <div className="flex justify-between">
          <a className="text-[14px] " href="https://deokjin.gitbook.io/dj/">
            <span className="text-gray-600 text-[14px]">개발 블로그</span>
            <span className="text-[14px] flex ">
              https://deokjin.gitbook.io/dj
            </span>
          </a>
        </div>

        <div className="flex justify-between">
          <a className="text-[14px] " href="https://hello-5200.tistory.com">
            <span className="text-gray-600 text-[14px]">공부 기록 블로그</span>
            <span className="text-[14px] flex ">
              https://hello-5200.tistory.com
            </span>
          </a>
        </div>

        <button
          // onClick={handleSendFeedback}
          className="px-4 py-3 w-full mx-auto ml-auto text-sm font-semibold rounded-full cursor-pointer mt-[16px] bg-gray-950 text-gray-50 hover:bg-gray-600 "
        >
          Feedback Now
        </button>
      </div>
    </>
  );
};

export default Information;
