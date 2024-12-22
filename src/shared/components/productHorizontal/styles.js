import { StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";
import color from "@/shared/constans/colors";
import { FONT } from "@/shared/constans/fonts";
export const styless = (isDarkMode) =>
  StyleSheet.create({
    container: {
      backgroundColor: "black",
      flexDirection: "row",
      padding: 10,
      backgroundColor: isDarkMode ? "#333" : "#fff",
      // backgroundColor: isDarkMode ? color.neutral.gray : color.neutral.white,
   
      borderRadius: normalize(12),
      width: "98%",
      alignSelf: "center",
      flex: 1,
      marginBottom:10,
     
    },
    listContainer: {
      backgroundColor: isDarkMode ? "#121212" : "#ffffff",
    },
    skeletonContainer: {
      flexDirection: "row",
      padding: 10,
      backgroundColor: isDarkMode ? "#333" : "#fff",
     
      // backgroundColor: isDarkMode ? color.neutral.gray : color.neutral.white,
   
      borderRadius: normalize(12),
      width: "98%",
      alignSelf: "center",
      marginBottom: 10,
    },
    skeletonImage: {
      width: 80,
      aspectRatio: 3 / 4,
      borderRadius: 10,
      backgroundColor: isDarkMode ? "#2e2e2e" : "#e0e0e0",
    },
    skeletonContent: {
      flex: 2,
      marginLeft: 10,
    },
    skeletonTextLarge: {
      height: 18,
      borderRadius: 4,
      backgroundColor: isDarkMode ? "#444" : "#ddd",
      marginBottom: 8,
      width: "70%",
    },
    skeletonTextMedium: {
      height: 14,
      borderRadius: 4,
      backgroundColor: isDarkMode ? "#444" : "#ddd",
      marginBottom: 8,
      width: "50%",
    },
    skeletonTextSmall: {
      height: 12,
      borderRadius: 4,
      backgroundColor: isDarkMode ? "#444" : "#ddd",
      marginBottom: 8,
      width: "40%",
    },
    skeletonPriceContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 10,
    },
    skeletonPriceBox: {
      width: 50,
      height: 18,
      borderRadius: 5,
      backgroundColor: isDarkMode ? "#444" : "#ddd",
      marginRight: 10,
    },
    skeletonDiscountBox: {
      width: 30,
      height: 14,
      borderRadius: 4,
      backgroundColor: isDarkMode ? "#444" : "#ddd",
    },
    image: {
      backgroundColor: "black",
      width: 80,
      aspectRatio:3/4,
      borderRadius:10
    },
    deleteButton: {
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "red",
      width: 100,
      height: "100%",
      borderRadius: 10,
    },
    deleteText: {
      color: "white",
      fontSize: 16,
      fontWeight: "bold",
    },
    collection: {
     
      fontSize: normalize(14),
      fontFamily: FONT.NORMAL,
    },
    dataConatiner: {
      gap:5,
      marginLeft: 10,
      flex: 2,
    },
    name: {
      
      fontSize: normalize(18),
      fontFamily: FONT.SEMI_BOLD,
    },
    price: {
      flexDirection: "row",
      alignItems: "center", 
      justifyContent: "space-between", 
    },
    
    cont:{
      flexDirection: "row",
      alignItems: "center",
    },
    priced: {
      fontSize: normalize(12),
      fontFamily: FONT.NORMAL,
      color: "#888", // Gray color for the original price
    },
    pricedd:{
      borderWidth: 1,
      borderColor: 'grey',
      width: "auto",
      flexShrink: 1,
      alignSelf: 'flex-start',
      borderRadius: 5,
      paddingHorizontal: 5,
      alignItems: "center",
      marginRight: 10,
    },
    delete:{

    },
    category:{
 
     
      size:{
        fontSize: normalize(12),
        fontFamily: FONT.NORMAL,
      }
    },

    discount: {
      flexDirection: "column",
      justifyContent: "flex-start",
    
    },
    off: {
      fontSize: normalize(14),
      fontFamily: FONT.NORMAL,
      color: "red", // Red color for the discount text
      
    },
    discountPrice: {
      fontSize: normalize(16),
      fontFamily: FONT.NORMAL,
      color: isDarkMode ? "#fff" : "#000",
      fontWeight: "bold", // Emphasize the discounted price
      textDecorationLine: "line-through", // Adds the cut-through effect for original price
    },
    namewithmenu:{
      flexDirection:'row',
      justifyContent:'space-between'
    }
  });


