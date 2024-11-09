import { normalize } from "@/shared/helpers";
import { Image, TouchableOpacity, View, ActivityIndicator } from "react-native";
import Typography from "@/shared/components/Typography";
import { styless } from './styles';
import React, { useState } from "react";
import useDarkMode from "@/shared/hooks/useDarkMode";
import { useNavigation } from "@react-navigation/native";
import { fetchProductList } from "@/apis"; // Import the function
import { NavigationProps } from "@/shared/routes/stack";
import NameStore from "@/shared/components/nameStore";
import LikeComponent from "@/shared/components/like";

export default function Product({ product }) {
  console.log(product)
  const navigation = useNavigation();
  const { isDarkMode } = useDarkMode();
  const styles = styless(isDarkMode);

  const [loading, setLoading] = useState(false); // State for loading
  const [error, setError] = useState(null); // State for error message

  // Function to navigate to product details page
  function goToDetail() {
    navigation.navigate('productDetail', { product });
  }

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={goToDetail} key={product.id} style={styles.container}>
      <View style={styles.containerLike}>
        {/* <LikeComponent onLike={() => setLiked(!liked)} liked={liked} /> */}
      </View>
      <Image resizeMode="cover" style={styles.imageProduct} source={{ uri: product.thumbnail }} />

      <View style={{ marginTop: normalize(8), padding: normalize(8) }}>
        <Typography customStyle={styles.nameProduct} value={product.title} />
        <NameStore store={product.collection} />
        <Typography customStyle={styles.price} value={`Rs ${product.price}`} />
      </View>

      {/* Loading or Error state */}
      {loading && <ActivityIndicator size="large" color="#0000ff" />}
      {error && <Typography customStyle={{ color: 'red' }} value={error} />}
    </TouchableOpacity>
  );
}
