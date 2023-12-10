import axios from "axios";
import { useRecoilValue } from "recoil";
import { loginState } from "../store/LoginState";

export const apiBase = axios.create({
  baseURL: "https://backend--dwtmc.run.goorm.site",
  timeout: 3000,
  // headers: {

  //   Authorization:,
  // },
});

export function ApiBase() {
  const { token } = useRecoilValue(loginState);
  const apiBase = axios.create({
    baseURL: "https://backend--dwtmc.run.goorm.site",
    timeout: 3000,
    headers: {
      Authorization: token,
    },
  });

  return apiBase;
}
