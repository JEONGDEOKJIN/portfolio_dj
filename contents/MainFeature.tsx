import DivTableRow_4Row from "@/components/elements/DivTableRow_4Row";
import DivTableRow_5Row from "@/components/elements/DivTableRow_5Row";
import Image from "next/image";
import React from "react";
import { dummyProjectSTO } from "@/lib/DummyDataDJ";

const MainFeature = () => {
  const [...projectSTO] = dummyProjectSTO;

  return (
    <>
      <div className="mt-[16px] w-full h-full">
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
              src={"/gif/admin_realestate_subscriptoin_enrollSTOBtn.gif"}
            />
          </figure>

          <div className=" marginTopGlobalCSS">
            <article className="mt-5">
              <DivTableRow_4Row
                criteriaDesc_1="STO 토큰 발행"
                criteriaDesc_2="[어드민] 유저가 소유하고 있는 부동산을 DB에 등록하고, 관리자의 승인을 받으면, STO 토큰으로 등록될 수 있음"
                criteriaDesc_3=""
              />
            </article>
            <article>
              <DivTableRow_5Row
                criteriaDesc_1="STO 토큰 청약"
                criteriaDesc_2="[일반 유저] 부동산 소유주가 등록한 부동산을 n개의 토큰으로 분할하고, 이를 청약하는 기능. 공모일까지 00 개의 청약을 완료하면 100% 청약 달성"
                criteriaDesc_3=""
              />
            </article>
            <article>
              <DivTableRow_5Row
                criteriaDesc_1="STO 토큰 거래"
                criteriaDesc_2="[일반 유저] 청약 완료 된 후, 사용자 마켓 페이지에서 거래를 진행할 수 있음. 현재 시가, 최근 7일 간의 시세 등을 반영하여 의사결정할 수 있음"
                criteriaDesc_3=""
              />
            </article>
            <article>
              <DivTableRow_5Row
                criteriaDesc_1="투표"
                criteriaDesc_2="[어드민 및 일반 유저] 해당 토큰을 갖고 있는 유저가 안건을 제시하고, 어드민이 그 중 일부에 대한 안건을 투표로 상정하여, 해당 부동산에 대한 의사결정을 투표를 통해 결정함"
                criteriaDesc_3=""
              />
            </article>
            <article>
              <DivTableRow_5Row
                criteriaDesc_1="어드민 게시판"
                criteriaDesc_2="[어드민]사용자, 청약, 거래, 게시글에 대한 정보를 조회할 수 있고, 투표 등록, 게시글 등록, 블랙리스트 유저 등록, 매물 등록, 청약 등록 등의 기능"
                criteriaDesc_3=""
              />
            </article>
            <article>
              <DivTableRow_5Row
                criteriaDesc_1="어드민 대시보드"
                criteriaDesc_2="[어드민] 최근 7일간의 매출, 공모금액, 거래금액, 회원가입수, 블랙리스트 유저, 최근 거래 등에 대한 확인 "
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
