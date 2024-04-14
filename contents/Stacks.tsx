import React from "react";

interface StacksProps {
  stacks: string[];
}

const Stacks: React.FC<StacksProps> = ({stacks}) => {
  console.log('Stacks:', stacks); // 데이터 확인

  return (
    <>
    {stacks && stacks.length > 0 ? (
      <div className="relative leftMoveIconGlobalCSS">
        {/* stack 각각을 , 로 구분해서 넣어주면 -> 각 요소를 , 기준으로 배열로 만들어서 -> map 돌릴 수 있음. */}
        <span className="flex items-center mt-[1.1em] ml-[-6px]">
          {stacks.map((item: string, index: number) => {
              return (
                <span
                key={index}
                  // className="bg-[rgb(43, 89, 63)] font-light text-neutral-50 px-[8px] py-[4px] rounded-[50px] text-[12px] ml-2"
                  className="colorIconDescglabalCSS font-light text-neutral-50 px-[8px] py-[4px] rounded-[50px] text-[12px] ml-2"
                  >
                  {item.trim()}
                </span>
              );
            })}
        </span>
      
      </div>

    ) 
    : ""
  }
    </>
  );
};

export default Stacks;
