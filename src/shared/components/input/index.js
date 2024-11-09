import React from "react";
import { View, TextInput } from "react-native";
import { styless } from "./style";
import Typography from "../Typography";
import colors from "../../constans/colors";
import useDarkMode from "../../hooks/useDarkMode";
import { normalize } from "@/shared/helpers";

export default function Input({
  placeholder,
  value,
  onChangeText,
  Icon,
  IconRight,
  label,
  secureTextEntry,
  customStyles,
  ...props
}) {
  const { isDarkMode } = useDarkMode();

  const styles = styless(isDarkMode);

  return (
    <View style={[styles.container, customStyles]}>
      {label && <Typography customStyle={styles.label} value={label} />}
      {Icon && (
        <View style={{ marginRight: normalize(10) }}>
          <Icon />
        </View>
      )}
      <TextInput
        {...props}
        value={value}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={colors.neutral.darkGray}
        style={[styles.input]}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
      {IconRight && (
        <View style={{ marginLeft: normalize(10) }}>
          <IconRight />
        </View>
      )}
    </View>
  );
}
