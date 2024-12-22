import { StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";
import color from "@/shared/constans/colors";
import { FONT, FONT3 } from "@/shared/constans/fonts";


export const styless = (isDarkMode) => StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    padding: normalize(4),
    backgroundColor: isDarkMode ? color.neutral.gray : color.neutral.white,
    shadowColor: "#ccc",
    shadowOffset: {
	  width: 0,
	  height: 9,
    },
    shadowOpacity: 0.50,
    shadowRadius: 12.35,

    elevation: 10,
   
  },
  skeletonBackground: {
    backgroundColor: isDarkMode ? color.neutral.darkGray : color.neutral.lightGray,
    borderRadius: normalize(12),
  },
  skeletonText: {
    height: normalize(14),
    backgroundColor: isDarkMode ? color.neutral.darkGray : color.neutral.lightGray,
    borderRadius: normalize(4),
  },
  priceReviewContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  reviewContainer: {
    position:"absolute",
    backgroundColor:"#fff",
    
    flexDirection: "row",
    padding:5,
    bottom:105,
    borderRadius:2,
    left:10,
    alignItems: "center",
  },
  starIcon: {
    marginRight: normalize(4),
  },
  reviewText: {
    fontSize: normalize(12),
    fontFamily: FONT.NORMAL,
    color: isDarkMode ? "#ccc" : "#555",
  },
  containerLike: {
    position: 'absolute',
    zIndex: 10,
    top: normalize(1),
    right: normalize(1),
  },
  imageProduct: { 
    flex: 1,
    aspectRatio:1/1
  },
  nameProduct: {
    color: isDarkMode ? color.neutral.white : color.neutral.black,
    fontFamily: FONT.MEDIUM,
    fontSize: normalize(18),
    width: '100%',          // Set the width to 80%
    overflow: 'hidden',    // Ensure content doesn't overflow
    textOverflow: 'ellipsis', // Add ellipses for overflow
    whiteSpace: 'nowrap',  // Prevent text wrapping
},
nameCollection: {
  color: isDarkMode ? color.neutral.white : color.neutral.black,
  fontFamily: FONT3.MEDIUM,
  fontSize: normalize(15),
  width: '100%',          // Set the width to 80%
  overflow: 'hidden',    // Ensure content doesn't overflow
  textOverflow: 'ellipsis', // Add ellipses for overflow
  whiteSpace: 'nowrap',  // Prevent text wrapping
},
nameCategory: {
  color: isDarkMode ? color.neutral.white : color.neutral.black,
  fontFamily: FONT3.MEDIUM,
  fontSize: normalize(15),
  width: '100%',          // Set the width to 80%
  overflow: 'hidden',    // Ensure content doesn't overflow
  textOverflow: 'ellipsis', // Add ellipses for overflow
  whiteSpace: 'nowrap',  // Prevent text wrapping
},
  containerNameStore: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: normalize(4),
  },
  nameStore: {
    color: color.neutral.darkGray,
    fontSize: normalize(14),
  },
  price: {
    marginTop: normalize(8),
    color: isDarkMode ? color.neutral.white : color.neutral.black,
    fontFamily: FONT.BOLD,
    fontSize: normalize(18)
  }
})
