import DivTableRow_4Row from "@/components/elements/DivTableRow_4Row";
import DivTableRow_5Row from "@/components/elements/DivTableRow_5Row";
import React from "react";

const CommunicationNobroker = () => {
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
              criteriaDesc_2="- 노션 및 트렐로의 활용하여 이슈트래킹, 스케쥴 관리"
              criteriaDesc_3=""
            />
          </article>
          <article>
            <DivTableRow_5Row
              criteriaDesc_1="버전 관리"
              criteriaDesc_2="- release branch, Dev branch 및 페이지별 branch  운영을 통해 체계적인 버전관리"
              criteriaDesc_3="- git fork 를 통하여 각자의 branch 에서 작업 후 병합"
            />
          </article>
        </div>
      </div>
    </>
  );
};

export default CommunicationNobroker;
