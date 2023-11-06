import { Image, StyleSheet, Text, View } from "react-native";
import { Button, Surface } from "react-native-paper";
import { color } from "../../../assets/colors/color";

export default function SignInFinish({ navigation }) {
  return (
    <Surface style={styles.container} elevation={1}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        신청이 완료되었습니다
      </Text>
      <Text style={{ fontSize: 15 }}>매칭결과는 23:59에 알려드려요!</Text>
      <Image
        source={require("../../../assets/congratulation.png")}
        style={{ width: "100%", marginTop: 20, marginBottom: 20 }}
      />
      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate("서비스 소개");
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
        홈으로 돌아가기
      </Button>
    </Surface>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
