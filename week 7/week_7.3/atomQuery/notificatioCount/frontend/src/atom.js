import { atom, selector } from "recoil";

export const notificationAtom = atom({
  key: "notificationAtom",

  default: selector({
    key: "notificationAtomSelector",
    get: async () => {
      try {
        const response = await fetch("http://localhost:8080/");
        const data = await response.json();
        console.log(data);
        return data;
        
      } catch (error) {
        console.log("Error in fetching data", error);
      }
    },
  }),
  // default: {
  //   notification: 0,
  //   message: 0,
  //   friendrequest: 0,
  // },
});

// calculate total
export const totalNotificationAtom = selector({
  key: "totalNotificationAtom",
  get: ({ get }) => {
    const allNotification = get(notificationAtom);
    return (
      allNotification.notificationCount +
      allNotification.messageCount +
      allNotification.friendRequestCount
    );
  },
});


// return {
//           notification:data.friendRequestCount || 0,
//           message : data.messageCount  || 0,
//           friendrequest:data.friendRequestCount  || 0,
//         };
