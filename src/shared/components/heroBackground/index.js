import bgIcon from "./assets/bg.png";
import { ImageBackground } from "react-native";
import React from "react";

export default function HeroBackground({children, height}) {
  return (
    <ImageBackground style={{height: height || 400, justifyContent: 'space-evenly'}} source={bgIcon}>
      {children}
    </ImageBackground>
  )
}
