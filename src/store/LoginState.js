import { atom } from "jotai";

export const userAtom = atom({
  loggedIn: false,
  token: null,
  userData: null,
});
