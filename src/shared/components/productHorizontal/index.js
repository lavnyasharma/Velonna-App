import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, Alert, TouchableOpacity } from "react-native";
import { styless } from "./styles";
import Typography from "@/shared/components/Typography";
import useDarkMode from "@/shared/hooks/useDarkMode";
import { getCart, deleteFromCart } from "@/apis"; // Import the API functions
import { Menu, MenuItem } from "react-native-material-menu"; // A library for menu (install via npm if not already)
import { useCart } from "@/context/cartContext";
import LineBreak from "@/modules/home/components/layouts/lineBreak";
import { DeleteButton } from "@/modules/home/components/layouts/section";
import LottieView from 'lottie-react-native'; // Import LottieView

export default function ProductHorizontal({ actions = true }) {
  const { isDarkMode } = useDarkMode();
  const styles = styless(isDarkMode);

  const [cartItems, setCartItems] = useState([]); // Ensure this is an array
  const [loading, setLoading] = useState(true); // Track loading state
  const [visibleMenu, setVisibleMenu] = useState(null); // To track which menu is visible
  const { cart } = useCart();

  useEffect(() => {
    // Fetch cart items
    const fetchCart = async () => {
      setLoading(true);
      try {
        const data = await getCart();
        // Ensure data is an array or contains the array you need
        setCartItems(data.cart_item || []);
        console.log(data.cart_item);
      } catch (error) {
        console.error("Error fetching cart:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  const handleDelete = async (cartItemId) => {
    try {
      await deleteFromCart(cartItemId); // Call delete API
      setCartItems((prevItems) =>
        Array.isArray(prevItems)
          ? prevItems.filter((item) => item.id !== cartItemId)
          : [] // Safeguard against unexpected data
      );
    } catch (error) {
      console.error("Error deleting cart item:", error);
    }
  };
  

  const renderItem = ({ item }) => {
    const { product } = item;
    const dummyDiscount = "10% off";

    return (
      <>
        <View style={styles.container}>
          <Image
            source={product.thumbnail ? { uri: product.thumbnail } : { uri: "https://via.placeholder.com/150" }}
            style={styles.image}
          />
          <View style={styles.dataConatiner}>
            <View style={styles.dataConatiner.name}>
              <View style={styles.namewithmenu}>
                <Text style={styles.name}>
                  {product.title.charAt(0).toUpperCase() + product.title.slice(1)}
                </Text>
              
              </View>
            </View>
            <View style={styles.collection}>
              <Text style={styles.collection}>{`${product.collection}`}</Text>
            </View>
            <View style={styles.category}>
              <Text style={styles.category.size}>{`${product.size}`}</Text>
            </View>
            <View style={styles.price}>
              <View style={styles.cont} >
              <View style={styles.pricedd}>
                <Text style={styles.priced}>{`Rs ${product.price}`}</Text>
              </View>
              <View style={styles.discount}>
                <Text style={styles.off}>{dummyDiscount}</Text>
                <Text style={styles.discountPrice}>{`Rs ${product.price * 0.9}`}</Text>
              </View>
              </View>
              <View style={styles.delete}>
              {actions && (
  <TouchableOpacity
    onPress={() => handleDelete(item.id)} // Directly calls the delete function
  >
    <DeleteButton /> 
  </TouchableOpacity>
)}
              </View>
              
            </View>
          </View>

        </View>
        <LineBreak thickness={2} />
      </>
    );
  };

  // Render skeleton loader
  const renderSkeleton = () => (
    <View style={styles.skeletonContainer}>
      <View style={styles.skeletonImage} />
      <View style={styles.skeletonContent}>
        <View style={styles.skeletonTextLarge} />
        <View style={styles.skeletonTextMedium} />
        <View style={styles.skeletonTextSmall} />
        <View style={styles.skeletonPriceContainer}>
          <View style={styles.skeletonPriceBox} />
          <View style={styles.skeletonDiscountBox} />
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.listContainer}>
      {loading ? (
        Array.from({ length: 3 }).map((_, index) => (
          <View key={index}>{renderSkeleton()}</View>
        ))
      ) : cartItems.length > 0 ? (
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      ) : (
        <View style={styles.emptyCart}>
          {/* Render Lottie animation when cart is empty */}
          <LottieView
            source={require('@/animation/emptyCart.json')} // Replace with your emptyCart animation file path
            autoPlay
            loop
            style={styles.lottie}
          />
        </View>
      )}
    </View>
  );
}
