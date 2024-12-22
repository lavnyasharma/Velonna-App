import React, { useState, useRef, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
  Alert,
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Typography from "@/shared/components/Typography";
import Button from "@/shared/components/buttons/normal";
import useDarkMode from "@/shared/hooks/useDarkMode";
import LikeComponent from "@/shared/components/like";
import BackBtn from "@/shared/components/backBtn";
import { Share, Star } from "@/shared/assets/icons";
import { styless } from "./styles";
import { addToCart, getDetailsByHSn } from "@/apis";
import { useCart } from "@/context/cartContext";
import ProductImageCarousel from "../home/components/ProductImageCarousel";
import { formatCurrency } from "@/shared/helpers";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ProductDetail({ route }) {
  function formatTitle(title) {
    if (!title) return ""; // Handle empty or undefined input

    return title
      .split(" ") // Split the string into an array of words
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
      .join(" "); // Join the words back into a single string
  }

  const navigation = useNavigation();
  const { isDarkMode } = useDarkMode();
  const { cart } = useCart();

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const fadeAnim = useRef(new Animated.Value(0)).current;

  const hsn = route.params?.hsn; // Ensure HSN is passed in the route params

  // Fetch product details
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const data = await getDetailsByHSn(hsn);
        setProduct(data);
      } catch (error) {
        console.error("Failed to fetch product details:", error);
      }
    };

    fetchProductDetails();
  }, [hsn]);

  // Check if the product is already in the cart
  useEffect(() => {
    if (cart?.cart_item && product) {
      const isProductInCart = cart.cart_item.some(
        (item) => item.product.hsn === product.hsn
      );
      if (isProductInCart) {
        setAddedToCart(true);
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }).start();
      }
    }
  }, [cart, product]);

  const handleAddToCart = async () => {
    const accessToken = await AsyncStorage.getItem("accessToken");

    if (!accessToken) {
      // If access token doesn't exist, navigate to the login screen
      navigation.navigate("login");
      return;
    }

    // Proceed with adding the product to the cart
    setIsLoading(true);
    try {
      await addToCart(product.hsn, 1);
      setAddedToCart(true);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const styles = styless(isDarkMode);

  // Ensure product.images exists before attempting to map
  const imageUrls = product?.images?.map((img) => img.image) || [];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={styles.innerContainer}>
        {/* Header Section with Like and Back button */}
        <View style={styles.containerOptions}>
          <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()}>
            <BackBtn />
          </TouchableOpacity>
          <LikeComponent onLike={() => undefined} liked={false} />
        </View>

        {/* Product Image Carousel */}
        {imageUrls.length > 0 && <ProductImageCarousel images={imageUrls} aspectRatio={1.5} dotPosition="bottom" />}

        {/* Product details */}
        <View style={styles.body}>
          <View style={styles.containerInnerHeader}>
            <View style={styles.row}>
              <Star />
              <Typography customStyle={styles.star} value="0" />
              <Typography customStyle={styles.countReviews} value="(0)" />
            </View>
            <Share />
          </View>

          {/* Product Title */}
          <Typography customStyle={styles.title} value={formatTitle(product?.title)} />
          <Typography customStyle={styles.price} value={product && formatCurrency(product?.price)} />

          {/* Add to Bag and Buy Now buttons */}
          <View style={{ marginTop: 24 }}>
            {!addedToCart ? (
              <Button
                titleStyle={{ fontSize: 20 }}
                title="Add to bag"
                onPress={handleAddToCart}
                loading={isLoading}
              />
            ) : (
              <Animated.View style={{ opacity: fadeAnim }}>
                <Button
                  titleStyle={{ fontSize: 20 }}
                  title="Go to bag"
                  onPress={() => navigation.navigate("orderReview")}
                />
              </Animated.View>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
