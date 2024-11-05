import { Image, Platform, ScrollView, View } from "react-native";
import {_styles} from './styles'
import Input from "@/shared/components/input";
import { SearchNormalGray } from "@/shared/assets/icons";
import TitleScreen from "@/shared/components/title";
import StoreHorizontal from "@/shared/components/storeHorizontal";
import { ProductDTO, StoreDTO } from "@/shared/DTO/ProductDTO";
import { createRows, normalize } from "@/shared/helpers";
import React from "react";
import { Adidas, Levis, Nike, Puma, Zara } from "@/shared/assets/brands";
import Typography from "@/shared/components/Typography";
import color from "@/shared/constans/colors";
import ProductList from "@/shared/components/productList";
import useDarkMode from "@/shared/hooks/useDarkMode";
import { categories, levis, products, stores, zara } from "@/shared/constans/mockup";

export default function Store() {

  const {isDarkMode} = useDarkMode()
  const styles = _styles(isDarkMode)

  return (
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <TitleScreen value="Store" />

        <View>
          <Input Icon={SearchNormalGray} value="" placeholder="Search in Store" />
        </View>

        <View style={{marginTop: normalize(10)}}>
          <View style={styles.containerSection}>
            <Typography customStyle={styles.titleSection} value="Featured Store" />
          </View>
          {createRows<StoreDTO>(stores, 2).map((chunk, index) => (
            <View key={index} style={{flexDirection: 'row', alignItems: 'center'}}>
              {chunk.map((item) => (
                <View key={item.id} style={{flex: 0.9, margin: normalize(5)}}>
                  <StoreHorizontal store={item} />
                </View>
              ))}
            </View>
          ))}
        </View>

        <View style={{marginTop: normalize(20)}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map(category => (
              <Typography customStyle={ category.active ? styles.categoryActive : styles.category} key={category.id} value={category.name} />
            ))}
          </ScrollView>
        </View>

        <View style={{marginTop: normalize(24)}}>

          <View style={{
            borderWidth: 1,
            borderColor: color.stroke.gray,
            padding: normalize(12),
            borderRadius: normalize(12)
          }}>
            <StoreHorizontal
              withBorder={false}
              store={{
              "id": "3",
              "name": "ZARA",
              "verified": true,
              "image": Zara,
            }} />
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              {zara.map(image => (
                <Image
                  style={{
                    width: normalize(110),
                    height: normalize(110)
                  }}
                  key={image.id}
                  source={{uri: image.image}} />
              ))}
            </View>
          </View>

          <View style={{
            marginTop: normalize(16),
            borderWidth: 1,
            borderColor: color.stroke.gray,
            padding: normalize(12),
            borderRadius: normalize(12)
          }}>
            <StoreHorizontal
              withBorder={false}
              store={{
              "id": "4",
              "name": "Levis",
              "verified": true,
              "image": Levis,
            }} />
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
              {levis.map(image => (
                <Image
                  style={{
                    width: normalize(110),
                    height: normalize(110)
                  }}
                  key={image.id}
                  source={{uri: image.image}} />
              ))}
            </View>
          </View>

        </View>

        <View style={{marginTop: normalize(24)}}>
          <Typography customStyle={styles.titleSection} value="You Might Like" />

          <View>
            <ProductList products={products} rows={2} />
          </View>
        </View>

        <View style={{height: normalize(Platform.OS === 'ios' ? 120 : 60)}} />
      </ScrollView>
  )
}
