import { Platform, StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";

export const styless = (isDarkMode) => StyleSheet.create({
  container: {
    marginHorizontal: normalize(24),
    flex: 1,
    paddingVertical: Platform.OS === 'ios' ? 0 : normalize(24)
  },
});
