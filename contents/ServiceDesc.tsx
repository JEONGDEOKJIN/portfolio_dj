import React from "react";

const ServiceDesc = ({serviceDesc} : any) => {
  return (
    <>
      <div className="text-[20px] leading-[1.6em] mt-[16px] widthServiceDescglabalCSS ">
        <h5 className="">
          <strong>서비스 소개</strong>
        </h5>
        <p className="leading-[1.7em]  shrink-0 text-[14px] font-normal text-left mt-[15px]  	">
          {/* {filteredSortedData[0] && filteredSortedData[0].summary} */}
          {/* {filteredSortedData[0] && filteredSortedData[0].serviceDesc} */}
        {serviceDesc}
        </p>
      </div>
    </>
  );
};

export default ServiceDesc;
