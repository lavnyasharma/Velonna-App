import { StyleSheet } from "react-native";
import colors from "../../../constans/colors";
import { normalize } from "../../../helpers";
import { FONT } from "@/shared/constans/fonts";

interface StylesProps {
  disabled: boolean | undefined
  isPrimary: boolean | undefined
}
export const _styles = ({disabled, isPrimary}: StylesProps) => StyleSheet.create({
  container: {
    backgroundColor: disabled ? colors.neutral.softGray : isPrimary ? colors.main.blue : colors.neutral.white,
    padding: normalize(12),
    borderRadius: normalize(12),
    height: normalize(56),
    justifyContent: 'center',
    borderColor: !isPrimary ? colors.stroke.gray : colors.neutral.white,
    borderWidth: !isPrimary ? 1 : 0,
  },
  text: {
    color: disabled ? colors.neutral.darkGray : isPrimary ? colors.neutral.white : colors.neutral.black,
    textAlign: 'center',
    fontSize: normalize(16),
    fontFamily: FONT.SEMI_BOLD,
  }
})
