import { css } from "@emotion/native";
import * as styles from "./ResultScreen.style";
import NotifyWithTime from "../../../components/atom/NotifyWithTime";
import * as profileStyle from "../../profile/myInfo/MyInfoScreen.style";
import { useNavigation } from "@react-navigation/native";
const ResultScreen = () => {
  const navigation = useNavigation();

  return (
    <styles.Container
      contentContainerStyle={css`
        row-gap: 15px;
      `}
    >
      <styles.MatchingInfoArea>
        <styles.AreaLabel>임기현 님의 10월 12일 매칭정보</styles.AreaLabel>
        <profileStyle.UpperWrapper
          style={css`
            background-color: #e5f0db;
            border-radius: 10px;
            border: 1px solid black;
            padding: 20px 10px;
            width: 100%;
          `}
        >
          <profileStyle.ProfileImage />
          <profileStyle.UpperInfoTextArea>
            <profileStyle.UpperBoldText>
              "닉네임을 등록해주세요"
            </profileStyle.UpperBoldText>
            <profileStyle.UpperSubText>21살</profileStyle.UpperSubText>
            <profileStyle.UpperSubText>ENFP</profileStyle.UpperSubText>
          </profileStyle.UpperInfoTextArea>
        </profileStyle.UpperWrapper>
      </styles.MatchingInfoArea>
      <styles.NotifyArea>
        <styles.AreaLabel>2023.10.12</styles.AreaLabel>
        <NotifyWithTime
          timeText="13:00"
          contentText="식사 시작"
          lightColor="#F3BABD"
        />
        <NotifyWithTime timeText="13-15" contentText="식사 중" />
        <NotifyWithTime
          timeText="15:00"
          contentText="식사 마감"
          lightColor="#F3BABD"
        />
      </styles.NotifyArea>
      <styles.InfoArea>
        <styles.AreaLabel>안내</styles.AreaLabel>
        <styles.NotifyTextBoxWrapper>
          <styles.Notify>
            <styles.DotBox>
              <styles.Dot />
            </styles.DotBox>
            <styles.NotifyTextBox>
              <styles.InformationText>
                2번 매칭을 거절하시면 서비스 이용이 제한될 수 있습니다.
              </styles.InformationText>
            </styles.NotifyTextBox>
          </styles.Notify>

          <styles.Notify>
            <styles.DotBox>
              <styles.Dot />
            </styles.DotBox>
            <styles.NotifyTextBox>
              <styles.InformationText>
                매칭 중에 잘못된 행동으로 신고가 접수되면, 사전고지 없이
                서비스이용이 제한될 수 있습니다.
              </styles.InformationText>
            </styles.NotifyTextBox>
          </styles.Notify>

          <styles.Notify>
            <styles.DotBox>
              <styles.Dot />
            </styles.DotBox>
            <styles.NotifyTextBox>
              <styles.InformationText>
                매칭 완료부터 식사까지는 꼭 메일을 확인 부탁드립니다.
              </styles.InformationText>
            </styles.NotifyTextBox>
          </styles.Notify>
        </styles.NotifyTextBoxWrapper>
      </styles.InfoArea>
      <styles.ButtonArea>
        <styles.RefuseButton
          mode="contained"
          labelStyle={css`
            font-size: 17px;
            font-weight: 900;
            color: black;
          `}
        >
          거절
        </styles.RefuseButton>
        <styles.ConnectButton
          mode="contained"
          labelStyle={css`
            font-size: 17px;
            font-weight: 900;
            color: white;
          `}
          onPress={() => {
            navigation.navigate("밥 메이트 연결완료");
          }}
        >
          연결하기
        </styles.ConnectButton>
      </styles.ButtonArea>
    </styles.Container>
  );
};

export default ResultScreen;
