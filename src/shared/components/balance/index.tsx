
import { Image, View } from "react-native";
import Typography from "@/shared/components/Typography";
import { LogoApp } from "@/shared/assets/images";
import React from "react";
import {_styles} from "./styles";
import useDarkMode from "@/shared/hooks/useDarkMode";


export default function Balance() {
  const {isDarkMode} = useDarkMode()
  const styles = _styles(isDarkMode)

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View>
          <Typography customStyle={styles.title} value="Tuks’s Balance" />
          <Typography customStyle={styles.balance} value="$2,021" />
        </View>
        <View>
          <Image resizeMode="contain" style={styles.logo} source={LogoApp} />
        </View>
      </View>
    </View>
  )
}
