import styled from "styled-components";

export const ContainerView = styled.View`
  flex: 1;
  background-color: white;

  padding-top: 10px;
`;

export const WalletBox = styled.Pressable`
  border: 1px solid black;
  width: 90%;

  align-items: center;

  padding: 7px 16px 20px 16px;
  border-radius: 8px;
  align-self: center;

  background-color: #e3f6f5;
`;

export const TitleWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`;

export const WalletTitle = styled.Text`
  font-size: 15px;
  font-weight: 700;
`;

export const WalletBalance = styled.Text`
  font-size: 32px;
  font-weight: 900;
`;

export const WalletBalanceLabel = styled.Text`
  font-size: 15px;
  font-weight: 900;
`;

// Menu List
export const WalletMenu = styled.View`
  margin-top: 20px;
`;

export const WalletItem = styled.Pressable`
  border-bottom-width: 1px;
  border-bottom-color: #cbcbcb;
  border-bottom-style: double;

  padding-left: 5%;
  padding-top: 25px;
  padding-bottom: 25px;
`;

export const WalletItemLabel = styled.Text`
  font-size: 20px;
  font-weight: 800;
`;
