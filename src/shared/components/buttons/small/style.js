import { StyleSheet } from "react-native";
import colors from "../../../constans/colors";
import { normalize } from "../../../helpers";
import { FONT } from "@/shared/constans/fonts";

export const styless = ({ disabled, isPrimary }) => StyleSheet.create({
  container: {
    backgroundColor: disabled ? colors.neutral.softGray : isPrimary ? colors.main.blue : colors.neutral.white,
    padding: normalize(12),
    borderRadius: normalize(12),
    height: normalize(42),
  },
  text: {
    color: disabled ? colors.neutral.darkGray : isPrimary ? colors.neutral.white : colors.neutral.black,
    textAlign: 'center',
    fontSize: normalize(12),
    fontFamily: FONT.SEMI_BOLD,
  }
});
