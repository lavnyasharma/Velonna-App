import { normalize } from "@/shared/helpers";
import { Image, TouchableOpacity, View } from "react-native";
import Typography from "@/shared/components/Typography";
import {_styles} from './styles'
import React, { useState } from "react";
import useDarkMode from "@/shared/hooks/useDarkMode";
import { ProductDTO } from "@/shared/DTO/ProductDTO";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "@/shared/routes/stack";
import NameStore from "@/shared/components/nameStore";
import LikeComponent from "@/shared/components/like";

interface ProductProps {
  product: ProductDTO
}

export default function Product({product}: ProductProps) {
  const navigation = useNavigation<NavigationProps>()
  const [liked, setLiked] = useState<boolean>(product.liked)
  const {isDarkMode} = useDarkMode()
  const styles = _styles(isDarkMode)
  function goToDetail() {
    navigation.navigate('productDetail', { product })
  }
  return (
      <TouchableOpacity activeOpacity={0.8} onPress={goToDetail} key={product.id} style={styles.container}>
        <View style={styles.containerLike}>
          <LikeComponent onLike={() => setLiked(!liked)} liked={liked}/>
        </View>
        <Image resizeMode="cover" style={styles.imageProduct} source={{ uri: product.image}} />

        <View style={{marginTop: normalize(8), padding: normalize(8)}}>
          <Typography customStyle={styles.nameProduct} value={product.name} />
          <NameStore store={product.store} />

          <Typography customStyle={styles.price} value={`$${product.price}`} />
        </View>
      </TouchableOpacity>
  )
}
