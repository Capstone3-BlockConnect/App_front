import { View } from "react-native";
import * as styles from "./WalletScreen.style";

const WalletScreen = () => {
  const dateInstance = new Date();
  const date = `${dateInstance.getFullYear()}.${
    dateInstance.getMonth() + 1
  }.${dateInstance.getDate()}`;
  return (
    <styles.Container>
      <styles.SoongbobCardWrapper
        colors={["#000", "#AC6A6A"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
      >
        <styles.CardTitleArea>
          <styles.CardTitle>Soongbob Coin</styles.CardTitle>
          <styles.CardSubTitle>{date}</styles.CardSubTitle>
        </styles.CardTitleArea>
        <styles.CardBalance>24000.44</styles.CardBalance>
        <styles.VerifiedText>VERIFIED</styles.VerifiedText>
      </styles.SoongbobCardWrapper>
    </styles.Container>
  );
};

export default WalletScreen;
