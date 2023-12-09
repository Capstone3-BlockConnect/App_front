import * as styles from "./ChatManageScreen.style";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/LoginState";
import { css } from "@emotion/native";
import { Button } from "react-native-paper";

const ChatManageScreen = () => {
  const info = useRecoilValue(userState);

  const { age, foodCategory, gender, nickName, phoneNumber, userId, chatLink } =
    info;
  return (
    <styles.Container>
      <styles.RedCircle />
      <styles.BlueCircle />
      <styles.LayerContainer>
        <styles.GreetBox>
          <styles.GreetFirstArea>
            <styles.GreetBoldText>
              {nickName || "꿈꾸는 계란"}
            </styles.GreetBoldText>
            <styles.GreetNormalText>님의</styles.GreetNormalText>
          </styles.GreetFirstArea>
          <styles.GreetNormalText>채팅링크입니다.</styles.GreetNormalText>
        </styles.GreetBox>
        {/*
        채팅링크
        */}
        <styles.LinkCard>
          <styles.WordBox>
            <styles.WordBoxTitle>
              현재 표시되고 있는 채팅링크
            </styles.WordBoxTitle>
            <styles.WordLinkText ellipsizeMode="tail">
              {chatLink || "http://www.kakao.difjoewfjewiofj"}
            </styles.WordLinkText>
          </styles.WordBox>
          <Button
            mode="contained"
            style={css`
              border-radius: 5px;
              background-color: #272643;
              padding: 1px 0px;
            `}
            labelStyle={css`
              font-size: 14px;
              font-weight: 900;
            `}
          >
            채팅링크 변경하기
          </Button>
        </styles.LinkCard>
        {/*
        버튼
        */}
        <styles.ButtonBox>
          <styles.LeftBigArea>
            <styles.LeftButton>
              <styles.ButtonText>링크로 들어가기</styles.ButtonText>
            </styles.LeftButton>
          </styles.LeftBigArea>
          <styles.RightBigArea>
            <styles.RightUpperButton>
              <styles.ButtonText>내 프로필 보러가기</styles.ButtonText>
            </styles.RightUpperButton>
            <styles.RightLowerButton>
              <styles.ButtonText>링크 삭제하기</styles.ButtonText>
            </styles.RightLowerButton>
          </styles.RightBigArea>
        </styles.ButtonBox>
      </styles.LayerContainer>
    </styles.Container>
  );
};

export default ChatManageScreen;
