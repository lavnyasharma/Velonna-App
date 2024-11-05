import { StyleSheet } from "react-native";
import color from "@/shared/constans/colors";
import { normalize } from "@/shared/helpers";


export const _styles = (withBorder: boolean | undefined, isDarkMode: boolean) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: withBorder ? 1 : 0,
    borderColor: color.stroke.gray,
    padding: normalize(12),
    borderRadius: normalize(12)
  },
  totalProducts: {
    color: color.neutral.darkGray
  }
})
