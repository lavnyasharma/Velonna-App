import { StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";
import { FONT } from "@/shared/constans/fonts";
import color from "@/shared/constans/colors";

export const styless = (isDarkMode) => StyleSheet.create({
  fullContainer: {
    flex: 1,
    backgroundColor: isDarkMode ? color.neutral.black : color.neutral.white,
    borderTopLeftRadius: normalize(14),
    borderTopRightRadius: normalize(14),
  },
  container: {
    flex: 0.1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: normalize(20),
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
