import * as styles from "./ChatManageScreen.style";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/LoginState";
import { css } from "@emotion/native";
import { Button, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Alert, Linking } from "react-native";
import {
  deleteMyOpenChatLink,
  getMyOpenChatLink,
  updateMyOpenChatLink,
} from "../../../api/openChatLink";
import CustomModal from "../../../components/modal/CustomModal";
import DeleteModalContent from "./DeleteModalContent";

const ChatManageScreen = () => {
  const [isModifying, setIsModifying] = useState(false);
  const [openChatLink, setOpenChatLink] = useState("");
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const info = useRecoilValue(userState);
  const navigation = useNavigation();
  const { age, foodCategory, gender, nickName, phoneNumber, userId, chatLink } =
    info;

  const openURL = (url) => {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        if (url) {
          Linking.openURL(url);
        } else {
          Alert.alert("알립니다", "등록된 채팅링크가 없습니다");
        }
      } else {
        console.log("CANNOT OPEN URL");
      }
    });
  };

  const ModifyButtonHandler = async () => {
    if (isModifying) {
      setIsModifying(false);
      const { status } = await putMyLink();
      if (status == 200) {
        Alert.alert("알립니다.", "채팅 링크가 변경되었어요");
      } else {
        Alert.alert(
          "알립니다.",
          "문제가 생겨서 채팅링크를 변경하지 못했어요. 이전 링크로 다시 변경합니다."
        );
        const response = await getMyLink();
        if (response?.status == 200) {
          console.log("이전 채팅링크로 롤백 완료");
        }
      }
    } else {
      setIsModifying(true);
    }
  };

  const getMyLink = async () => {
    const response = await getMyOpenChatLink();

    if (response?.status == 200) {
      setOpenChatLink(response?.data?.openChatLink);
      return true;
    } else {
      false;
    }
  };

  const putMyLink = async () => {
    const response = await updateMyOpenChatLink({
      openChatLink: openChatLink,
    });

    return { status: response.status, data: response.data };
  };

  const deleteLink = async () => {
    const response = await deleteMyOpenChatLink();

    if (response.status == 200) {
      return true;
    } else {
      Alert.alert("알립니다.", "삭제실패");
      return false;
    }
  };

  useEffect(() => {
    // 등록된 링크 가져오기
    getMyLink();
  }, []);

  return (
    <styles.Container>
      <styles.RedCircle />
      <styles.BlueCircle />
      <styles.LayerContainer>
        <CustomModal
          modalVisible={deleteModalVisible}
          setModalVisible={setDeleteModalVisible}
        >
          <DeleteModalContent
            deleteLink={deleteLink}
            setModalVisible={setDeleteModalVisible}
            getMyLink={getMyLink}
          />
        </CustomModal>
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
            {isModifying ? (
              <TextInput
                textColor="black"
                placeholder="오픈카톡링크를 올려주세요"
                style={css`
                  background-color: white;
                  font-size: 12px;
                `}
                value={openChatLink}
                onChangeText={(text) => {
                  setOpenChatLink(text);
                }}
              />
            ) : (
              <styles.WordLinkText ellipsizeMode="tail">
                {openChatLink || "채팅링크가 존재하지 않습니다."}
              </styles.WordLinkText>
            )}
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
            onPress={ModifyButtonHandler}
          >
            {isModifying ? "완료" : "채팅링크 변경하기"}
          </Button>
        </styles.LinkCard>
        {/*
        버튼
        */}
        <styles.ButtonBox>
          <styles.LeftBigArea>
            <styles.LeftButton
              onPress={() => {
                openURL(openChatLink);
              }}
            >
              <styles.ButtonText>링크로 들어가기</styles.ButtonText>
            </styles.LeftButton>
          </styles.LeftBigArea>
          <styles.RightBigArea>
            <styles.RightUpperButton
              onPress={() => {
                navigation.navigate("myInfo");
              }}
            >
              <styles.ButtonText>내 프로필 보러가기</styles.ButtonText>
            </styles.RightUpperButton>
            <styles.RightLowerButton
              onPress={() => {
                setDeleteModalVisible(true);
              }}
            >
              <styles.ButtonText>링크 삭제하기</styles.ButtonText>
            </styles.RightLowerButton>
          </styles.RightBigArea>
        </styles.ButtonBox>
      </styles.LayerContainer>
    </styles.Container>
  );
};

export default ChatManageScreen;
