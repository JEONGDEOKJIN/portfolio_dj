"use client";
import React, { useEffect, useState, useRef } from "react";

const IframePostMessage = () => {
  const [isIframeOpen, setIsIframeOpen] = useState(false);
  const [receivedMessage, setReceivedMessage] = useState("");
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // iframe 열기
  const handleIframe = () => {
    setIsIframeOpen(true);
  };

  // iframe에 메시지 보내기
  const handleSendMessage = () => {
    if (isIframeOpen && iframeRef.current) {
      iframeRef.current.contentWindow?.postMessage("hello i DJ💪", window.location.origin);
    }
  };

  const receiveMessage = (event: MessageEvent) => {
    if (event.origin !== window.location.origin) {
      // 다른 도메인에서 온 메시지는 무시
      return;
    } else {
      console.log("event.data", event.data);

    }
  };
  // iframe이 보낸 메시지 받기
  useEffect(() => {

    window.addEventListener("message", receiveMessage);

    return () => {
      window.removeEventListener("message", receiveMessage);
    };
  }, []);

  return (
    <>
      <div className="bg-blue-100 flex flex-wrap w-full flex-col gap-10 ">
        <h1>IframePostMessage</h1>

        <div className="bg-pink-200 rounded-xl">
          <button className="p-3 " onClick={handleIframe}>
            open iframe child window button
          </button>
        </div>

        {isIframeOpen && (
          <iframe
            ref={iframeRef}
            src="./popupbyiframe.html"
            title="Child_iframe_Window"
            width="300"
            height="300"
            className="bg-white border"
          ></iframe>
        )}

        <div>
          <button onClick={handleSendMessage}>iframe child 에게 메시지 보내기</button>
        </div>

        <div>
          <h1>메시지받기</h1>
        </div>
      </div>
    </>
  );
};

export default IframePostMessage;
