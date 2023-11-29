import styled from "@emotion/native";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.View`
  flex: 1;
  padding: 3% 5%;
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
`;

export const CardSubTitle = styled.Text`
  font-size: 15px;
  font-weight: 400;
  color: white;
`;

export const CardBalance = styled.Text`
  font-size: 35px;
  font-weight: 700;
  color: white;
`;

export const VerifiedText = styled.Text`
  font-size: 10px;
  font-weight: 400;
  color: white;
`;
