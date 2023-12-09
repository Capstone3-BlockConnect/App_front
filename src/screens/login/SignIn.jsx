import { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Button, Checkbox, Dialog, Portal } from "react-native-paper";
import { color } from "../../../assets/colors/color";
import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
  const navigation = useNavigation();
  const [checked, setChecked] = useState(false);
  const [visible, setVisible] = useState(false);
  const hideDialog = () => setVisible(false);

  return (
    <View style={styles.Container}>
      <View style={styles.UpperContainer}>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>약관</Text>
        <View
          style={{
            backgroundColor: "#E3F6F5",
            width: "100%",
            alignSelf: "center",
            flexDirection: "column",
            padding: 10,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "black",
          }}
        >
          <Text style={{ textAlign: "center", fontWeight: "bold" }}>약관</Text>

          <ScrollView style={{ height: "60%" }}>
            <Text style={{ lineHeight: 30 }}>
              Anim incididunt veniam ea irure velit ex reprehenderit eu pariatur
              veniam exercitation. Sunt veniam minim nostrud deserunt labore
              anim ullamco consequat laborum irure. Excepteur consequat culpa
              dolore magna proident nostrud ut ullamco cupidatat dolore magna
              culpa nisi. Culpa deserunt ullamco voluptate reprehenderit dolore
              dolore. Anim incididunt veniam ea irure velit ex reprehenderit eu
              pariatur veniam exercitation. Sunt veniam minim nostrud deserunt
              labore anim ullamco consequat laborum irure. Excepteur consequat
              culpa dolore magna proident nostrud ut ullamco cupidatat dolore
              magna culpa nisi. Culpa deserunt ullamco voluptate reprehenderit
              dolore dolore. Anim incididunt veniam ea irure velit ex
              reprehenderit eu pariatur veniam exercitation. Sunt veniam minim
              nostrud deserunt labore anim ullamco consequat laborum irure.
              Excepteur consequat culpa dolore magna proident nostrud ut ullamco
              cupidatat dolore magna culpa nisi. Culpa deserunt ullamco
              voluptate reprehenderit dolore dolore. Anim incididunt veniam ea
              irure velit ex reprehenderit eu pariatur veniam exercitation. Sunt
              veniam minim nostrud deserunt labore anim ullamco consequat
              laborum irure. Excepteur consequat culpa dolore magna proident
              nostrud ut ullamco cupidatat dolore magna culpa nisi. Culpa
              deserunt ullamco voluptate reprehenderit dolore dolore.
            </Text>
          </ScrollView>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Text>동의합니다</Text>
          <Checkbox
            status={checked ? "checked" : "unchecked"}
            onPress={() => {
              setChecked(!checked);
            }}
          />
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
            onPress={() => {
              navigation.goBack();
            }}
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
              navigation.navigate("정보입력");
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
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },

  UpperContainer: {
    width: "95%",
    alignSelf: "center",
    rowGap: 20,
  },
});
