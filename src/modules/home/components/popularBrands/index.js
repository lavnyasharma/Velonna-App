import Typography from "@/shared/components/Typography";
import { ScrollView, View } from "react-native";
import React from "react";
import useDarkMode from "@/shared/hooks/useDarkMode";
import { styless } from "./styles";
import Brand from "@/shared/components/brand";
import color from "@/shared/constans/colors";
import { brands } from "@/shared/constans/mockup";

export default function PopularBrands() {
  const { isDarkMode } = useDarkMode();
  const styles = styless(isDarkMode);

  return (
    <View style={styles.container}>
      <Typography customStyle={styles.title} value="Popular Brand" />

      <View style={styles.containerList}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {brands.map((brand) => (
            <Brand textColor={color.neutral.white} key={brand.id} brand={brand} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
