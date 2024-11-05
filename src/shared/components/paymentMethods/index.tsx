import { normalize } from "@/shared/helpers";
import { View } from "react-native";
import { ArrowRight } from "@/shared/assets/icons";
import usePaymentMethods from "@/shared/components/paymentMethods/hooks/usePaymentMethods";
import PaymentMethod from "@/shared/components/paymentMethod";
import {styles} from './styles'

export default function PaymentMethods() {
  const {methods} = usePaymentMethods()

  return (
    <View style={{marginTop: normalize(20)}}>
      {methods.map(method => (
        <View key={method.id} style={styles.container}>
          <PaymentMethod title={method.title} Icon={method.icon} />
          <ArrowRight />
        </View>
      ))}
    </View>
  )
}
