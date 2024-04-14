import React from "react";

interface StacksProps {
  stacks: string[];
}

const Stacks: React.FC<StacksProps> = ({stacks}) => {
  return (
    <>
      <>
        {/* stack 각각을 , 로 구분해서 넣어주면 -> 각 요소를 , 기준으로 배열로 만들어서 -> map 돌릴 수 있음. */}
        <span className="flex items-center mt-[1.1em] ml-[-6px]">
          {stacks &&
            stacks.map((item: string, index: number) => {
              return (
                <span
                  key={index}
                  className="bg-[#2b593f] font-light text-neutral-50 px-[8px] py-[4px] rounded-[50px] text-[12px] ml-2"
                >
                  {item.trim()}
                </span>
              );
            })}
        </span>
      </>
    </>
  );
};

export default Stacks;
