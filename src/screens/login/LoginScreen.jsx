import { useEffect, useState } from "react";
import {
  LoginBox,
  LoginInput,
  LoginTitle,
  ScreenContainer,
} from "./LoginScreen.style";
import { StyleSheet, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { Colors } from "../../../assets/Colors";
import CustomButton from "../../components/buttons/CustomButton";
import { loginPost } from "../../api/loginApi";
import { useNavigation } from "@react-navigation/native";
import { useRecoilState } from "recoil";
import { loginState, userState } from "../../store/LoginState";
import { setStorage } from "../../asyncStorage/asyncStorage";

export default function LoginScreen() {
  const [userInfo, setUserInfo] = useState({});
  const navigation = useNavigation();

  const [info, setInfo] = useRecoilState(userState);
  const [logined, setLogined] = useRecoilState(loginState);

  useEffect(() => {
    if (logined.isLogined) {
      navigation.navigate("서비스 소개");
    }
  }, [logined.isLogined]);
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
    const storageResponse = await setStorage({
      asyncKey: "token",
      data: response?.token,
    });

    afterLogined({
      token: response?.token,
      userId: response?.user,
      age: response?.age,
      foodCategory: response?.foodCategory,
      gender: response?.gender,
      nickName: response?.nickName,
      phoneNumber: response?.phoneNumber,
    });
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
          secureTextEntry
          right={<TextInput.Icon icon="eye" />}
          onChangeText={(pw) => {
            setUserInfo({ ...userInfo, pw: pw });
          }}
        />

        <CustomButton
          buttonText="Login"
          mode="contained"
          onPress={() => {
            loginSubmit(userInfo.id, userInfo.pw);
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
                onPress={() => {}}
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
