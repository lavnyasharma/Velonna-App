import Typography from "@/shared/components/Typography";
import {styles} from './styles'
import { View } from "react-native";
import React from "react";

interface PaymentMethodProps {
  title: string
  Icon: React.JSXElementConstructor<any>;
}
export default function PaymentMethod({title, Icon}: PaymentMethodProps) {

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Icon width={58} height={34} />
      <Typography customStyle={styles.title} value={title} />
    </View>
  )
}
