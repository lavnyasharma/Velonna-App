import { TouchableOpacity, View } from "react-native";
import Typography from "@/shared/components/Typography";
import {_styles} from './styles'
import React from "react";

export interface RadioButtonOption {
  id: string;
  label?: string
  active: boolean;
}

interface RadioButtonProps {
  onChange?: any
  option: RadioButtonOption
  CustomLabel?: React.JSXElementConstructor<any>;
  between?: boolean | undefined
}
export default function RadioButton({option, between, onChange, CustomLabel}: RadioButtonProps) {

  const styles = _styles(option.active, between);
  return (
    <TouchableOpacity
      onPress={() => onChange(option)}
      style={styles.container}
      activeOpacity={0.9}
    >
      {CustomLabel && (
        <CustomLabel />
      )}
      <View style={styles.border}>
        {option.active && (
          <View style={styles.circleInside} />
        )}
      </View>
      {option.label && (
        <Typography customStyle={styles.label} value={option.label} />
      )}
    </TouchableOpacity>
  )
}
