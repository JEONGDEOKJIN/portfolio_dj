import Image from "next/image";
import React, { useState } from "react";
// import ModalFeedbackBox from "./ModalFeedbackBox";

const HeaderProfile = ({ title } : any) => {
  const [isShowChatBox, setIsShowChatBox] = useState(false);

  const handleSendFeedback = () => {
    setIsShowChatBox(true);
  };

  const handleCancelBtn = () => {
    setIsShowChatBox(false);
  };

  return (
    <>
      <header className="flex flex-col flex-wrap items-center mt-16 ">
        
        <section className="flex  max-w-[1100px]  h-fit w-full">
          <h3 className="font-[600] text-[24px] mb-5">{title}</h3>
        </section>

        <section className="flex flex-row w-full max-w-[1100px] items-center ">
          
          {/* 프로필 이미지 */}
          <article className="flex items-center justify-center ">
            <figure
              className="relative w-12 h-12 bg-center bg-no-repeat bg-cover rounded-full shrink-0 "
            >
              <Image
                fill
                quality={100}
                alt="profile image"
                className="rounded-full object-cover"
                src={"/JEONGDEOKJIN.png"}
              />
            </figure>
          </article>

          <article className="ml-3 ">
            <span className="font-semibold text-gray-900">JEONG! DEOKJIN</span>

            <div className="flex flex-row items-center">
              <span className="bg-[#4daa57] w-2 h-2 rounded-full my-auto mr-1 animate-pulse  "></span>

              <span className="text-[#4daa57] text-[12px]">
                Frontend Developer
              </span>
            </div>
          </article>

          {/* contact DJ 버튼 */}
          {/* <button
            onClick={handleSendFeedback}
            className="px-4 py-3 ml-auto text-sm font-semibold rounded-full cursor-pointer bg-gray-950 text-gray-50 hover:bg-gray-600 "
          >
            Go to Other Proect
          </button> */}
          
        </section>



          {/* 전체 모달 | ✅ 추후 사용 예정 */}
          {/* <ModalFeedbackBox
            handleCancelBtn={handleCancelBtn}
            isShowChatBox={isShowChatBox}
            setIsShowChatBox={setIsShowChatBox}
          /> */}
      </header>
    </>
  );
};

export default HeaderProfile;



