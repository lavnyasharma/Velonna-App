import React from "react";
import { View, Modal } from "react-native";
import {_styles} from './styles'
import useDarkMode from "@/shared/hooks/useDarkMode";

interface ButtonSheetProps {
  dispatch: boolean;
  children: React.ReactNode;
  height?: number;
  bottom?: number
}
export default function ButtonSheet({dispatch, children, height, bottom = 0}: ButtonSheetProps) {
  const {isDarkMode} = useDarkMode()

  const styles = _styles(isDarkMode, height);
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
};
