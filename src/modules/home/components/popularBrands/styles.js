import { StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";
import color from "@/shared/constans/colors";
import { FONT } from "@/shared/constans/fonts";

export const styless = (isDarkMode) => StyleSheet.create({
  container: {
    paddingHorizontal: normalize(24),
  },
  title: {
    fontFamily: FONT.BOLD,
    fontSize: normalize(20),
    color: color.neutral.white,
  },
  containerList: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: normalize(16),
  },
  brandLogo: {
    width: normalize(56),
    height: normalize(56),
  },
  titleBrand: {
    textAlign: 'center',
    marginTop: normalize(10),
    color: color.neutral.white,
  }
});
