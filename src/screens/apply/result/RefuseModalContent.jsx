import styled, { css } from "@emotion/native";
import { Button } from "react-native-paper";

const RefuseModalContent = ({ setModalVisible }) => {
  return (
    <Container>
      <TextContainer>
        <Title>거절하시면 이번 매칭을 복구할 수 없습니다.</Title>
        <SubTitle
          style={css`
            align-self: center;
          `}
        >
          정말 거절하시겠습니까?
        </SubTitle>
      </TextContainer>
      <ButtonContainer>
        <Button
          mode="contained"
          style={css`
            flex: 1;
            border-radius: 8px;
            background-color: #ccc;
          `}
          labelStyle={css`
            font-size: 17px;
            font-weight: 700;
            color: black;
          `}
          onPress={() => {
            setModalVisible(false);
          }}
        >
          닫기
        </Button>
        <Button
          mode="contained"
          style={css`
            flex: 1;
            border-radius: 8px;
            background-color: #272643;
          `}
          labelStyle={css`
            font-size: 17px;
            font-weight: 700;
            color: white;
          `}
        >
          거절
        </Button>
      </ButtonContainer>
    </Container>
  );
};

export default RefuseModalContent;

const Container = styled.View`
  padding: 30px 40px;
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;

  row-gap: 20px;
`;

const TextContainer = styled.View`
  flex-flow: column nowrap;
  row-gap: 5px;
`;

const ButtonContainer = styled.View`
  flex-flow: row nowrap;
  column-gap: 10px;
`;

const Title = styled.Text`
  font-weight: 700;
  font-size: 17px;
`;

const SubTitle = styled.Text`
  font-weight: 700;
  font-size: 17px;
  color: red;
`;
