import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { notificationAtom, totalNotificationAtom } from "./atom";
import { useEffect } from "react";

function App() {
  return (
    <>
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>
    </>
  );
}

function MainApp() {
  const notificationData = useRecoilValue(notificationAtom);
  const totalNotification = useRecoilValue(totalNotificationAtom);


  return (
    <>
      <div className="">
        <button>notification ({notificationData.notificationCount || 0})</button>
        <button>message ({notificationData.messageCount || 0})</button>
        <button>friend Request ({notificationData.friendRequestCount || 0})</button>
        <button>ME ({totalNotification})</button>
      </div>
    </>
  );
}

export default App;
