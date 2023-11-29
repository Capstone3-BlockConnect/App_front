import { ScrollView, Text, View } from "react-native";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/LoginState";
import * as styles from "./MyInfoScreen.style";
import { Button } from "react-native-paper";
import { css } from "@emotion/react";
const MyInfoScreen = () => {
  const userInfo = useRecoilValue(userState);

  const { nickName, gender, age, phoneNumber, foodCategory, userId } =
    userInfo.userId;
  return (
    <styles.Container>
      <ScrollView>
        {/*
        환영인사
         */}
        <styles.GreetBox>
          <styles.GreetFirstArea>
            <styles.GreetBoldText>꿈꾸는 계란님</styles.GreetBoldText>
            <styles.GreetNormalText> 환영합니다!</styles.GreetNormalText>
          </styles.GreetFirstArea>
          <styles.GreetNormalText>밥은 드셨나요?</styles.GreetNormalText>
        </styles.GreetBox>

        {/*
         내 정보 카드
         */}
        <styles.InfoCard>
          <styles.UpperWrapper>
            <styles.ProfileImage />
            <styles.UpperInfoTextArea>
              <styles.UpperBoldText>
                {nickName || "닉네임을 등록해주세요"}
              </styles.UpperBoldText>
              <styles.UpperSubText>21살</styles.UpperSubText>
              <styles.UpperSubText>ENFP</styles.UpperSubText>
            </styles.UpperInfoTextArea>
          </styles.UpperWrapper>
          <styles.LowerWrapper>
            <styles.LowerTitle>내 정보 살펴보기</styles.LowerTitle>
            <styles.LowerItem>
              <styles.LowerItemTitleWrapper>
                <styles.LowerItemTitle>나이</styles.LowerItemTitle>
              </styles.LowerItemTitleWrapper>
              <styles.LowerItemContent>{age}살</styles.LowerItemContent>
            </styles.LowerItem>
            <styles.LowerItem>
              <styles.LowerItemTitleWrapper>
                <styles.LowerItemTitle>성별</styles.LowerItemTitle>
              </styles.LowerItemTitleWrapper>
              <styles.LowerItemContent>{gender}</styles.LowerItemContent>
            </styles.LowerItem>
            <styles.LowerItem>
              <styles.LowerItemTitleWrapper>
                <styles.LowerItemTitle>좋아하는 음식</styles.LowerItemTitle>
              </styles.LowerItemTitleWrapper>
              <styles.LowerItemContent>{foodCategory}</styles.LowerItemContent>
            </styles.LowerItem>
            <styles.LowerItem>
              <styles.LowerItemTitleWrapper>
                <styles.LowerItemTitle>내 아이디</styles.LowerItemTitle>
              </styles.LowerItemTitleWrapper>
              <styles.LowerItemContent>{userId}</styles.LowerItemContent>
            </styles.LowerItem>
            <styles.LowerItem>
              <styles.LowerItemTitleWrapper>
                <styles.LowerItemTitle>내 번호</styles.LowerItemTitle>
              </styles.LowerItemTitleWrapper>
              <styles.LowerItemContent>{phoneNumber}</styles.LowerItemContent>
            </styles.LowerItem>
          </styles.LowerWrapper>
        </styles.InfoCard>
        <Button
          mode="contained"
          buttonColor="#272643"
          style={{ borderRadius: 10, marginTop: 30, padding: 5 }}
          labelStyle={{ fontSize: 17, fontWeight: 900, letterSpacing: 1 }}
        >
          매칭 신청하기
        </Button>
      </ScrollView>
    </styles.Container>
  );
};

export default MyInfoScreen;
