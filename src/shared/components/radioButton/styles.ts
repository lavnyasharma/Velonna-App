import { StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";
import color from "@/shared/constans/colors";
import { FONT } from "@/shared/constans/fonts";


export const _styles = (active: boolean | undefined, between: boolean | undefined) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: between ?  'space-between' : 'flex-start'
  },
  border: {
    width: normalize(23),
    height: normalize(23),
    borderColor: active ? color.main.blue : color.stroke.gray,
    borderWidth: normalize(active ? 2 : 3),
    borderRadius: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleInside: {
    width: normalize(15),
    height: normalize(15),
    backgroundColor: color.main.blue,
    borderRadius: 150,
  },
  label: {
    marginLeft: normalize(10),
    fontFamily: FONT.MEDIUM,
    fontSize: normalize(15)
  }
})
