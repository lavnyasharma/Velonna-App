import { StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";
import { FONT } from "@/shared/constans/fonts";


export const styles = StyleSheet.create({
  value: {
    fontSize: normalize(18),
    fontFamily: FONT.SEMI_BOLD
  }
})
