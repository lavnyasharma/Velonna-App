import { Close, CloseWhite } from "@/shared/assets/icons";
import { TouchableOpacity } from "react-native";
import React from "react";
import useDarkMode from "@/shared/hooks/useDarkMode";


export default function CloseBtn({onPress}) {
  const {isDarkMode} = useDarkMode()
  return (
    <TouchableOpacity onPress={onPress}>
      {isDarkMode ? (
        <CloseWhite />
      ) : (
        <Close />
      )}

    </TouchableOpacity>
  )
}
