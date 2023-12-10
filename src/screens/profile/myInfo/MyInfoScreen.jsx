import { ScrollView, Text, View } from "react-native";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/LoginState";
import * as styles from "./MyInfoScreen.style";
import { Button } from "react-native-paper";
import { css } from "@emotion/native";
const MyInfoScreen = () => {
  const userInfo = useRecoilValue(userState);

  const { nickName, gender, age, phoneNumber, foodCategory, userId } = userInfo;
  return (
    <styles.Container
      contentContainerStyle={css`
        padding-top: 10px;
      `}
    >
      <ScrollView>
        {/*
        환영인사
         */}
        <styles.GreetBox>
          <styles.GreetFirstArea>
            <styles.GreetBoldText>{nickName}님</styles.GreetBoldText>
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
              <styles.UpperSubText>{age}살</styles.UpperSubText>
              <styles.UpperSubText>
                상대방에게 보여질 프로필 화면이에요
              </styles.UpperSubText>
            </styles.UpperInfoTextArea>
          </styles.UpperWrapper>
          <styles.LowerWrapper
            style={css`
              background-color: white;
            `}
          >
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
          style={css`
            border-radius: 10px;
            margin-top: 30px;
            padding: 5px;
          `}
          labelStyle={{ fontSize: 17, fontWeight: 900, letterSpacing: 1 }}
        >
          매칭 신청하기
        </Button>
      </ScrollView>
    </styles.Container>
  );
};

export default MyInfoScreen;
