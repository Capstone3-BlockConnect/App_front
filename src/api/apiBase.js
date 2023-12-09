import axios from "axios";

export const apiBase = axios.create({
  baseURL: "https://backend--dwtmc.run.goorm.site",
  timeout: 3000,
  // headers: {

  //   Authorization:,
  // },
});

export function ApiBase() {
  const apiBase = axios.create({
    base: process.env.PUBLIC_API_BASE,
    timeout: 3000,
  });

  return apiBase;
}

