import Typography from "@/shared/components/Typography";
import { Modal, View } from "react-native";
import React from "react";
import useDarkMode from "@/shared/hooks/useDarkMode";
import { _styles } from "@/shared/components/buttonSheetV2/styles";

interface ButtonSheetV2 {
  dispatch: boolean;
  children: React.ReactNode;
  height?: number;
  bottom?: number
}

export default function ButtonSheetV2({dispatch, children, height}: ButtonSheetV2) {

  const {isDarkMode} = useDarkMode()

  const styles = _styles(isDarkMode, height)
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
  )
}
