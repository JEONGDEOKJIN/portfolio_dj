import React from "react";
import Image from "next/image";

const SkillSets = () => {
  return (
    <>
      <section className="w-full h-full">
        <article className=" w-full skillset text-black flex gap-5 flex-col  ">
          <figure className="relative w-full h-[100px]">
            <Image
              fill
              alt="Skill Desc image"
              className="rounded-[40px] object-cover w-full h-full"
              src="/testImage.webp"
            />
          </figure>

          <div className="skillsetDescWrapper flex flex-col items-center w-full">
            <h3 className="text-[24px] font-[400] shrink-0 ">Javascript</h3>

            <div className="flex flex-col gap-2 items-start">
              <p className="text-[16px] ">
                Promise, then/catch/finally, async/await, 활용하여 비동기 처리
                가능
              </p>
              <p className="text-[16px] ">
                JS로 useEffect, 클래스형 컴포넌트 구현 경험
              </p>
            </div>
          </div>
        </article>
      </section>

      {/* <div>
        <h3>Typescript</h3>
        <div>interface 를 이용한 기본적인 type 설정</div>
        <div>JS로 useEffect, 클래스형 컴포넌트 구현 경험 </div>
      </div>
      <div>
        <h3>React.js</h3>
        <div>
          클라이언트 데이터 캐싱으로 Recoil, zustand 라이브러리 활용하여 전역
          상태 관리 경험
        </div>
        <div>서버 데이터 캐싱으로 ReactQuery 사용하여 전역 상태 관리 경험</div>
      </div>

      <div>
        <h3>Next.js</h3>
        <div>
          페이지 특성별 TTV 와 TTI 지표의 중요성 파악 후, SSR, SSG, Incremental,
          streaming 방식 선택 하여 렌더링 적용 경험{" "}
        </div>
        <div>useParams, searchParams 사용하여 동적 라우팅 사용 경험</div>
      </div>

      <div>
        <h3>CSS in JS 및 CSS 라이브러리</h3>
        <div>tailwind 및 styled-component, emotion 사용 경험</div>
        <div>shadcn 사용하여 UI 라이브러리 사용 경험</div>
      </div>

      <div>
        <h3>Figma</h3>
        <div>auto layout 기능 등을 활용한 UI 기획 경험</div>
        <div>사용자 니즈 반영한 UX 기획 경험</div>
      </div>

      <div>
        <h3>Solidity</h3>
        <div>ERC721, ERC20 활용한 NFT 발행 경험</div>
        <div>뭔가 채용공고, JD 보고 적어야 하나</div>
      </div>

      <div>
        <h3>Node.js</h3>
        <div>
          서버 : express | typeORM : sequelize | DB : MYSQL, POSTGRES | 를
          다뤄서 백엔드 환경 구축 경험{" "}
        </div>
        <div></div>
      </div>

      <div>
        <h3>Express.js</h3>
        <div>
          API 명세를 바탕으로 Frontend를 위한 백엔드 express 서버 구현 경험
        </div>
        <div>API 명세를 바탕으로 게시판 CRUD 구현 경험</div>
      </div>

      <div>
        <h3>AWS EC2 활용하여 프로젝트 배포 경험</h3>
        <div>GIT : git 활용하여 버전관리 및 프로젝트 관리</div>
        <div>Unreal : 블루프린트 활용한 3D 애셋 제작 및 레벨 디자인</div>
        <div>Photoshop : 선택툴, 블렌드 모드 등을 활용한 이미지 제작</div>
      </div> */}
    </>
  );
};

export default SkillSets;
