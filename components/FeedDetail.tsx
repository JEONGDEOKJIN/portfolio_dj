import React, { useState } from "react";
import IconCancelItemDetail from "@/components/ui/IconCancelItemDetail";
import HeaderProfile from "./HeaderProfile";
import IconCancelZoomImage from "./elements/IconCancelZoomImage";
import ProfileSection from "./ProfileSection";
import Image from "next/image";
import DivTableRowHeader from "./elements/DivTableRowHeader";
import DivTableRow from "./elements/DivTableRow";
import DivTableRowMiddle from "./elements/DivTableRowMiddle";
import DivTableRow_2Row from "./elements/DivTableRow_2Row";
import DivTableRow_3Row from "./elements/DivTableRow_3Row";
import DivTableRow_4Row from "./elements/DivTableRow_4Row";
import DivTableRow_5Row from "./elements/DivTableRow_5Row";
import Information from "@/contents/Information";
import Information_ver2 from "@/contents/Information_ver2";
import MainFeature from "@/contents/MainFeature";
import Deliverable from "@/contents/Deliverable";
import Communication from "@/contents/Communication";
import TechTask from "@/contents/TechTask";
import Team from "@/contents/Team";
import Role from "@/contents/Role";
import ServiceDesc from "@/contents/ServiceDesc";
import Stacks from "@/contents/Stacks";
import ProjectName from "@/contents/ProjectName";
import BadgeIcon from "@/components/elements/BadgeIcon";
import BadgeIconText from "./elements/BadgeIconText";
import dummyProjectList  from "@/lib/DummyDataDJ";


const FeedDetail = () => {
  const [isItemDetailOpened, setIsItemDetailOpened] = useState(false);
  const [isArchitectureImageZoomed, setIsArchitectureImageZoomed] =
    useState(false);
  const [isArchitectureImageHover, setIsArchitectureImageHover] =
    useState(false);
  const [isDemoImageZoomed, setIsDemoImageZoomed] = useState(false);
  const [isDemoImageHover, setIsDemoImageHover] = useState(false);

  const handleCloseBtn = () => {
    document.body.style.overflowY = "auto"; // 디테일 페이지에서 클릭했을 때에도, 스크롤 생기게 하기
    setIsItemDetailOpened(false);
  };

  interface filteredSortedData {
    id: number;
    image: string;
    title: string;
    stacks: string[];
    serviceDesc: string;
    demoVideo_2: string;
    category: string;
    fsd_smallcategory: string;
    projectName: string;
    fsd_mediumcategory: string;
    repository: string;
    projectDocuments: string;
    startDate: string;
    endDate: string;
    demoGIF: string;
    archtectureImg: string;
  }

  const handleArchitectureImage = () => {
    setIsArchitectureImageZoomed(!isArchitectureImageZoomed);
  };

  const handleDemoImage = () => {
    setIsDemoImageZoomed(!isDemoImageZoomed);
  };

  const filteredSortedData: filteredSortedData[] = [
    {
      id: 1,
      projectName: "STO project",
      stacks: ["Next.js", "Typescript", "Tailwind"],
      serviceDesc:
        "누구나 쉽게 부동산을 소유할 수 있는 부동산 조각투자 서비스로써, 부동산 자산을 불록체인 토큰화 하여 분양 받고, 매매 할 수 있는 STO 거래 플랫폼",
      demoGIF: "admin_realestate_subscriptoin_enrollSTOBtn.gif",
      archtectureImg: "memaidToExcali",
      image: "image1.jpg",
      title: "gooe",
      repository: "www",
      projectDocuments: "www",
      demoVideo_2: "video1.mp4",
      category: "feature",
      fsd_smallcategory: "small category",
      fsd_mediumcategory: "project",
      startDate: "24.01.01",
      endDate: "24.02.01",
    },
    {
      id: 2,
      projectName: "STO project",
      stacks: ["Node.js", "React.js"],
      serviceDesc: " ",
      demoGIF: "admin_realestate_subscriptoin_enrollSTOBtn.gif",
      archtectureImg: "memaidToExcali",
      image: "image2.jpg",
      title: "gooe",
      repository: "www",
      projectDocuments: "www",
      demoVideo_2: "video2.mp4",
      category: "feature",
      fsd_smallcategory: "small category",
      fsd_mediumcategory: "project",
      startDate: "2024-01-01",
      endDate: "2024-02-01",
    },
    {
      id: 3,
      projectName: "STO project",
      stacks: ["Node.js", "React.js"],
      serviceDesc: " ",
      demoGIF: "admin_realestate_subscriptoin_enrollSTOBtn.gif",
      archtectureImg: "memaidToExcali",
      image: "image2.jpg",
      title: "gooe",
      repository: "www",
      projectDocuments: "www",
      demoVideo_2: "video2.mp4",
      category: "feature",
      fsd_smallcategory: "small category",
      fsd_mediumcategory: "project",
      startDate: "2024-01-01",
      endDate: "2024-02-01",
    },
    {
      id: 4,
      projectName: "STO project",
      stacks: ["Node.js", "React.js"],
      serviceDesc: " ",
      demoGIF: "admin_realestate_subscriptoin_enrollSTOBtn.gif",
      archtectureImg: "memaidToExcali",
      image: "image2.jpg",
      title: "gooe",
      repository: "www",
      projectDocuments: "www",
      demoVideo_2: "video2.mp4",
      category: "feature",
      fsd_smallcategory: "small category",
      fsd_mediumcategory: "project",
      startDate: "startDate",
      endDate: "endDate",
    },
    {
      id: 5,
      projectName: "STO project",
      stacks: ["Node.js", "React.js"],
      serviceDesc: " ",
      demoGIF: "admin_realestate_subscriptoin_enrollSTOBtn.gif",
      archtectureImg: "memaidToExcali",
      image: "image2.jpg",
      title: "gooe",
      repository: "www",
      projectDocuments: "www",
      demoVideo_2: "video2.mp4",
      category: "feature",
      fsd_smallcategory: "small category",
      fsd_mediumcategory: "project",
      startDate: "startDate",
      endDate: "endDate",
    },
    // { id: 6, image: 'image2.jpg', demoVideo_2: 'video2.mp4' , category : "feature" , fsd_smallcategory : 'small category', fsd_mediumcategory : 'project' , startDate : 'startDate' , endDate : 'endDate'},
    // { id: 7, image: 'image2.jpg', demoVideo_2: 'video2.mp4' , category : "feature" , fsd_smallcategory : 'small category', fsd_mediumcategory : 'project' , startDate : 'startDate' , endDate : 'endDate'},
  ];


  return (
    <>
      <section>
        <article className="fixed inset-0 z-50 flex items-center justify-end w-full h-10 bg-black/80 mix-blend-normal">
          <button className="mb-1 mr-2" onClick={handleCloseBtn}>
            <IconCancelItemDetail />
          </button>
        </article>

        <div className="fixed inset-0 z-50 flex flex-col w-full h-full overflow-y-auto transition-opacity duration-300 ease-in-out bg-white inset-y-9">
          {<HeaderProfile title={filteredSortedData[0].projectName} />}

          {/* 💪 mx-auto 하면 이제 가운데로 오긴 하는데, flex 를 써서 깔끔하게 오게 하고 싶긴 함  */}
          <main className="w-full bg-[neutral-50] max-w-[1200px] mx-auto rounded-[64px] p-10">
            <section className="w-full ">
              {/* 사진 */}

              <article className=" x-full flex flex-row justify-normal gap-[24px]">
                {filteredSortedData && filteredSortedData[0].archtectureImg && (
                  <figure
                    onClick={() => handleArchitectureImage()}
                    onMouseEnter={() => setIsArchitectureImageHover(true)}
                    onMouseLeave={() => setIsArchitectureImageHover(false)}
                    className="relative cursor-pointer shadow w-[400px] h-[450px]  bg-no-repeat bg-cover rounded-[40px]"
                  >
                    <Image
                      fill
                      alt="architecture image"
                      className="rounded-[40px]"
                      src={`/img/memaidToExcali.png`}
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

                    <figure
                      // style={{
                      //   backgroundImage: `url(http://localhost:7070/getImg/${filteredSortedData[0].image})`,
                      // }}
                      // onClick={() => handleDemoImage()}

                      className="relative w-full  max-w-[90%] max-h-[90%] h-full z-50 bg-no-repeat bg-cover bg-center shadow cursor-pointer"
                    >
                      <Image
                        fill
                        alt="architecture image"
                        className="rounded-[40px] object-none w-full h-full"
                        src={`/img/memaidToExcali.png`}
                      />
                    </figure>
                  </div>
                )}

                {filteredSortedData && filteredSortedData[0].image && (
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
                <div className="relative flex flex-col flex-wrap gap-[20px] h-full w-[80%]">

                  <article className="flex ">
                    <BadgeIcon desc={filteredSortedData[0].endDate} />
                    <BadgeIconText desc={"project"} />
                  </article>
                  
                  <ProjectName
                      projectName={filteredSortedData[0].projectName}
                  />
                  <Stacks stacks={filteredSortedData[0].stacks} />
                  
                  <ServiceDesc
                    serviceDesc={filteredSortedData[0].serviceDesc}
                  />
                  <Team />
                  <Role />
                  <MainFeature />
                  <TechTask />
                  <Communication />
                  
                  <Deliverable />
                  
                
                </div>

                {/* 오른쪽 | ✅ padding 용임!*/}
                  <Information_ver2 />

                {/* <Information
                  projectName={filteredSortedData[0].projectName}
                  startDatePart={filteredSortedData[0].startDate}
                  endDatePart={filteredSortedData[0].endDate}
                  projectGit={filteredSortedData[0].repository}
                  projectGhantt={filteredSortedData[0].projectDocuments}
                /> */}
              </article>


            </section>

            <ProfileSection />

          </main>
        </div>
      </section>
    </>
  );
};

export default FeedDetail;
