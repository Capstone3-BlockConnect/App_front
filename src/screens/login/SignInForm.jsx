import { useEffect, useState } from "react";
import { ScrollView, Text, View, Modal } from "react-native";
import { Button, TextInput, Snackbar } from "react-native-paper";
import { color } from "../../../assets/colors/color";
import { submitSignIn } from "../../api/loginApi";

export default function SignInForm({ navigation }) {
  const [formData, setFormData] = useState({ gender: "남성", food: "양식" });
  const [visible, setVisible] = useState(false);
  const [snackBarVisible, setSnackBarVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const SubmitSignInForm = async (
    id,
    pw,
    nickname,
    gender,
    age,
    phoneNum,
    food
  ) => {
    try {
      const response = await submitSignIn({
        userId: id,
        password: pw,
        nickname: nickname,
        gender: gender,
        age: Number(age),
        phoneNumber: phoneNum,
        foodCategory: food,
      });
      console.log(response);
    } catch (error) {
      if (error.response.status == 409) {
        console.log("이미 사용자가 존재합니다.");
        showModal();
      } else if (error.response.status == 500) {
        setSnackBarVisible(true);
      } else {
        console.error(error);
      }
    }
  };
  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: "center",
        rowGap: 20,
        flexGrow: 1,
      }}
      style={{
        backgroundColor: "white",
      }}
    >
      <Snackbar
        visible={snackBarVisible}
        onDismiss={() => {
          setSnackBarVisible(false);
        }}
        elevation={5}
      >
        회원가입 정보를 모두 입력해주세요
      </Snackbar>
      <Modal visible={visible} animationType="slide" transparent={true}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "80%",
              backgroundColor: "white",
              borderRadius: 20,
              padding: 20,
              alignItems: "center",
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
              rowGap: 10,
            }}
          >
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>
              계정이 이미 존재합니다.
            </Text>
            <Text style={{ fontSize: 15, color: "gray" }}>로그인해주세요</Text>
            <Button
              mode="contained"
              onPress={hideModal}
              style={{
                backgroundColor: color.BtnPrimary,
                borderRadius: 10,
                width: "80%",
              }}
              labelStyle={{ color: "white" }}
            >
              닫기
            </Button>
          </View>
        </View>
      </Modal>

      <View style={{ rowGap: 10 }}>
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
            onChangeText={(text) => {
              setFormData((prev) => ({ ...prev, id: text }));
            }}
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
            onChangeText={(text) => {
              setFormData((prev) => ({ ...prev, pw: text }));
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
            onChangeText={(text) => {
              setFormData((prev) => ({ ...prev, nickname: text }));
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
            onChangeText={(text) => {
              setFormData((prev) => ({ ...prev, phoneNum: text }));
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
            onChangeText={(text) => {
              setFormData((prev) => ({ ...prev, age: text }));
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
            console.log(
              formData.id,
              formData.pw,
              formData.nickname,
              formData.gender,
              formData.age,
              formData.phoneNum,
              formData.food
            );
            SubmitSignInForm(
              formData.id,
              formData.pw,
              formData.nickname,
              formData.gender,
              formData.age,
              formData.phoneNum,
              formData.food
            );
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
    </ScrollView>
  );
}
