import React from 'react'
import MarqueeItem from "@/components/elements/MarqueeItem";
import Marquee from 'react-fast-marquee';


const MarqueeUI = () => {


      {/* 모든게 다 gif 도 아님. 그냥, 사진 UI 도 있음! GIF 는 총 3개 정도 그랬을 때, 이목을 더 끄는 것 같음 
        흑백과 컬러의 조합도 있고
    */}


  return (
    <>
          <Marquee speed={30}>
            {/* <Marquee speed={60}> */}
            <div className="flex flex-row  w-full">
              <MarqueeItem
                desc_1={"STO Project"}
                desc_2={"admin UI"}
                stack_1={"Next.js"}
                stack_2={"TailwindCSS"}
                stack_3={"TypeScript"}
                cssFilters={"sepia"}
              />

              <MarqueeItem
                desc_1={"STO Project"}
                desc_2={"admin UI"}
                stack_1={"Next.js"}
                stack_2={"TailwindCSS"}
                stack_3={"TypeScript"}
                cssFilters={"sepia"}
              />

              <MarqueeItem
                desc_1={"Monami Project"}
                desc_2={"CRUD"}
                stack_1={"Node.js"}
                stack_2={"Javascript"}
                // stack_3 ={""}
                // cssFilters = {"grayscale"}
              />

              <MarqueeItem
                desc_1={"Monami Project"}
                desc_2={"CRUD"}
                stack_1={"Node.js"}
                stack_2={"Javascript"}
                // stack_3 ={""}
                // cssFilters = {"grayscale"}
              />

              <MarqueeItem
                desc_1={"Nobroker Project"}
                desc_2={"map UI"}
                stack_1={"React.js"}
                stack_2={"React-query"}
                // stack_3 ={""}
                cssFilters={"grayscale"}
              />

              <MarqueeItem
                desc_1={"Monami Project"}
                desc_2={"CRUD"}
                stack_1={"Node.js"}
                stack_2={"Javascript"}
                // stack_3 ={""}
                // cssFilters = {"grayscale"}
              />

              <MarqueeItem
                desc_1={"WesAnderson Project"}
                desc_2={"responsive UI"}
                stack_1={"Javascript"}
                stack_2={"CSS"}
                // stack_3 ={""}
                // cssFilters = {"grayscale"}
              />

              <MarqueeItem
                desc_1={"Unreal Project"}
                desc_2={"부여 미디어 페스티벌 출품"}
                stack_1={"Unreal"}
                stack_2={"StableDiffusion"}
                // stack_3 ={""}
                // cssFilters = {"grayscale"}
              />
            </div>
          </Marquee>
    </>
  )
}

export default MarqueeUI