import { useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Button, Checkbox } from "react-native-paper";
import { color } from "../../../assets/colors/color";
import { useNavigation } from "@react-navigation/native";
import { css } from "@emotion/native";

export default function SignIn() {
  const navigation = useNavigation();
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.Container}>
      <View style={styles.UpperContainer}>
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
          <Text
            style={css`
              text-align: center;
              font-weight: 900;
              font-size: 17px;
              margin-bottom: 10px;
            `}
          >
            약관
          </Text>

          <ScrollView style={{ height: "60%" }}>
            <Text
              style={css`
                font-size: 15px;
                font-weight: 700;
                margin-bottom: 5px;
              `}
            >
              1. 서비스 이용 약관의 동의
            </Text>
            <Text
              style={css`
                line-height: 30px;
                margin-bottom: 20px;
              `}
            >
              본 약관은 숭밥약에서 제공하는 서비스의 이용 조건 및 절차, 이용자와
              숭밥약의 권리, 의무, 책임사항 등 기본적인 사항을 규정합니다.
              회원가입을 완료함으로써 이용자는 본 약관의 내용을 이해하고 이에
              동의한 것으로 간주됩니다.
            </Text>
            <Text
              style={css`
                font-size: 15px;
                font-weight: 700;
                margin-bottom: 5px;
              `}
            >
              2. 회원가입 및 정보 보호
            </Text>
            <Text
              style={css`
                line-height: 30px;
                margin-bottom: 20px;
              `}
            >
              회원가입 시 사용자는 정확하고 최신의 정보를 제공해야 합니다.
              사용자는 개인 정보 보호 및 보안을 위해 비밀번호를 안전하게
              관리해야 합니다. 숭밥약은 사용자의 개인정보를 보호하기 위해 최선을
              다할 것입니다.
            </Text>
            <Text
              style={css`
                font-size: 15px;
                font-weight: 700;
                margin-bottom: 5px;
              `}
            >
              3. 서비스 이용
            </Text>
            <Text
              style={css`
                line-height: 30px;
                margin-bottom: 20px;
              `}
            >
              본 서비스는 하루 24시간 제공됩니다. 숭밥약은 시스템 점검,
              업그레이드, 긴급한 서비스 문제 등을 이유로 서비스를 일시적으로
              중단할 수 있으며, 이 경우 사전에 공지합니다.
            </Text>
            <Text
              style={css`
                font-size: 15px;
                font-weight: 700;
                margin-bottom: 5px;
              `}
            >
              4. 회원의 의무
            </Text>
            <Text
              style={css`
                line-height: 30px;
                margin-bottom: 20px;
              `}
            >
              회원은 숭밥약 서비스 이용 시 법적 규정, 본 약관의 규정, 기타
              숭밥약이 정한 규칙을 준수해야 합니다. 회원은 서비스 이용과
              관련하여 다음과 같은 행위를 해서는 안 됩니다. 타인의 정보 도용
              숭밥약이 제공하는 서비스에 위해를 가하는 행위 기타 불법적이거나
              부당한 행위
            </Text>
            <Text
              style={css`
                font-size: 15px;
                font-weight: 700;
                margin-bottom: 5px;
              `}
            >
              5. 면책 조항
            </Text>
            <Text
              style={css`
                line-height: 30px;
                margin-bottom: 20px;
              `}
            >
              숭밥약은 천재지변 또는 이에 준하는 불가항력적 상황에 의해 서비스를
              제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.
              숭밥약은 회원의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을
              지지 않습니다. 숭밥약은 회원이 서비스를 이용하여 기대하는 수익을
              얻지 못하거나 서비스 자료에 대한 손실을 보지 않도록 주의를
              기울여야 하지만, 이에 대한 책임을 지지 않습니다.
            </Text>
            <Text
              style={css`
                font-size: 15px;
                font-weight: 700;
                margin-bottom: 5px;
              `}
            >
              6. 약관의 변경
            </Text>
            <Text
              style={css`
                line-height: 30px;
                margin-bottom: 20px;
              `}
            >
              숭밥약은 법률이나 서비스 정책의 변경에 따라 필요한 경우 본 약관을
              수정할 수 있으며, 이 경우 회원에게 사전 공지합니다.
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
            style={css`
              border-radius: 10px;
              background-color: ${checked ? color.BtnPrimary : "gray"};
              width: 45%;
            `}
            labelStyle={{
              color: "white",
              fontWeight: "bold",
            }}
            disabled={!checked}
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
