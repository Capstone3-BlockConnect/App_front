import { css } from "@emotion/native";
import * as styles from "./CustomModal.style";
import { Alert, Modal } from "react-native";
import { Button } from "react-native-paper";

const CustomModal = ({ children, modalVisible, setModalVisible }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequeseClose={() => {
        setModalVisible(false);
      }}
      style={css`
        flex: 1;
        background-color: red;
      `}
    >
      <styles.Container
        onPress={() => {
          setModalVisible(false);
        }}
      >
        <styles.ContentsContainer>{children}</styles.ContentsContainer>
      </styles.Container>
    </Modal>
  );
};

export default CustomModal;
