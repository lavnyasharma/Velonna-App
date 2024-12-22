import { StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";
import color from "@/shared/constans/colors";
import { FONT } from "@/shared/constans/fonts";

export const styles = StyleSheet.create({
  container: {
    paddingLeft:0,
    paddingRight:10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    height: 60,
    justifyContent: "space-between",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 1,
    // },
    // shadowOpacity: 0.22,
    // shadowRadius: 2.22,
    // elevation: 3,
  },
  nameUser: {
    fontSize: normalize(20),
    fontFamily: FONT.MEDIUM,
    color: color.neutral.black,
  },
  logo:{
width:140,
height:60
  },
  logoContainer:{
width:50
  }
});
