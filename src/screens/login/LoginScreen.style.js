import { Button, Text, TextInput } from "react-native-paper";
import styled from "@emotion/native";

export const ScreenContainer = styled.View`
  flex: 1;
  align-items: center;
  background-color: white;
  justify-content: center;
`;

export const LoginBox = styled.View``;
export const LoginTitle = styled(Text)`
  margin-bottom: 2%;
  color: black;
`;

export const LoginInput = styled(TextInput)`
  margin-bottom: 2%;
  background-color: white;
  color: black;
`;

export const LoginButton = styled(Button)`
  border-radius: 10px;
`;
