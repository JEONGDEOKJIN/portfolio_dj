import MarqueeItem from "@/components/elements/MarqueeItem";
import RandomButton from "@/components/elements/RandomButton";
import { sleep } from "@/lib/utils";
import Image from "next/image";
import Marquee from "react-fast-marquee";


export default async function Home() {
  await sleep(2000); // 5초 동안 기다렸다가 실행해라

  return (
    <>
      <main className="tablet:h-[560px] tablet:max-w-[560px] flex flex-col justify-evenly items-center">
        {/* <div className="  bg-[#ffda79]  rounded-full px-[15px] py-[8px] text-[14px] font-[600]"> */}
        <div className=" animate-bgColor-cycle rounded-full px-[15px] py-[8px] text-[14px] font-[600]">
          Over 3 million ready-to-work creatives!
        </div>

        <h1 className="text-6xl font-semibold tracking-tight text-center leading-[70px] font-sans4">
          Discover skills and projects of DJ
        </h1>

        <h2 className="text-base tablet:max-w-[565px] mx-6  text-stone-700	leading-2 text-center	">
          안녕하세요! product 와 design 에 대한 논의를 좋아하고 <br></br>
          효율적인 기술로 좋은 잔상을 남기는 프론트엔드 개발자 정덕진 입니다.{" "}
          <br></br>
        </h2>

      <div>
        <RandomButton desc = {"Get start🔥"}/>
      </div>

      <div className="w-full">
        <Marquee speed={30}>
        {/* <Marquee speed={60}> */}
          <div className="flex flex-row  w-full">
            <MarqueeItem desc={"test1"} />
            <MarqueeItem desc={"test2"} />
            {/* <MarqueeItem desc={"test3"} /> */}
            {/* <MarqueeItem desc={"test6"} /> */}
            {/* <MarqueeItem desc={"test7"} /> */}
            {/* <MarqueeItem desc={"test8"} /> */}
            <MarqueeItem desc={"test9"} />
            <MarqueeItem desc={"test10"} />
            <MarqueeItem desc={"test1"} />

          </div>
        </Marquee>
      </div>

      </main>
    </>
  );
}
