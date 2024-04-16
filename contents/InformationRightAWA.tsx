"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { dummyAWAProject } from "@/lib/DummyDataDJ";

const InformationRightAWA = () => {
  const router = useRouter();

  const handleSendFeedback = () => {
    router.push("/");
  };

  const [...projectAWA] = dummyAWAProject;

  return (
    <>
      <div className="w-[500px] relative">
        <div className="absolute leftMoveGlobalCSS  shadow  h-fit shrink-0 rounded-[24px] bg-white p-10 flex gap-5 flex-col">
          <h5 className="text-[20px] font-normal"> Information </h5>

          <div className="flex justify-between">
            <span className="text-gray-600 text-[14px]">Project</span>
            <span className="text-[14px]">
              {projectAWA[0].informationSection.projectName}
            </span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-600 text-[14px]">Date</span>
            <span className="text-[14px]">
              {projectAWA[0].informationSection.startDate} -{" "}
              {projectAWA[0].informationSection.endDate}
            </span>
          </div>

          <div className="flex justify-between">
            <a
              className="text-[14px]"
              href={projectAWA[0].informationSection.projectRepository}
            >
              <span className="text-gray-600 text-[14px]">
                프로젝트 깃 주소
              </span>
              <span className="text-[14px] flex  ">
                {
                  projectAWA[0].informationSection.projectRepository.split(
                    "projects"
                  )[0]
                }
              </span>
            </a>
          </div>

          <div className="flex justify-between">
            <a
              className="text-[14px]"
              href={projectAWA[0].informationSection.projectDocuments}
            >
              <span className="text-gray-600 text-[14px]">프로젝트 관리</span>
              <span className="text-[14px] flex ">
                {`notion.site/${projectAWA[0].informationSection.projectName}`}
              </span>
            </a>
          </div>

          <div className="flex justify-between">
            <a
              className="text-[14px] "
              href={projectAWA[0].informationSection.DEVBlog}
            >
              <span className="text-gray-600 text-[14px]">
                {" "}
                딥다이브 블로그
              </span>
              <span className="text-[14px] flex ">
                {projectAWA[0].informationSection.DEVBlog}
              </span>
            </a>
          </div>

          <div className="flex justify-between">
            <a
              className="text-[14px] "
              href={projectAWA[0].informationSection.justStudyBlog}
            >
              <span className="text-gray-600 text-[14px]">
                {" "}
                공부기록 블로그
              </span>
              <span className="text-[14px] flex ">
                {projectAWA[0].informationSection.justStudyBlog}
              </span>
            </a>
          </div>

          <button
            onClick={handleSendFeedback}
            className="px-4 py-3 w-full mx-auto ml-auto text-sm font-semibold rounded-full cursor-pointer mt-[16px] bg-gray-950 text-gray-50 hover:bg-gray-600 "
          >
            More projects
          </button>
        </div>
      </div>
    </>
  );
};

export default InformationRightAWA;
