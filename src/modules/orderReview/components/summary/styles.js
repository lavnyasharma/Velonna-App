import { StyleSheet } from "react-native";
import color from "@/shared/constans/colors";
import { normalize } from "@/shared/helpers";
import { FONT } from "@/shared/constans/fonts";


export const styless = (isDarkMode) => StyleSheet.create({
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: color.neutral.darkGray,
    fontSize: normalize(14),
  },
  textTotal: {
    color: isDarkMode ? color.neutral.white : color.neutral.black,
    fontSize: normalize(16),
    fontFamily: FONT.SEMI_BOLD
  },
  shoppingFee: {
    marginVertical: normalize(16)
  },
})
