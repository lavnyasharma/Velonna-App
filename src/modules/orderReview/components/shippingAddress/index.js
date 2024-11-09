import { normalize } from "@/shared/helpers";
import { View } from "react-native";
import { styles } from "./styles";
import Typography from "@/shared/components/Typography";
import Address from "@/shared/components/address";

export default function ShippingAddress({ change }) {
  return (
    <View style={{ marginTop: normalize(30) }}>
      <View style={styles.containerTitleSection}>
        <Typography customStyle={styles.titleSectionSummary} value="Shipping Address" />
        <Typography onPress={change} customStyle={styles.changeText} value="Change" />
      </View>

      <View style={styles.containerAddress}>
        <Address />
      </View>
    </View>
  );
}
