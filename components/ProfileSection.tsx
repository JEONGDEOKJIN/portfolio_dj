import Image from "next/image";
import React, { useState } from "react";
// import ModalFeedbackBox from "./ModalFeedbackBox";
import { useRouter } from "next/navigation";

const ProfileSection = () => {
  const [isShowChatBox, setIsShowChatBox] = useState(false);
  const router = useRouter()

  const handleSendFeedback = () => {
    // setIsShowChatBox(true);
    router.push('/')
  };

  const handleCancelBtn = () => {
    setIsShowChatBox(false);
  };

  return (
    <>
      <section className="flex flex-col flex-wrap  mt-20 gap-[8px] ">
        <div className="flex flex-row ">
          <span className="w-full border-neutral-100 border-t-[2px] my-auto"></span>
          <div className="w-[72px] shrink-0 h-[72px] flex justify-center items-center rounded-full mx-[24px] ">
            {/* <div className="flex items-center justify-center rounded-full shrink-0 w-[80px] h-[80px] bg-gradient-to-r from-gray-100 to-gray-200"> */}
            <div className="flex items-center justify-center rounded-full shrink-0 w-[80px] h-[80px] ">
              <figure
                className="relative w-[72px] h-[72px] shrink-0 bg-center bg-no-repeat bg-cover rounded-full"
                // style={{
                //   backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/JEONGDEOKJIN.jpg)`,
                // }}
              >
                <Image 
                  fill
                  alt="프로필 이미지"
                  src={"/JEONGDEOKJIN.png"}
                  className="rounded-full object-cover" // object-cover 를 넣어야 사진이 왜곡없이 꽉참
                />
              </figure>


            </div>
          </div>
          <span className="w-full border-neutral-100 border-t-[2px] my-auto"></span>
        </div>

        <h5 className="text-[20px] font-medium text-gray-900 text-center mt-[8px]">
          Jeong! Deokjin
        </h5>

        <div className="text-center text-gray-600 text-[14px]">
          <p>효율적인 방식으로</p>
          <p>좋은 잔상이 남을 수 있게 만듭니다.</p>
        </div>

        <button
          onClick={handleSendFeedback}
          className="px-4 py-3 mx-auto ml-auto text-sm font-semibold rounded-full cursor-pointer mt-[8px]  text-neutral-50 
            transition-all ease-in-out duration-300
            bg-neutral-800  hover:bg-gray-600   "
          // bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-gray-200 hover:to-gray-300 hover:text-gray-800 "
        >
          More Projects
        </button>

        {/* 전체 모달 */}
        {/* <ModalFeedbackBox
          handleCancelBtn={handleCancelBtn}
          isShowChatBox={isShowChatBox}
          setIsShowChatBox={setIsShowChatBox}
        /> */}
      </section>
    </>
  );
};

export default ProfileSection;
