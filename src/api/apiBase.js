import axios from "axios";

export const apiBase = axios.create({
  baseURL: "https://backend--dwtmc.run.goorm.site",
  timeout: 3000,
  // headers: {
  //   Authorization: {},
  // },
});
