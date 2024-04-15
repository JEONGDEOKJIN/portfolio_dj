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

        <article className="flex flex-col border-neutral-200    ">
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

          <div className=" marginTopGlobalCSS ">
            <article className="mt-5">
              <DivTableRow_4Row
                criteriaDesc_1="Admin 페이지"
                criteriaDesc_2="가입한 회원의 등급 관리. 건물주의 경우 실명인증 및 자격요건 검토를 통해 정식 판매업자로 등록"
                criteriaDesc_3=""
              />
            </article>
            <article>
              <DivTableRow_5Row
                criteriaDesc_1="매물 리스트"
                criteriaDesc_2="DB에서 거래 가능한 매물 데이터를 응답받아, Google map api 활용하여 검색, 필터, 분류, 클러스터링, ZOOM 기능 제공 "
                criteriaDesc_3=""
              />
            </article>
            <article>
              <DivTableRow_5Row
                criteriaDesc_1="매물 등록"
                criteriaDesc_2="주소, 사용자 정보, 부동산 정보 등을 입력하여 졍식 매물로 인정받는 절차. kakao map 연동하여 미리보기 제공"
                criteriaDesc_3=""
              />
            </article>
            <article>
              <DivTableRow_5Row
                criteriaDesc_1="투표"
                criteriaDesc_2="사용자들이 해당 매물이 허위인지를 구분하는 투표를 진행. 투표 진행시 허위매물로 신고되면 해당 건물주는 판매자 자격 박탈"
                criteriaDesc_3=""
              />
            </article>
            <article>
              <DivTableRow_5Row
                criteriaDesc_1="매물 상세"
                criteriaDesc_2="해당 매물의 사진, 정보를 한 눈에 파악할 수 있는 페이지, 댓글 기능 및 거래 신청 가능"
                criteriaDesc_3=""
              />
            </article>
            <article>
              <DivTableRow_5Row
                criteriaDesc_1="마이 페이지"
                criteriaDesc_2="회원 정보, 매물 등록 및 거래 내역을 확인할 수 있는 페이지"
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
