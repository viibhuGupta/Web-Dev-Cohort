import { atomFamily, selectorFamily } from "recoil";
// import { TODO } from "./todo";
import axios from "axios"

export const todoAtomFamily = atomFamily({
  key: "todoAtomFamily",
  default:selectorFamily({
    key:"todoSelectorFamily",
    get: (id ) => async ()=> {
      const res = await axios.get(`http://localhost:8080/todo/${id}`)
      return res.data;
    }  
  })
    

});



// export const todoAtom = atom({
//   key: "todoAtom",
//   default: 1,
// });
