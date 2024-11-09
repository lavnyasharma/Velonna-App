import { StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";
import color from "@/shared/constans/colors";
import { FONT } from "@/shared/constans/fonts";


export const styless = (isDarkMode) => StyleSheet.create({
  container: {
    flex: 0.49,
    position: 'relative',
    padding: normalize(4),
    backgroundColor: isDarkMode ? color.neutral.gray : color.neutral.white,
    shadowColor: color.neutral.lightGray,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.21,
    shadowRadius: 6.65,
    borderRadius: normalize(12),
    elevation: 9,
  },
  containerLike: {
    position: 'absolute',
    zIndex: 10,
    top: normalize(10),
    right: normalize(10),
  },
  imageProduct: {
    borderRadius: normalize(12),
    width: '100%',
    flex: 1,
    height: normalize(157),
  },
  nameProduct: {
    color: isDarkMode ? color.neutral.white : color.neutral.black,
    fontSize: normalize(14),
  },
  containerNameStore: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: normalize(4),
  },
  nameStore: {
    color: color.neutral.darkGray,
    fontSize: normalize(14),
  },
  price: {
    marginTop: normalize(8),
    color: isDarkMode ? color.neutral.white : color.neutral.black,
    fontFamily: FONT.BOLD,
    fontSize: normalize(18)
  }
})
