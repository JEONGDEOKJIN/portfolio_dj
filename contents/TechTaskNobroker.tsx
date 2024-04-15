import DivTableRow_2Row from "@/components/elements/DivTableRow_2Row";
import DivTableRow_3Row from "@/components/elements/DivTableRow_3Row";
import React from "react";

const TechTaskNobroker = () => {
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
            criteriaDesc_1="[FE] google map API 활용하여 필요한 기능 구현 하기"
            criteriaDesc_2="- google map API 내의 Autocomplete 기능 사용하여 자동검색 및 마커 구현"
            criteriaDesc_3="- google map API 내의 MarkerCluster 기능 사용하여 개별 마커를 클러스터로 표현"
          />
        <article>
          <DivTableRow_3Row
            criteriaDesc_1="[FE] UI/UX 퍼블리싱"
            criteriaDesc_2="- styled-component 를 사용하여 벤치마킹 기업인 직방에서 제공하는 UX 포인트를 최대한 반영하기 위해 노력"
            criteriaDesc_3="- 지도 색상과 마커 색상을 커스텀하여 매물 정보를 한 눈에 파악할 수 있으면서, 공원, 학교 등의 주요 시설물 정보를 함께 제공할 수 있도록 설계"
          />
        </article>
        </article>
          <DivTableRow_3Row
            criteriaDesc_1="[FE&BE] 데이터 filter 및 sort 기능 구현"
            criteriaDesc_2="- 사용자가 filter 또는 sort를 통해 선택한 키워드를 React-query 로 캐시해둔 데이터에서 filter 하여 목록 렌더링"
            criteriaDesc_3="- 매물 목록이 변경되면 google map api 의 marker 관리 함수에 매개변수로 전달하여 지도 화면도 싱크를 맞춤"
          />
        </article>
        <article>
          <DivTableRow_3Row
            criteriaDesc_1="[FE&BE] 모든 유저 조회 기능(GET) 및 업자 등급 관리 기능(POST)"
            criteriaDesc_2="- '업자 승인' 버튼 클릭 시, BE 로 승인된 등급 POST 하고, 응답값을 상태변수에 저장하여 등급 UI 업데이트"
            criteriaDesc_3=""
          />
        </article>
        <article>
          <DivTableRow_3Row
            criteriaDesc_1="배포"
            criteriaDesc_2="- NGINX 등을 이용하여 AWS EC2 에 프로젝트 배포 과정 참여"
            criteriaDesc_3=""
          />
        </article>
        </div>
      </div>
    </>
  );
};

export default TechTaskNobroker;
