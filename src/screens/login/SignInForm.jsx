import { useEffect, useState } from "react";
import { Text, View, Modal } from "react-native";
import { Button, TextInput, Snackbar } from "react-native-paper";
import { color } from "../../../assets/colors/color";
import { submitSignIn } from "../../api/loginApi";
import * as styles from "./SignInForm.style";
import { css } from "@emotion/native";

export default function SignInForm({ navigation }) {
  const [formData, setFormData] = useState({ gender: "남성", food: "양식" });
  const [pwCheck, setPwCheck] = useState("");
  const [canGoNext, setCanGoNext] = useState(false);

  const foodCategories = [
    "한식",
    "일식",
    "양식",
    "아시안",
    "테이크아웃",
    "술집",
    "치킨/피자",
    "카페",
  ];

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  const handleSelectFood = (food) => {
    setFormData((prev) => ({ ...prev, food: food }));
  };

  useEffect(() => {
    if (
      pwCheck == formData?.pw &&
      formData?.id &&
      formData?.gender &&
      formData?.age &&
      formData?.phoneNum &&
      formData?.food
    )
      setCanGoNext(true);
  }, [formData, pwCheck]);

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
      } else if (error.response.status == 500) {
      } else {
        console.error(error);
      }
    }
  };
  return (
    <styles.Container
      contentContainerStyle={css`
        justify-content: center;
        row-gap: 20px;
        padding-top: 20px;
      `}
    >
      <View style={{ rowGap: 10 }}>
        <styles.LabelArea>
          <styles.Label>아이디*</styles.Label>
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
        </styles.LabelArea>
        <styles.LabelArea>
          <styles.Label>비밀번호*</styles.Label>
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
            activeOutlineColor="black"
            placeholderTextColor="black"
          />
        </styles.LabelArea>
        <styles.LabelArea>
          <styles.Label>비밀번호 확인*</styles.Label>
          <TextInput
            mode="outlined"
            style={{
              width: "100%",
              alignSelf: "center",
              backgroundColor: "white",
            }}
            onChangeText={(text) => {
              setPwCheck(text);
            }}
            outlineColor="black"
            placeholder="비밀번호를 한번 더 입력해주세요"
            cursorColor="black"
            activeOutlineColor="black"
            placeholderTextColor="black"
          />
        </styles.LabelArea>
        <styles.LabelArea>
          <styles.Label>닉네임</styles.Label>
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
            placeholder="입력하지 않으시면 자동으로 생성됩니다"
            cursorColor="black"
            activeOutlineColor="black"
            placeholderTextColor="black"
          />
        </styles.LabelArea>
        <styles.LabelArea>
          <styles.Label>핸드폰번호</styles.Label>
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
        </styles.LabelArea>
        <styles.LabelArea>
          <styles.Label>나이</styles.Label>
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
        </styles.LabelArea>
        <styles.LabelArea>
          <styles.Label>성별</styles.Label>
          <styles.GenderBox>
            <styles.GenderButton
              selected={formData.gender == "여성" && true}
              onPress={() => {
                setFormData((prev) => ({ ...prev, gender: "여성" }));
              }}
            >
              <styles.ButtonText>여성</styles.ButtonText>
            </styles.GenderButton>
            <styles.GenderButton
              onPress={() => {
                setFormData((prev) => ({ ...prev, gender: "남성" }));
              }}
              selected={formData.gender == "남성" && true}
            >
              <styles.ButtonText>남성</styles.ButtonText>
            </styles.GenderButton>
          </styles.GenderBox>
        </styles.LabelArea>

        <styles.LabelArea>
          <styles.Label>선호 음식카테고리</styles.Label>
          <styles.FoodBox>
            {foodCategories.map((food, index) => (
              <styles.FoodButton
                selected={formData.food == food && true}
                onPress={() => {
                  handleSelectFood(food);
                }}
                key={index}
              >
                <styles.ButtonText>{food}</styles.ButtonText>
              </styles.FoodButton>
            ))}
          </styles.FoodBox>
        </styles.LabelArea>
      </View>
      <styles.ButtonBox>
        <styles.PrevButton
          mode="outlined"
          onPress={() => {
            navigation.goBack();
          }}
          labelStyle={css`
            color: black;
            font-weight: 700;
          `}
        >
          이전
        </styles.PrevButton>
        <styles.NextButton
          style={css`
            background-color: ${!canGoNext && "gray"};
          `}
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
            navigation.navigate("완료");
          }}
          labelStyle={css`
            color: white;
            font-weight: 700;
          `}
          disabled={!canGoNext}
        >
          다음
        </styles.NextButton>
      </styles.ButtonBox>
    </styles.Container>
  );
}
