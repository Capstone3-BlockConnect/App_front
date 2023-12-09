import styled, { css } from "@emotion/native";
import { Button } from "react-native-paper";

const LoginErrorModalContents = ({
  setModalVisible,
  modalWords = "로그인 실패",
}) => {
  return (
    <Container>
      <UpperContainer>
        <Title
          style={css`
            font-weight: 700;
            align-self: center;
          `}
        >
          로그인 에러
        </Title>
        <Title
          style={css`
            font-weight: 400;
            font-size: 20px;
            align-self: center;
          `}
        >
          {modalWords}
        </Title>
      </UpperContainer>
      <ButtonContainer>
        <Button
          mode="contained"
          labelStyle={css`
            font-size: 17px;
            font-weight: 700;
            color: white;
          `}
          style={css`
            border-radius: 8px;
            background-color: #272643;
            flex: 1;
          `}
          onPress={() => {
            setModalVisible(false);
          }}
        >
          다시 로그인
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default LoginErrorModalContents;

const Container = styled.View`
  flex-flow: column nowrap;

  background-color: white;
  border-radius: 10px;
  border: 1px solid black;

  row-gap: 20px;
`;

const UpperContainer = styled.View`
  flex-flow: column nowrap;
  padding: 20px 80px;
`;

const ButtonContainer = styled.View`
  width: 100%;
  flex-flow: row nowrap;

  padding: 0px 10px 20px 10px;
`;

const Title = styled.Text`
  font-size: 17px;
  font-weight: 700;
`;
