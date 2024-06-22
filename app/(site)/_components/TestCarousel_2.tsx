"use client";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function TestCarousel_2() {
  return (
    <Carousel
      // [autoplay] 자동 슬라이드 설정
      plugins={[
        Autoplay({
          delay: 1000, // n초마다 슬라이드
          jump : true, // 슬라이드 사이사이 쉬리릭 애니메이션 없애줌  
        }),
      ]}
      className="w-full max-w-xs"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem className="" key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
