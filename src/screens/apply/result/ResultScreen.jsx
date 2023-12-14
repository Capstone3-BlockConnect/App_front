import { css } from "@emotion/native";
import * as styles from "./ResultScreen.style";
import NotifyWithTime from "../../../components/atom/NotifyWithTime";
import * as profileStyle from "../../profile/myInfo/MyInfoScreen.style";
import { useNavigation } from "@react-navigation/native";
import CustomModal from "../../../components/modal/CustomModal";
import { useState } from "react";
import RefuseModalContent from "./RefuseModalContent";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/LoginState";
import { useEffect } from "react";
import {
  getChatLink,
  getMatchedLog,
  getUserProfile,
} from "../../../api/matchingApi";
import { Alert } from "react-native";
import { extractDate } from "../../../api/others";
import { addTwoHours } from "../../../components/addTwoHours";

const ResultScreen = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const { nickName } = useRecoilValue(userState);
  const chatLink = "https://open.kakao.com/o/gKEDMQXf";
  const [matchedLog, setMatchedLog] = useState({
    mateId: "",
    date: "",
    memo: "",
    category: "",
    store: "",
    age: "",
    time: "",
  });

  useEffect(() => {
    console.log("----------");
    console.log(JSON.stringify(matchedLog));
  }, [matchedLog]);

  const getLink = async ({ id }) => {
    const { data, status } = await getChatLink(id);

    return { status: status, data: data };
  };

  const getProfile = async ({ id }) => {
    const { data, status } = await getUserProfile({ id: id });

    return { status, data };
  };

  const getLog = async () => {
    const { data, status } = await getMatchedLog();

    return {
      status: status,
      data: data?.matchings[data?.matchings.length - 1],
    };
  };

  useEffect(() => {
    const getData = async () => {
      const { status, data } = await getLog();
      if (status == 200) {
        setMatchedLog(data);
        const profile = await getProfile({ id: data?.user2 }).data;

        setMatchedLog((prev) => {
          return {
            ...prev,
            mateId: profile?.user?.nickname,
            date: data?.dateOnly,
            memo: data?.user2Memo,
            category: data?.category,
            store: data?.store,
            age: profile?.user?.age,
            gender: profile?.user?.gender,
            time: data?.time,
          };
        });
      } else {
        Alert.alert("알립니다.", "매칭결과 불러오기에 실패했습니다");
      }
    };

    getData();
  }, []);

  return (
    <styles.Container
      contentContainerStyle={css`
        row-gap: 15px;
      `}
    >
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      >
        <RefuseModalContent setModalVisible={setModalVisible} />
      </CustomModal>
      <styles.MatchingInfoArea>
        <styles.AreaLabel>
          {nickName} 님의 {matchedLog?.date} 매칭정보
        </styles.AreaLabel>
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
            <profileStyle.UpperBoldText>임수원</profileStyle.UpperBoldText>
            <profileStyle.UpperSubText>27살</profileStyle.UpperSubText>
            <profileStyle.UpperSubText>남자</profileStyle.UpperSubText>
          </profileStyle.UpperInfoTextArea>
        </profileStyle.UpperWrapper>
      </styles.MatchingInfoArea>
      <styles.NotifyArea>
        <styles.AreaLabel>{matchedLog?.date}</styles.AreaLabel>
        <NotifyWithTime
          timeText={matchedLog?.time}
          contentText="식사 시작"
          lightColor="#F3BABD"
        />
        <NotifyWithTime
          timeText={`${matchedLog?.time}-21:00`}
          contentText="식사 중"
        />
        <NotifyWithTime
          timeText={`21:00`}
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
          onPress={() => {
            setModalVisible(true);
          }}
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
            navigation.navigate("밥 메이트 연결완료", {
              name: matchedLog?.mateId,
              age: matchedLog?.age,
              gender: matchedLog?.gender,
              date: matchedLog?.date,
            });
          }}
        >
          연결하기
        </styles.ConnectButton>
      </styles.ButtonArea>
    </styles.Container>
  );
};

export default ResultScreen;
