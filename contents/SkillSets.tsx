import React from "react";
import Image from "next/image";

const SkillSets = ({
  stackImageHref,
  stackName,
  desc_1,
  desc_2,
  desc_3,
}: any) => {
  return (
    <>
      <section className="w-full h-full">
        <article className=" w-full skillset text-black flex gap-5 flex-col   ">
          <figure className="relative w-full h-[120px]">
            <Image
              style={{ objectFit: "cover" }}
              fill
              alt="Skill Desc image"
              className="rounded-[24px]  w-full h-full"
              src={`/skillset/skill_${stackImageHref}.png`}
            />
          </figure>

          <div className="skillsetDescWrapper flex flex-col items-center w-full ">
            <h3 className="text-[24px] font-[400] shrink-0  ">{stackName}</h3>

            <div className="flex flex-col gap-2 justify-center items-start h-[100px]">
              <p className="text-[16px] ">- {desc_1}</p>
              <p className="text-[16px] ">- {desc_2}</p>
              {desc_3 && <p className="text-[16px] ">- {desc_3}</p>}
            </div>
          </div>
        </article>
      </section>


    </>
  );
};

export default SkillSets;
