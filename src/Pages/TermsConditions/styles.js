import { StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";
import color from "@/shared/constans/colors";
import { FONT } from "@/shared/constans/fonts";

export const styless = (isDarkMode) => StyleSheet.create({
    container: {
        padding: 16,
      },
      section: {
        marginBottom: 20,
      },
      heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      
      btnBack: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        justifyContent:'center',
        alignItems: 'center',
      
        width: normalize(40),
        height: normalize(40),
        marginBottom:20,
        
      },
      paragraph: {
        fontSize: 14,
        marginBottom: 10,
        lineHeight: 22,
      },
      listItem: {
        fontSize: 14,
        marginBottom: 5,
        paddingLeft: 20,
      },
});
