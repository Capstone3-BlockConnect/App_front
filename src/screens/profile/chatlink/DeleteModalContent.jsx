import styled, { css } from "@emotion/native";
import { Alert } from "react-native";
import { Button } from "react-native-paper";

const DeleteModalContent = ({ deleteLink, setModalVisible, getMyLink }) => {
  const deleteButtonHandler = async () => {
    console.log("dd");
    const response = await deleteLink();
    console.log(JSON.stringify(response));
    if (response) {
      Alert.alert("알립니다", "링크가 삭제되었습니다");
      const result = await getMyLink();
      setModalVisible(false);
    }
  };

  return (
    <Container
      onPress={(e) => {
        e.preventDefault();
      }}
    >
      <TitleArea>
        <Title>매칭을 위해서 추후 꼭 재등록 해주셔야 합니다</Title>
        <Title
          style={css`
            color: red;
            font-weight: 900;
          `}
        >
          정말삭제하시겠습니까?
        </Title>
      </TitleArea>
      <ButtonArea>
        <CancelButton
          labelStyle={css`
            color: black;
            font-weight: 700;
            font-size: 17px;
          `}
          onPress={() => {
            setModalVisible(false);
          }}
        >
          취소
        </CancelButton>
        <DeleteButton
          labelStyle={css`
            color: white;
            font-weight: 700;
            font-size: 17px;
          `}
          onPress={deleteButtonHandler}
        >
          삭제
        </DeleteButton>
      </ButtonArea>
    </Container>
  );
};

export default DeleteModalContent;

const Container = styled.Pressable`
  background-color: white;

  border-radius: 10px;
  border: 1px solid black;

  flex-flow: column nowrap;
  padding: 30px 20px;

  row-gap: 20px;
`;

const TitleArea = styled.View`
  flex-flow: column nowrap;
  align-items: center;
  row-gap: 10px;
`;

const ContentArea = styled.View``;

const ButtonArea = styled.View`
  flex-flow: row nowrap;
  column-gap: 10px;
`;
// ------ Element Level ------
const Title = styled.Text`
  font-weight: 700;
  font-size: 15px;
`;

// ------ Re-use Level ------

const ButtonTemplate = styled(Button)`
  border-radius: 8px;
  padding: 1px 0px;

  flex: 1;
  column-gap: 10px;
`;

const CancelButton = styled(ButtonTemplate)`
  background-color: #ccc;
`;

const DeleteButton = styled(ButtonTemplate)`
  background-color: #272643;
`;
