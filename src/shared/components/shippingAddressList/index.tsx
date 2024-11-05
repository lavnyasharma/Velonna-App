import { normalize } from "@/shared/helpers";
import RadioButton, { RadioButtonOption } from "@/shared/components/radioButton";
import { View } from "react-native";
import Address from "@/shared/components/address";
import { AddressDTO } from "@/shared/DTO/AddressDTO";
import RadioButtons from "@/shared/components/radioButtons";
import React from "react";

interface ShippingAddressList {
  address: AddressDTO[],

}

export default function ShippingAddressList({address}: ShippingAddressList) {

  function formatOption(): RadioButtonOption[] {
    return address.map(addre => {
      return {
        id: addre.id,
        active: addre.isDefaultAddress
      }
    })
  }
  return (
    <View style={{width: '100%', marginTop: normalize( 14)}}>
      <RadioButtons between CustomLabel={() => <View><Address /></View>} options={formatOption()} columns={1} />
    </View>
  )
}
