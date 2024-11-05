import { createRows, normalize } from "@/shared/helpers";
import { View } from "react-native";
import React from 'react'

interface AnyListProps {
  data: any
  rows: number
  renderItem: (item: any) => React.ReactNode
}

export default function AnyList({data, rows, renderItem}: AnyListProps) {

  return (
    <>
      {createRows(data, rows).map((chunk, index) => (
        <View key={index} style={{flexDirection: 'row', alignItems: 'center', flex: 0.48,}}>
          {chunk.map((item) => renderItem(item))}
        </View>
      ))}
    </>
  )
}
