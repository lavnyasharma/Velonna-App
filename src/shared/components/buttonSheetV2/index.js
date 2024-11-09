import Typography from "@/shared/components/Typography";
import { Modal, View } from "react-native";
import React from "react";
import useDarkMode from "@/shared/hooks/useDarkMode";
import { styless } from "@/shared/components/buttonSheetV2/styles";

export default function ButtonSheetV2({dispatch, children, height}) {
  const {isDarkMode} = useDarkMode();

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
