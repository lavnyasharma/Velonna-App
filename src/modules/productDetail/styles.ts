import { StyleSheet } from "react-native";
import color from "@/shared/constans/colors";
import { normalize } from "@/shared/helpers";
import { FONT } from "@/shared/constans/fonts";


export const _styles = (isDarkMode: boolean) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: isDarkMode ? color.neutral.black : color.neutral.white,
  },
  innerContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  backgroundImageProduct: {
    position: 'relative',
    justifyContent: 'space-between',
    paddingVertical: normalize(50),
    paddingHorizontal: normalize(24),
    height: normalize(450),
  },
  containerOptions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnBack: {
    justifyContent:'center',
    alignItems: 'center',
    borderRadius: 150,
    width: normalize(44),
    height: normalize(44),
    backgroundColor: isDarkMode ? color.neutral.black : color.neutral.white,
  },
  containerExtraPhotos: {
    position: 'absolute',
    bottom: -40,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  extraPhoto: {
    shadowColor: color.neutral.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.21,
    shadowRadius: 6.65,
    elevation: 8,
    borderColor: color.main.blue,
    borderRadius: normalize(16),
    position: 'relative',
  },
  shadowOverlay: {
    width: normalize(75),
    height: normalize(75),
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    borderRadius: normalize(16),
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  countExtraImages: {
    color: color.neutral.white,
    fontSize: normalize(20),
    fontFamily: FONT.BOLD,
    zIndex: 11,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    marginLeft: normalize(5),
    fontFamily: FONT.SEMI_BOLD
  },
  countReviews: {
    marginLeft: normalize(3),
    color: color.neutral.darkGray
  },
  price: {
    fontSize: normalize(24),
    fontFamily: FONT.BOLD
  },
  imageStore: {
    width: normalize(50),
    height: normalize(50),
  },
  containerStore: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: normalize(10),
  },
  containerName: {
    marginLeft: normalize(10),
  },
  image: {
    borderRadius: normalize(16),
    width: normalize(75),
    height: normalize(75),
  },
  containerInnerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  body: {
    padding: normalize(24),
    backgroundColor: isDarkMode ? color.neutral.black : color.neutral.white,
    borderTopRightRadius: normalize(14),
    borderTopLeftRadius: normalize(14)
  },
  size: {
    borderRadius: 16,
    borderWidth: 1,
    height: normalize(44),
    borderColor: color.stroke.gray,
    marginVertical: normalize(5),
    marginRight: normalize(12),
    justifyContent: 'center',
    alignItems: 'center',
    padding: normalize(12),
  }
})
