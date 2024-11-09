import { StyleSheet, ViewStyle } from "react-native";
import { normalize } from "@/shared/helpers";
import { FONT } from "@/shared/constans/fonts";
import color from "@/shared/constans/colors";



export const styless = (isDarkMode) => StyleSheet.create({
  photo: {
    width: normalize(80),
    height: normalize(80),
    borderRadius: normalize(15),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameProduct: {
    fontSize: normalize(17),
    color: isDarkMode ? color.neutral.white : color.neutral.black,
    fontFamily: FONT.MEDIUM,
  },
  text: {
    fontSize: normalize(15),
    color: color.neutral.darkGray
  },
  sizeValue: {
    fontSize: normalize(16),
    fontFamily: FONT.MEDIUM,
  },
  containerInfo: {
    marginLeft: normalize(10),
    height: normalize(80),
    justifyContent: 'space-between',
  },
  btnReduce: {
    ...btn,
    backgroundColor: color.neutral.softGray,
  },
  btnAument: {
    ...btn,
    backgroundColor: color.main.blue,
  },
  value: {
    fontSize: normalize(18),
    marginHorizontal: normalize(16),
  },
  textBtn: {
    fontSize: normalize(18),
    textAlign: 'center',
  },
  textBtnWhite: {
    fontSize: normalize(18),
    color: color.neutral.white,
    textAlign: 'center'
  },
  rowValues: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: normalize(14),
  },
  price: {
    fontSize: normalize(18),
    fontFamily: FONT.BOLD,
  }
})
