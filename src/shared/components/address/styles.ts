import { StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";
import { FONT } from "@/shared/constans/fonts";
import color from "@/shared/constans/colors";


export const styles = StyleSheet.create({
  name: {
    fontSize: normalize(16),
    fontFamily: FONT.SEMI_BOLD,
  },
  containerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  phone: {
    marginVertical: normalize(10)
  },
  value: {
    fontSize: normalize(16),
    color: color.neutral.darkGray,
    marginLeft: normalize(6),
  }
})
