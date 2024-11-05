import { StyleSheet } from "react-native";
import color from "@/shared/constans/colors";
import { normalize } from "@/shared/helpers";
import { FONT } from "@/shared/constans/fonts";


export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: normalize(24),
  },
  avatar: {
    borderRadius: 150,
    backgroundColor: color.neutral.darkGray,
    width: normalize(60),
    height: normalize(60)
  },
  containerAvatar: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: normalize(24)
  },
  changeProfile: {
    color: color.main.blue,
    fontFamily: FONT.SEMI_BOLD,
    marginTop: normalize(10)
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: color.neutral.darkGray,
    marginVertical: normalize(24)
  },
  containerInformation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: normalize(12)
  },
  textId: {
    color: color.neutral.darkGray,
    fontSize: normalize(15),
    flex: 0.4
  },
  textValue: {
    fontSize: normalize(15),
    textAlign: 'left',
    flex: 0.6
  }
})
