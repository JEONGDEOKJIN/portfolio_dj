import RandomButton from "@/components/elements/RandomButton";
import HomeFeed from "@/components/ui/HomeFeed";
import MarqueeUI from "@/components/ui/MarqueeUI";
import SkillSets from "@/contents/SkillSets";
import { sleep } from "@/lib/utils";

export default async function Home() {
  // await sleep(2000); // 5초 동안 기다렸다가 실행해라

  return (
    <>
      {/* <main className="tablet:h-[560px] tablet:max-w-[560px] flex flex-col justify-evenly items-center "> */}
      <main className="w-full h-full flex flex-col justify-evenly items-center gap-[72px] pt-[80px] ">
        <section className="tablet:h-[560px] tablet:max-w-[560px]   flex flex-col justify-evenly items-center gap-[28px]">
          <div className=" animate-bgColor-cycle rounded-full px-[15px] py-[8px] text-[14px] font-[600]">
            {/* Over 3 million ready-to-work creatives! */}
            Ready-to-work frontend development!
            {/* 고객 없이, 개발 없다! */}
          </div>

          <h1 className="text-6xl font-semibold tracking-tight text-center leading-[70px] font-sans4 w-full">
            Explore projects and skills <br></br> to discover DJ
          </h1>

          <h2 className="text-base tablet:max-w-[565px] mx-6 font-[500] text-[18px] text-stone-700	leading-2 text-center	">
            고객의 FAQ에 담긴 pain point 를 UX 기반의 Front engineering 으로
            풀어내겠습니다. <br></br>
            안녕하세요! 프론트엔드 개발자 정덕진 입니다.
            <br></br>
          </h2>

          <section>
            <RandomButton desc={"Get start🔥"} />
          </section>
        </section>

        <section className="w-full">
          <MarqueeUI />
        </section>

        <section className="w-full h-full flex flex-col gap-[48px] mt-[42px]">
          <article className="flex flex-col items-center gap-3">
            <h1 className="text-[48px] font-[500] tracking-tight text-center">
              Explore inspiring projects
            </h1>
            <p className="text-center w-[30%] ">
              비즈니스 임팩트를 낼 수 있는 개발자가 되기 위해  <br></br>
              한걸음씩 성장중 입니다.
              {/* From day one, you’ll be part of a lively community of tutors,
              mentors and fellow students that support each other along the way. */}
            </p>
          </article>

          <article className="w-full h-full">
            <HomeFeed />
          </article>
        </section>

        <div className="flex flex-col gap-10 mt-[50px]">
          <article className="flex flex-col items-center gap-3">
            <h1 className="text-[48px] font-[500] tracking-tight text-center">
              Skills
            </h1>
            <p className="text-center w-[50%]">
              효율적 & 효과적인 프론트엔드 개발로<br></br>
              고객 전환율(convention rate) 제고에 기여할 수 있는 개발자가 되겠습니다.
            </p>
          </article>

          <div className="w-full h-full flex flex-col gap-5">
            <div className="w-full flex items-center justify-center ">
              <div className="w-full h-full flex items-start gap-5 justify-center  max-w-[1200px] ">
                <SkillSets
                  stackImageHref="next.js"
                  stackName="Next.js"
                  desc_1="Promise, then/catch/finally, async/await, 활용하여 비동기 처리 가능"
                  desc_2="JS로 useEffect, 클래스형 컴포넌트 구현 경험"
                />

                <SkillSets
                  stackImageHref="typescript"
                  stackName="Typescript"
                  desc_1="interface 를 이용한 기본적인 type 설정"
                  desc_2="types 디렉토리 별도 관리하여 타입 정의 경험"
                />
                <SkillSets
                  stackImageHref="javascript"
                  stackName="Javascript"
                  desc_1="Promise, then/catch/finally, async/await, 활용하여 비동기 처리 가능"
                  desc_2="실행 컨텍스트, 이벤트 루프, 클로저, 호이스팅, 콜백함수 등에 대한 이해"
                />
              </div>
            </div>
            <div className="w-full flex items-center justify-center ">
              <div className="w-full h-full flex items-start gap-5 justify-center max-w-[1200px] ">
                <SkillSets
                  stackImageHref="react.js"
                  stackName="React.js"
                  desc_1="Recoil, zustand, React-query 활용하여 클라이언트 및 백엔드 데이터 전역상태 관리 경험"
                  desc_2="axios interceptor 활용한 API 요청, 응답 처리 커스텀 훅 제작 경험"
                />

                <SkillSets
                  stackImageHref="CSS_library"
                  stackName="CSS 라이브러리"
                  desc_1="tailwind 및 styled-component, emotion 경험"
                  desc_2="shadcn 라이브러리 carousel 등 사용 경험"
                />

                <SkillSets
                  stackImageHref="BFF"
                  stackName="Backend for Frontend"
                  desc_1="API 명세를 바탕으로 Frontend를 위한 백엔드 express 서버로 CRUD 구현 경험"
                  desc_2="서버 : express | ORM : sequelize | DB : MYSQL, POSTGRES 사용 경험"
                />
              </div>
            </div>
            <div className="w-full flex items-center justify-center ">
              <div className="w-full h-full flex items-start center gap-5 justify-center max-w-[1200px] ">
                <SkillSets
                  stackImageHref="designSystem"
                  stackName="디자인 시스템"
                  desc_1="아토믹 디자인 패턴에 대한 이해를 바탕으로 컴포넌트 제작(예정)"
                  desc_2="storybook : 재활용성 높은 컴포넌트 제작(예정)"
                  desc_3="Figma : UI/UX Flowchart 제작 경험"
                />

                <SkillSets
                  stackImageHref="deploy"
                  stackName="배포"
                  desc_1="vercel 로 클라이언트 배포 경험"
                  desc_2="AWS EC2 활용하여 리액트 프로젝트 배포 경험"
                />
                {/*         
                    <div>Photoshop : 선택툴, 블렌드 모드 등을 활용한 이미지 제작</div>
                    <h3>Figma</h3>
                    <div>auto layout 기능 등을 활용한 UI 기획 경험</div>
                    <div>사용자 니즈 반영한 UX 기획 경험</div>
                 */}

                {/* <SkillSets
                  stackImageHref="TDD"
                  stackName="TEST 환경 구축"
                  desc_1="테스트 환경 구축(예정)"
                  desc_2=""
                /> */}

                <SkillSets
                  stackImageHref="ETC"
                  stackName="ETC"
                  desc_1="Unreal : 블루프린트 활용한 3D 애셋 제작 및 레벨 디자인"
                  desc_2="Solidity : ERC721, ERC20 활용한 NFT 발행 경험"
                  desc_3="TDD : 테스트 환경 구축 경험(예정)"
                />

              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
