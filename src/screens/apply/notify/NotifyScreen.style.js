import styled from "@emotion/native";
import { Button } from "react-native-paper";

// ------ Container Level ------
export const Container = styled.ScrollView`
  flex: 1;
  background-color: white;

  padding: 20px 10px;
`;

// ------ Area Level ------

export const CheckArea = styled.View`
  flex-flow: column nowrap;
`;

export const NotifyArea = styled.View`
  flex-flow: column nowrap;

  row-gap: 10px;
`;

export const ButtonArea = styled.View`
  flex-flow: row nowrap;
  justify-content: space-between;

  column-gap: 10px;
  width: 100%;
`;

// ------ Box Level ------
export const NotifyTextBoxWrapper = styled.View`
  row-gap: 10px;
`;

export const NotifyComponentWrapper = styled.View`
  row-gap: 10px;
  margin-top: 10px;
`;

export const NotifyTextBox = styled.View`
  flex-flow: row nowrap;

  padding-left: 2px;

  flex: 1 1 98%;
`;

export const DotBox = styled.View`
  align-items: center;
  justify-content: center;

  flex: 0 1 10px;
`;

export const NotifyCheckBox = styled.View`
  flex-flow: row nowrap;
  align-items: center;

  align-self: center;
`;

// ------ Elements Level ------
const BoldText = styled.Text`
  font-weight: 700;
`;

const LightText = styled.Text`
  font-weight: 400;
`;

export const ButtonTemplate = styled(Button)`
  flex: 1 1 48%;
  border-radius: 5px;
  padding: 1px 0px;
`;

export const Dot = styled.View`
  width: 2px;
  height: 2px;
  border-radius: 100px;
  background-color: black;

  justify-content: flex-start;
`;

// ------ Re-use Elements Level ------
export const AreaLabel = styled(BoldText)`
  font-size: 17px;
`;

export const InformationText = styled(LightText)`
  font-size: 13px;
  line-height: 20px;
`;

export const CheckText = styled(LightText)`
  font-size: 15px;
`;

export const CancelButton = styled(ButtonTemplate)`
  background-color: #ccc;

  font-weight: 900;
  color: black;
`;

export const ApplyButton = styled(ButtonTemplate)`
  background-color: ${(props) => (props.isDisabled ? "#ccc" : "#272643")};

  font-weight: 900;
`;
