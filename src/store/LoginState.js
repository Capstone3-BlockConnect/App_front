import { atom } from "recoil";

export const loginState = atom({
  key: "loginState",
  default: {
    isLogined: false,
    token: "",
  },
});

export const userState = atom({
  key: "userState",
  default: {
    userId: "",
    nickName: "",
    gender: "",
    age: 0,
    phoneNumber: "",
    foodCategory: "",
  },
});
