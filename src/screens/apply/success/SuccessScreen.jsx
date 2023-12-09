import styled, { css } from "@emotion/native";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import { Button } from "react-native-paper";

const SuccessScreen = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <TextContainer>
        <Title>신청이 완료되었습니다</Title>
        <SubTitle>매칭 결과는 완료되면 알려드려요!</SubTitle>
      </TextContainer>
      <ImageContainer>
        <Image
          source={require("../../../../assets/complete.jpeg")}
          resizeMethod="auto"
          resizeMode="stretch"
        />
      </ImageContainer>
      <Button
        mode="contained"
        style={css`
          background-color: #272643;
          border-radius: 8px;
          padding: 5px 14px;
        `}
        labelStyle={css`
          font-size: 15px;
          font-weight: 900;
        `}
        onPress={() => {
          navigation.navigate("Home", { screen: "서비스 소개" });
        }}
      >
        홈화면으로 돌아가기
      </Button>
    </Container>
  );
};

export default SuccessScreen;

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: white;
  row-gap: 10px;
`;

const TextContainer = styled.View`
  flex-flow: column nowrap;
  align-items: center;
  width: 100%;

  row-gap: 10px;
`;

const ImageContainer = styled.View`
  width: 100%;
  height: 40%;
  overflow: hidden;
`;

const Title = styled.Text`
  color: black;
  font-size: 17px;
  font-weight: 700;
`;

const SubTitle = styled.Text`
  color: black;
  font-size: 15px;
  font-weight: 400;
`;
