import { StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";
import { FONT } from "@/shared/constans/fonts";
import color from "@/shared/constans/colors";

export const styless = (isDarkMode) => StyleSheet.create({
  container: {

  },
  containerInformation: {
    marginTop: normalize(20),
    width: '100%'
  },
  title: {
    fontSize: normalize(32),
    textAlign: 'center',
    fontFamily: FONT.SEMI_BOLD
  },
  description: {
    opacity: 0.65,
    textAlign: 'center',
    color: isDarkMode ? color.neutral.white : color.neutral.black,
    marginTop: normalize(20)
  }
})
