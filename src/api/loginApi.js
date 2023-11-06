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

export const submitSignIn = async ({
  userId,
  password,
  nickname,
  gender,
  age,
  phoneNumber,
  foodCategory,
}) => {
  const url = `/users/signup`;
  const response = await baseapi.post(url, {
    userId: userId,
    password: password,
    nickname: nickname,
    gender: gender,
    age: age,
    phoneNumber: phoneNumber,
    foodCategory: foodCategory,
  });
  return response.data;
};
