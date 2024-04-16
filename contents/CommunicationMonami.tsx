import DivTableRow_4Row from "@/components/elements/DivTableRow_4Row";
import DivTableRow_5Row from "@/components/elements/DivTableRow_5Row";
import React from "react";

const CommunicationMonami = () => {
  return (
    <>
      <div className="mt-[16px]">
        <h5 className="text-[20px] leading-[1.6em]  ">
          <strong>협업방식</strong>
        </h5>

        <div className="marginTopGlobalCSS">
          <article>
            <DivTableRow_4Row
              criteriaDesc_1="프로젝트 관리"
              criteriaDesc_2="디스코드 및 트렐로 활용하여 이슈트래킹, 스케쥴 관리"
              criteriaDesc_3=""
            />
          </article>
          <article>
            <DivTableRow_5Row
              criteriaDesc_1="버전 관리"
              criteriaDesc_2="release branch, Dev branch 및 페이지별 branch  운영을 통해 체계적인 버전관리"
              criteriaDesc_3="git fork 및 pull request 를 통한 기능 통합"
            />
          </article>
        </div>
      </div>
    </>
  );
};

export default CommunicationMonami;
