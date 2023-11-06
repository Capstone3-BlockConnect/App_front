import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { color } from "../../../assets/colors/color";

export default function SignInForm({ navigation }) {
  const [formData, setFormData] = useState({});
  return (
    <View style={{ justifyContent: "center", rowGap: 20, marginTop: "8%" }}>
      <View style={{ rowGap: 10 }}>
        <Text style={{ fontSize: 15, fontWeight: "bold", paddingLeft: "2.5%" }}>
          약관
        </Text>
        <View
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
            width: "95%",
            alignSelf: "center",
          }}
        >
          <Text style={{ textAlign: "left" }}>아이디*</Text>
          <TextInput
            mode="outlined"
            style={{
              width: "100%",
              alignSelf: "center",
              backgroundColor: "white",
            }}
            outlineColor="black"
            placeholder="아이디를 입력해주세요"
            cursorColor="black"
            activeOutlineColor="black"
            placeholderTextColor="black"
          />
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
            width: "95%",
            alignSelf: "center",
          }}
        >
          <Text style={{ textAlign: "left" }}>비밀번호*</Text>
          <TextInput
            mode="outlined"
            placeholder="비밀번호를 입력해주세요"
            style={{
              width: "100%",
              alignSelf: "center",
              backgroundColor: "white",
            }}
            outlineColor="black"
            cursorColor="black"
            secureTextEntry
            activeOutlineColor="black"
            right={<TextInput.Icon icon="eye" />}
            placeholderTextColor="black"
          />
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
            width: "95%",
            alignSelf: "center",
          }}
        >
          <Text style={{ textAlign: "left" }}>비밀번호 확인*</Text>
          <TextInput
            mode="outlined"
            style={{
              width: "100%",
              alignSelf: "center",
              backgroundColor: "white",
            }}
            right={<TextInput.Icon icon="eye" />}
            secureTextEntry
            outlineColor="black"
            placeholder="비밀번호를 한번 더 입력해주세요"
            cursorColor="black"
            activeOutlineColor="black"
            placeholderTextColor="black"
          />
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
            width: "95%",
            alignSelf: "center",
          }}
        >
          <Text style={{ textAlign: "left" }}>닉네임</Text>
          <TextInput
            mode="outlined"
            style={{
              width: "100%",
              alignSelf: "center",
              backgroundColor: "white",
            }}
            outlineColor="black"
            placeholder="닉네임을 입력해주세요*"
            cursorColor="black"
            activeOutlineColor="black"
            placeholderTextColor="black"
          />
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
            width: "95%",
            alignSelf: "center",
          }}
        >
          <Text style={{ textAlign: "left" }}>핸드폰번호</Text>
          <TextInput
            mode="outlined"
            style={{
              width: "100%",
              alignSelf: "center",
              backgroundColor: "white",
            }}
            placeholder="01011111111(-를 빼주세요)"
            outlineColor="black"
            cursorColor="black"
            inputMode="numeric"
            activeOutlineColor="black"
            placeholderTextColor="black"
          />
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "flex-start",
            width: "95%",
            alignSelf: "center",
          }}
        >
          <Text style={{ textAlign: "left" }}>나이</Text>
          <TextInput
            mode="outlined"
            style={{
              width: "100%",
              alignSelf: "center",
              backgroundColor: "white",
            }}
            placeholder="나이를 입력해주세요"
            outlineColor="black"
            cursorColor="black"
            inputMode="numeric"
            activeOutlineColor="black"
            placeholderTextColor="black"
          />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
          columnGap: 5,
        }}
      >
        <Button
          mode="outlined"
          onPress={() => {}}
          style={{
            borderRadius: 10,
            backgroundColor: color.BtnSub,
            width: "45%",
          }}
          labelStyle={{
            color: "black",
            fontWeight: "bold",
          }}
        >
          이전
        </Button>
        <Button
          mode="contained"
          onPress={() => {
            navigation.navigate("회원가입 완료");
          }}
          style={{
            borderRadius: 10,
            backgroundColor: color.BtnPrimary,
            width: "45%",
          }}
          labelStyle={{
            color: "white",
            fontWeight: "bold",
          }}
        >
          다음
        </Button>
      </View>
    </View>
  );
}
