import React from "react";
import { Text, StyleSheet } from "react-native";
import useDarkMode from "../../hooks/useDarkMode";
import { styless } from "./styles";

export default function Typography({
  value,
  customStyle,
  onPress,
  numberOfLines
}) {
  const { isDarkMode } = useDarkMode();

  const styles = styless(isDarkMode);
  return (
    <Text onPress={onPress} numberOfLines={numberOfLines} style={[styles.text, customStyle]}>{value}</Text>
  );
}
