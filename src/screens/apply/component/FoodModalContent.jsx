import styled, { css } from "@emotion/native";
import { useMemo, useState } from "react";
import { Button } from "react-native-paper";

const FoodModalContent = ({ setModalVisible, requestData, setRequestData }) => {
  // 한번만 필요하니꺼~
  const FoodList = useMemo(() => [
    "한식",
    "일식",
    "아시안",
    "양식",
    "테이크아웃",
    "치킨/피자",
    "술집",
    "카페",
  ]);

  return (
    <Container
      onPress={(e) => {
        e.preventDefault();
      }}
    >
      <ContainerTitle>선호하는 음식 카테고리를 골라주세요</ContainerTitle>
      <ContainerSubTitle>
        상대방 매칭에 사용되는 데이터이니 신중하게 골라주세요:)
      </ContainerSubTitle>
      <OptionArea>
        {FoodList.map((food, index) => (
          <OptionButton
            key={index}
            selected={food == requestData?.category}
            onPress={() => {
              setRequestData((prev) => ({ ...prev, category: food }));
            }}
          >
            <OptionButtonText>{food}</OptionButtonText>
          </OptionButton>
        ))}
      </OptionArea>
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
        선택 완료
      </ChosenButton>
    </Container>
  );
};

export default FoodModalContent;

const Container = styled.Pressable`
  flex-flow: column nowrap;

  background-color: white;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid black;

  row-gap: 15px;
`;

const OptionArea = styled.View`
  flex-flow: row wrap;
  justify-content: center;

  align-items: flex-start;
  align-content: flex-start;

  row-gap: 5px;
  column-gap: 5px;
`;

const OptionButton = styled.Pressable`
  border: 1px solid black;
  border-radius: 8px;
  padding: 5px 3px;

  align-items: center;
  justify-content: center;

  flex: 1 1 30%;

  border: ${(props) =>
    props.selected ? "1px solid black" : "1px solid black"};
  background-color: ${(props) => (props.selected ? "#b5ff71" : "#f4e6e7")};
`;
const OptionButtonText = styled.Text`
  font-size: 15px;
  font-weight: 700;
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
