import React from "react";
import { Carousel } from "antd";

const AntdCarousel = () => {
  const contentStyle: React.CSSProperties = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
    borderRadius: "20px", 
    
  };
  return (
    <div className="w-[500px] h-full ">
      <Carousel autoplay dots={false}>
        <div className="rounded-[20px]">
          <h3 style={contentStyle}>1</h3>
        </div>
        <div className="rounded-[20px]">
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  );
};

export default AntdCarousel;
