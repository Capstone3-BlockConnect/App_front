import React from "react";
import * as styles from "./ProfileScreen.style";
import { useNavigation } from "@react-navigation/native";
import { useRecoilValue } from "recoil";
import { loginState } from "../../store/LoginState";
import { Alert } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { css } from "@emotion/native";
const ProfileScreen = () => {
  const navigation = useNavigation();
  const { isLogined } = useRecoilValue(loginState);

  const AlertHandler = () => {
    Alert.alert("알려드립니다", "로그인해주세요", [
      { text: "확인", onPress: () => navigation.navigate("Home", "로그인") },
    ]);
  };

  return (
    <styles.ContainerView
      contentContainerStyle={css`
        padding-top: 10px;
      `}
    >
      <styles.WalletBox
        onPress={() => {
          // 지갑으로 이동
          if (isLogined) navigation.navigate("wallet");
          else AlertHandler();
        }}
      >
        <styles.TitleWrapper>
          <styles.WalletTitle>내 지갑</styles.WalletTitle>
          <Ionicons name="enter-sharp" size={20} color="black" />
        </styles.TitleWrapper>
        {isLogined ? (
          <styles.WalletBalance>1320 Point</styles.WalletBalance>
        ) : (
          <styles.WalletBalance>로그인해주세요</styles.WalletBalance>
        )}

        <styles.WalletBalanceLabel>
          내 활동보상 포인트
        </styles.WalletBalanceLabel>
      </styles.WalletBox>
      <styles.WalletMenu>
        <styles.WalletItem
          onPress={() => {
            // 내 프로필로 이동
            if (isLogined) navigation.navigate("myInfo");
            else AlertHandler();
          }}
        >
          <styles.WalletItemLabel>내 프로필</styles.WalletItemLabel>
        </styles.WalletItem>
        <styles.WalletItem
          onPress={() => {
            if (isLogined) navigation.navigate("chatManage");
            else AlertHandler();
          }}
        >
          <styles.WalletItemLabel>매칭기록</styles.WalletItemLabel>
        </styles.WalletItem>

        <styles.WalletItem
          onPress={() => {
            if (isLogined) navigation.navigate("chatManage");
            else AlertHandler();
          }}
        >
          <styles.WalletItemLabel>내 채팅링크 관리</styles.WalletItemLabel>
        </styles.WalletItem>
        <styles.WalletItem>
          <styles.WalletItemLabel>버전 및 개발</styles.WalletItemLabel>
        </styles.WalletItem>
      </styles.WalletMenu>
    </styles.ContainerView>
  );
};

export default ProfileScreen;
