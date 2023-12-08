import React, { useState } from "react";
import * as styles from "./ApplyScreen.style";
import RNDateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import { css } from "@emotion/native";
import CustomModal from "../../components/modal/CustomModal";

export default function ApplyScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <styles.Container>
      <styles.UpperArea>
        <styles.MateBox>
          <styles.MateBoldContent>11000명</styles.MateBoldContent>
          <styles.Title>지금까지 매칭된 누적 메이트</styles.Title>
        </styles.MateBox>
      </styles.UpperArea>
      <styles.ContentArea>
        <styles.InputLabelBox>
          <styles.LabelText>임기현님,</styles.LabelText>
          <styles.LabelText>
            매칭 신청에 필요한 정보를 입력해주세요
          </styles.LabelText>
        </styles.InputLabelBox>
        {/* <RNDateTimePicker mode="time" display="spinner" value={new Date()} /> */}
        <styles.InputLabelBox></styles.InputLabelBox>
        <styles.InfoBox>
          <styles.InputBoxContent>2023.10.11</styles.InputBoxContent>
          <styles.Title>식사날짜를 선택해주세요</styles.Title>
        </styles.InfoBox>
        <styles.InfoBox>
          <styles.InputBoxContent>13:00</styles.InputBoxContent>
          <styles.Title>식사시간을 선택해주세요</styles.Title>
        </styles.InfoBox>

        <styles.HorizontalInputContainer>
          <styles.FoodBox>
            <styles.InputBoxContent>양식</styles.InputBoxContent>
            <styles.Title>선호 음식 카테고리</styles.Title>
          </styles.FoodBox>
          <CustomModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
          />
          <styles.MemoBox
            onPress={() => {
              setModalVisible(true);
            }}
          >
            <styles.MemoBoldContent>안녕하세요</styles.MemoBoldContent>
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
        >
          취소하기
        </styles.CancelButton>
        <styles.ApplyButton
          labelStyle={css`
            color: white;
            font-weight: 700;
            font-size: 17px;
          `}
        >
          신청하기
        </styles.ApplyButton>
      </styles.ButtonContainer>
    </styles.Container>
  );
}
