import { normalize } from "@/shared/helpers";
import { Image, TouchableOpacity, View } from "react-native";
import Typography from "@/shared/components/Typography";
import React, { useState } from "react";
import {_styles} from './styles'
import { BrandDTO } from "@/shared/DTO/BrandDTO";
import useDarkMode from "@/shared/hooks/useDarkMode";

interface BrandProps {
  brand: BrandDTO
  textColor?: string
  setChange?: any
}

export default function Brand({brand, textColor, setChange}: BrandProps) {
  const {isDarkMode} = useDarkMode()
  const styles = _styles(isDarkMode, textColor)
  return (
    <TouchableOpacity onPress={setChange} style={styles.container}>
      <Image
        resizeMode="contain"
        style={styles.brandLogo}
        source={brand.logo}
      />
      <Typography customStyle={styles.titleBrand} value={brand.name} />
    </TouchableOpacity>
  )
}
