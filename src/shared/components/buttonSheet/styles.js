import { Dimensions, StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";
import color from "@/shared/constans/colors";
import { FONT } from "@/shared/constans/fonts";

const modal = (isDarkMode, height) => {
  const objectModal = {
    backgroundColor: isDarkMode ? color.neutral.black : color.neutral.white,
    borderTopRightRadius: normalize(16),
    borderTopLeftRadius: normalize(16),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
  };
  if (height) {
    objectModal.height = height;
  }
  return objectModal;
}

export const styless = (isDarkMode, height) => StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    position: 'relative',
  },
  modalOverlay: {
    backgroundColor: 'black',
    opacity: 0.5,
    height: Dimensions.get('window').height,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
  },
  modalView: {
    ...modal(isDarkMode, height),
  },
});
