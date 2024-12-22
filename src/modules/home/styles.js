import { StyleSheet } from "react-native";
import color from "@/shared/constans/colors";
import { normalize } from "@/shared/helpers";
import { FONT } from "@/shared/constans/fonts";

export const styless = (isDarkMode) => StyleSheet.create({
  body: {
    backgroundColor: isDarkMode ? color.neutral.black : color.neutral.white,
    

   
    flex: 1,
  
  },
  title: {
    color: isDarkMode ? color.neutral.white : color.neutral.black,
    fontSize: normalize(20),
    fontFamily: FONT.BOLD,
  },
  navbar:{
 
   height:100,
   justifyContent:"center"

  },
  searchBar:{
    paddingTop:20,
    paddingBottom:20,
  },
  row: {
    flexDirection: 'row',
    flex: 0.48,
    justifyContent: 'space-between',
    marginTop: normalize(18),
  },
  
  
});
