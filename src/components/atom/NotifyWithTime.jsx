import styled, { css } from "@emotion/native";

const NotifyWithTime = ({
  timeText = "00:00",
  contentText = "입력해주세요",
  lightColor = "#CBE4B4",
}) => {
  return (
    <Container>
      <TimeBox>
        <TimeText>{timeText}</TimeText>
      </TimeBox>
      <TextBox>
        <ContentText>{contentText}</ContentText>
      </TextBox>
      <LightBox>
        <Light />
      </LightBox>
    </Container>
  );
};
export default NotifyWithTime;

// ------ Container Level ------
const Container = styled.View`
  flex-flow: row nowrap;
  align-items: center;

  padding: 14px 16px;
  border: 1px solid #dddedf;
  border-radius: 6px;
`;

// ------ Box Level ------
const TimeBox = styled.View`
  flex: 2 1 10%;

  border-right-width: 1px;
  border-right-color: #b9bbbc;
  border-right-style: solid;

  align-items: flex-start;
  justify-content: center;
`;
const TextBox = styled.View`
  flex: 3 1 50%;
  padding-left: 10px;

  align-items: flex-start;
  justify-content: center;
`;
const LightBox = styled.View`
  flex: 1 1 5%;
  align-items: center;
  justify-content: center;
`;

// ------ Element Level ------
const TimeText = styled.Text`
  font-size: 12px;
  font-weight: 700;
`;

const ContentText = styled.Text`
  font-size: 16px;
  font-weight: 400;
`;

const Light = styled.View`
  border-radius: 100px;
  width: 14px;
  height: 14px;
  background-color: ${(props) => (props.color ? props.color : "#CBE4B4")};
`;
