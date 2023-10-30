import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

const WordAnswerBalloon = ({ text }) => {
  return (
    <View style={styles.container}>
      <Svg width="282" height="100" viewBox="0 0 282 100" fill="none">
        <Path
          d="M247 98C247 98.8284 246.328 99.5 245.5 99.5L2 99.5C1.17157 99.5 0.5 98.8284 0.5 98L0.5 2C0.5 1.17157 1.17157 0.5 2 0.5L218.045 0.5L279.615 0.5C281.266 0.5 281.705 2.77934 280.172 3.39272L248.572 16.0329C247.622 16.4125 247 17.3318 247 18.3541L247 47.5V98Z"
          fill="#F4E6E7"
          stroke="black"
        />
      </Svg>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: 282,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    position: "absolute",
    fontWeight: "bold",
    fontSize: 13,
    textAlign: "center",
    lineHeight: 18,
    maxWidth: 260,
    paddingRight: 30,
  },
});

export default WordAnswerBalloon;
