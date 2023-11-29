import { atom } from "recoil";

export const userWalletState = atom({
  key: "userWalletState",
  default: {
    network: "ThunderCore",
    balance: 0,
  },
});
