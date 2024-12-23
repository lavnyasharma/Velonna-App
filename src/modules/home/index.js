import React, { useEffect, useState, useCallback } from "react";
import { Dimensions, ScrollView, View, ActivityIndicator } from "react-native";
import { normalize } from "@/shared/helpers";
import color from "@/shared/constans/colors";
import useDarkMode from "@/shared/hooks/useDarkMode";
import { fetchProductList } from "@/apis";
import ProductList from "@/shared/components/productList";
import ImageSlider from "@/shared/components/banner";
import { debounce } from "lodash";  // Import debounce
import { styless } from "./styles";
import SearchBar from "./components/navBar/searchBar";
import ButtonSheet from "@/shared/components/buttonSheet";
import Filter from "@/modules/home/components/filter";
import LineBreak from "./components/layouts/lineBreak";
import StripedBanner from "@/shared/components/stripbanners/stripBanners";
import CategoriesSlider from "@/shared/components/categorySlider";
import NavBar from "@/modules/home/components/navBar";

export default function Home({ navigation }) {
  const { isDarkMode } = useDarkMode();
  const styles = styless(isDarkMode);
  const [products, setProducts] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [isLoadingNextPage, setIsLoadingNextPage] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [imageSliderKey, setImageSliderKey] = useState(0); // Track re-renders of ImageSlider

  const loadProducts = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const data = await fetchProductList(page, 10); // Reduced limit to 10
      setProducts((prev) => [...prev, ...data.results]);
      if (data.results.length < 10) setHasMore(false);
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  }, [page, loading, hasMore]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  // Debounced load more function for better performance when user scrolls near the bottom
  const loadMoreDebounced = useCallback(
    debounce(() => {
      if (hasMore && !isLoadingNextPage) {
        setIsLoadingNextPage(true);
        setPage((prev) => prev + 1);
        triggerRandomImageSliderRender(); // Trigger random ImageSlider re-render
      }
    }, 150),  // Reduce debounce time for faster response (100ms or 150ms)
    [hasMore, isLoadingNextPage]
  );

  const handleScroll = ({ nativeEvent }) => {
    const contentHeight = nativeEvent.contentSize.height;
    const contentOffset = nativeEvent.contentOffset.y;
    const windowHeight = nativeEvent.layoutMeasurement.height;

    if (contentHeight - contentOffset <= windowHeight + 20) {
      loadMoreDebounced();
    }
  };

  // Randomly trigger ImageSlider re-render
  const triggerRandomImageSliderRender = () => {
    const randomChance = Math.random(); // Generate a random number between 0 and 1
    if (randomChance < 0.3) { // 30% chance to trigger a re-render (feel free to adjust)
      setImageSliderKey((prev) => prev + 1); // Change key to force re-render
    }
  };

  const images = [
    "https://pldwzgpchvgtdycyfaky.supabase.co/storage/v1/object/public/velonnabucket/banners/1.jpg",
    "https://pldwzgpchvgtdycyfaky.supabase.co/storage/v1/object/public/velonnabucket/banners/3.jpg",
  ];

  const goToBag = () => {
    navigation.navigate("orderReview");
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        onScroll={handleScroll}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        scrollEventThrottle={400}
      >
        <NavBar goToBag={goToBag} />
        <View style={styles.searchBar}>
          <SearchBar openSearch={() => setIsOpen(!isOpen)} />
        </View>
        
        <View style={styles.body}>
          <CategoriesSlider title={"Collections"} />
          <View style={styles.StripedBanner}>
            <StripedBanner imageUrl="https://pldwzgpchvgtdycyfaky.supabase.co/storage/v1/object/public/velonnabucket/banners/kind%20to%20skin%20co.%20(2).png" />
          </View>

          {/* Render ImageSlider with dynamic key to force re-render */}
          <ImageSlider key={imageSliderKey} images={images} />

          <View style={{ marginTop: normalize(16) }}>
            <LineBreak
              innerTextEnable={true}
              thickness={2}
              innerText={"Popular Products"}
              marginHorizontal={0}
              marginVertical={20}
            />
            <ProductList products={products} rows={2} />
          </View>
        </View>

        {/* Show loader when loading next page */}
        {isLoadingNextPage && (
          <View style={{ alignItems: "center", marginVertical: 20 }}>
            <ActivityIndicator size="large" color={color.primary} />
          </View>
        )}
      </ScrollView>

      <ButtonSheet
        height={Dimensions.get("window").height * 0.9}
        dispatch={isOpen}
      >
        <Filter setIsOpen={setIsOpen} isOpen={isOpen} />
      </ButtonSheet>
    </View>
  );
}
