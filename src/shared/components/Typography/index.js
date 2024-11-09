import React from "react";
import { Text, StyleSheet } from "react-native";
import useDarkMode from "../../hooks/useDarkMode";
import { styless } from "./styles";

export default function Typography({
  value,
  customStyle,
  onPress,
}) {
  const { isDarkMode } = useDarkMode();

  const styles = styless(isDarkMode);
  return (
    <Text onPress={onPress} style={[styles.text, customStyle]}>{value}</Text>
  );
}
