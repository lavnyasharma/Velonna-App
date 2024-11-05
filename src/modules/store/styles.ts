import { Platform, StyleSheet, TextStyle } from "react-native";
import { normalize } from "@/shared/helpers";
import { FONT } from "@/shared/constans/fonts";
import color from "@/shared/constans/colors";

const category: TextStyle = {
  fontSize: normalize(20),
  marginRight: normalize(12),
  fontFamily: FONT.MEDIUM
}
export const _styles = (isDarkMode: boolean) => StyleSheet.create({
  container: {
    paddingHorizontal: normalize(24),
    flex: 1,
    backgroundColor: isDarkMode ? color.neutral.black : color.neutral.white,
    paddingTop: Platform.OS === 'ios' ? normalize(60) : normalize(24),
  },
  containerSection: {
    marginVertical: normalize(14),
  },
  titleSection: {
    fontSize: normalize(17),
    fontFamily: FONT.MEDIUM,
  },
  category: {
    ...category,
    color: isDarkMode ? color.neutral.darkGray : color.neutral.lightGray,
  },
  categoryActive: {
    ...category,
    color: isDarkMode ? color.neutral.white : color.neutral.black,
  },
})
