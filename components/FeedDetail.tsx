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
      startDate: "2024-01-01",
      endDate: "2024-02-01",
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
            <article className="w-full ">
              {/* 사진 */}
              <div className=" x-full flex flex-row justify-normal gap-[24px]">
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
              </div>

              <div className="shadow flex flex-row  gap-[80px] px-10 rounded-[64px] mt-[24px] py-10 bg-[#f9f9f9] w-full ">
                {/* 왼쪽 */}
                <div className="flex flex-col flex-wrap  gap-[24px] min-w-[60%] ">
                  <div className="flex ">
                    <span className="bg-[#1c5eff1a] w-fit text-[#1c5eff] px-[14px] py-[6px] rounded-[50px] text-[13px]">
                      {filteredSortedData && filteredSortedData[0].endDate}
                    </span>

                    <span className="bg-[#28466c] w-fit text-neutral-50 px-[14px] py-[6px] rounded-[50px] text-[13px] ml-2">
                      project
                    </span>
                  </div>

                  <div>
                    <h2 className="text-[48px] font-semibold leading-[1.1em]  text-left	">
                      {filteredSortedData[0] &&
                        filteredSortedData[0].projectName}
                    </h2>

                    {/* stack 각각을 , 로 구분해서 넣어주면 -> 각 요소를 , 기준으로 배열로 만들어서 -> map 돌릴 수 있음. */}
                    <span className="flex items-center mt-[1.1em] ml-[-6px]">
                      {filteredSortedData[0] &&
                        filteredSortedData[0].stacks &&
                        filteredSortedData[0].stacks.map(
                          (item: any, index: any) => {
                            return (
                              <span
                                key={index}
                                className="bg-[#2b593f] font-light text-neutral-50 px-[8px] py-[4px] rounded-[50px] text-[12px] ml-2"
                              >
                                {item.trim()}
                              </span>
                            );
                          }
                        )}
                    </span>
                  </div>

                  <div className="text-[20px] leading-[1.6em] mt-[16px]  w-[100%]">
                    <h5 className="">
                      <strong>서비스 소개</strong>
                    </h5>
                    <p className="leading-[1.7em]  shrink-0 text-[15px] font-normal text-left mt-[15px]  	">
                      {/* {filteredSortedData[0] && filteredSortedData[0].summary} */}
                      {filteredSortedData[0] &&
                        filteredSortedData[0].serviceDesc}
                    </p>
                  </div>

                  <div className="mt-[16px]">
                    <h5 className="text-[20px] leading-[1.6em]  ">
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

                  <div className="mt-[16px]">
                    <h5 className="text-[20px] leading-[1.6em] w-full">
                      <strong>역할</strong>
                    </h5>
                    <span className="ml-2">
                      Admin 페이지 제작(Frontend) & 프로젝트 UI/UX 기획
                    </span>
                  </div>

                  <div className="mt-[16px]">
                    <h5 className="text-[20px] leading-[1.6em]  ">
                      <strong>주요 기능</strong>
                    </h5>
                    <article className="flex flex-col  border-neutral-200 mt-[15px]">
                      <figure className="relative w-[870px] h-[450px]">
                      {/* <figure className="relative w-[450px] h-[450px]/"> */}
                        <Image
                          alt="ui"
                          fill
                          className="rounded-[24px] object-cover"
                          src={
                            "/gif/admin_realestate_subscriptoin_enrollSTOBtn.gif"
                          }
                        />
                      </figure>
                      
                      <article className="mt-5">
                          <DivTableRow_4Row
                            criteriaDesc_1 = "STO 토큰 발행"
                            criteriaDesc_2 = "[어드민] 유저가 소유하고 있는 부동산을 DB에 등록하고, 관리자의 승인을 받으면, STO 토큰으로 등록될 수 있음"
                            criteriaDesc_3 = ""
                          />
                    </article>
                    <article>
                          <DivTableRow_5Row
                            criteriaDesc_1 = "STO 토큰 청약"
                            criteriaDesc_2 = "[일반 유저] 부동산 소유주가 등록한 부동산을 n개의 토큰으로 분할하고, 이를 청약하는 기능. 공모일까지 00 개의 청약을 완료하면 100% 청약 달성"
                            criteriaDesc_3 = ""
                          />
                    </article>
                    <article>
                          <DivTableRow_5Row
                            criteriaDesc_1 = "STO 토큰 거래"
                            criteriaDesc_2 = "[일반 유저] 청약 완료 된 후, 사용자 마켓 페이지에서 거래를 진행할 수 있음. 현재 시가, 최근 7일 간의 시세 등을 반영하여 의사결정할 수 있음"
                            criteriaDesc_3 = ""
                          />
                    </article>
                    <article>
                          <DivTableRow_5Row
                            criteriaDesc_1 = "투표"
                            criteriaDesc_2 = "[어드민 및 일반 유저] 해당 토큰을 갖고 있는 유저가 안건을 제시하고, 어드민이 그 중 일부에 대한 안건을 투표로 상정하여, 해당 부동산에 대한 의사결정을 투표를 통해 결정함"
                            criteriaDesc_3 = ""
                          />
                    </article>
                    <article>
                          <DivTableRow_5Row
                            criteriaDesc_1 = "어드민 게시판"
                            criteriaDesc_2 = "[어드민]사용자, 청약, 거래, 게시글에 대한 정보를 조회할 수 있고, 투표 등록, 게시글 등록, 블랙리스트 유저 등록, 매물 등록, 청약 등록 등의 기능"
                            criteriaDesc_3 = ""
                          />
                    </article>
                    <article>
                          <DivTableRow_5Row
                            criteriaDesc_1 = "어드민 대시보드"
                            criteriaDesc_2 = "[어드민] 최근 7일간의 매출, 공모금액, 거래금액, 회원가입수, 블랙리스트 유저, 최근 거래 등에 대한 확인 "
                            criteriaDesc_3 = ""
                          />
                    </article>
                      

                    
                    </article>

                    
                  </div>

                  <div className="mt-[16px]">
                    <h5 className="text-[20px] leading-[1.6em]  ">
                      <strong>주요 기술 과제</strong>
                    </h5>

                    <article>
                          <DivTableRow_2Row
                            criteriaDesc_1 = "[FE] 데이터 바인딩 및 인터랙션 UI 구현"
                            criteriaDesc_2 = "렌더링은 주로 static site generation을 사용"
                            criteriaDesc_3 = "searchPara ms 사용하여 모달창 구현 dynamic routes 통해 동적 라우팅 구현"
                          />
                    </article>
                    <article>
                          <DivTableRow_3Row
                            criteriaDesc_1 = "[FE] 데이터 시각화"
                            criteriaDesc_2 = "Chartjs 의 custom tooltip content 활용하여 디자인 커스텀 한 후 시각화"
                            criteriaDesc_3 = ""
                          />
                    </article>
                    <article>
                          <DivTableRow_3Row
                            criteriaDesc_1 = "[FE] 퍼블리싱"
                            criteriaDesc_2 = "figma 로 제작된 UI를 Tailwind 를 사용하여 컴포넌트 제작 grid template 사용하여 레이아웃 제작"
                            criteriaDesc_3 = ""
                          />
                    </article>
                    <article>
                          <DivTableRow_3Row
                            criteriaDesc_1 = "[FE] UI 와이어프레임"
                            criteriaDesc_2 = "협약 기업의 니즈를 반영하여 figma 로 와이어프레임 제작"
                            criteriaDesc_3 = ""
                          />
                    </article>
                  </div>

                  <div className="mt-[16px]">
                    <h5 className="text-[20px] leading-[1.6em]  ">
                      <strong>
                        협업방식 
                      </strong>
                    </h5>
                  
                    <article>
                          <DivTableRow_4Row
                            criteriaDesc_1 = "프로젝트 관리"
                            criteriaDesc_2 = "노션 이슈트래킹, 칸반보드, 간트차트, 스프린트 등의 기능을 적극 활용하여 프로젝트 관리"
                            criteriaDesc_3 = ""
                          />
                    </article>
                    <article>
                          <DivTableRow_5Row
                            criteriaDesc_1 = "버전 관리"
                            criteriaDesc_2 = "Release branch, Dev branch 및 페이지별 branch  운영을 통해 체계적인 버전관리"
                            criteriaDesc_3 = ""
                          />
                    </article>


                  </div>

                  <div className="mt-[16px]">
                    <h5 className="text-[20px] leading-[1.6em]  ">
                      <strong>
                        산출물 (✅ 이건 오른쪽에 있는 INFO 박스로 대체하거나
                        해보자){" "}
                      </strong>
                    </h5>
                  </div>
                </div>

                {/* 오른쪽 */}
                <div className="shadow w-[30%] shrink-0 rounded-[32px] bg-white  p-8 flex gap-[12px] h-fit flex-col">
                  <h5 className="text-[20px] font-normal"> Information </h5>

                  <div className="flex justify-between">
                    <span className="text-gray-600 text-[14px]">Project</span>
                    <span className="text-[14px]">
                      {/* {projectNames[filteredSortedData[0].projectName]} */}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-600 text-[14px]">Date</span>
                    <span className="text-[14px]">
                      {(() => {
                        const startDatePart = filteredSortedData[0].startDate
                          .split("T")[0]
                          .split("-");
                        const endDatePart = filteredSortedData[0].endDate
                          .split("T")[0]
                          .split("-");
                        return `${startDatePart[0].slice(2, 4)}.${
                          startDatePart[1]
                        }.${startDatePart[2]}-${startDatePart[0].slice(2, 4)}.${
                          endDatePart[1]
                        }.${endDatePart[2]}`;
                      })()}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <a
                      className="text-[14px]  "
                      href={filteredSortedData[0].repository}
                    >
                      <span className="text-gray-600 text-[14px]">
                        프로젝트 깃 주소
                      </span>
                      <span className="text-[14px] flex  ">
                        {filteredSortedData[0].repository}
                      </span>
                    </a>
                  </div>

                  <div className="flex justify-between">
                    <a
                      className="text-[14px] "
                      href={filteredSortedData[0].projectDocuments}
                    >
                      <span className="text-gray-600 text-[14px]">
                        프로젝트 일지
                      </span>
                      <span className="text-[14px] flex ">
                        {filteredSortedData[0].projectDocuments}
                      </span>
                    </a>
                  </div>

                  <div className="flex justify-between">
                    <a
                      className="text-[14px] "
                      href="https://deokjin.gitbook.io/dj/"
                    >
                      <span className="text-gray-600 text-[14px]">
                        개발 공부 블로그
                      </span>
                      <span className="text-[14px] flex ">
                        https://deokjin.gitbook.io/dj
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
              </div>
            </article>

            <ProfileSection />
          </main>
        </div>
      </section>
    </>
  );
};

export default FeedDetail;
