import React, { useState } from "react";
import IconCancelItemDetail from '@/components/ui/IconCancelItemDetail'
import HeaderProfile from "./HeaderProfile";
import IconCancelZoomImage from "./elements/IconCancelZoomImage";
import ProfileSection from "./ProfileSection";
import Image from "next/image";


const FeedDetail = () => {
  const [isItemDetailOpened, setIsItemDetailOpened] = useState(false);
  const [isArchitectureImageZoomed, setIsArchitectureImageZoomed] = useState(false);
  const [isArchitectureImageHover, setIsArchitectureImageHover] = useState(false);
  const [isDemoImageZoomed, setIsDemoImageZoomed] = useState(false);
  const [isDemoImageHover,setIsDemoImageHover] = useState(false);


  const handleCloseBtn = () => {
    document.body.style.overflowY = "auto"; // 디테일 페이지에서 클릭했을 때에도, 스크롤 생기게 하기
    setIsItemDetailOpened(false);
  };

  interface filteredSortedData {
    id: number;
    image: string;
    title : string;
    stacks : string;
    demoVideo_2: string;
    category : string;
    fsd_smallcategory : string;
    projectName: string;
    fsd_mediumcategory : string;
    repository : string
    projectDocuments : string
    startDate : string
    endDate : string
    demoGIF : string
    archtectureImg : string
  }

  const handleArchitectureImage = () => {
    setIsArchitectureImageZoomed(!isArchitectureImageZoomed);
  };


  const handleDemoImage = () => {
    setIsDemoImageZoomed(!isDemoImageZoomed);
  };

  const filteredSortedData : filteredSortedData[] = [
    { id: 1, projectName: 'STO project', demoGIF : 'admin_realestate_subscriptoin_enrollSTOBtn.gif', archtectureImg : 'memaidToExcali' , image: 'image1.jpg', title : 'gooe',  repository : 'www' , projectDocuments : 'www' , stacks : 'node.js' , demoVideo_2: 'video1.mp4' , category : "feature" , fsd_smallcategory : 'small category', fsd_mediumcategory : 'project' , startDate : '2024-01-01' , endDate : '2024-02-01'},
    { id: 2, projectName: 'STO project', demoGIF : 'admin_realestate_subscriptoin_enrollSTOBtn.gif', archtectureImg : 'memaidToExcali' , image: 'image2.jpg', title : 'gooe',  repository : 'www' , projectDocuments : 'www' , stacks : 'node.js' , demoVideo_2: 'video2.mp4' , category : "feature" , fsd_smallcategory : 'small category', fsd_mediumcategory : 'project' , startDate : '2024-01-01' , endDate : '2024-02-01'},
    { id: 3, projectName: 'STO project', demoGIF : 'admin_realestate_subscriptoin_enrollSTOBtn.gif', archtectureImg : 'memaidToExcali' , image: 'image2.jpg', title : 'gooe',  repository : 'www' , projectDocuments : 'www' , stacks : 'node.js' , demoVideo_2: 'video2.mp4' , category : "feature" , fsd_smallcategory : 'small category', fsd_mediumcategory : 'project' , startDate : '2024-01-01' , endDate : '2024-02-01'},
    { id: 4, projectName: 'STO project', demoGIF : 'admin_realestate_subscriptoin_enrollSTOBtn.gif', archtectureImg : 'memaidToExcali' , image: 'image2.jpg', title : 'gooe',  repository : 'www' , projectDocuments : 'www' , stacks : 'node.js' , demoVideo_2: 'video2.mp4' , category : "feature" , fsd_smallcategory : 'small category', fsd_mediumcategory : 'project' , startDate : 'startDate' , endDate : 'endDate'},
    { id: 5, projectName: 'STO project', demoGIF : 'admin_realestate_subscriptoin_enrollSTOBtn.gif', archtectureImg : 'memaidToExcali' , image: 'image2.jpg', title : 'gooe',  repository : 'www' , projectDocuments : 'www' , stacks : 'node.js' , demoVideo_2: 'video2.mp4' , category : "feature" , fsd_smallcategory : 'small category', fsd_mediumcategory : 'project' , startDate : 'startDate' , endDate : 'endDate'},
    // { id: 6, image: 'image2.jpg', demoVideo_2: 'video2.mp4' , category : "feature" , fsd_smallcategory : 'small category', fsd_mediumcategory : 'project' , startDate : 'startDate' , endDate : 'endDate'},
    // { id: 7, image: 'image2.jpg', demoVideo_2: 'video2.mp4' , category : "feature" , fsd_smallcategory : 'small category', fsd_mediumcategory : 'project' , startDate : 'startDate' , endDate : 'endDate'},
  ]


  return (
    <>
      <section>
        
        <article className="fixed inset-0 z-50 flex items-center justify-end w-full h-10 bg-black/80 mix-blend-normal">
          <button className="mb-1 mr-2" onClick={handleCloseBtn}>
            <IconCancelItemDetail />
          </button>
        </article>

        <div
            className="fixed inset-0 z-50 flex flex-col w-full h-full overflow-y-auto transition-opacity duration-300 ease-in-out bg-white inset-y-9"
          >
            {<HeaderProfile title={filteredSortedData[0].projectName} />}

            {/* 💪 mx-auto 하면 이제 가운데로 오긴 하는데, flex 를 써서 깔끔하게 오게 하고 싶긴 함  */}
            <main className="w-full bg-[neutral-50] max-w-[1200px] mx-auto rounded-[64px] p-10">
              <article className="w-full ">
                {/* 사진 */}
                <div className=" x-full flex flex-row justify-normal gap-[24px]">
                  {filteredSortedData &&
                    filteredSortedData[0].archtectureImg && (
                      <figure
                        // style={{
                        //   backgroundImage: `url(http://localhost:7070/getImg/${filteredSortedData[0].image})`,
                        // }}
                        onClick={() => handleArchitectureImage()}
                        onMouseEnter={() => setIsArchitectureImageHover(true)}
                        onMouseLeave={() => setIsArchitectureImageHover(false)}
                        className="relative cursor-pointer shadow w-[400px] h-[450px]  bg-no-repeat bg-cover rounded-[40px]"
                      >
                        <Image 
                          fill
                          alt ="architecture image"
                          className="rounded-[40px]"
                          src={`/img/memaidToExcali.png`}
                        />

                        {isArchitectureImageHover && (
                          <div className="absolute inset-0 flex flex-col items-center justify-center w-full y-full bg-gradient-to-b rounded-[40px] from-black/50 to-black/50">
                            <p className="font-medium text-[20px] text-neutral-50 border-[1px] p-2 rounded-[5px] ">
                              아키텍처
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
                          alt ="architecture image"
                          className="rounded-[40px] object-none w-full h-full"
                          src={`/img/memaidToExcali.png`}
                        />
                      </figure>
                    </div>
                  )}

                  {filteredSortedData &&
                    filteredSortedData[0].image && (
                      <figure
                        // gif 할 때의 버전
                        // style={{
                        //   backgroundImage: `url(http://localhost:7070/getImg/${filteredSortedData.demoVideo_1})`,
                        // }}
                        onClick={() => handleDemoImage()}
                        onMouseEnter={() => setIsDemoImageHover(true)}
                        onMouseLeave={() => setIsDemoImageHover(false)}
                        className="cursor-pointer shadow relative rounded-[40px] w-full h-[450px]  bg-no-repeat bg-cover"
                      >
                        <video
                          className="object-cover w-full h-full"
                          src={`http://localhost:7070/getImg/${filteredSortedData[0].image}`}
                          autoPlay
                          loop
                          muted
                        ></video>
                        {isDemoImageHover && (
                          <div className="absolute inset-0 flex flex-col items-center justify-center w-full y-full bg-black/50 rounded-[40px]">
                            <p className="font-medium text-[20px] text-neutral-50 border-[1px] p-2 rounded-[5px] ">
                              시연 동영상
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

                      <figure
                        // style={{
                        //   backgroundImage: `url(http://localhost:7070/getImg/${filteredSortedData.demoVideo_1})`,
                        // }}
                        // onClick={() => handleDemoImage()}

                        className="w-full  max-w-[90%] max-h-[90%] h-full z-50 bg-no-repeat bg-contain bg-center shadow cursor-pointer"
                      >
                        <video
                          className="object-cover w-full h-full"
                          src={`http://localhost:7070/getImg/${filteredSortedData[0].image}`}
                          autoPlay
                          loop
                          muted
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
                        {filteredSortedData &&
                          filteredSortedData[0].endDate &&
                          filteredSortedData[0].endDate.split("T")[0]}
                      </span>

                      {filteredSortedData[0] &&
                      filteredSortedData[0].category &&
                      filteredSortedData[0].category === "project" ? (
                        <span className="bg-[#28466c] w-fit text-neutral-50 px-[14px] py-[6px] rounded-[50px] text-[13px] ml-2">
                          project
                        </span>
                      ) : (
                        <span className="bg-[#603b2b] w-fit text-neutral-50 px-[14px] py-[6px] rounded-[50px] text-[13px] ml-2">
                          feature
                        </span>
                      )}
                    </div>

                    <div>
                      <h2 className="text-[48px] font-semibold leading-[1.1em]  text-left	">
                        {filteredSortedData[0] && filteredSortedData[0].title}
                      </h2>

                      {/* stack 각각을 , 로 구분해서 넣어주면 -> 각 요소를 , 기준으로 배열로 만들어서 -> map 돌릴 수 있음. */}
                      <span className="flex items-center mt-[1.1em] ml-[-6px]">
                        {filteredSortedData[0] &&
                          filteredSortedData[0].stacks &&
                          filteredSortedData[0].stacks
                            .split(",")
                            .map((item : any, index : any)  => {
                              return (
                                <span
                                  key={index}
                                  className="bg-[#2b593f] font-light text-neutral-50 px-[8px] py-[4px] rounded-[50px] text-[12px] ml-2"
                                >
                                  {item.trim()}
                                </span>
                              );
                            })}
                      </span>
                    </div>

                    <div className="text-[20px] leading-[1.6em] mt-[16px]  w-[100%]">
                      <h5 className="">
                        <strong>서비스 소개</strong>
                      </h5>
                      <p className="leading-[1.7em]  shrink-0 text-[15px] font-normal text-left mt-[15px]  	">
                        {/* {filteredSortedData[0] && filteredSortedData[0].summary} */}
                        누구나 쉽게 부동산을 소유할 수 있는 부동산 조각투자 서비스로써, 부동산 자산을 불록체인 토큰화 하여 분양 받고, 매매 할 수 있는 STO 거래 플랫폼
                      </p>
                    </div>

                    <div className="mt-[16px]">
                      <h5 className="text-[20px] leading-[1.6em]  ">
                        <strong>팀 구성 (✅ 점핏 이력서 목차에 따름) </strong>
                      </h5>

                      {/* {filteredSortedData[0] && (
                        <DivTable
                          indexOfItemDetail={indexOfItemDetail}
                          metaData={metaData}
                          // selectedfeatureID={filteredSortedData[0].featureID}
                          fsd_largecategory={
                            filteredSortedData[0].fsd_largecategory
                          }
                          fsd_mediumcategory={
                            filteredSortedData[0].fsd_mediumcategory
                          }
                          fsd_smallcategory={
                            filteredSortedData[0].fsd_smallcategory
                          }
                        />
                      )} */}

                      <div></div>
                    </div>

                    <div className="mt-[16px]">
                      <h5 className="text-[20px] leading-[1.6em]  ">
                        <strong>역할 (✅ 점핏 이력서 목차 및 노션 wiki 에 적은 플젝 소개 목차 에 따름) </strong>
                      </h5>


                    </div>

                    <div className="mt-[16px]">
                      <h5 className="text-[20px] leading-[1.6em]  ">
                        <strong>주요기능 (✅ 점핏 이력서 목차 및 노션 wiki 에 적은 플젝 소개 목차 에 따름) </strong>
                      </h5>
                      - UI 보여주고 
                      - 테이블로 어떤 페이지 인지 설명
                    </div>

                    <div className="mt-[16px]">
                      <h5 className="text-[20px] leading-[1.6em]  ">
                        <strong>주요기술과제 (✅ 점핏 이력서 목차 및 노션 wiki 에 적은 플젝 소개 목차 에 따름) </strong>
                      </h5>
                      - 위에서 역할이랑 겹칠 수도 있지 않을까? 아직 잘 모르겠네...                        
                    </div>
                    
                    <div className="mt-[16px]">
                      <h5 className="text-[20px] leading-[1.6em]  ">
                        <strong>협업방식 (✅ 점핏 이력서 목차 및 노션 wiki 에 적은 플젝 소개 목차 에 따름) </strong>
                      </h5>

                    </div>
                    
                    <div className="mt-[16px]">
                      <h5 className="text-[20px] leading-[1.6em]  ">
                        <strong>산출물 (✅ 이건 오른쪽에 있는 INFO 박스로 대체하거나 해보자) </strong>
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
                          }.${startDatePart[2]}-${startDatePart[0].slice(
                            2,
                            4
                          )}.${endDatePart[1]}.${endDatePart[2]}`;
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
