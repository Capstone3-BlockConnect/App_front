import { useEffect, useState } from "react";
import {
  LoginBox,
  LoginInput,
  LoginTitle,
  ScreenContainer,
} from "./LoginScreen.style";
import { Alert, StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { Colors } from "../../../assets/Colors";
import CustomButton from "../../components/buttons/CustomButton";
import { loginPost } from "../../api/loginApi";
import { useNavigation } from "@react-navigation/native";
import { useRecoilState } from "recoil";
import { loginState, userState } from "../../store/LoginState";
import { getStorageData, setStorage } from "../../asyncStorage/asyncStorage";

export default function LoginScreen() {
  const [userInfo, setUserInfo] = useState({});
  const navigation = useNavigation();
  const [passwordSecured, setPasswordSecured] = useState(false);
  const [info, setInfo] = useRecoilState(userState);
  const [logined, setLogined] = useRecoilState(loginState);

  // 로그인 이후에 하는 것들
  // 1. 기기에 token 저장
  // 2. 전역 변수 업데이트
  const afterLogined = ({
    token,
    userId,
    nickName,
    gender,
    age,
    phoneNumber,
    foodCategory,
  }) => {
    setLogined({ isLogined: true, token: token });

    setInfo({
      userId: userId,
      nickName: nickName,
      age: age,
      foodCategory: foodCategory,
      gender: gender,
      phoneNumber: phoneNumber,
    });
  };

  const loginSubmit = async (id, pw) => {
    const response = await loginPost({ id: id, pw: pw });
    const status = response.status;
    const data = response.data;

    const storageResponse = await setStorage({
      asyncKey: "token",
      data: data?.token,
    });

    if (status === 200) {
      afterLogined({
        token: data?.token,
        userId: data?.user,
        age: data?.age,
        foodCategory: data?.foodCategory,
        gender: data?.gender,
        nickName: data?.nickName,
        phoneNumber: data?.phoneNumber,
      });

      return true;
    } else {
      Alert.alert("해당 계정이 존재하지 않습니다.");
      return false;
    }
  };

  return (
    <ScreenContainer>
      <LoginBox style={styles.LoginBoxUpper}>
        <LoginTitle variant="titleLarge">로그인하기</LoginTitle>
        <LoginInput
          label="ID"
          mode="outlined"
          placeholder="아이디를 입력해주세요"
          value={userInfo.id}
          onChangeText={(id) => {
            setUserInfo({ ...userInfo, id: id });
          }}
        />
        <LoginInput
          label="Password"
          mode="outlined"
          placeholder="비밀번호를 입력해주세요"
          value={userInfo.pw}
          secureTextEntry={!passwordSecured}
          right={
            <TextInput.Icon
              icon="eye"
              onPress={() => {
                setPasswordSecured(!passwordSecured);
              }}
            />
          }
          onChangeText={(pw) => {
            setUserInfo({ ...userInfo, pw: pw });
          }}
        />

        <CustomButton
          buttonText="Login"
          mode="contained"
          onPress={() => {
            const login = async () => {
              const response = await loginSubmit(userInfo.id, userInfo.pw);
              if (response) {
                navigation.navigate("서비스 소개");
              } else {
                Alert.alert("계정 정보가 존재하지 않아요.");
              }
            };

            login();
          }}
        />
      </LoginBox>

      <LoginBox style={styles.LoginBoxLower}>
        <Text style={styles.SocialLoginTitle}>-Or Sign in with</Text>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "white",
            columnGap: 10,
            marginTop: "3%",
          }}
        >
          <View style={{ alignItems: "center", width: "70%", rowGap: 10 }}>
            <View style={styles.SocialLoginBtns}>
              <Button
                mode="outlined"
                style={{ borderRadius: 10, paddingHorizontal: 10 }}
                labelStyle={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "black",
                }}
                onPress={() =>
                  navigation.navigate("Apply", { screen: "매칭결과 확인하기" })
                }
              >
                Twitter
              </Button>
              <Button
                mode="outlined"
                style={{ borderRadius: 10, paddingHorizontal: 10 }}
                labelStyle={{
                  fontSize: 18,
                  fontWeight: "bold",
                  color: "black",
                }}
              >
                Google
              </Button>
            </View>
            <Button
              mode="contained"
              style={{
                width: "100%",
                backgroundColor: "#ccc",
                borderRadius: 10,
              }}
              labelStyle={{ fontSize: 20 }}
              onPress={() => {
                navigation.navigate("회원가입");
              }}
            >
              회원가입
            </Button>
          </View>
        </View>
      </LoginBox>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  LoginBoxUpper: {
    width: "80%",
    rowGap: 3,
  },
  LoginBoxLower: {
    marginTop: "10%",
    alignItems: "center",
  },
  //
  SocialBtn: {
    backgroundColor: "white",
    borderRadius: 30,
    padding: 0,
  },

  // Texts
  SocialLoginTitle: {
    color: Colors.basicColors.gray,
    opacity: 0.8,
  },

  // Social Logins
  SocialLoginBtns: {
    flexDirection: "row",
    width: "100%",

    justifyContent: "space-between",
  },
});
