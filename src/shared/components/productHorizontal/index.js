import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, Alert, TouchableOpacity } from "react-native";
import { styless } from "./styles";
import Typography from "@/shared/components/Typography";
import useDarkMode from "@/shared/hooks/useDarkMode";
import { getCart, deleteFromCart } from "@/apis"; // Import the API functions
import { Menu, MenuItem } from "react-native-material-menu"; // A library for menu (install via npm if not already)
import { useCart } from "@/context/cartContext";

export default function ProductHorizontal({ actions = true }) {
  const { isDarkMode } = useDarkMode();
  const styles = styless(isDarkMode);

  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state
  const [visibleMenu, setVisibleMenu] = useState(null); // To track which menu is visible
  const { cart } = useCart();

  useEffect(() => {
    // Fetch cart items
    const fetchCart = async () => {
      setLoading(true);
      try {
        const data = await getCart();
        setCartItems(data.results);
        console.log(data.results);
      } catch (error) {
        console.error("Error fetching cart:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  // Function to handle deletion
  const handleDelete = async (cartItemId) => {
    Alert.alert(
      "Confirm Delete",
      "Are you sure you want to remove this item?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: async () => {
            try {
              await deleteFromCart(cartItemId); // Call delete API
              setCartItems((prevItems) =>
                prevItems.filter((item) => item.id !== cartItemId) // Update the cart state
              );
            } catch (error) {
              console.error("Error deleting cart item:", error);
            }
          },
        },
      ],
      { cancelable: false }
    );
  };

  
  const renderItem = ({ item }) => {
    const { product } = item;
    console.log(product);
    const dummyDiscount = "10% off";

    return (
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
              {actions && (
                <Menu
                  visible={visibleMenu === item.id}
                  anchor={
                    <TouchableOpacity onPress={() => setVisibleMenu(item.id)}>
                      <Text style={styles.menuDots}>⋮</Text>
                    </TouchableOpacity>
                  }
                  onRequestClose={() => setVisibleMenu(null)}
                >
                  <MenuItem
                    onPress={() => {
                      setVisibleMenu(null);
                      handleDelete(item.id); // Calls the handleDelete function
                    }}
                  >
                    Remove Item
                  </MenuItem>
                </Menu>
              )}
            </View>
          </View>
          <View style={styles.collection}>
            <Text style={styles.collection}>{`Collection: ${product.collection}`}</Text>
          </View>
          <View style={styles.category}>
            <Text style={styles.category.size}>{`Size: ${product.size}`}</Text>
          </View>
          <View style={styles.price}>
            <View style={styles.pricedd}>
              <Text style={styles.priced}>{`Rs ${product.price}`}</Text>
            </View>
            <View style={styles.discount}>
              <Text style={styles.off}>{dummyDiscount}</Text>
              <Text style={styles.discountPrice}>{`Rs ${product.price * 0.9}`}</Text>
            </View>
          </View>
        </View>
      </View>
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
        Array.from({ length: 5 }).map((_, index) => (
          <View key={index}>{renderSkeleton()}</View>
        ))
      ) : cart ? (
        <FlatList
          data={cart.cart_item}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      ) : (
        <View style={styles.emptyCart}>
          <Text style={styles.emptyCartText}>Your cart is empty</Text>
        </View>
      )}
    </View>
  );
}
