import React from "react";
import { dummyProjectSTO } from "@/lib/DummyDataDJ";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const CarouselArchitecture = () => {
  const [...ProjectSTO] = dummyProjectSTO;
  // console.log("projectName", ProjectSTO[0].projectName); // 🔵 정상적으로 나옴, 첫번째 배열이 그대로 잘 나오기
  // console.log("projectName", ProjectSTO[0].architectureImageHref); // 🔵 정상적으로 나옴, 첫번째 배열이 그대로 잘 나오기

  return (
    <article className="text-[100px] z-20 text-white w-full h-full  flex items-center justify-center">
      <Carousel className="w-full max-w-[70%]  ">
        <CarouselContent>
          {ProjectSTO[0].architectureImageHref.map((item, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="bg-transparent border-none">
                  <CardContent className="flex aspect-video  items-center justify-center p-6 ">
                    <figure className="relative w-full  max-w-[90%] max-h-[90%] h-full z-50 bg-no-repeat bg-cover bg-center shadow cursor-pointer">
                      <Image
                        fill
                        alt="architecture image"
                        className="rounded-[40px] object-cover w-full h-full"
                        src={`${item.href}`}
                      />
                    </figure>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </article>
  );
};

export default CarouselArchitecture;
