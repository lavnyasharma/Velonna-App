import { createRows, normalize } from "@/shared/helpers";
import { ProductDTO } from "@/shared/DTO/ProductDTO";
import { View } from "react-native";
import Product from "@/shared/components/product";
import React from "react";

interface ProductListProps {
  products: ProductDTO[]
  rows: number
}

export default function ProductList({products, rows}: ProductListProps) {

  return (
    <>
      {createRows(products, rows).map((chunk, index) => (
        <View key={index} style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: normalize(18), alignItems: 'center', flex: 0.48,}}>
          {chunk.map((item) => (
            <Product key={item.id} product={item} />
          ))}
        </View>
      ))}
    </>
  )
}
