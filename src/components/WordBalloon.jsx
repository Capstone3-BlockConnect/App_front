import React from "react";
import { Text, View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

const MySVGComponent = ({ text }) => {
  return (
    <View style={styles.container}>
      <Svg width="282" height="100" viewBox="0 0 282 100" fill="none">
        <Path
          d="M35 2C35 1.17157 35.6716 0.5 36.5 0.5H280C280.828 0.5 281.5 1.17157 281.5 2V98C281.5 98.8284 280.828 99.5 280 99.5H63.9549H2.38517C0.733582 99.5 0.294621 97.2207 1.82808 96.6073L33.4285 83.9671C34.3776 83.5875 35 82.6682 35 81.6459V52.5V2Z"
          fill="#E5F0DB"
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
    fontSize: 16,
    textAlign: "center",
    color: "black",
  },
});

export default MySVGComponent;
