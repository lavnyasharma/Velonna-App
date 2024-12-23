import { StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";
import color from "@/shared/constans/colors";
import { FONT } from "@/shared/constans/fonts";

export const styless = (isDarkMode) =>
  StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: isDarkMode ? "#121212" : "#F5F5F5",
      paddingHorizontal: normalize(24),
      paddingTop: normalize(20),
    },
    titleScreen: {
      fontSize: normalize(24),
      fontWeight: "bold",
      color: isDarkMode ? "#FFFFFF" : "#000000",
      marginBottom: normalize(12),
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
    },
    avatar: {
      width: normalize(60),
      height: normalize(60),
      borderRadius: normalize(30),
      borderWidth: 2,
      borderColor: "#E0E0E0",
      backgroundColor: "#F0F0F0",
    },
    textUser: {
      fontSize: normalize(18),
      fontWeight: "bold",
      color: isDarkMode ? "#FFFFFF" : "#000000",
    },
    email: {
      fontSize: normalize(14),
      color: isDarkMode ? "#B0B0B0" : "#808080",
      marginTop: normalize(4),
    },
    containerOptions: {
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: normalize(14),
      paddingHorizontal: normalize(16),
      backgroundColor: isDarkMode ? "#1E1E1E" : "#FFFFFF",
      borderRadius: normalize(12),
      marginBottom: normalize(10),
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 4,
    },
    titleOption: {
      fontSize: normalize(16),
      color: isDarkMode ? "#FFFFFF" : "#000000",
      fontWeight: "600",
    },
    logoutButton: {
      marginTop: normalize(24),
      paddingVertical: normalize(12),
      paddingHorizontal: normalize(16),
      backgroundColor: isDarkMode ? "#D32F2F" : "#F44336",
      borderRadius: normalize(8),
      alignItems: "center",
      justifyContent: "center",
    },
    logoutText: {
      fontSize: normalize(16),
      color: "#FFFFFF",
      fontWeight: "600",
    },
  });
