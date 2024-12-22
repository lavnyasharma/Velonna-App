import { StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";
import color from "@/shared/constans/colors";
import { FONT } from "@/shared/constans/fonts";

export const styless = (isDarkMode) => StyleSheet.create({
  containerFilter: {
    borderWidth: 1,
    padding:10,

    borderRadius: normalize(12),
    borderColor: color.stroke.gray,
    marginRight: normalize(10),
  },
  titleFilter: {
    fontFamily: FONT.MEDIUM,
    color: color.neutral.darkGray,
  },
  titleSection: {
    fontSize: normalize(18),
    fontFamily: FONT.SEMI_BOLD,
  },
  row: {
    flexDirection: 'row',
    flex: 0.48,
    justifyContent: 'space-between',
    marginTop: normalize(18),
  },
  containerFilterScreen: {
    padding: normalize(20),
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: isDarkMode ? color.neutral.black : color.neutral.white,
    borderTopLeftRadius: normalize(14),
    borderTopRightRadius: normalize(14),
  }
});
