import styled, { css } from "@emotion/native";
import { Linking } from "react-native";
import { Button } from "react-native-paper";

const ChatLinkModal = ({ chatLink, setModalVisible }) => {
  const openURL = (url) => {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("CANNOT OPEN URL");
      }
    });
  };

  return (
    <Container>
      <UpperContainer>
        <Title>오픈 채팅방 링크정보</Title>
        <LinkText ellipsizeMode="tail" numberOfLines={1}>
          {chatLink}
        </LinkText>
      </UpperContainer>

      <Button
        style={css`
          background-color: #272643;
          border-radius: 8px;
          padding: 3px 0px;
        `}
        labelStyle={css`
          font-size: 15px;
          font-weight: 700;
          color: white;
        `}
        onPress={() => {
          openURL(chatLink);
        }}
      >
        링크로 이동하기
      </Button>
    </Container>
  );
};

export default ChatLinkModal;

const Container = styled.View`
  padding: 40px 30px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid black;
  flex-flow: column nowrap;
  row-gap: 30px;
`;

const UpperContainer = styled.View`
  row-gap: 8px;
  align-items: center;
  padding: 0px 40px;
`;
const Title = styled.Text`
  font-size: 17px;
  font-weight: 700;
`;

const LinkText = styled.Text`
  font-size: 13px;
  font-weight: 400;
`;
