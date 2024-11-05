import React from "react";
import { View, StyleProp, TextStyle, TextInput, ViewStyle } from "react-native";
import { _styles } from "./style";
import Typography from "../Typography";
import colors from "../../constans/colors";
import useDarkMode from "../../hooks/useDarkMode";
import { normalize } from "@/shared/helpers";

interface InputProps {
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void; // Renamed to match TextInput prop
  Icon?: React.JSXElementConstructor<any>;
  IconRight?: React.JSXElementConstructor<any>;
  disabled?: boolean;
  multiline?: boolean;
  style?: StyleProp<TextStyle>;
  label?: string;
  secureTextEntry?: boolean;
  customStyles?: ViewStyle;
}

export default function Input({
  placeholder,
  value,
  onChangeText, // Change to match expected prop name
  Icon,
  IconRight,
  label,
  secureTextEntry,
  customStyles,
  ...props
}: InputProps) {
  const { isDarkMode } = useDarkMode();

  const styles = _styles(isDarkMode);

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
        onChangeText={onChangeText} // Use the correct prop
      />
      {IconRight && (
        <View style={{ marginLeft: normalize(10) }}>
          <IconRight />
        </View>
      )}
    </View>
  );
}
