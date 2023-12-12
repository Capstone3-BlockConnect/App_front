import styled, { css } from "@emotion/native";
import { useState } from "react";
import { Button } from "react-native-paper";

const EatTimeModalContent = ({
  setModalVisible,
  setRequestData,
  requestData,
}) => {
  const timeList = ["12:00", "13:00", "14:00", "17:00", "18:00", "19:00"];
  const lunch = timeList.splice(0, 3);
  const dinner = timeList.splice(0, 3);

  return (
    <Container
      onPress={(e) => {
        e.preventDefault();
      }}
    >
      <ContainerTitle>식사 시간을 선택해주세요</ContainerTitle>
      <ChooseArea>
        <AreaLabel>점심식사</AreaLabel>
        <TimeButtonBox>
          {lunch.map((time, index) => (
            <TimeButton
              key={index}
              onPress={() => {
                setRequestData((prev) => ({ ...prev, time: time }));
              }}
              selected={requestData?.time == time}
            >
              <TimeButtonText>{time}</TimeButtonText>
            </TimeButton>
          ))}
        </TimeButtonBox>
      </ChooseArea>

      <ChooseArea>
        <AreaLabel>저녁식사</AreaLabel>
        <TimeButtonBox>
          {dinner.map((time, index) => (
            <TimeButton
              key={index}
              onPress={() => {
                setRequestData((prev) => ({ ...prev, time: time }));
              }}
              selected={requestData?.time == time}
            >
              <TimeButtonText>{time}</TimeButtonText>
            </TimeButton>
          ))}
        </TimeButtonBox>
      </ChooseArea>

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

export default EatTimeModalContent;

const Container = styled.Pressable`
  flex-flow: column nowrap;

  background-color: white;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid black;

  row-gap: 15px;
`;

const ContainerTitle = styled.Text`
  font-size: 17px;
  font-weight: 900;
  align-self: center;
`;

const ChooseArea = styled.View`
  flex-flow: column nowrap;
  row-gap: 10px;
`;

const AreaLabel = styled.Text`
  font-size: 12px;
  font-weight: 400;
`;

const TimeButtonBox = styled.View`
  flex-flow: row nowrap;
  column-gap: 15px;
`;

const TimeButton = styled.Pressable`
  border-radius: 10px;
  background-color: ${(props) => (props.selected ? "#b5ff71" : "#f4e6e7")};

  align-items: center;
  justify-content: center;
  padding: 10px 23px;
  border: ${(props) =>
    props.selected ? "1px solid black" : "1px solid black"};
`;

const TimeButtonText = styled.Text`
  font-size: 12px;
  font-weight: 700;
`;

const ChosenButton = styled(Button)`
  border-radius: 8px;
  padding: 1px 0px;
  background-color: #272643;
`;
