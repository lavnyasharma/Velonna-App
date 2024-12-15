import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { FONT } from "@/shared/constans/fonts";

export default function LineBreak({
  lineBreakStyle,
  color = "#f2f2f2",
  thickness = 1,
  marginHorizontal = 0,
  marginVertical = 0,
  innerTextEnable = false,
  innerText = "whats's on your mind?",
  innerTextColor = "#555555",
  innerTextSize = 12,
}) {
  return (
    <View
      style={[
        style.linebreak,
        {
          backgroundColor: color,
          height: thickness,
          marginHorizontal: marginHorizontal,
          marginVertical: marginVertical,
        },
        lineBreakStyle,
      ]}
    >
      {innerTextEnable ? (
        <Text
          style={[
            style.text,
            {
              color: innerTextColor,
              fontSize: innerTextColor,
              fontSize: innerTextSize,
            },
          ]}
        >
          {innerText}
        </Text>
      ) : null}
    </View>
  );
}

const style = StyleSheet.create({
  linebreak: {
    overflow: "visible",
    justifyContent: "center",
    alignItems: "center",
    height: 2,
    backgroundColor: "#f2f2f2",
  },
  text: {
    fontSize: 15,
    position: "absolute",
    paddingHorizontal: 10,
    fontFamily: FONT.NORMAL,
    color: "#555555",
    letterSpacing: 3,
    fontWeight: "semibold",
    textTransform: "uppercase",
    backgroundColor: "#fff",
  },
});