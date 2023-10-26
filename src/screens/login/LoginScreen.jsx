import { useEffect, useState } from "react";
import {
  LoginBox,
  LoginButton,
  LoginInput,
  LoginTitle,
  ScreenContainer,
} from "./LoginScreen.style";
import { StyleSheet, View } from "react-native";
import {
  Button,
  IconButton,
  Surface,
  Text,
  TextInput,
} from "react-native-paper";
import { Colors } from "../../../assets/Colors";
import CustomButton from "../../components/buttons/CustomButton";

export default function LoginScreen() {
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {}, [userInfo]);

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

        <CustomButton buttonText="Login" mode="contained" />
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
