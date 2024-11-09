import { TouchableOpacity, View } from "react-native";
import Typography from "@/shared/components/Typography";
import { styless } from './styles';
import React from "react";

export default function RadioButton({ option, between, onChange, CustomLabel }) {
  const styles = styless(option.active, between);

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
  );
}
