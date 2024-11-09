import { createRows, normalize } from "@/shared/helpers";
import { View } from "react-native";
import React from 'react';

export default function AnyList({ data, rows, renderItem }) {
  return (
    <>
      {createRows(data, rows).map((chunk, index) => (
        <View key={index} style={{ flexDirection: 'row', alignItems: 'center', flex: 0.48 }}>
          {chunk.map((item) => renderItem(item))}
        </View>
      ))}
    </>
  );
}
