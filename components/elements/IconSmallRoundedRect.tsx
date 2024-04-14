import Image from "next/image";
import React from "react";

interface IconSmallRoundedRectProps {
  linkHref: string;
  imgSrc: string;
  desc: string;
  circleColor: string;
}

const IconSmallRoundedRect: React.FC<IconSmallRoundedRectProps> = ({
  linkHref,
  imgSrc,
  desc,
  circleColor,
}) => {
  return (
    <>
      <a
        href={linkHref}
        className="relative w-[120px] h-[120px] cursor-pointer transition-all ease-in-out group"
      >
        <div className="relative shrink-0 rounded-[24px] shadow-md w-[120px] h-[120px] ">
          <Image
            alt="Icon bg image"
            fill
            className="rounded-[24px] object-cover w-[120px]"
            src={imgSrc}
          />
        </div>
        <div className="group-hover:opacity-30 absolute inset-0 bg-neutral-800 opacity-65 w-full h-full rounded-[24px]"></div>
        <div
          className={`group-hover:animate-bgColor-cycle-fast  
          absolute left-1 bottom-1   text-white  border-neutral-300 rounded-full text-[13px] font-[600] py-2 px-2 shrink-0 flex items-center justify-center`}
        >
          {desc}
        </div>
      </a>
    </>
  );
};

export default IconSmallRoundedRect;
