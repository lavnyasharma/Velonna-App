import { View } from "react-native";
import { styles } from "./styles";
import Typography from "@/shared/components/Typography";
import { Paypal } from "@/shared/assets/methodsPayment";
import { normalize } from "@/shared/helpers";
import { FONT } from "@/shared/constans/fonts";

export default function PaymentMethod({ change }) {
  return (
    <View>
      <View style={styles.containerTitleSection}>
        <Typography customStyle={styles.titleSectionSummary} value="Payment Method" />
        <Typography onPress={change} customStyle={styles.changeText} value="Change" />
      </View>

      <View style={styles.paymentMethod}>
        <Paypal />
        <Typography customStyle={{
          fontFamily: FONT.MEDIUM,
          fontSize: normalize(15),
          marginLeft: normalize(10),
        }} value="Paypal" />
      </View>
    </View>
  );
}
