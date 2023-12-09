import { useAsyncStorage } from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

// 성공 : true / 실패 : false
export const setStorage = async ({ asyncKey, data }) => {
  const { setItem } = useAsyncStorage(asyncKey);

  try {
    await setItem(JSON.stringify(data));
    return { success: true, item: JSON.stringify(data) };
  } catch (e) {

    // Alert.alert(`저장하기 실패`, `데이터 저장에 실패하였습니다.`);

    return { success: false };
  }
};

// asyncStorage 안의 내용을 가져오는 함수
export const getStorageData = async ({ asyncKey }) => {
  const { getItem } = useAsyncStorage(asyncKey);

  try {
    const response = await getItem();
    return { success: true, item: response };
  } catch (e) {
    Alert.alert(`가져오기 실패`, `데이터 로드에 실패하였습니다.`);
    return { success: false };
  }
};
