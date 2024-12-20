import { Dimensions, StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";
import color from "@/shared/constans/colors";

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
    lef: 0,
    width: '100%'
  },
  modalView: {
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
    height: height || Dimensions.get('window').height * 0.9
  },
});
