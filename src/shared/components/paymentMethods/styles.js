import { StyleSheet } from "react-native";
import { normalize } from "@/shared/helpers";


export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: normalize(10)
  }
})
