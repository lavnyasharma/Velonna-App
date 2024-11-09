import Typography from "@/shared/components/Typography";
import { ScrollView, View } from "react-native";
import { createRows, normalize } from "@/shared/helpers";
import { BrandDTO } from "@/shared/DTO/BrandDTO";
import Brand from "@/shared/components/brand";
import { SearchNormalDark } from "@/shared/assets/icons";
import React from "react";
import { styless } from './styles';
import useDarkMode from "@/shared/hooks/useDarkMode";
import { brands } from "@/shared/constans/mockup";

const categories = [
  'Women\'s Clothing',
  'Men\'s Clothing',
  'Shoes',
  'Bags',
  'Watches',
  'Electronics',
  'Computers',
  'Phones',
  'Tech Accessories',
  'Smart Devices',
];

export default function BrandsAndCategories({ setChange }) {
  const { isDarkMode } = useDarkMode();
  const styles = styless(isDarkMode);

  return (
    <View style={styles.container}>
      <Typography customStyle={styles.titleSection} value="Popular Search" />

      <View style={{ marginVertical: normalize(16) }}>
        {createRows(brands, 4).sort(() => Math.random() - 0.5).map((chunk, index) => (
          <View key={index} style={styles.containerBrands}>
            {chunk.map((brand) => (
              <Brand setChange={setChange} key={brand.id} brand={brand} />
            ))}
          </View>
        ))}
      </View>

      <Typography customStyle={styles.titleSection} value="Top Categories" />

      <ScrollView showsVerticalScrollIndicator={false} style={{ marginVertical: normalize(16) }}>
        {categories.map(category => (
          <View key={category} style={styles.containerCategory}>
            <SearchNormalDark />
            <Typography customStyle={{
              marginLeft: normalize(12)
            }} value={category} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
