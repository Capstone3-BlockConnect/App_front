import * as styles from "./CompleteScreen.style";
import * as profileStyle from "../../profile/myInfo/MyInfoScreen.style";
import { css } from "@emotion/native";
const CompleteScreen = () => {
  return (
    <styles.Container
      contentContainerStyle={css`
        row-gap: 25px;
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
      </styles.NotifyArea>
      <styles.OpenChatArea>
        <styles.AreaLabel>카카오톡 오픈채팅 링크</styles.AreaLabel>
        <styles.NotifyTextBoxWrapper>
          <styles.Notify>
            <styles.DotBox>
              <styles.Dot />
            </styles.DotBox>
            <styles.NotifyTextBox>
              <styles.InformationText>
                상대방의 카카오톡 오픈채팅 링크로 연락하시면 됩니다.
              </styles.InformationText>
            </styles.NotifyTextBox>
          </styles.Notify>

          <styles.Notify>
            <styles.DotBox>
              <styles.Dot />
            </styles.DotBox>
            <styles.NotifyTextBox>
              <styles.InformationText>
                서비스 이용중, 타인에게 피해를 입혀 신고를 당할 경우, 예고없이
                서비스 정지가 될 수 있습니다.
              </styles.InformationText>
            </styles.NotifyTextBox>
          </styles.Notify>

          <styles.Notify>
            <styles.DotBox>
              <styles.Dot />
            </styles.DotBox>
            <styles.NotifyTextBox>
              <styles.InformationText>
                연결 이후에는 오픈카톡링크를 잘 확인해주시길 바랍니다.
              </styles.InformationText>
            </styles.NotifyTextBox>
          </styles.Notify>
        </styles.NotifyTextBoxWrapper>
      </styles.OpenChatArea>
      <styles.ButtonArea>
        <styles.ConnectButton
          mode="contained"
          labelStyle={css`
            font-size: 17px;
            font-weight: 900;
            color: white;
          `}
          onPress={() => {}}
        >
          채팅링크 확인하기
        </styles.ConnectButton>
      </styles.ButtonArea>
    </styles.Container>
  );
};

export default CompleteScreen;
