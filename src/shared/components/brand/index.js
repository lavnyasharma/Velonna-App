import { normalize } from "@/shared/helpers";
import { Image, TouchableOpacity, View } from "react-native";
import Typography from "@/shared/components/Typography";
import React, { useState } from "react";
import {styless} from './styles';
import useDarkMode from "@/shared/hooks/useDarkMode";

export default function Brand({ brand, textColor, setChange }) {
  const { isDarkMode } = useDarkMode();
  const styles = styless(isDarkMode, textColor);

  return (
    <TouchableOpacity onPress={setChange} style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.brandLogo}
        source={brand.logo}
      />
      <Typography customStyle={styles.titleBrand} value={brand.name} />
    </TouchableOpacity>
  );
}
