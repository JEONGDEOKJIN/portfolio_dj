import IconSmallRoundedRect from "@/components/elements/IconSmallRoundedRect";
import Image from "next/image";
import React from "react";
import { dummyMonamiProject } from "@/lib/DummyDataDJ";

const DeliverableMonami = () => {
  const [...projectMonami] = dummyMonamiProject;

  return (
    <>
      <div className="relative mt-[16px] w-[800px] h-[500px] bg-blue-500  ">
        <h5 className="text-[20px] leading-[1.6em]  ">
          <strong>산출물</strong>
        </h5>

        <section className="flex flex-row gap-5 w-full marginTopGlobalCSS">
          <IconSmallRoundedRect
            linkHref={`${projectMonami[0].deliverabes.ERD.linkHref}`}
            imgSrc={"/img/ERD_example.png"}
            desc={"ERD"}
            circleColor={"#28466c"}
          />

          <IconSmallRoundedRect
            linkHref={`${projectMonami[0].deliverabes.API.linkHref}`}
            imgSrc={"/img/API_example.png"}
            desc={"API"}
            circleColor={"#28466c"}
          />

          <IconSmallRoundedRect
            linkHref={`${projectMonami[0].deliverabes.PPT.linkHref}`}
            imgSrc={"/projects/nobroker/features/estateEnroll.JPG"}
            desc={"발표 자료"}
            circleColor={"#28466c"}
          />

          <IconSmallRoundedRect
            linkHref={`${projectMonami[0].deliverabes.userFlow.linkHref}`}
            imgSrc={"/img/useflow_example.png"}
            desc={"UserFlow"}
            circleColor={"#28466c"}
          />

          {/* <IconSmallRoundedRect 
            linkHref={`${projectMonami[0].deliverabes.deploy.linkHref}`} 
            imgSrc = {"/projects/nobroker/features/estatelist-nobroker.JPG"}
            desc = {"User 배포"}
            circleColor = {"#28466c"}
            /> */}

          {/* <IconSmallRoundedRect 
            linkHref={`${projectMonami[0].deliverabes.description.linkHref}`} 
            imgSrc = {"/img/requirement_example.JPG"}
            desc = {"요구사항 정의"}
            circleColor = {"#28466c"}
            /> */}
        </section>

      </div>
    </>
  );
};

export default DeliverableMonami;
