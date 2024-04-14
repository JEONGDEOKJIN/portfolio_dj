import DivTableRow_2Row from "@/components/elements/DivTableRow_2Row";
import DivTableRow_3Row from "@/components/elements/DivTableRow_3Row";
import React from "react";

const TechTask = () => {
  return (
    <>
      <div className="mt-[16px]">
        <h5 className="text-[20px] leading-[1.6em]  ">
          <strong>주요 기술 과제</strong>
        </h5>

        <article>
          <DivTableRow_2Row
            criteriaDesc_1="[FE] 데이터 바인딩 및 인터랙션 UI 구현"
            criteriaDesc_2="렌더링은 주로 static site generation을 사용"
            criteriaDesc_3="searchPara ms 사용하여 모달창 구현 dynamic routes 통해 동적 라우팅 구현"
          />
        </article>
        <article>
          <DivTableRow_3Row
            criteriaDesc_1="[FE] 데이터 시각화"
            criteriaDesc_2="Chartjs 의 custom tooltip content 활용하여 디자인 커스텀 한 후 시각화"
            criteriaDesc_3=""
          />
        </article>
        <article>
          <DivTableRow_3Row
            criteriaDesc_1="[FE] 퍼블리싱"
            criteriaDesc_2="figma 로 제작된 UI를 Tailwind 를 사용하여 컴포넌트 제작 grid template 사용하여 레이아웃 제작"
            criteriaDesc_3=""
          />
        </article>
        <article>
          <DivTableRow_3Row
            criteriaDesc_1="[FE] UI 와이어프레임"
            criteriaDesc_2="협약 기업의 니즈를 반영하여 figma 로 와이어프레임 제작"
            criteriaDesc_3=""
          />
        </article>
      </div>
    </>
  );
};

export default TechTask;
