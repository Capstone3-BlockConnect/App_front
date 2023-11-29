import React from "react";
import * as styles from "./ProfileScreen.style";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <styles.ContainerView>
      <styles.WalletBox
        onPress={() => {
          // 지갑으로 이동
          navigation.navigate("wallet");
        }}
      >
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
        <styles.WalletItem
          onPress={() => {
            // 내 프로필로 이동
            navigation.navigate("myInfo");
            console.log("dd");
          }}
        >
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
