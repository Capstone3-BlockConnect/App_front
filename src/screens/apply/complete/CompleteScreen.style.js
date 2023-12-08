import styled from "@emotion/native";
import { Button } from "react-native-paper";

// ------ Container Level ------
export const Container = styled.ScrollView`
  flex: 1;
  background-color: white;

  padding: 20px 10px;
`;

// ------ Area Level ------
export const MatchingInfoArea = styled.View`
  row-gap: 10px;
`;

export const NotifyArea = styled.View`
  flex-flow: column nowrap;
  row-gap: 10px;
`;

export const OpenChatArea = styled.View`
  row-gap: 10px;
`;

export const ButtonArea = styled.View`
  width: 100%;
  flex-flow: row nowrap;
  justify-content: space-between;

  column-gap: 10px;
`;

// ------ Box Level ------
export const DotBox = styled.View`
  align-items: center;
  justify-content: center;

  flex: 0 1 10px;
`;

export const Notify = styled.View`
  flex-flow: row nowrap;
`;
export const NotifyTextBoxWrapper = styled.View`
  row-gap: 10px;
`;

export const NotifyTextBox = styled.View`
  flex-flow: row nowrap;

  padding-left: 2px;

  flex: 1 1 98%;
`;

// ------ Element Level ------
export const BoldText = styled.Text`
  font-weight: 700;
`;

export const Dot = styled.View`
  width: 2px;
  height: 2px;
  border-radius: 100px;
  background-color: black;

  justify-content: flex-start;
`;

export const InformationText = styled.Text`
  font-size: 13px;
  line-height: 20px;
  font-weight: 400;
`;

// ------ Re-use Level -------
export const AreaLabel = styled(BoldText)`
  font-size: 17px;
`;

export const RefuseButton = styled(Button)`
  flex: 1 1 48%;
  border-radius: 8px;
  background-color: white;
  border: 1px solid black;

  padding: 1px 0px;
`;

export const ConnectButton = styled(Button)`
  flex: 1 1 48%;
  border-radius: 8px;

  background-color: #272643;
  padding: 5px 0px;
`;
