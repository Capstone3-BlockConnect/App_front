import { View } from "react-native";
import * as styles from "../ApplyScreen.style";
import CustomModal from "../../../components/modal/CustomModal";
import { css } from "@emotion/native";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import EatTimeModalContent from "./EatTimeModalContent";
import FoodModalContent from "./FoodModalContent";
import MemoModalContent from "./MemoModalContent";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/LoginState";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

const InputBox = ({ modalVisible, setModalVisible }) => {
  const navigation = useNavigation();
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [foodModalVisible, setFoodModalVisible] = useState(false);
  const [memoModalVisible, setMemoModalVisible] = useState(false);
  const { nickName, age } = useRecoilValue(userState);
  const [requestData, setRequestData] = useState({
    date: "",
    time: "",
    category: "",
    memo: "",
  });

  console.log(requestData);

  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
    const selectedData = `${currentDate.getFullYear()}-${
      currentDate.getMonth() + 1
    }-${currentDate.getDate()}`;
    setRequestData((prev) => ({
      ...prev,
      date: selectedData,
    }));
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const conditionCheck = () => {
    if (
      requestData.category &&
      requestData.date &&
      requestData.memo &&
      requestData.time
    ) {
      setIsAllChecked(true);
    }
  };

  useEffect(() => {
    conditionCheck();
  }, [requestData]);

  return (
    <View
      style={css`
        padding-top: 10px;
      `}
    >
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      >
        <EatTimeModalContent
          setModalVisible={setModalVisible}
          setRequestData={setRequestData}
          requestData={requestData}
        />
      </CustomModal>
      <CustomModal
        modalVisible={foodModalVisible}
        setModalVisible={setFoodModalVisible}
      >
        <FoodModalContent
          setModalVisible={setFoodModalVisible}
          requestData={requestData}
          setRequestData={setRequestData}
        />
      </CustomModal>
      <CustomModal
        modalVisible={memoModalVisible}
        setModalVisible={setMemoModalVisible}
      >
        <MemoModalContent
          setModalVisible={setMemoModalVisible}
          requestData={requestData}
          setRequestData={setRequestData}
        />
      </CustomModal>
      <styles.ContentArea>
        <styles.InputLabelBox>
          <styles.LabelText>
            {nickName || "닉네임이 없어요"}님,
          </styles.LabelText>
          <styles.LabelText>
            매칭 신청에 필요한 정보를 입력해주세요
          </styles.LabelText>
        </styles.InputLabelBox>

        <styles.InfoBox
          onPress={() => {
            showDatepicker();
          }}
        >
          <styles.InputBoxContent>
            {requestData.date || "선택"}
          </styles.InputBoxContent>
          <styles.Title>식사날짜를 선택해주세요</styles.Title>
        </styles.InfoBox>

        <styles.InfoBox
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <styles.InputBoxContent>
            {requestData.time || "선택"}
          </styles.InputBoxContent>
          <styles.Title>식사시간을 선택해주세요</styles.Title>
        </styles.InfoBox>

        <styles.HorizontalInputContainer>
          <styles.FoodBox
            onPress={() => {
              setFoodModalVisible(true);
            }}
          >
            <styles.InputBoxContent>
              {requestData.category || "선택"}
            </styles.InputBoxContent>
            <styles.Title>선호 음식 카테고리</styles.Title>
          </styles.FoodBox>

          <styles.MemoBox
            onPress={() => {
              setMemoModalVisible(true);
            }}
          >
            <styles.MemoBoldContent>
              {requestData.memo || "입력하기"}
            </styles.MemoBoldContent>
            <styles.Title>메모</styles.Title>
          </styles.MemoBox>
        </styles.HorizontalInputContainer>
      </styles.ContentArea>
      <styles.ButtonContainer>
        <styles.CancelButton
          mode="contained"
          labelStyle={css`
            color: black;
            font-weight: 700;
            font-size: 17px;
          `}
          onPress={() => {
            navigation.navigate("Home", { screen: "서비스 소개" });
          }}
        >
          취소하기
        </styles.CancelButton>
        <styles.ApplyButton
          labelStyle={css`
            color: white;
            font-weight: 700;
            font-size: 17px;
          `}
          onPress={() => {
            navigation.navigate("신청정보 확인하기", {
              requestData: requestData,
            });
          }}
        >
          신청하기
        </styles.ApplyButton>
      </styles.ButtonContainer>
    </View>
  );
};

export default InputBox;
