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

    console.log(response.status);

    return { success: response.status, data: response.data };
  } catch (e) {
    console.error(e);
  } finally {
  }
};
