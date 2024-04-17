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
import { dummyMonamiProject } from "@/lib/DummyDataDJ";

const MainFeatureMonami = () => {
  const [...projectMonami] = dummyMonamiProject;

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
                {projectMonami[0].mainFeatureUI.map((item, index) => (
                  <CarouselItem key={index}>
                    <div className="">
                      <Card className="bg-transparent border-none">
                        <CardContent className="flex aspect-video  items-center justify-center">
                          <figure className="relative w-full rounded-[40px] max-w-[90%] max-h-[90%] h-full z-10 bg-no-repeat bg-center shadow cursor-pointer">
                            <Image
                              fill
                              alt="architecture image"
                              className="rounded-[40px]"
                              // objectFit="contain"
                              style={{ objectFit: "contain" }}
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
                criteriaDesc_1="게시판 페이지"
                criteriaDesc_2="글 조회, sort 기능(좋아요 순, 등록 순, 조회수 순) 검색 기능(태그 및 키워드 검색 기능), 페이지 네이션 기능"
                criteriaDesc_3=""
              />
            </article>
            <article>
              <DivTableRow_5Row
                criteriaDesc_1="상세 페이지"
                criteriaDesc_2="글 생성, 댓글 및 대댓글 기능, 좋아요 기능"
                criteriaDesc_3=""
              />
            </article>
            <article>
              <DivTableRow_5Row
                criteriaDesc_1="회원 가입"
                criteriaDesc_2="회원가입 및 로그인 기능"
                criteriaDesc_3=""
              />
            </article>
            <article>
              <DivTableRow_5Row
                criteriaDesc_1="그림 그리기"
                criteriaDesc_2="Socket 을 활용하여 다중 플레이어간 그림 및 텍스트 파일을 전송받을 수 있는 기능 "
                criteriaDesc_3=""
              />
            </article>
          </div>
        </article>
      </div>
    </>
  );
};

export default MainFeatureMonami;
