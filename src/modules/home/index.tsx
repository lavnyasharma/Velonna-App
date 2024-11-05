import Typography from "@/shared/components/Typography";
import {
  Dimensions,
  ScrollView,
  View
} from "react-native";
import { normalize } from "@/shared/helpers";
import color from "@/shared/constans/colors";
import React, { useState } from "react";
import {_styles} from './styles'
import useDarkMode from "@/shared/hooks/useDarkMode";
import PopularBrands from "@/modules/home/components/popularBrands";
import NavBar from "@/modules/home/components/navBar";
import SliderAds from "@/modules/home/components/sliderAds";
import ButtonSheet from "@/shared/components/buttonSheet";
import Filter from "@/modules/home/components/filter";
import { NavigationProps } from "@/shared/routes/stack";
import ProductList from "@/shared/components/productList";
import HeroBackground from "@/shared/components/heroBackground";
import Balance from "@/shared/components/balance";
import { products } from "@/shared/constans/mockup";

interface HomeProps {
  navigation: NavigationProps;
}
export default function Home({navigation}: HomeProps) {
  const [isOpen, setIsOpen] = useState(false);
  const {isDarkMode} = useDarkMode()
  const styles = _styles(isDarkMode)

  function goToBag() {
    navigation.navigate('bag')
  }
  return (
    <View style={{flex: 1}}>
      <ScrollView bounces={false} bouncesZoom={false} showsVerticalScrollIndicator={false} style={{flex: 1, backgroundColor: color.main.blue}}>
        <HeroBackground>
          <NavBar goToBag={goToBag} openSearch={() => setIsOpen(!isOpen)} />
          <Balance />
          <PopularBrands />
        </HeroBackground>
        <View style={styles.body}>
          <SliderAds />
          <View style={{marginTop: normalize(16)}}>
            <Typography
              customStyle={styles.title}
              value="Popular" />

            <ProductList products={products} rows={2} />
          </View>
        </View>
      </ScrollView>
      <ButtonSheet height={Dimensions.get('window').height * 0.9} dispatch={isOpen}>
        <Filter setIsOpen={setIsOpen} isOpen={isOpen}/>
      </ButtonSheet>
    </View>
  )
}
