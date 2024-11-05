import { StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";
import color from "@/shared/constans/colors";
import { FONT } from "@/shared/constans/fonts";

export const _styles = (isDarkMode: boolean) => StyleSheet.create({
  titleScreen: {
    color: color.neutral.white,
    fontSize: normalize(23),
    fontFamily: FONT.BOLD
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    borderRadius: 150,
    backgroundColor: color.neutral.darkGray,
    width: normalize(60),
    height: normalize(60)
  },
  textUser: {
    color: color.neutral.white,
    fontSize: normalize(18),
    fontFamily: FONT.MEDIUM
  },
  email: {
    marginTop: normalize(5),
    color: color.neutral.white,
    fontSize: normalize(16),
  },
  body: {
    backgroundColor: isDarkMode ? color.neutral.black : color.neutral.white,
    marginTop: normalize(-14),
    paddingVertical: normalize(26),
    borderTopRightRadius: 16,
    borderTopStartRadius: 16,
    flex: 1,
    paddingHorizontal: normalize(24)
  },
  titleSection: {
    fontSize: normalize(16),
    fontFamily: FONT.SEMI_BOLD
  },
  titleOption: {
    fontSize: normalize(16),
    fontFamily: FONT.MEDIUM,
  },
  subtitleOption: {
    color: color.neutral.darkGray,
    marginTop: normalize(4)
  },
  containerOptions: {
    marginBottom: normalize(20),
    flexDirection: 'row',
    alignItems: 'center',
  }
})
