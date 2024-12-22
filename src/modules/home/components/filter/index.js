import React, { useState, useEffect } from "react";
import { View, FlatList, Text } from "react-native";
import Input from "@/shared/components/input";
import { SearchNormalGray } from "@/shared/assets/icons";
import Typography from "@/shared/components/Typography";
import { styless } from './styles';
import useDarkMode from "@/shared/hooks/useDarkMode";
import BrandsAndCategories from "@/modules/home/components/brandsAndCategories";
import SearchResult from "@/modules/home/components/searchResult";
import axios from 'axios';

export default function Filter({ setIsOpen, isOpen }) {
  const [change, setChange] = useState(false);
  const { isDarkMode } = useDarkMode();
  const styles = styless(isDarkMode);
  const [query, setQuery] = useState("");
  const [productData, setProductData] = useState([]);

  // Function to fetch products based on search query
  const getProduct = () => {
    const res = axios
      .get(
        `https://api.velonna.co/ecom/product/list/?limit=12${
          query && query === "" ? "&search=" + query : ""
        }${query !== "" ? "&search=" + query : ""}`
      )
      .then((res) => {
        setProductData(res.data["results"]);
        setChange(true)
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  // Fetch products whenever the query changes
  useEffect(() => {
    if (query) {
      getProduct();
    } else {
      setProductData([]); // Clear products if query is empty
    }
  }, [query]);

  // Render product items
  const renderProductItem = ({ item }) => (
    <View style={styles.productItem}>
      <Text>{item.name}</Text> {/* Render product name inside Text component */}
      <Text>{item.price}</Text> {/* Render product price inside Text component */}
    </View>
  );

  return (
    <View style={styles.fullContainer}>
      <View style={styles.container}>
        <View style={{ flex: 0.97 }}>
          <Input 
            Icon={SearchNormalGray} 
            value={query} 
            onChangeText={(text) => setQuery(text)} 
            placeholder="Search" 
          />
        </View>
        <Typography 
          onPress={() => {
            setChange(true);
            setIsOpen(!isOpen);
          }} 
          value="Cancel" 
        />
      </View>

      {query && !change ? (
        <FlatList
          data={productData}
          renderItem={renderProductItem}
          keyExtractor={(item) => item.hsn.toString()} // Adjust key as needed
        />
      ) : change ? (
        <SearchResult data = {productData}/>
      ) : (
        <BrandsAndCategories setChange={() => setChange(true)} />
      )}
    </View>
  );
}
