import React from "react";

import EmblaCarousel from "./EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";

const EmblaCarouselTest = () => {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <div>
      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
};

export default EmblaCarouselTest;
