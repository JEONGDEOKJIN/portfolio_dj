import React, { useEffect, useState } from "react";

const ChildWindow = () => {
  const [receivedMessage, setReceivedMessage] = useState("");

  useEffect(() => {
    window.addEventListener("message", receiveMessage);
  }, []);

  const receiveMessage = (event : any) => {
    if (event.origin != window.location.origin) {
      // 다른 도메인에서 온 메시지는 무시
      return;
    } else {
      setReceivedMessage(event.data);
    }
  };

  return (
    <>
      <div>ChildWindow</div>
      <div>{receivedMessage}</div>
    </>
  );
};

export default ChildWindow;
