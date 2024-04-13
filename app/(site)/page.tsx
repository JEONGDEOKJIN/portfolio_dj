import RandomButton from "@/components/elements/RandomButton";
import HomeFeed from "@/components/ui/HomeFeed";
import MarqueeUI from "@/components/ui/MarqueeUI";
import { sleep } from "@/lib/utils";

export default async function Home() {

  await sleep(2000); // 5초 동안 기다렸다가 실행해라

  return (
    <>
      {/* <main className="tablet:h-[560px] tablet:max-w-[560px] flex flex-col justify-evenly items-center "> */}
      <main className="w-full h-full flex flex-col justify-evenly items-center gap-[72px] pt-[80px] ">
        
        <section className="tablet:h-[560px] tablet:max-w-[560px]   flex flex-col justify-evenly items-center gap-[28px]">
          <div className=" animate-bgColor-cycle rounded-full px-[15px] py-[8px] text-[14px] font-[600]">
            Over 3 million ready-to-work creatives!
          </div>

          <h1 className="text-6xl font-semibold tracking-tight text-center leading-[70px] font-sans4 w-full">
            Explore projects and skills <br></br> to discover DJ
          </h1>

          <h2 className="text-base tablet:max-w-[565px] mx-6 font-[500] text-[18px] text-stone-700	leading-2 text-center	">
            고객의 FAQ에 담긴 pain point 를 UX 기반의 Front engineering 으로 풀어내겠습니다. <br></br>
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
          <h1 className="text-[48px] font-[400] tracking-tight text-center">
            Explore inspiring designs
          </h1>
          
          <article className="w-full h-full">
            <HomeFeed />
          </article>

        </section>


      </main>
    </>
  );
}
