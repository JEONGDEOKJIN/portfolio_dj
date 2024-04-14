import Image from "next/image";
import React from "react";

const Deliverable = () => {
  return (
    <>
      <div className="relative mt-[16px] w-[800px] h-[500px] bg-blue-500  ">
        <h5 className="text-[20px] leading-[1.6em]  ">
          <strong>
            산출물
          </strong>
        </h5>

        <section className="flex flex-row gap-5 w-full ">
          <a
            href="https://dbdiagram.io/d/6541ab467d8bbd64653cf50b"
            className="relative w-[120px] h-[120px] cursor-pointer transition-all ease-in-out group"
          >
            <div className="relative shrink-0 rounded-[24px] shadow-md w-[120px] h-[120px] ">
              <Image
                alt="project git"
                fill
                className="rounded-[24px] object-cover w-[120px]"
                src="/img/ERD_example.png"
              />
            </div>
            <div className="group-hover:opacity-30 absolute inset-0 bg-neutral-800 opacity-10 w-full h-full rounded-[24px]"></div>
            <div className="group-hover:animate-bgColor-cycle-fast  absolute left-1 bottom-1 bg-[#f0c082]  text-white rounded-full text-[13px] font-[500] w-[36px] h-[36px] shrink-0 flex items-center justify-center">
              ERD
            </div>
          </a>


          {/* <article className="relative w-[120px] h-[120px]">
            <div className="relative  rounded-[24px] shadow-md w-full h-full ">
              <Image
                alt="project git"
                fill
                className="rounded-[24px] object-cover"
                src="/img/API_example.png"
              />
            </div>
            <div className="absolute inset-0 bg-neutral-800 opacity-10 w-full h-full rounded-[24px]"></div>
            <div className="absolute left-1 bottom-1 bg-[#6c6028e1]  text-white rounded-full text-[13px] font-[500] w-[36px] h-[36px] shrink-0 flex items-center justify-center">
              API
            </div>
          </article>

          <article className="relative w-[120px] h-[120px]">
            <div className="relative  rounded-[24px] shadow-md w-full h-full ">
              <Image
                alt="project git"
                fill
                className="rounded-[24px] object-cover"
                src="/img/archi_example.webp"
              />
            </div>
            <div className="absolute inset-0 bg-neutral-800 opacity-10 w-full h-full rounded-[24px]"></div>
            <div className="absolute left-1 bottom-1 bg-[#286c28]  text-white rounded-full text-[13px] font-[600] p-2 shrink-0 flex items-center justify-center">
              아키텍처
            </div>
          </article>

          <article className="relative w-[120px] h-[120px]">
            <div className="relative  rounded-[24px] shadow-md w-full h-full ">
              <Image
                alt="project git"
                fill
                className="rounded-[24px] object-cover"
                src="/img/UIUX_example.png"
              />
            </div>
            <div className="absolute inset-0 bg-neutral-800 opacity-10 w-full h-full rounded-[24px]"></div>
            <div className="absolute left-1 bottom-1 bg-[#28466c]  text-white rounded-full text-[13px] font-[600] p-2 shrink-0 flex items-center justify-center">
              UI/UX 기획
            </div>
          </article>

          <article className="relative w-[120px] h-[120px]">
            <div className="relative  rounded-[24px] shadow-md w-full h-full ">
              <Image
                alt="project git"
                fill
                className="rounded-[24px] object-cover"
                src="/img/requirement_example.JPG"
              />
            </div>
            <div className="absolute inset-0 bg-neutral-800 opacity-10 w-full h-full rounded-[24px]"></div>
            <div className="absolute left-1 bottom-1 bg-[#6c2831]  text-white rounded-full text-[13px] font-[600] p-2 shrink-0 flex items-center justify-center">
              요구사항 정의
            </div>
          </article>  */}
        </section>
      </div>
    </>
  );
};

export default Deliverable;
