import React from "react";

const Information_ver2 = () => {
  return (
    <>
    <div className="w-[500px] relative">
      <div className="absolute leftMoveGlobalCSS  shadow  h-fit shrink-0 rounded-[24px] bg-white p-10 flex gap-5 flex-col">
        <h5 className="text-[20px] font-normal"> Information </h5>

        <div className="flex justify-between">
          <span className="text-gray-600 text-[14px]">Project</span>
          <span className="text-[14px]">
            {/* {projectNames[clickedDetailedItem.projectID]} */}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600 text-[14px]">Date</span>
          <span className="text-[14px]">
            {/* {startDatePart} - {endDatePart} */}
          </span>
        </div>

        <div className="flex justify-between">
          <a
            className="text-[14px]  "
            // href={clickedDetailedItem.repository}
          >
            <span className="text-gray-600 text-[14px]">프로젝트 깃 주소</span>
            <span className="text-[14px] flex  ">
              {/* {clickedDetailedItem.repository} */}
            </span>
          </a>
        </div>

        <div className="flex justify-between">
          <a
            className="text-[14px] "
            // href={clickedDetailedItem.projectDocuments}
          >
            <span className="text-gray-600 text-[14px]">프로젝트 일지</span>
            <span className="text-[14px] flex ">
              {/* {clickedDetailedItem.projectDocuments} */}
            </span>
          </a>
        </div>

        <div className="flex justify-between">
          <a className="text-[14px] " href="https://deokjin.gitbook.io/dj/">
            <span className="text-gray-600 text-[14px]">개발 공부 블로그</span>
            <span className="text-[14px] flex ">
              https://deokjin.gitbook.io/dj
            </span>
          </a>
        </div>

        <button
          //   onClick={handleSendFeedback}
          className="px-4 py-3 w-full mx-auto ml-auto text-sm font-semibold rounded-full cursor-pointer mt-[16px] bg-gray-950 text-gray-50 hover:bg-gray-600 "
        >
          Feedback Now
        </button>
      </div>
      </div>

    </>
  );
};

export default Information_ver2;
