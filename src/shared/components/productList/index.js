import { createRows, normalize } from "@/shared/helpers";
import { ProductDTO } from "@/shared/DTO/ProductDTO";
import { View } from "react-native";
import Product from "@/shared/components/product";
import React, { useState, useEffect } from "react";
import ProductSkeleton from "../skeletons/productSkeleton";
 // Assuming you have a Skeleton component

export default function ProductList({ products, rows }) {
  const [loading, setLoading] = useState(true); // Loading state
  console.log(products)
  useEffect(() => {
    if(products.length!==0){
      setLoading(false)
    }
  }, [products]);

  // Render skeleton rows if loading is true
  if (loading) {
    return (
      <>
        {Array.from({ length: rows }).map((_, index) => (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: normalize(18),
              alignItems: 'center',
              flex: 0.48
            }}
          >
            {/* Render skeleton for each product */}
            {Array.from({ length: 2 }).map((_, skeletonIndex) => (
              <ProductSkeleton key={skeletonIndex} />
            ))}
          </View>
        ))}
      </>
    );
  }

  // Render actual product list when loading is complete
  return (
    <>
      {createRows(products, rows).map((chunk, index) => (
        <View
          key={index}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flex: 1
          }}
        >
          {chunk.map((item) => (
            <Product key={item.id} product={item} />
          ))}
        </View>
      ))}
    </>
  );
}
