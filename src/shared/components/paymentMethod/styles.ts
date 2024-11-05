import { StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";
import { FONT } from "@/shared/constans/fonts";

export const styles = StyleSheet.create({
  title: {
    marginLeft: normalize(10),
    fontSize: normalize(16),
    fontFamily: FONT.MEDIUM
  }
})
