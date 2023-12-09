import styled from "@emotion/native";

export const Container = styled.ScrollView`
  flex: 1;
  width: 97%;
  align-self: center;
  background-color: white;
`;

// 환영문

export const GreetBox = styled.View`
  flex-flow: column nowrap;
  row-gap: 10px;

  padding: 10px;
`;

export const GreetFirstArea = styled.View`
  flex-flow: row nowrap;
  align-items: center;
`;

export const GreetBoldText = styled.Text`
  font-size: 17px;
  font-weight: 900;
`;

export const GreetNormalText = styled.Text`
  font-size: 17px;
  font-weight: 400;
`;

// Infomation Card

export const InfoCard = styled.View`
  border: 1px solid black;
  width: 100%;
  background-color: #e5f0db;
  border-radius: 10px;

  padding-bottom: 20px;
`;

export const UpperWrapper = styled.View`
  flex-flow: row nowrap;

  border-bottom-width: 1px;
  border-bottom-color: black;
  width: 90%;
  column-gap: 20px;
  padding: 15px 0px 15px 0px;

  align-self: center;
  margin-bottom: 20px;
`;

export const ProfileImage = styled.View`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background-color: gray;
`;

export const UpperInfoTextArea = styled.View`
  flex-flow: column nowrap;
  row-gap: 10px;
`;

export const UpperBoldText = styled(GreetBoldText)``;
export const UpperSubText = styled(GreetNormalText)`
  font-size: 12px;
`;

export const LowerWrapper = styled.View`
  flex-flow: column nowrap;
  padding: 5px 5px 32px 5px;

  align-items: center;
  border: 1px solid black;
  width: 90%;
  align-self: center;
  border-radius: 10px;
`;

export const LowerTitle = styled(GreetBoldText)`
  border-bottom-width: 1px;
  border-bottom-color: black;
  width: 90%;
  text-align: center;
  padding: 10px 0px 10px 0px;
`;

export const LowerItem = styled.View`
  flex-flow: row nowrap;
  padding-top: 24px;

  width: 80%;
  justify-content: space-around;
`;

export const LowerItemTitleWrapper = styled.View`
  flex: 1;
`;
export const LowerItemTitle = styled(GreetBoldText)`
  font-size: 14px;
`;

export const LowerItemContent = styled(GreetNormalText)`
  flex: 1;
`;
