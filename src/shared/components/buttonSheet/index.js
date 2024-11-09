import React from "react";
import { View, Modal } from "react-native";
import { styless } from './styles';
import useDarkMode from "@/shared/hooks/useDarkMode";

export default function ButtonSheet({ dispatch, children, height, bottom = 0 }) {
  const { isDarkMode } = useDarkMode();

  const styles = styless(isDarkMode, height);
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={dispatch}>
        <View style={styles.centeredView}>
          <View style={styles.modalOverlay} />
          <View style={styles.modalView}>
            {children}
          </View>
        </View>
      </Modal>
    </View>
  );
}
