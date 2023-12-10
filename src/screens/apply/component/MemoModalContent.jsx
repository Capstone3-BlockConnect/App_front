import styled, { css } from "@emotion/native";
import { memo, useState } from "react";
import { Button, TextInput } from "react-native-paper";

const MemoModalContent = ({ setModalVisible, requestData, setRequestData }) => {
  return (
    <Container
      onPress={(e) => {
        e.preventDefault();
      }}
    >
      <TextArea>
        <ContainerTitle>상대방에게 전달할 메모를 적어주세요</ContainerTitle>
        <ContainerSubTitle>매칭 시에 상대방에게 보입니다</ContainerSubTitle>
      </TextArea>
      <MemoArea>
        <TextInput
          label="클릭"
          style={css`
            font-size: 12px;
            background-color: white;
            border: 1px solid black;
            flex: 1;
            color: black;
          `}
          outlineStyle={css`
            border-color: black;
          `}
          placeholder="메모를 입력해주세요! ex) 매운걸 잘 못먹어요"
          numberOfLines={10}
          value={requestData?.memo}
          onChangeText={(text) => {
            setRequestData((prev) => ({ ...prev, memo: text }));
          }}
        />
      </MemoArea>
      <ChosenButton
        mode="contained"
        onPress={() => {
          setModalVisible(false);
        }}
        labelStyle={css`
          color: white;
          font-weight: 900;
          font-size: 15px;
        `}
      >
        작성 완료
      </ChosenButton>
    </Container>
  );
};

export default MemoModalContent;

const Container = styled.Pressable`
  flex-flow: column nowrap;

  background-color: white;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid black;

  row-gap: 15px;
`;
const TextArea = styled.View`
  flex-flow: column nowrap;
`;
const MemoArea = styled.View`
  flex-flow: column nowrap;
  min-height: 150px;
`;

const ContainerTitle = styled.Text`
  font-size: 17px;
  font-weight: 900;
  align-self: center;
`;

const ContainerSubTitle = styled.Text`
  font-size: 14px;
  font-weight: 400;
`;

const ChosenButton = styled(Button)`
  border-radius: 8px;
  padding: 1px 0px;
  background-color: #272643;
`;
