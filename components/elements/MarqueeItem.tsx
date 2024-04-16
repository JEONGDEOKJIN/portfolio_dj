import React from "react";
import Image from "next/image";

const MarqueeItem = ({
  desc_1,
  desc_2,
  stack_1,
  stack_2,
  stack_3,
  cssFilters,
  imgHref,
}: any) => {
  return (
    <>
      <section className="relative  bg-blue-300 ml-10 w-[273px] h-[340px]  rounded-[24px] ">
        {/* Image 부모에 relative 필수⭐  */}
        <figure className={`relative ${cssFilters} top-0 h-full  w-full`}>
          <Image
            fill
            alt="marquee item"
            className="rounded-[24px] object-cover" // object-cover 를 넣어야 사진이 왜곡없이 꽉참
            src={`/marquee/${imgHref}`}
          />
          <div className="w-full h-full bg-gray-800 rounded-[24px] saturate-50 opacity-65 absolute top-0"></div>
        </figure>

        <article className="absolute bottom-4 left-4 text-white text-[13px] flex gap-1 flex-col ">
          <div className="flex flex-col flex-wrap w-full h-full gap-1 text-[13px] font-[500]">
            <p>{desc_1}</p>
            <p>{desc_2}</p>
          </div>

          <div className="flex w-full flex-row gap-2 text-[12px] font-[400]">
            <div className="border-[1px] border-neutral-50/30 rounded-full px-[8px] py-[4px]">
              
              {stack_1}
            </div>
            <div className="border-[1px] border-neutral-50/30 rounded-full px-[8px] py-[4px]">
              
              {stack_2}
            </div>
            {/* <div className='border-[1px] border-neutral-50/30 rounded-full px-[8px] py-[4px]'> {stack_3} </div> */}
          </div>
        </article>
      </section>
    </>
  );
};

export default MarqueeItem;
