import { normalize } from "@/shared/helpers";
import RadioButton from "@/shared/components/radioButton";
import { View } from "react-native";
import Address from "@/shared/components/address";
import RadioButtons from "@/shared/components/radioButtons";
import React from "react";

export default function ShippingAddressList({ address }) {

  function formatOption() {
    return address.map(addre => {
      return {
        id: addre.id,
        active: addre.isDefaultAddress
      }
    });
  }

  return (
    <View style={{ width: '100%', marginTop: normalize(14) }}>
      <RadioButtons between CustomLabel={() => <View><Address /></View>} options={formatOption()} columns={1} />
    </View>
  );
}
