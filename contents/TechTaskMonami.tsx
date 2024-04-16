import DivTableRow_2Row from "@/components/elements/DivTableRow_2Row";
import DivTableRow_3Row from "@/components/elements/DivTableRow_3Row";
import React from "react";

const TechTaskMonami = () => {
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
            criteriaDesc_1="[FE] 게시글 글쓰기 기능"
            criteriaDesc_2="form 태그에 게시글 작성 후 완료 버튼 누르면, POST 요청을 보내고 게시글 목록 페이지로 리디렉션 될 수 있게 구현"
            criteriaDesc_3=""
          />
        <article>
          <DivTableRow_3Row
            criteriaDesc_1="[FE&BE] 페이지네이션 기능"
            criteriaDesc_2="특정 페이지 클릭시, 해당 페이지의 데이터만 fetch 될 수 있게 구현"
            criteriaDesc_3=""
          />
        </article>
        </article>
          <DivTableRow_3Row
            criteriaDesc_1="[FE&BE] 게시판 목록 보여주기 기능"
            criteriaDesc_2="data fetch 된 후, useEffect 의 의존성 설정된 변수에 데이터가 업데이트되면 렌더링 될 수 있게 구현"
            criteriaDesc_3=""
          />
        </article>
        <article>
          <DivTableRow_3Row
            criteriaDesc_1="[FE&BE] 좋아요 기능 "
            criteriaDesc_2="해당 버튼 클릭시 '좋아요 테이블' 변경 후 '유저 및 게시글 테이블'에서 참조할 수 있게 구현"
            criteriaDesc_3=""
          />
        </article>
        <article>
          <DivTableRow_3Row
            criteriaDesc_1="[FE&BE] 태그 검색 및 추가 기능"
            criteriaDesc_2="sequelize 상에서 검색된 요청 데이터를 포함하는 데이터만 가공하여 전달"
            criteriaDesc_3=""
          />
        </article>
        <article>
          <DivTableRow_3Row
            criteriaDesc_1="[FE&BE] 정렬 (최신순, 조회수, likes 순)"
            criteriaDesc_2="sequelize 상에서 정렬된 데이터를 DB 에서 호출하여 프론트로 전달"
            criteriaDesc_3=""
          />
        </article>
        </div>
      </div>
    </>
  );
};

export default TechTaskMonami;
