"use client";
import React, { useEffect, useState } from "react";

const ParentWindow = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [receivedMessage, setReceivedMessage] = useState("");

  let popupWindow: any;

  // popup 창 열기
  const handleChildwindow = () => {
    popupWindow = window.open(
      "./popup.html",
      //   "./popup.tsx",  // 이렇게 파일을 브라우저에 치면 -> 다운로드가 됨
      "childwindow",
      "width=300, height=300"
    );
    if (popupWindow) {
      setIsPopupOpen(true);
    }
  };

  // popup 창에 메시지 보내기
  const handleSendMessage = () => {
    if (isPopupOpen) {
      popupWindow?.postMessage("hello i DJ💪", window.location.origin);
    }
  };


  // popup창 메시지 받기
  useEffect(() => {
    window.addEventListener("message", receiveMessage);
  }, []);

  const receiveMessage = (event: any) => {
    if (event.origin != window.location.origin) {
      // 다른 도메인에서 온 메시지는 무시
      return;
    } else {
      console.log("event.data", event.data);
    }
  };

  return (
    <>
      <div className="bg-blue-100 flex flex-wrap w-full flex-col gap-10 ">
        <h1>ParentWindow</h1>

        <div className="bg-pink-200 rounded-xl">
          <button className="p-3 " onClick={handleChildwindow}>
            open child window button
          </button>
        </div>

        <div>
          <button onClick={handleSendMessage}>child 에게 메시지 보내기</button>
        </div>

        <div>
          <h1>메시지받기</h1>
          <div>{typeof receivedMessage === 'object' ? JSON.stringify(receivedMessage) : receivedMessage}</div>
        </div>
      </div>
    </>
  );
};

export default ParentWindow;
