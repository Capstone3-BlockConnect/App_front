import React, { useEffect, useState } from "react";
import * as styles from "./ApplyScreen.style";
import { css } from "@emotion/native";
import { useRecoilValue } from "recoil";
import { loginState } from "../../store/LoginState";
import InputBox from "./component/InputBox";
import AnimatedLottieView from "lottie-react-native";
import AnimatedCounter from "../../components/atom/AnimatedNumber";
import { getMatchCount } from "../../api/matchingApi";

export default function ApplyScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const { isLogined } = useRecoilValue(loginState);
  const [cumulatedMatch, setCumulatedMatch] = useState(0);

  const getMatchs = async () => {
    const result = await getMatchCount();
    setCumulatedMatch(result.statistics);
    return result.statistics;
  };

  useEffect(() => {
    getMatchs();
  }, []);
  return (
    <styles.Container
      contentContainerStyle={css`
        flex: 1 1 100%;
        background-color: white;
        row-gap: 10px;
      `}
    >
      <styles.UpperArea>
        <styles.MateBox>
          <AnimatedCounter duration={1000} targetValue={cumulatedMatch} />
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
