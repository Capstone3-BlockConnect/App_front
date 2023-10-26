import React from "react";
import { StyleSheet, View, Text, Button, Image } from "react-native";
import { ContainerView } from "./HomeScreen.style";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen({ navigation }) {
  return (
    <ContainerView>
      <Text>HomeScreen</Text>
      <Button
        title="login"
        onPress={() => {
          navigation.navigate("Login");
        }}
      />
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/124/124021.png",
        }}
        alt="fef"
        style={{ height: "150", width: "150" }}
      />
    </ContainerView>
  );
}
