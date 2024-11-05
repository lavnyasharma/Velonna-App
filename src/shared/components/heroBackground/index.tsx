import bgIcon from "./assets/bg.png";
import { ImageBackground } from "react-native";
import React from "react";

interface HeroBackgroundProps {
  children: React.ReactNode;
  height?: number
}

export default function HeroBackground({children, height}: HeroBackgroundProps) {
  return (
    <ImageBackground style={{height: height || 400, justifyContent: 'space-evenly'}} source={bgIcon}>
      {children}
    </ImageBackground>
  )
}
