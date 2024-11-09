import { StyleSheet } from "react-native";
import color from "@/shared/constans/colors";
import { normalize } from "@/shared/helpers";
import { FONT } from "@/shared/constans/fonts";


export const styless = (isDarkMode , primary = true) => StyleSheet.create({
  nameProduct: {
    color: isDarkMode ? color.neutral.white : color.neutral.black,
    fontSize: normalize(14),
  },
  containerNameStore: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: normalize(4),
  },
  nameStore: {
    color: primary ? color.neutral.darkGray : isDarkMode ? color.neutral.white : color.neutral.black,
    fontSize: normalize(16),
    fontFamily: FONT.SEMI_BOLD,
    marginRight: normalize(2),
  },
})
