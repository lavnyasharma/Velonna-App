import Typography from "@/shared/components/Typography";
import { styles } from './styles';
import { View } from "react-native";
import React from "react";

export default function PaymentMethod({ title, Icon }) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Icon width={58} height={34} />
      <Typography customStyle={styles.title} value={title} />
    </View>
  );
}
