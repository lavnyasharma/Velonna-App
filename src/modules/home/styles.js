import { StyleSheet } from "react-native";
import color from "@/shared/constans/colors";
import { normalize } from "@/shared/helpers";
import { FONT } from "@/shared/constans/fonts";

export const styless = (isDarkMode) => StyleSheet.create({
  body: {
    backgroundColor: isDarkMode ? color.neutral.black : color.neutral.white,
    marginTop: normalize(-10),
    paddingVertical: normalize(26),
    borderTopRightRadius: 16,
    borderTopStartRadius: 16,
    flex: 1,
    paddingHorizontal: normalize(24),
  },
  title: {
    color: isDarkMode ? color.neutral.white : color.neutral.black,
    fontSize: normalize(20),
    fontFamily: FONT.BOLD,
  },
  row: {
    flexDirection: 'row',
    flex: 0.48,
    justifyContent: 'space-between',
    marginTop: normalize(18),
  }
});
