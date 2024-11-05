import { StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";
import color from "@/shared/constans/colors";


export const _styles = (isDarkMode: boolean, textColor: string | undefined) => StyleSheet.create({
  container: {
    marginRight: normalize(24),
    marginTop: normalize(4),
  },
  brandLogo: {
    width: normalize(56),
    height: normalize(56),
  },
  titleBrand: {
    textAlign: 'center',
    marginTop: normalize(10),
    color: textColor || (isDarkMode ? color.neutral.white : color.neutral.black),
  }
})
