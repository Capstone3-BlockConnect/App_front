import styled, { css } from "@emotion/native";
import { Button } from "react-native-paper";
import DateTimePicker, {
  DateTimePickerAndroid,
} from "@react-native-community/datetimepicker";
import { useEffect, useState } from "react";

const DateModalContent = ({ setRequestData, setVisible }) => {
  const [date, setDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDate(currentDate);
    console.log(`${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  useEffect(() => {
    showDatepicker();
  }, []);

  return (
    <Container>
      <TextArea>
        <ContainerTitle>식사 날짜를 선택해주세요</ContainerTitle>
      </TextArea>
      <SelectionArea></SelectionArea>
      <ChosenButton
        labelStyle={css`
          color: white;
          font-weight: 700;
          font-size: 15px;
        `}
        onPress={() => {
          setVisible(false);
        }}
      >
        선택완료
      </ChosenButton>
    </Container>
  );
};

export default DateModalContent;

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
const SelectionArea = styled.View`
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
