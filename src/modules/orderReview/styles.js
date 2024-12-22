import { Platform, StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";
import color from "@/shared/constans/colors";
import { FONT } from "@/shared/constans/fonts";

export const styless = ({disabled, isPrimary,isDarkMode}) => StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: normalize(24),
    marginVertical: Platform.OS === 'ios' ? 0 : normalize(24),
  },
  containerSummary: {
    borderRadius: normalize(16),
    borderWidth: 1,
    borderColor: color.stroke.gray,
    padding: normalize(16),
  },
  divider: {
    height: 1,
    backgroundColor: color.stroke.gray,
    marginVertical: normalize(23),
  },
  containerPayments: {
    padding: normalize(20),
    backgroundColor: isDarkMode ? color.neutral.black : color.neutral.white,
    borderTopLeftRadius: normalize(14),
    borderTopRightRadius: normalize(14),
  },
  containerShippingAddress: {
    padding: normalize(20),
    backgroundColor: isDarkMode ? color.neutral.black : color.neutral.white,
    borderTopLeftRadius: normalize(14),
    borderTopRightRadius: normalize(14),
  },
  titleModal: {
    fontSize: normalize(18),
    marginLeft: normalize(10),
    fontFamily: FONT.SEMI_BOLD,
  },
 
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f0', // Light grey background color
    paddingVertical: normalize(16),
    paddingHorizontal: normalize(16),
    borderRadius: normalize(8),
    marginVertical: normalize(24),
  },
  svgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: normalize(16),
    color: '#000',
    marginLeft: normalize(8),
    fontFamily:FONT.MEDIUM
  },
  arrow: {
    fontSize: normalize(16),
    color: '#000',
  },
  priceContainer:{
    fontSize: normalize(20),
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    flexDirection:'row',
    gap:10,
    backgroundColor: "#000",
    padding: normalize(12),
    borderRadius: normalize(12),
    height: normalize(56),
    justifyContent: 'center',
    borderColor: !isPrimary ? color.stroke.gray : color.neutral.white,
    borderWidth: !isPrimary ? 1 : 0,
  },
  textTotal:{
    fontSize: normalize(20),
    color:"#fff",
  },
  price:{
    color:"#fff",
    fontSize: normalize(20),
  }
});

