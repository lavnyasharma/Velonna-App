import { Platform, StyleSheet } from "react-native";
import { normalize } from "../../helpers";
import colors from "../../constans/colors";

export const styless = (isDarkMode) => StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.stroke.gray,
    padding: Platform.OS === 'ios' ? normalize(16) : normalize(10),
    borderRadius: normalize(12),
    backgroundColor: isDarkMode ? colors.neutral.black : colors.neutral.white,
    position: 'relative',
    marginTop: normalize(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    position: 'absolute',
    backgroundColor: isDarkMode ? colors.neutral.black : colors.neutral.white,
    padding: 3,
    top: normalize(-11),
    left: normalize(16),
    fontSize: Platform.OS === 'ios' ? normalize(14) : normalize(12),
    color: isDarkMode ? colors.neutral.white : colors.neutral.darkGray
  },
  input: {
    flex: 1,
    fontSize: normalize(14),
    color: isDarkMode ? colors.neutral.white : colors.neutral.black,
    padding: Platform.OS === 'ios' ? normalize(4) : 0
  }
})
