import { StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";
import { FONT } from "@/shared/constans/fonts";
import color from "@/shared/constans/colors";

export const styless = (isDarkMode) => StyleSheet.create({
  container: {
    marginTop: normalize(24),
    flex: 1,
    paddingHorizontal: normalize(20),
    backgroundColor: isDarkMode ? color.neutral.black : color.neutral.white,
  },
  titleSection: {
    fontSize: normalize(18),
    fontFamily: FONT.BOLD
  },
  containerBrands: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerCategory: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: normalize(20),
  }
});
