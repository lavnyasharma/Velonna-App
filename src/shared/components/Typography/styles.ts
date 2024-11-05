import {StyleSheet} from 'react-native';
import { normalize } from "../../helpers";
import { FONT } from "@/shared/constans/fonts";

export const _styles = (isDarkMode: boolean) => StyleSheet.create({
  text: {
    color: isDarkMode ? 'white' : '#000',
    fontSize: normalize(14),
    fontFamily: FONT.NORMAL
  }
})
