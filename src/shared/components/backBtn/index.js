import { Back, BackWhite } from "@/shared/assets/icons";
import { TouchableOpacity } from "react-native";
import React from "react";
import useDarkMode from "@/shared/hooks/useDarkMode";
import { useNavigation } from "@react-navigation/native";

export default function BackBtn() {
  const navigation = useNavigation()
  const {isDarkMode} = useDarkMode();
  function goBack() {
    navigation.goBack();
  }
  return (
    <TouchableOpacity onPress={goBack}>
      {isDarkMode ?  <BackWhite /> :  <Back /> }
    </TouchableOpacity>
  )
}
