import Typography from "@/shared/components/Typography";
import { Dimensions, ScrollView, View } from "react-native";
import { normalize } from "@/shared/helpers";
import color from "@/shared/constans/colors";
import React, { useEffect, useRef, useState } from "react";
import { styless } from "./styles";
import useDarkMode from "@/shared/hooks/useDarkMode";
import PopularBrands from "@/modules/home/components/popularBrands";
import NavBar from "@/modules/home/components/navBar";
import SliderAds from "@/modules/home/components/sliderAds";
import ButtonSheet from "@/shared/components/buttonSheet";
import Filter from "@/modules/home/components/filter";
import { fetchProductList } from "@/apis";
import ProductList from "@/shared/components/productList";
import HeroBackground from "@/shared/components/heroBackground";
import Balance from "@/shared/components/balance";
import LineBreak from "./components/layouts/lineBreak";
import ImageSlider from "@/shared/components/banner";
import CategoriesSlider from "@/shared/components/categorySlider";
import { TouchableOpacity } from "react-native-gesture-handler";
import SearchBar from "./components/navBar/searchBar";

export default function Home({ navigation, openSearch }) {
  const [isOpen, setIsOpen] = useState(false);

  const { isDarkMode } = useDarkMode();
  const styles = styless(isDarkMode);
  const [products, setProducts] = useState([]); // State for products
  const [loading, setLoading] = useState(false); // State for loading
  const [error, setError] = useState(null); // State for error message

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const data = await fetchProductList(1, 20);
        console.log(data);
        setProducts(data.results);
      } catch (err) {
        setError("Failed to load products");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  function goToBag() {
    navigation.navigate("orderReview");
  }

  const images = [
    "https://www.velonna.co/_next/image?url=https%3A%2F%2Fpldwzgpchvgtdycyfaky.supabase.co%2Fstorage%2Fv1%2F%2Fobject%2Fpublic%2Fvelonnabucket%2Fproduct_thumbnails%2Fproduct_thumbnails%2Fproduct_thumbnails%2Fproduct_thumbnails%2F0M1A0995.jpg&w=1200&q=75",
    "https://www.velonna.co/_next/image?url=https%3A%2F%2Fpldwzgpchvgtdycyfaky.supabase.co%2Fstorage%2Fv1%2F%2Fobject%2Fpublic%2Fvelonnabucket%2Fproduct_thumbnails%2Fproduct_thumbnails%2Fproduct_thumbnails%2Fproduct_thumbnails%2F0M1A0803.jpg&w=1200&q=75",
    "https://www.velonna.co/_next/image?url=https%3A%2F%2Fpldwzgpchvgtdycyfaky.supabase.co%2Fstorage%2Fv1%2F%2Fobject%2Fpublic%2Fvelonnabucket%2Fproduct_thumbnails%2Fproduct_thumbnails%2F0M1A1005.jpg&w=1200&q=75",
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        bounces={false}
        bouncesZoom={false}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        stickyHeaderIndices={[0]}
      >
        {/* <HeroBackground> */}

        {/* <PopularBrands /> */}
        {/* </HeroBackground> */}

        <NavBar goToBag={goToBag} />

        <View style={styles.body}>
          <View style={styles.searchBar}>
            <SearchBar openSearch={() => setIsOpen(!isOpen)} />
          </View>

          <CategoriesSlider title={"Catagories"}/>

          <ImageSlider images={images} />
          {/* <SliderAds /> */}

          <View style={{ marginTop: normalize(16) }}>
            <LineBreak
              innerTextEnable={true}
              thickness={2}
              innerText={"Popular Products"}
              marginHorizontal={0}
              marginVertical={20}
            ></LineBreak>

            <ProductList products={products} rows={2} />
          </View>
        </View>
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
