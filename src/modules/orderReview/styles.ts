import { Platform, StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";
import color from "@/shared/constans/colors";
import { FONT } from "@/shared/constans/fonts";

export const _styles = (isDarkMode: boolean) => StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: normalize(24),
    marginVertical: Platform.OS === 'ios' ? 0 : normalize(24)
  },
  containerSummary: {
    borderRadius: normalize(16),
    borderWidth: 1,
    borderColor: color.stroke.gray,
    padding: normalize(16),
  },
  divider: {
    height: 1,
    backgroundColor: color.stroke.gray,
    marginVertical: normalize(23)
  },
  containerPayments: {
    padding: normalize(20),
    backgroundColor: isDarkMode ? color.neutral.black : color.neutral.white,
    borderTopLeftRadius: normalize(14),
    borderTopRightRadius: normalize(14),
  },
  containerShippingAddress: {
    padding: normalize(20),
    backgroundColor: isDarkMode ? color.neutral.black : color.neutral.white,
    borderTopLeftRadius: normalize(14),
    borderTopRightRadius: normalize(14),
  },
  titleModal: {
    fontSize: normalize(18),
    marginLeft: normalize(10),
    fontFamily: FONT.SEMI_BOLD,
  }
})
