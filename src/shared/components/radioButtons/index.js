import { createRows, normalize } from "@/shared/helpers";
import { View } from "react-native";
import React, { useState } from "react";
import RadioButton from "@/shared/components/radioButton";

export default function RadioButtons({ options, columns = 2, onChange, CustomLabel, between }) {
  const [myOptions, setMyOptions] = useState(options);

  function onHandleSelect(optionSelected) {
    setMyOptions(options.map(option => {
      if (option.id === optionSelected.id) {
        return { ...option, active: true };
      }
      return { ...option, active: false };
    }));

    if (onChange) {
      onChange({
        id: optionSelected.id,
        label: optionSelected?.label || ''
      });
    }
  }

  return (
    <View>
      {createRows(myOptions, columns).map((chunk, index) => (
        <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {chunk.map((item) => (
            <View key={item.id} style={{ justifyContent: 'flex-start', flex: 1, marginVertical: normalize(6) }}>
              <RadioButton between={between} CustomLabel={CustomLabel} onChange={onHandleSelect} option={item} />
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}
