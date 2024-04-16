"use client";

import React from "react";
import SVGExternalLink from "../elements/SVGExternalLink";
import SVGCalendar from "../elements/SVGCalendar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { dummyProjectSTO } from "@/lib/DummyDataDJ";

interface Item {
  id: number;
  thumbnail: string;
  profile: string;
  href: string;
  projectDesc: string;
  projectName: string;
  startNendDate: string;
}

const HomeFeed = () => {
  const [isHovered, setIsHovered] = React.useState<number | null>(null);
  const router = useRouter();
  // const [...projectSTO] = dummyProjectSTO

  const filteredSortedData: Item[] = [
    {
      id: 1,
      thumbnail:
        "/projects/sto/demo/admin_realestate_subscriptoin_enrollSTOBtn.gif",
      profile: "/projects/sto/archi_thumbnail.png",
      href: "/projects/sto",
      projectDesc: "부동산 STO 토큰 발행, 청약, 거래 플랫폼",
      projectName: "STO Project",
      startNendDate: "23.11.01 - 23.12.01",
    },
    {
      id: 2,
      thumbnail: "/projects/nobroker/demo/nobroker_estateList.gif",
      profile: "/projects/nobroker/demo/nobroker_estateList.gif",
      href: "/projects/nobroker",
      projectName: "Nobroker Project",
      projectDesc: "블록체인 기반 탈중앙화 부동산 거래 플랫폼",
      startNendDate: "23.07.01 - 23.08.01",
    },
    {
      id: 3,
      thumbnail: "/projects/monami/demo/monami_boardList.gif",
      profile: "/projects/monami/features/monami_board.JPG",
      href: "/projects/monamis",
      projectName: "그림 일심동체 Project",
      projectDesc: "'엥? 이게 그거라고?' 원초적인 재미를 느낄 수 있는 프로젝트",
      startNendDate: "23.06.01 - 23.06.30",
    },
    {
      id: 4,
      thumbnail: "/projects/AWA/demo/wesAndersonMain.gif",
      profile: "/projects/AWA/features/WesMain.jpg",
      href: "/projects/wesAnderson",
      projectDesc: "'웨스 앤더슨의 미학' 모아놓은 AWA 클론 프로젝트 ",
      projectName: "Accidently WesAnderson Project",
      startNendDate: "24.04.01 - 24.04.30",
    },

    // {
    //   id: 5,
    //   thumbnail:
    //     "/projects/sto/demo/admin_realestate_subscriptoin_enrollSTOBtn.gif",
    //   profile: "/projects/sto/archi_thumbnail.png",
    //   href: "/projects/sto",
    //   projectDesc: "✅작성중",
    //   projectName: "✅작성중",
    //   startNendDate: "24.01.01 - 24.02.01",
    // },
    // {
    //   id: 6,
    //   thumbnail:
    //     "/projects/sto/demo/admin_realestate_subscriptoin_enrollSTOBtn.gif",
    //   profile: "/projects/sto/archi_thumbnail.png",
    //   href: "/projects/sto",
    //   projectDesc: "✅작성중",
    //   projectName: "✅작성중",
    //   startNendDate: "24.01.01 - 24.02.01",
    // },
  ];

  const handleCardItem = (href: string) => {
    router.push(href);
  };

  return (
    <>
      <div className="w-full h-full">
        <ul className="flex flex-col items-center justify-center cardListGridContainer w-full h-full px-[72px] ">
          {/* <ul className="flex flex-col items-center justify-center w-full px-[72px]"> */}
          {filteredSortedData.map((item, index): any => {
            return (
              <li
                key={index}
                className="flex flex-col justify-center cursor-pointer"
                onClick={() => handleCardItem(item.href)}
              >
                <figure
                  // className="relative h-[200px]  bg-cover w-[315px]  bg-no-repeat  rounded-lg hover:scale-105 transition-all duration-500 ease-in-out"
                  className="relative pb-[65%] bg-cover bg-no-repeat  rounded-[24px] hover:scale-105 transition-all duration-500 ease-in-out"
                  onMouseEnter={() => setIsHovered(index)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <Image
                    fill
                    // objectFit="contain"
                    style={{ objectFit: "cover" }}
                    alt="home feed item"
                    className="object-cover rounded-[24px]"
                    src={item.thumbnail}
                  />

                  {/* 호버 했을 때 보이는 것  */}
                  {isHovered === index ? (
                    <div className="absolute flex items-end justify-between w-full h-full p-3 rounded-lg bg-gradient-to-b from-neutral-900/10 to-neutral-900/90">
                      <span className="mb-3 mr-4 text-lg font-medium  text-gray-100  w-[80%]  truncate">
                        {item.projectDesc}
                      </span>

                      <div className="mb-2">
                        <div className="ml-auto flex items-center justify-center p-2 text-[12px] font-semibold text-gray-700 rounded-full bg-gray-50 shrink-0 border-[1.5px] border-gray-200">
                          <SVGExternalLink />
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </figure>

                {/* description 부분 */}
                <div className="flex items-center justify-between py-2  w-full font-medium text-stone-900 ">
                  <div className="flex items-center  w-[75%]">
                    <figure className="relative w-6 h-6 bg-top bg-no-repeat bg-cover rounded-full">
                      <Image
                        fill
                        alt="home feed item"
                        className="object-cover rounded-full"
                        src={item.profile}
                      />
                    </figure>

                    <span className="ml-2 text-sm font-medium text-gray-900 truncate ">
                      {item.projectName}
                    </span>
                  </div>

                  <div className="flex  items-center justify-end ml-2  w-[35%]  ">
                    <SVGCalendar />
                    <span className="ml-[2px] mt-[2px] text-xs text-gray-600 truncate  hover:text-gray-800">
                      {item.startNendDate}
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default HomeFeed;
