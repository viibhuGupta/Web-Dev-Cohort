import { atomFamily } from "recoil";
import { TODO } from "./todo";

export const todoAtomFamily = atomFamily({
  key: "todoAtomFamily",
  default: (id) => {
    const todoItem = TODO.find((x) => x.id === id);
    return todoItem;
  },
});



// export const todoAtom = atom({
//   key: "todoAtom",
//   default: 1,
// });
