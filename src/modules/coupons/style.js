import { StyleSheet } from "react-native";
import color from "@/shared/constans/colors";
import { normalize } from "@/shared/helpers";
import { FONT } from "@/shared/constans/fonts";

export const styless = (isDarkMode) =>
  StyleSheet.create({
    headerText: {
      padding: 20,
    },
    container: {
      flex: 1,
      backgroundColor: isDarkMode ? "#000" : "#fff",
    },
    searchBar: {
      flexDirection: "row",
      marginHorizontal: 20,
      backgroundColor:"white",
      borderRadius: 8,
      shadowColor: "#ccc",
        shadowOffset: {
          width: 0,
          height: 9,
        }, 
        shadowOpacity: 0.5,
        shadowRadius: 12.35,
        elevation: 10,
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
    },
    input: {
      width: "80%",
      flex: 1,
      paddingLeft: 10,
      height: 50,
      color: isDarkMode ? "#fff" : "#000",
    },
    applyButton: {
      width: "20%",

      marginLeft: 10,
      alignItems: "center",
      justifyContent: "center",
    },
    couponContainer: {
      marginHorizontal: 20,

      backgroundColor: "white",
      shadowColor: "#ccc",
      shadowOffset: {
        width: 0,
        height: 9,
      },
      padding: 20,
      shadowOpacity: 0.5,
      shadowRadius: 12.35,
      borderWidth: 1, // Specifies the border width
    borderColor: 'black',

      elevation: 10,
      borderRadius: normalize(12),
    },
    off: {
      fontSize: normalize(22),
      fontFamily: FONT.SEMI_BOLD,
      color: "black",
    },
    for: {
      fontSize: normalize(18),
      fontFamily: FONT.NORMAL,
    },
    image: {
      backgroundColor: "black",
      width: 80,
      aspectRatio: 3 / 4,
      borderRadius: 10,
    },
    couponCode: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    actualCoupon: {
      fontSize: normalize(18),
      fontFamily: FONT.MEDIUM,
      color: "green",
    },
    copy: {
      flexDirection: "row",
    },
    copyComponent: {
      marginRight: 10,
    },
    price: {
      flexDirection: "row",
      alignItems: "center",
    },
    priced: {
      fontSize: normalize(14),
      fontFamily: FONT.NORMAL,
      color: "#fff",
    },
    pricedd: {
      borderWidth: 1,
      borderColor: "grey",
      width: "auto",
      backgroundColor: "black",
      flexShrink: 1,
      alignSelf: "flex-start",
      borderRadius: 5,
      paddingHorizontal: 5,
      alignItems: "center",
    },
    listItem: {
        fontSize: normalize(12),
        marginBottom: 5,
        fontFamily:FONT.NORMAL,
        color: '#333',
    },
    description: {
    
        paddingTop: 10,
    },
    couponFooter:{
        height:10,
        backgroundColor:"black",
        marginHorizontal:30,
        zIndex:-1,
        shadowColor: "#ccc",
        shadowOffset: {
          width: 0,
          height: 9,
        },
        
        shadowOpacity: 0.5,
        shadowRadius: 12.35,
        elevation: 10,
        borderBottomLeftRadius:8,
        borderBottomRightRadius:8
    }

  });
