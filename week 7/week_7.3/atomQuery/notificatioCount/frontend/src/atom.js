import { atom, selector } from "recoil";

export const notificationAtom = atom({
  key: "notificationAtom",
  default: {
    notification: 0,
    message: 0,
    friendrequest: 0,
  },
});

// calculate total
export const totalNotificationAtom = selector({
    key:"totalNotificationAtom",
  get: ({ get }) => {
    const allNotification = get(notificationAtom);
    return (
      allNotification.notification +
      allNotification.message +
      allNotification.friendrequest
    );
  },
});
