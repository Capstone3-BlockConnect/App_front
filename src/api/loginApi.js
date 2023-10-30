import axios from "axios";

const baseapi = axios.create({
  baseURL: "https://backend--dwtmc.run.goorm.site",
  timeout: 3000,
});

export const loginPost = async ({ id: id, pw: pw }) => {
  const url = `/users/login`;
  const response = await baseapi.post(url, {
    userId: id,
    password: pw,
  });

  return response.data;
};
