import DivTableRow_4Row from "@/components/elements/DivTableRow_4Row";
import DivTableRow_5Row from "@/components/elements/DivTableRow_5Row";
import Image from "next/image";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { dummyProjectSTO } from "@/lib/DummyDataDJ";

const MainFeature = () => {
  const [...projectSTO] = dummyProjectSTO;

  return (
    <>
      <div className="mt-[16px] w-full h-full">
        <h5 className="text-[20px] leading-[1.6em]  ">
          <strong>주요 기능 및 UI</strong>
        </h5>

        <article className="flex flex-col border-neutral-200   ">
          {/* <figure className="relative w-[870px] h-[450px]"> */}
          <article className="relative  text-white w-full h-full mainfeatureMargin flex items-center justify-center">
            <Carousel className="w-full max-w-[80%]  ">
              <CarouselContent>
                {projectSTO[0].mainFeatureUI.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="">
                      <Card className="bg-transparent border-none">
                        <CardContent className="flex aspect-video  items-center justify-center">
                          <figure className="relative w-full rounded-[40px] max-w-[90%] max-h-[90%] h-full z-10 bg-no-repeat bg-center shadow cursor-pointer">
                            <Image
                              fill
                              alt="architecture image"
                              className="rounded-[40px]"
                              objectFit="contain"
                              src={`${item.href}`}
                            />

                            <span className="absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 px-4 font-[600] py-2 rounded-full  mainfeatureDesc">
                              {item.desc}
                            </span>
                          </figure>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </article>
          {/* </figure> */}

          <div className=" marginTopGlobalCSS">
            <article className="mt-5">
              <DivTableRow_4Row
                criteriaDesc_1="STO 토큰 발행"
                criteriaDesc_2="[Admin] 유저가 소유하고 있는 부동산을 DB에 등록하고, 관리자의 승인을 받으면, STO 토큰으로 등록될 수 있음"
                criteriaDesc_3=""
              />
            </article>
            <article>
              <DivTableRow_5Row
                criteriaDesc_1="STO 토큰 청약"
                criteriaDesc_2="[User] 부동산 소유주가 등록한 부동산을 n개의 토큰으로 분할하고, 이를 청약하는 기능. 공모일까지 00 개의 청약을 완료하면 100% 청약 달성"
                criteriaDesc_3=""
              />
            </article>
            <article>
              <DivTableRow_5Row
                criteriaDesc_1="STO 토큰 거래"
                criteriaDesc_2="[User] 청약 완료 된 후, 사용자 마켓 페이지에서 거래를 진행할 수 있음. 현재 시가, 최근 7일 간의 시세 등을 반영하여 의사결정할 수 있음"
                criteriaDesc_3=""
              />
            </article>
            <article>
              <DivTableRow_5Row
                criteriaDesc_1="투표"
                criteriaDesc_2="[Admin 및 User] 해당 토큰을 갖고 있는 유저가 안건을 제시하고, Admin이 그 중 일부에 대한 안건을 투표로 상정하여, 해당 부동산에 대한 의사결정을 투표를 통해 결정함"
                criteriaDesc_3=""
              />
            </article>
            <article>
              <DivTableRow_5Row
                criteriaDesc_1="Admin 게시판"
                criteriaDesc_2="[Admin] 사용자, 청약, 거래, 게시글에 대한 정보를 조회할 수 있고, 투표 등록, 게시글 등록, 블랙리스트 유저 등록, 매물 등록, 청약 등록 등의 기능"
                criteriaDesc_3=""
              />
            </article>
            <article>
              <DivTableRow_5Row
                criteriaDesc_1="Admin 대시보드"
                criteriaDesc_2="[Admin] 최근 7일간의 매출, 공모금액, 거래금액, 회원가입수, 블랙리스트 유저, 최근 거래 등에 대한 확인 "
                criteriaDesc_3=""
              />
            </article>
          </div>
        </article>
      </div>
    </>
  );
};

export default MainFeature;
