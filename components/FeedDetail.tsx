import React, { useState } from "react";
import HeaderProfile from "./HeaderProfile";
import IconCancelZoomImage from "./elements/IconCancelZoomImage";
import ProfileSection from "./ProfileSection";
import Image from "next/image";
import InformationRight from "@/contents/InformationRight";
import MainFeature from "@/contents/MainFeature";
import Deliverable from "@/contents/Deliverable";
import Communication from "@/contents/Communication";
import TechTask from "@/contents/TechTask";
import Team from "@/contents/Team";
import Role from "@/contents/Role";
import ServiceDesc from "@/contents/ServiceDesc";
import ProjectName from "@/contents/ProjectName";
import HeaderBanner from "./elements/HeaderBanner";
import CarouselArchitecture from "./CarouselArchitecture";
import { dummyProjectSTO } from "@/lib/DummyDataDJ";

const FeedDetail = () => {
  const [isItemDetailOpened, setIsItemDetailOpened] = useState(false);
  const [isArchitectureImageZoomed, setIsArchitectureImageZoomed] =
    useState(false);
  const [isArchitectureImageHover, setIsArchitectureImageHover] =
    useState(false);
  const [isDemoImageZoomed, setIsDemoImageZoomed] = useState(false);
  const [isDemoImageHover, setIsDemoImageHover] = useState(false);

  const [...projectSTO] = dummyProjectSTO;
  console.log("projectName@projectSTO", projectSTO[0].projectName); // 🔵 정상적으로 나옴, 첫번째 배열이 그대로 잘 나오기


  const handleArchitectureImage = () => {
    setIsArchitectureImageZoomed(!isArchitectureImageZoomed);
  };

  const handleDemoImage = () => {
    setIsDemoImageZoomed(!isDemoImageZoomed);
  };

  return (
    <>
      <section>
        <HeaderBanner />

        <div className="fixed inset-0 z-50 flex flex-col w-full h-full overflow-y-auto transition-opacity duration-300 ease-in-out bg-white inset-y-9">
          {<HeaderProfile title={projectSTO[0].projectName} />}

          {/* 💪 mx-auto 하면 이제 가운데로 오긴 하는데, flex 를 써서 깔끔하게 오게 하고 싶긴 함  */}
          <main className="w-full bg-[neutral-50] max-w-[1200px] mx-auto rounded-[64px] p-10">
            <section className="w-full ">
              {/* 사진 */}
              <article className=" x-full flex flex-row justify-normal gap-[24px]">
                {projectSTO && projectSTO[0].architectureImageHref && (
                  <figure
                    onClick={() => handleArchitectureImage()}
                    onMouseEnter={() => setIsArchitectureImageHover(true)}
                    onMouseLeave={() => setIsArchitectureImageHover(false)}
                    className="relative cursor-pointer shadow w-[400px] h-[450px]  bg-no-repeat bg-cover rounded-[40px]"
                  >
                    <Image
                      fill
                      alt="architecture image"
                      className="rounded-[40px] object-cover"
                      src={`${projectSTO[0].architectureImageThumbnail}`}
                    />

                    {isArchitectureImageHover && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center w-full y-full bg-gradient-to-b rounded-[40px] from-black/50 to-black/50">
                        <p className="font-medium text-[16px] text-neutral-50 border-white border-[1px] p-2 rounded-[5px] ">
                          아키텍처 자세히보기
                        </p>
                      </div>
                    )}
                  </figure>
                )}

                {isArchitectureImageZoomed && (
                  <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/90">
                    <div
                      onClick={() => handleArchitectureImage()}
                      className="absolute z-50 cursor-pointer top-5 right-5"
                    >
                      <IconCancelZoomImage />
                    </div>

                    <CarouselArchitecture />

                  </div>
                )}

                {projectSTO && projectSTO[0].image && (
                  <figure
                    onClick={() => handleDemoImage()}
                    onMouseEnter={() => setIsDemoImageHover(true)}
                    onMouseLeave={() => setIsDemoImageHover(false)}
                    className="relative cursor-pointer shadow  rounded-[40px] w-full h-[450px]  bg-no-repeat bg-cover"
                  >
                    <video
                      className="object-cover w-full h-full rounded-[40px]"
                      src={"/video/STO_dashborad&board.mp4"}
                      muted
                      autoPlay
                      controls
                    ></video>
                    {isDemoImageHover && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center w-full y-full bg-black/50 rounded-[40px]">
                        <p className="font-medium text-[20px] text-neutral-50 border-white border-[1px] p-2 rounded-[5px] ">
                          시연 자세히보기
                        </p>
                      </div>
                    )}
                  </figure>
                )}

                {isDemoImageZoomed && (
                  <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/90 ">
                    <div
                      onClick={() => handleDemoImage()}
                      className="absolute z-50 cursor-pointer top-5 right-5"
                    >
                      <IconCancelZoomImage />
                    </div>

                    <figure className=" relative w-full  max-w-[90%] max-h-[90%] h-full z-50 bg-no-repeat bg-contain bg-center shadow cursor-pointer">
                      <video
                        className="w-full h-full rounded-[40px]"
                        src={"/video/STO_dashborad&board.mp4"}
                        autoPlay
                        controls
                      ></video>
                    </figure>
                  </div>
                )}
              </article>

              <article className="relative shadow flex flex-row  gap-[24px] px-10 rounded-[64px] mt-[24px] py-10 bg-[#f9f9f9] h-full  ">
                {/* 왼쪽 */}
                <div className="relative flex flex-col flex-wrap gap-[56px] h-full w-[80%]">
                  {/* <article className="flex ">
                    <BadgeIcon desc={projectSTO[0].endDate} />
                    <BadgeIconText desc={"project"} />
                  </article> */}

                  <ProjectName
                    stacks={projectSTO[0].stacks}
                    projectName={projectSTO[0].projectName}
                  />

                  <ServiceDesc serviceDesc={projectSTO[0].serviceDesc} />
                  <Team  teamData = {projectSTO[0].team} />
                  <Role myRole = {projectSTO[0].myRole} />
                  <MainFeature />
                  <TechTask />
                  <Communication />
                  <Deliverable />
                </div>

                <InformationRight />
              </article>
            </section>

            <ProfileSection />

            <div className="h-[120px]"> </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default FeedDetail;
