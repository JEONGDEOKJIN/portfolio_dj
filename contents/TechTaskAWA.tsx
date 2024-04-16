import DivTableRow_2Row from "@/components/elements/DivTableRow_2Row";
import DivTableRow_3Row from "@/components/elements/DivTableRow_3Row";
import React from "react";

const TechTaskAWA = () => {
  return (
    <>
      <div className="mt-[16px]">
        <h5 className="text-[20px] leading-[1.6em]  ">
          <strong>주요 기술 과제</strong>
        </h5>

      <div className="marginTopGlobalCSS">
        <article>
        <article>
          <DivTableRow_2Row
            criteriaDesc_1="[FE] 퍼블리싱 및 인터랙션 디자인"
            criteriaDesc_2="메인 페이지 UI/UX 디자인"
            criteriaDesc_3=""
          />
        <article>
          <DivTableRow_3Row
            criteriaDesc_1=""
            criteriaDesc_2="메인 페이지 onclick 속성 활용하여 목차 및 드롭다운 기능 구현"
            criteriaDesc_3=""
          />
        </article>
        </article>
          <DivTableRow_3Row
            criteriaDesc_1=""
            criteriaDesc_2="메인 페이지 css transition 활용하여 애니메이션 구현"
            criteriaDesc_3=""
          />
        </article>
        <article>
          <DivTableRow_3Row
            criteriaDesc_1=""
            criteriaDesc_2="메인 페이지 바닐라 javascript 활용하여 swiper 기능 구현"
            criteriaDesc_3=""
          />
        </article>
        <article>
          <DivTableRow_3Row
            criteriaDesc_1=""
            criteriaDesc_2="medeia query 활용 데스크톱 및 모바일 기기에서 사용 가능한 웹앱 반응형 사이트 구현"
            criteriaDesc_3=""
          />
        </article>
        </div>
      </div>
    </>
  );
};

export default TechTaskAWA;
