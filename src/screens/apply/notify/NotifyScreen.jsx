import { Text } from "react-native";
import * as styles from "./NotifyScreen.style";
import NotifyWithTime from "../../../components/atom/NotifyWithTime";
import { css } from "@emotion/native";
import { Checkbox } from "react-native-paper";
import { useState } from "react";

const NotifyScreen = () => {
  const [checked, setChecked] = useState(false);
  const [matchingInfo, setMatchingInfo] = useState({
    date: "2023.10.11",
  });

  const checkBoxHander = () => {
    setChecked(!checked);
  };

  return (
    <styles.Container
      contentContainerStyle={css`
        row-gap: 40px;
      `}
    >
      <styles.CheckArea>
        <styles.AreaLabel>신청정보</styles.AreaLabel>
        <styles.AreaLabel>{matchingInfo.date}</styles.AreaLabel>
        <styles.NotifyComponentWrapper>
          <NotifyWithTime contentText="식사가능시간 시작" />
          <NotifyWithTime contentText="식사 매칭 시간" />
          <NotifyWithTime contentText="식사가능시간 마감" />
        </styles.NotifyComponentWrapper>
      </styles.CheckArea>
      <styles.NotifyArea>
        <styles.AreaLabel>안내</styles.AreaLabel>
        <styles.NotifyTextBoxWrapper>
          <styles.NotifyTextBox>
            <styles.DotBox>
              <styles.Dot />
            </styles.DotBox>
            <styles.NotifyTextBox>
              <styles.InformationText>
                식사시간 매칭은 시작시간 후 2시간까지로, 13시에 신청하셨다면
                13~15시로 신청이 들어갑니다.
              </styles.InformationText>
            </styles.NotifyTextBox>
          </styles.NotifyTextBox>

          <styles.NotifyTextBox>
            <styles.DotBox>
              <styles.Dot />
            </styles.DotBox>
            <styles.NotifyTextBox>
              <styles.InformationText>
                매칭 중에 잘못된 행동으로 신고가 접수되면, 사전고지 없이
                서비스이용이 제한될 수 있습니다.
              </styles.InformationText>
            </styles.NotifyTextBox>
          </styles.NotifyTextBox>

          <styles.NotifyTextBox>
            <styles.DotBox>
              <styles.Dot />
            </styles.DotBox>
            <styles.NotifyTextBox>
              <styles.InformationText>
                후기를 입력해주시면, 추첨을 통하여 아메리카노 쿠폰을 발송해
                드립니다.
              </styles.InformationText>
            </styles.NotifyTextBox>
          </styles.NotifyTextBox>
        </styles.NotifyTextBoxWrapper>
        <styles.NotifyCheckBox>
          <styles.CheckText>확인했습니다</styles.CheckText>
          <Checkbox
            status={checked ? "checked" : "unchecked"}
            color="black"
            uncheckedColor="gray"
            onPress={checkBoxHander}
          />
        </styles.NotifyCheckBox>
      </styles.NotifyArea>
      <styles.ButtonArea>
        <styles.CancelButton
          mode="contained"
          labelStyle={css`
            font-weight: 900;
            color: black;
            font-size: 17px;
          `}
        >
          취소하기
        </styles.CancelButton>
        <styles.ApplyButton
          mode="contained"
          labelStyle={css`
            font-weight: 900;
            font-size: 17px;
          `}
          isDisabled={!checked}
          disabled={checked ? false : true}
        >
          제출하기
        </styles.ApplyButton>
      </styles.ButtonArea>
    </styles.Container>
  );
};

export default NotifyScreen;
