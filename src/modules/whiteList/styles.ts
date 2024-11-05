import { Dimensions, Platform, StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";
import color from "@/shared/constans/colors";
import { FONT } from "@/shared/constans/fonts";

export const _styles = (isDarkMode: boolean) => StyleSheet.create({
  container: {
    paddingHorizontal: normalize(24),
    flex: 1,
    backgroundColor: isDarkMode ? color.neutral.black : color.neutral.white,
    paddingTop: normalize(Platform.OS === 'ios' ? 60 : 24),
  },
  containerSection: {
    marginVertical: normalize(14),
  },
  navbarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerWhiteList: {
    flex: 0.48,
    backgroundColor: isDarkMode ? color.neutral.gray : color.neutral.softGray,
    borderRadius: normalize(14),
    marginHorizontal: normalize(3),
    padding: normalize(4),
    marginBottom: normalize(10)
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  modalOverlay: {
    backgroundColor: 'black',
    opacity: 0.5,
    height: Dimensions.get('window').height,
    position: 'absolute',
    top: 0,
    lef: 0,
    width: '100%'
  },
  modalView: {
    margin: normalize(20),
    backgroundColor: isDarkMode ? color.neutral.black : color.neutral.white,
    borderRadius: normalize(16),
    padding: normalize(24),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%'
  },
  containerHeaderModal :{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleHeaderModal :{
    fontSize: normalize(16),
    fontFamily: FONT.SEMI_BOLD
  },
  containerDescription: {
    marginTop: normalize(16),
    marginBottom: normalize(26),
  },
  textDescription: {
    color: color.neutral.darkGray
  },
  nameWhiteList: {
    fontSize: normalize(16),
    fontFamily: FONT.SEMI_BOLD,
  }
})
