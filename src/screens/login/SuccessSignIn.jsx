import styled, { css } from "@emotion/native";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import { Button } from "react-native-paper";

const SuccessSignIn = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <TextArea>
        <Title>가입이 완료되었습니다.</Title>
      </TextArea>
      <ImageArea>
        <Image
          source={require("../../../assets/complete.jpeg")}
          resizeMode="stretch"
        />
      </ImageArea>
      <ButtonArea>
        <HomeButton
          labelStyle={css`
            font-size: 17px;
            font-weight: 700;
            color: black;
          `}
          onPress={() => {
            navigation.navigate("Home", { screen: "서비스 소개" });
          }}
        >
          처음으로
        </HomeButton>
        <GoMatchingButton
          labelStyle={css`
            font-size: 17px;
            font-weight: 700;
            color: white;
          `}
        >
          매칭하기
        </GoMatchingButton>
      </ButtonArea>
    </Container>
  );
};

export default SuccessSignIn;

const Container = styled.View`
  flex-flow: column nowrap;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  padding-top: 40px;

  row-gap: 15px;
  background-color: white;
`;

//
const TextArea = styled.View`
  flex-flow: column nowrap;
`;
const ImageArea = styled.View`
  width: 100%;
  height: 40%;
  overflow: hidden;
`;
const ButtonArea = styled.View`
  flex-flow: row nowrap;
  column-gap: 10px;
  padding: 0px 10px;
`;
//

const Title = styled.Text`
  font-weight: 700;
  font-size: 17px;
`;

const HomeButton = styled(Button)`
  flex: 1;
  background-color: #ccc;
  border-radius: 8px;
  padding: 3px 0px;
`;

const GoMatchingButton = styled(Button)`
  flex: 1;
  background-color: #272643;
  border-radius: 8px;
  padding: 3px 0px;
`;
