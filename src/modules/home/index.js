import Typography from "@/shared/components/Typography";
import { Dimensions, ScrollView, View } from "react-native";
import { normalize } from "@/shared/helpers";
import color from "@/shared/constans/colors";
import React, { useEffect, useState } from "react";
import { styless } from './styles';
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

export default function Home({ navigation }) {
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
        const data = await fetchProductList(1, 10); 
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
    navigation.navigate('bag');
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView 
        bounces={false} 
        bouncesZoom={false} 
        showsVerticalScrollIndicator={false} 
        style={{ flex: 1, backgroundColor: color.main.blue }}
      >
        <HeroBackground>
          <NavBar goToBag={goToBag} openSearch={() => setIsOpen(!isOpen)} />
          <Balance />
          <PopularBrands />
        </HeroBackground>
        <View style={styles.body}>
          <SliderAds />
          <View style={{ marginTop: normalize(16) }}>
            <Typography customStyle={styles.title} value="Popular" />
            <ProductList products={products} rows={2} />
          </View>
        </View>
      </ScrollView>
      <ButtonSheet height={Dimensions.get('window').height * 0.9} dispatch={isOpen}>
        <Filter setIsOpen={setIsOpen} isOpen={isOpen} />
      </ButtonSheet>
    </View>
  );
}
