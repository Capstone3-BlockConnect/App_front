import styled, { css } from "@emotion/native";
import { Button } from "react-native-paper";
import { color } from "../../../assets/colors/color";

// ------ Container Level ------
export const Container = styled.ScrollView`
  flex: 1;
  background-color: white;
  padding: 0px 10px;
`;
// ------ Area Level ------
export const LabelArea = styled.View`
  flex-flow: column nowrap;
  align-items: flex-start;
  width: 100%;
  align-self: center;

  row-gap: 5px;
  margin-bottom: 10px;
`;

// ------ Box Level ------
export const GenderBox = styled.View`
  flex-flow: row nowrap;
  column-gap: 10px;
`;
export const ButtonBox = styled.View`
  flex-flow: row nowrap;
  align-self: center;
  column-gap: 15px;
`;

export const FoodBox = styled.View`
  flex-flow: row wrap;
  justify-content: flex-start;
  justify-items: flex-start;
  align-items: center;

  row-gap: 10px;
  column-gap: 10px;
`;

// ------ Element Level ------
export const GenderButton = styled.Pressable`
  border: 1px solid gray;
  flex: 1;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 10px 0px;

  background-color: ${(props) => (props.selected ? "#E5F0DB" : "white")};
`;

export const FoodButton = styled.Pressable`
  border: 1px solid gray;
  flex: 1 1 30%;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  padding: 10px 0px;

  background-color: ${(props) => (props.selected ? "#E5F0DB" : "white")};
`;

export const Label = styled.Text`
  font-weight: 700;
  font-size: 15px;
  color: black;
`;

export const ButtonText = styled.Text`
  font-size: 15px;
  font-weight: 700;
`;
// ------ Reuse Level ------
export const PrevButton = styled(Button)`
  border-radius: 10px;
  background-color: ${color.BtnSub};
  flex: 1;
`;

export const NextButton = styled(PrevButton)`
  background-color: ${color.BtnPrimary};
`;
