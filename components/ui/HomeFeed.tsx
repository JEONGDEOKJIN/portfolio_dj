"use client"

import React from 'react'
import SVGExternalLink from '../elements/SVGExternalLink'
import SVGCalendar from '../elements/SVGCalendar'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

interface Item {
    id: number;
    image: string;
    href : string;
    demoVideo_2: string;
    category : string;
    fsd_smallcategory : string;
    fsd_mediumcategory : string;
    startDate : string
    endDate : string
  }

const HomeFeed = () => {
    const [isHovered, setIsHovered] = React.useState<number | null>(null)
    const router = useRouter()

    const filteredSortedData : Item[] = [
      { id: 1,  href : '/projects/sto', image: 'image1.jpg', demoVideo_2: 'video1.mp4' , category : "feature" , fsd_smallcategory : 'small category', fsd_mediumcategory : 'project' , startDate : '2024-01-01' , endDate : '2024-02-01'},
      { id: 2,  href : '/projects/nobroker', image: 'image2.jpg', demoVideo_2: 'video2.mp4' , category : "feature" , fsd_smallcategory : 'small category', fsd_mediumcategory : 'project' , startDate : '2024-01-01' , endDate : '2024-02-01'},
      { id: 3,  href : '/projects/monami', image: 'image2.jpg', demoVideo_2: 'video2.mp4' , category : "feature" , fsd_smallcategory : 'small category', fsd_mediumcategory : 'project' , startDate : '2024-01-01' , endDate : '2024-02-01'},
      { id: 4,  href : '/projects/wesAnderson', image: 'image2.jpg', demoVideo_2: 'video2.mp4' , category : "feature" , fsd_smallcategory : 'small category', fsd_mediumcategory : 'project' , startDate : 'startDate' , endDate : 'endDate'},
      { id: 5,  href : '/projects/unrealBuyeo', image: 'image2.jpg', demoVideo_2: 'video2.mp4' , category : "feature" , fsd_smallcategory : 'small category', fsd_mediumcategory : 'project' , startDate : 'startDate' , endDate : 'endDate'},
      { id: 6,  href : '/projects/unrealVenus', image: 'image2.jpg', demoVideo_2: 'video2.mp4' , category : "feature" , fsd_smallcategory : 'small category', fsd_mediumcategory : 'project' , startDate : 'startDate' , endDate : 'endDate'},
      ]

    const handleCardItem = (href : string) => {
      router.push(href)
    }

  return (
    <>
    <div className='w-full h-full'>

      <ul className="flex flex-col items-center justify-center cardListGridContainer w-full h-full px-[72px] ">
      {/* <ul className="flex flex-col items-center justify-center w-full px-[72px]"> */}
        {filteredSortedData.map((item, index) : any => {
          return (
            <li
              key={index}
              className="flex flex-col justify-center cursor-pointer"
              onClick={() => handleCardItem(item.href)}
            >
              <figure
                // className="relative h-[200px]  bg-cover w-[315px]  bg-no-repeat  rounded-lg hover:scale-105 transition-all duration-500 ease-in-out"
                className="relative pb-[65%] bg-cover bg-no-repeat  rounded-lg hover:scale-105 transition-all duration-500 ease-in-out"
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <Image
                  fill
                  alt="home feed item"
                  className="object-cover rounded-lg"
                  src={`/img/daldam music - 밥.jpeg`}
                />

                {/* 호버 했을 때 보이는 것  */}
                {isHovered === index ? (
                  <div className="absolute flex items-end justify-between w-full h-full p-3 rounded-lg bg-gradient-to-b from-gray-50/5 to-gray-600/50">
                    <span className="mb-3 mr-4 text-base font-normal text-gray-100 w-[80%]  truncate">
                      {item.fsd_mediumcategory}
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
                  <figure
                    className="relative w-6 h-6 bg-top bg-no-repeat bg-cover rounded-full"
                  >
                    <Image
                      fill
                      alt="home feed item"
                      className="object-cover rounded-full"
                      src={`/img/daldam music - 밥.jpeg`}
                    />
                  </figure>

                  <span className="ml-2 text-sm font-medium text-gray-900 truncate ">
                    {item.fsd_smallcategory}
                  </span>
                </div>

                <div className="flex  items-center justify-end ml-2  w-[35%]  ">
                  <SVGCalendar />
                  <span className="ml-[2px] mt-[2px] text-xs text-gray-600 truncate  hover:text-gray-800">
                    {item.endDate}
                  </span>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      </div>

    </>
  )
}

export default HomeFeed