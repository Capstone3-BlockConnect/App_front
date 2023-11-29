import React from "react";
import { StyleSheet, View, Image } from "react-native";
import styled, { css } from "@emotion/native";
import {
  ContainerView,
  IntroduceBoxView,
  LoginBtnBox,
} from "./HomeScreen.style";
import WordBalloon from "../components/WordBalloon";
import WordAnswerBalloon from "../components/WordAnswerBalloon";
import { Button } from "react-native-paper";
import { color } from "../../assets/colors/color";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
  navigation.setOptions({
    headerLeft: () => null,
    gestureEnabled: false,
  });

  return (
    <ContainerView>
      <IntroduceBoxView>
        <WordBalloon text="숭밥약이 뭐야?" />
        <WordAnswerBalloon text="숭밥약은 숭실밥집의 스핀오프 프로젝트야!밥을 매개로 사람들을 이어보려고 시작했어" />
        <WordBalloon text="어떻게 사용하면 돼?" />
        <WordAnswerBalloon text="매일 23:59에 매칭된 밥 메이트의 대략적인 정보를 알려줘 그리고 밥 미팅을 위해서 가게에 방문하면 쿠폰을 사용해서 혜택을 받을 수 있어" />
      </IntroduceBoxView>
      <View
        style={css`
          align-items: center;
          width: 85%;
          row-gap: 10px;
          margin-top: 20;
        `}
      >
        <LoginBtnBox>
          <Button
            mode="contained"
            onPress={() => console.log("Pressed")}
            style={{
              borderRadius: 10,
              backgroundColor: color.BtnPrimary,
              width: "45%",
            }}
            labelStyle={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            매칭신청하기
          </Button>
          <Button
            mode="outlined"
            onPress={() => console.log("Pressed")}
            style={{
              borderRadius: 10,
              backgroundColor: color.BtnSub,
              width: "45%",
            }}
            labelStyle={{
              color: "black",
              fontWeight: "bold",
            }}
          >
            종료하기
          </Button>
        </LoginBtnBox>
        <Button
          mode="outlined"
          onPress={() => console.log("Pressed")}
          style={{ width: "100%", borderRadius: 10, backgroundColor: "white" }}
          labelStyle={{
            color: "black",
            fontWeight: "bold",
          }}
        >
          매칭결과 확인하기
        </Button>
      </View>
    </ContainerView>
  );
}
