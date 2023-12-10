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
