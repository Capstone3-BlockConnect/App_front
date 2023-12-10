import { apiBase } from "./apiBase";

/**
 * 내 오픈채팅방 링크 가져오기
 *
 * @param {object} params - 함수에 전달되는 매개변수 객체는 없습니다.
 * @returns {Promise<Object>} - 응답 객체를 반환한다. 응답 객체는 status, data 로 구성되어있습니다.
 */
export const getMyOpenChatLink = async () => {
  try {
    const url = `/users/my/openChatLink`;
    const response = await apiBase.get(url);

    // return { status: response.status, data: response.data };
    return response;
  } catch (e) {
    console.error(e);
    return e.response;
  } finally {
  }
};

/**
 * 내 오픈채팅 링크 빈 문자열로 바꾸기 (삭제하기)
 *
 * @param {object} params - 함수에 전달되는 매개변수 객체는 없습니다.
 * @returns {object} - 응답 객체를 반환한다.
 */
export const deleteMyOpenChatLink = async () => {
  try {
    const url = `/users/my/openChatLink`;
    const response = await apiBase.delete(url);

    return response;
  } catch (e) {
    console.error(e);
    return e.response;
  } finally {
  }
};

/**
 * 상대방의 _id로 상대방의 openChatLink를 조회합니다.
 *
 * @param {object} params - 함수에 전달되는 매개변수 객체
 * @param {string} params.id - 상대방의 _id입니다.
 * @returns {object} - 응답 객체를 반환한다.
 */

export const getSomeoneOpenChatLink = async ({ id }) => {
  try {
    const url = `/users/my/openChatLink/${id}`;
    const response = await apiBase.delete(url);

    return response;
  } catch (e) {
    console.error(e);
    return e.response;
  } finally {
  }
};

/**
 * 내 오픈채팅방 링크를 수정한다(생성한다)
 *
 * @param {object} params - 함수에 전달되는 매개변수 객체
 * @param {string} params.openChatLink - 오픈채팅 링크
 * @returns {object} - 응답 객체를 반환한다.
 */

export const updateMyOpenChatLink = async ({ openChatLink }) => {
  try {
    const url = `/users/my/openChatLink`;
    const response = await apiBase.put(url, {
      openChatLink: openChatLink,
    });

    return response;
  } catch (e) {
    console.error(e);
    return e.response;
  } finally {
  }
};
