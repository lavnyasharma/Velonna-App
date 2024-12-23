import { StyleSheet } from "react-native";
import colors from "@/shared/constans/colors";


export const styless = (isDarkMode) => StyleSheet.create({
  container: {
    backgroundColor: isDarkMode ? colors.neutral.black : colors.neutral.white,
    flex: 1
  }
})
