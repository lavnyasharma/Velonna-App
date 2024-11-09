import { StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";
import { FONT } from "@/shared/constans/fonts";
import color from "@/shared/constans/colors";

export const styles = StyleSheet.create({
  containerTitleSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleSectionSummary: {
    fontSize: normalize(16),
    fontFamily: FONT.MEDIUM,
  },
  changeText: {
    color: color.main.blue,
    fontFamily: FONT.SEMI_BOLD,
  },
  containerAddress: {
    flexDirection: 'row',
    marginTop: normalize(24),
    alignItems: 'center',
  }
});
