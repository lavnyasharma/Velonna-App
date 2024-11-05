import { StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";
import color from "@/shared/constans/colors";
import { FONT } from "@/shared/constans/fonts";


export const _styles = (isDarkMode: boolean) => StyleSheet.create({
  container: {
    paddingHorizontal: normalize(24)
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: isDarkMode ? color.neutral.black : color.neutral.white,
    borderRadius: normalize(16),
    paddingHorizontal: normalize(28),
    paddingVertical: normalize(18),
  },
  title: {
    color: color.neutral.darkGray,
    fontSize: normalize(14)
  },
  balance: {
    color: isDarkMode ? color.neutral.white : color.neutral.black,
    fontSize: normalize(24),
    fontFamily: FONT.BOLD,
    marginTop: normalize(4),
  },
  logo: {
    width: 50,
    height: 50,
    tintColor: isDarkMode ? color.neutral.white : color.neutral.black
  }
})
