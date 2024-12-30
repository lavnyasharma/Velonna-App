import { formatCurrency, normalize } from "@/shared/helpers";
import { Image, TouchableOpacity, View, Alert } from "react-native";
import Typography from "@/shared/components/Typography";
import { styless } from "./styles";
import React, { useState, useEffect } from "react";
import useDarkMode from "@/shared/hooks/useDarkMode";
import { useNavigation } from "@react-navigation/native";
import LikeComponent from "@/shared/components/like"; 
import { Star } from "@/modules/home/components/layouts/section";


export default function Product({ product }) {
  const navigation = useNavigation();
  const { isDarkMode } = useDarkMode();
  const styles = styless(isDarkMode);

  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);
  const [liked, setLiked] = useState(false); 

const hsn = product.hsn
  function goToDetail() {
    navigation.navigate("productDetail", { hsn });
  }


  const toggleLike = () => {
    setLiked(!liked); // Toggle the liked state
   
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={goToDetail}
      key={product.id}
      style={styles.container}
    >
      <View style={styles.containerLike}>
        <TouchableOpacity onPress={toggleLike} activeOpacity={0.7}>
          <LikeComponent liked={liked} onLike={toggleLike} />
        </TouchableOpacity>
      </View>
      <Image  style={styles.imageProduct} source={{ uri: product.thumbnail }} />
      <View style={styles.reviewContainer}>
            <Typography customStyle={styles.reviewText} value="0 ⭐️" />
          </View>
      <View style={{ marginTop: normalize(8), padding: normalize(8) }}>
        <Typography
        numberOfLines={1} 
          ellipsizeMode="tail"
          customStyle={styles.nameProduct}
          value={product.title.charAt(0).toUpperCase() + product.title.slice(1)}
        />
        <Typography
        numberOfLines={1} 
          ellipsizeMode="tail"
          customStyle={styles.nameCollection}
          value={product.collection.charAt(0).toUpperCase() + product.collection.slice(1)}
        />
         <Typography
        numberOfLines={1} 
          ellipsizeMode="tail"
          customStyle={styles.nameCollection}
          value={product.category.charAt(0).toUpperCase() + product.category.slice(1)}
        />
        <View style={styles.priceReviewContainer}>
          <Typography customStyle={styles.price} value={`${formatCurrency(product.price)}`} />
         
        </View>
      </View>

      {error && <Typography customStyle={{ color: "red" }} value={error} />}
    </TouchableOpacity>
  );
}
