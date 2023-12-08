import styled from "@emotion/native";
import { Button } from "react-native-paper";

export const Container = styled.View`
  flex: 1 1 100%;
  background-color: white;

  padding: 20px 10px;

  row-gap: 20px;
`;

//

export const UpperArea = styled.View``;

export const ContentArea = styled.View`
  row-gap: 11px;
`;

//
export const InfoBox = styled.Pressable`
  padding: 20px 16px;
  border-radius: 8px;

  flex-flow: column nowrap;
  align-items: center;

  background-color: ${(props) => (props.color ? props.color : "#EFF0F0")};
  border: ${(props) => props.bordered && "1px solid black"};
`;

export const InputLabelBox = styled.View`
  flex-direction: column nowrap;
  align-items: flex-start;
`;

export const InputContainer = styled.View`
  flex-flow: column nowrap;
`;

export const HorizontalInputContainer = styled.View`
  flex-flow: row nowrap;
  justify-content: space-between;

  width: 100%;
`;

export const ButtonContainer = styled.View`
  flex-flow: row nowrap;
  width: 100%;
  justify-content: center;

  margin-top: 50px;

  column-gap: 10px;
`;

export const BoldContent = styled.Text`
  font-weight: 700;
`;

export const Title = styled.Text`
  font-weight: 400;
`;

export const CancelButton = styled(Button)`
  background-color: #ccc;
  border-radius: 5px;
  flex: 1;

  padding: 1px 0px;
`;

export const ApplyButton = styled(Button)`
  flex: 1 1 48%;
  background-color: #272643;
  border-radius: 5px;
  flex: 1;

  padding: 1px 0px;
`;

// re-use Text Component
export const MateBoldContent = styled(BoldContent)`
  font-size: 32px;
`;

export const LabelText = styled(Title)`
  font-size: 17px;
`;

export const InputBoxContent = styled(BoldContent)`
  font-size: 24px;
`;

export const MemoBoldContent = styled(BoldContent)`
  font-size: 15px;
`;

// re-use Box Component

export const FoodBox = styled(InfoBox)`
  width: 48%;
  background-color: #e5f0db;
`;

export const MemoBox = styled(InfoBox)`
  width: 48%;
  background-color: #f4e6e7;

  height: fit-content;
`;

export const MateBox = styled(InfoBox)`
  background-color: #e5f0db;
  border: 1px solid black;
`;

//
