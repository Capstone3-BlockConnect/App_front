import styled from "@emotion/native";
import { LinearGradient } from "expo-linear-gradient";
import { HorizontalBox } from "../../../components/atom/basics";
import Ionicons from "@expo/vector-icons/Ionicons";

export const Container = styled.View`
  flex: 1;
  padding: 3% 5%;
  background-color: white;

  row-gap: 42px;
`;

// 지갑 카드
export const SoongbobCardWrapper = styled(LinearGradient)`
  flex-flow: column nowrap;
  align-items: center;
  row-gap: 33px;

  padding: 10px 5px;
  border-radius: 10px;
  background-color: gray;
`;

export const CardTitleArea = styled.View`
  flex-flow: row wrap;

  width: 100%;
  justify-content: space-between;
  padding: 0% 3%;
`;

export const CardTitle = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: white;
  letter-spacing: 1px;
`;

export const CardSubTitle = styled.Text`
  font-size: 15px;
  font-weight: 400;
  color: white;
`;

export const CardBalanceArea = styled(HorizontalBox)``;

export const CardBalance = styled.Text`
  font-size: 35px;
  font-weight: 700;
  color: white;
`;

export const VerifiedText = styled.Text`
  font-size: 10px;
  font-weight: 400;
  color: white;
  letter-spacing: 2px;
`;

// balance Card

export const BalanceWrapper = styled.View`
  flex-flow: column nowrap;
  width: 100%;
  border: 1px solid #e1e1e1;
  border-radius: 10px;

  padding: 20px 0px;

  margin-top: 20px;
`;

export const BalanceBox = styled.View`
  flex-flow: column nowrap;
  align-items: center;
`;

export const BalanceArea = styled(HorizontalBox)`
  align-items: baseline;
`;

export const BalanceTitle = styled.Text`
  font-size: 20px;
  color: #727272;
  font-weight: 700;
`;

export const BalanceText = styled.Text`
  font-size: 45px;
  color: black;
  font-weight: 900;
`;

export const CoinUnit = styled.Text`
  font-size: 20px;
  color: #727272;
`;

export const ButtonArea = styled.View`
  flex-flow: row nowrap;
  column-gap: 40px;

  margin-top: 20px;
`;

export const ButtonWrapper = styled.View`
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: #72727240;
`;

export const ButtonBox = styled.View`
  flex-flow: column nowrap;
  align-items: center;

  row-gap: 4px;
`;

export const ButtonLabel = styled.Text`
  font-size: 12px;
  font-weight: 500;
`;

// about SBC

export const AboutWrapper = styled.View`
  flex-flow: column nowrap;
  align-items: center;

  margin-top: 80px;
  row-gap: 5px;
`;

export const AboutTitle = styled.Text`
  font-size: 15px;
  font-weight: 700;
`;

export const AboutBox = styled.View``;

export const AboutContent = styled.Text`
  font-size: 15px;
  color: #727272;
  font-weight: 400;
`;
