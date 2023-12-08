import React, { useEffect, useState } from "react";
import * as styles from "./ApplyScreen.style";
import { css } from "@emotion/native";
import { useRecoilValue } from "recoil";
import { loginState } from "../../store/LoginState";
import InputBox from "./component/InputBox";
import AnimatedLottieView from "lottie-react-native";

export default function ApplyScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const { isLogined } = useRecoilValue(loginState);

  return (
    <styles.Container>
      <styles.UpperArea>
        <styles.MateBox>
          <styles.MateBoldContent>11000명</styles.MateBoldContent>
          <styles.Title>지금까지 매칭된 누적 메이트</styles.Title>
        </styles.MateBox>
      </styles.UpperArea>
      {isLogined ? (
        <InputBox
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      ) : (
        <styles.LoginBox>
          <styles.LoginContent>로그인하시고</styles.LoginContent>
          <styles.LoginContent>우리 밥 같이 먹어요!</styles.LoginContent>
          <AnimatedLottieView
            source={require("../../../assets/lottie/loginLottie.json")}
            autoPlay
            loop
            style={css`
              margin-top: auto;
            `}
          />
        </styles.LoginBox>
      )}
    </styles.Container>
  );
}
