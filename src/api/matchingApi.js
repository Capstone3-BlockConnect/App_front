import { apiBase } from "./apiBase";

/*
매칭 신청하기 api
date
time
category
memo
 */

export const ApplyMatching = async ({ date, time, category, memo }) => {
  try {
    const url = `matchings/request`;
    const response = await apiBase.post(url, {
      date: date,
      memo: memo,
      time: time,
      category: category,
    });

    return response;
  } catch (e) {
    console.error(e);
  } finally {
  }
};

/*
전체 매칭 수를 가져옴
*/
export const getMatchCount = async () => {
  try {
    const url = `/matchings/statistics`;

    const response = await apiBase.get(url);

    return response.data;
  } catch (e) {
    console.error(e);
  } finally {
  }
};

/*
매칭 신청 로그 가져옴
*/
export const getMatchLog = async () => {
  try {
    const url = `/matchings/request/my`;

    const response = await apiBase.get(url);

    return { status: response.status, data: response.data };
  } catch (e) {
    console.error(e);
    return e?.response;
  } finally {
  }
};

/*
유저의 아이디로 닉네임 조회하기
*/

/*
매칭 성사 로그 가져오기
*/
export const getMatchedLog = async () => {
  try {
    const url = `matchings/my`;
    const response = await apiBase.get(url);

    return { status: response.status, data: response.data };
  } catch (e) {
    console.error(e);
    return e?.response;
  } finally {
  }
};
