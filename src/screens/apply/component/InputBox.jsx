import { View } from "react-native";
import * as styles from "../ApplyScreen.style";
import CustomModal from "../../../components/modal/CustomModal";
import { css } from "@emotion/native";
import { useNavigation } from "@react-navigation/native";
const InputBox = ({ modalVisible, setModalVisible }) => {
  const navigation = useNavigation();

  return (
    <View>
      <styles.ContentArea>
        <styles.InputLabelBox>
          <styles.LabelText>임기현님,</styles.LabelText>
          <styles.LabelText>
            매칭 신청에 필요한 정보를 입력해주세요
          </styles.LabelText>
        </styles.InputLabelBox>

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
          onPress={() => {
            navigation.navigate("신청정보 확인하기");
          }}
        >
          신청하기
        </styles.ApplyButton>
      </styles.ButtonContainer>
    </View>
  );
};

export default InputBox;
