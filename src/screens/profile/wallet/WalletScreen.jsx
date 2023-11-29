import * as styles from "./WalletScreen.style";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import { ScrollView } from "react-native";
const WalletScreen = () => {
  const dateInstance = new Date();
  const date = `${dateInstance.getFullYear()}.${
    dateInstance.getMonth() + 1
  }.${dateInstance.getDate()}`;
  return (
    <styles.Container>
      <ScrollView>
        {/*
      토큰 증명카드
      */}
        <styles.SoongbobCardWrapper
          colors={["#000", "#AC6A6A"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
        >
          <styles.CardTitleArea>
            <styles.CardTitle>Soongbob Coin</styles.CardTitle>
            <styles.CardSubTitle>{date}</styles.CardSubTitle>
          </styles.CardTitleArea>
          <styles.CardBalanceArea>
            <Ionicons name="logo-bitcoin" size={20} color="white" />
            <styles.CardBalance>24000.44</styles.CardBalance>
          </styles.CardBalanceArea>
          <styles.VerifiedText>VERIFIED</styles.VerifiedText>
        </styles.SoongbobCardWrapper>
        {/*
      잔액 확인
      */}
        <styles.BalanceWrapper>
          <styles.BalanceBox>
            <styles.BalanceTitle>총 잔액</styles.BalanceTitle>
            <styles.BalanceArea>
              <styles.BalanceText>24000.44</styles.BalanceText>
              <styles.CoinUnit> sbc</styles.CoinUnit>
            </styles.BalanceArea>
            <styles.ButtonArea>
              <styles.ButtonBox>
                <styles.ButtonWrapper>
                  <Entypo name="minus" size={25} color="black" />
                </styles.ButtonWrapper>
                <styles.ButtonLabel>출금하기</styles.ButtonLabel>
              </styles.ButtonBox>
              <styles.ButtonBox>
                <styles.ButtonWrapper>
                  <Ionicons name="send-sharp" size={25} color="black" />
                </styles.ButtonWrapper>
                <styles.ButtonLabel>보내기</styles.ButtonLabel>
              </styles.ButtonBox>
            </styles.ButtonArea>
          </styles.BalanceBox>
        </styles.BalanceWrapper>
        <styles.AboutWrapper>
          <styles.ButtonBox>
            <styles.ButtonWrapper>
              <Entypo name="magnifying-glass" size={25} color="black" />
            </styles.ButtonWrapper>
            <styles.AboutTitle>About SBC</styles.AboutTitle>
          </styles.ButtonBox>
          <styles.AboutBox>
            <styles.AboutContent>
              This token is an Ethereum standard-based token that complies with
              the ERC-20 standard. Works on smart contracts over fast and
              lightweight Thundercore networks.
            </styles.AboutContent>
          </styles.AboutBox>
        </styles.AboutWrapper>
      </ScrollView>
    </styles.Container>
  );
};

export default WalletScreen;
