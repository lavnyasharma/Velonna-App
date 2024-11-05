import { Dimensions, StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";


export const styles = StyleSheet.create({
  containerCard: {
    width: Dimensions.get('window').width - 50,
    borderRadius: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 16
  },
  containerIndicators: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: normalize(20),
  }
})
