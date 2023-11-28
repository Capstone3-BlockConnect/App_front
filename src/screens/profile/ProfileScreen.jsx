import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, Keyboard } from "react-native";
import styled, { css } from "styled-components";
import * as styles from "./ProfileScreen.style";
import CustomButton from "../../components/buttons/CustomButton";
const ProfileScreen = () => {
  return (
    <styles.ContainerView>
      <styles.WalletBox>
        <styles.TitleWrapper>
          <styles.WalletTitle>내 지갑</styles.WalletTitle>
          <styles.WalletTitle>아이콘</styles.WalletTitle>
        </styles.TitleWrapper>
        <styles.WalletBalance>1320 Point</styles.WalletBalance>
        <styles.WalletBalanceLabel>
          내 활동보상 포인트
        </styles.WalletBalanceLabel>
      </styles.WalletBox>
      <styles.WalletMenu>
        <styles.WalletItem>
          <styles.WalletItemLabel>내 프로필</styles.WalletItemLabel>
        </styles.WalletItem>
        <styles.WalletItem>
          <styles.WalletItemLabel>매칭기록</styles.WalletItemLabel>
        </styles.WalletItem>
        <styles.WalletItem>
          <styles.WalletItemLabel>버전</styles.WalletItemLabel>
        </styles.WalletItem>
      </styles.WalletMenu>
    </styles.ContainerView>
  );
};

export default ProfileScreen;
