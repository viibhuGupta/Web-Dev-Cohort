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
  const [notificationCount, setNotificationCount] =
    useRecoilState(notificationAtom);
  const totalNotification = useRecoilValue(totalNotificationAtom);

  const fetchNotification = async () => {
    try {
      const response = await fetch("http://localhost:8080/");
      const data = await response.json();
      console.log(data);
      // Map the response to match the atom structure
      setNotificationCount({
        notification: data.notificationCount,
        message: data.messageCount,
        friendrequest: data.friendRequestCount,
      });
    } catch (error) {
      console.log("Error in fetching data", error);
    }
  };

  useEffect(() => {
    fetchNotification();
    const interval = setInterval(() => {
      fetchNotification(); // Fetch again every 2 seconds
    }, 20000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  return (
    <>
      <div className="">
        <button>notification ({notificationCount.notification})</button>
        <button>message ({notificationCount.message})</button>
        <button>friend Request ({notificationCount.friendrequest})</button>
        <button>ME ({totalNotification})</button>
      </div>
    </>
  );
}

export default App;
