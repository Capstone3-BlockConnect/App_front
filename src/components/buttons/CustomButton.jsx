import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";
import { Colors } from "../../../assets/Colors";
import { color } from "../../../assets/colors/color";

/*
mode
contained : 기본
outlined : 부수
*/
export default function CustomButton({ buttonText = "입력해주세요", mode }) {
  return (
    <Button
      mode={mode === "contained" ? "contained" : "outlined"}
      onPress={() => console.log("Pressed")}
      buttonColor={mode === "contained" ? color.BtnPrimary : "white"}
      style={styles.buttonStyle}
      labelStyle={[
        styles.buttonTextStyle,
        mode === "outlined" ? { color: "black" } : "",
      ]}
    >
      {buttonText}
    </Button>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    borderRadius: 10,
    paddingTop: 3,
    paddingBottom: 3,
  },
  buttonTextStyle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
