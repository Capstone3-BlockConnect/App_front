import { apiBase } from "./apiBase";

// 로그인 api
// base url 따로 설정함
// header에 토큰 추가되지 않음
export const loginPost = async ({ id, pw }) => {
  try {
    const url = `/users/login`;
    const response = await apiBase.post(url, {
      userId: id,
      password: pw,
    });
    console.log(
      `***로그인 API response Data***\n${JSON.stringify(response.data)}`
    );

    if (response.status === 200) {
      return response.data;
    } else {
      console.log(`로그인 API 에러 : ${response.status}`);
      return response.status;
    }
  } catch (e) {
    console.error(e);
  }
};

// 회원가입 api
export const submitSignIn = async ({
  userId,
  password,
  nickname,
  gender,
  age,
  phoneNumber,
  foodCategory,
}) => {
  try {
    const url = `/users/signup`;
    const response = await baseApi.post(url, {
      userId: userId,
      password: password,
      nickname: nickname,
      gender: gender,
      age: age,
      phoneNumber: phoneNumber,
      foodCategory: foodCategory,
    });
    console.table(response);
    return { success: true, data: response?.data };
  } catch (e) {
    console.log(e);
  }
};

// 유저 목록 가져오기 api
export const getUserList = async () => {
  try {
    const url = `/users/list`;
    const response = baseApi.get(url);
  } catch (e) {
    console.error(e);
  }
};
