import Typography from "@/shared/components/Typography";
import { Image, ImageBackground, SafeAreaView, ScrollView, TouchableOpacity, View } from "react-native";
import { RouteProps } from "@/shared/routes/stack";
import { createRows, normalize } from "@/shared/helpers";
import { Share, Star} from "@/shared/assets/icons";
import { useNavigation } from "@react-navigation/native";
import color from "@/shared/constans/colors";
import { FONT } from "@/shared/constans/fonts";
import { Nike } from "@/shared/assets/brands";
import {_styles} from './styles'
import React, { useState } from "react";
import Button from "@/shared/components/buttons/normal";
import useDarkMode from "@/shared/hooks/useDarkMode";
import LikeComponent from "@/shared/components/like";
import BackBtn from "@/shared/components/backBtn";
import Product from "@/shared/components/product";
import NameStore from "@/shared/components/nameStore";
import { products, sizes } from "@/shared/constans/mockup";

interface ProductDetailProps {
  route: RouteProps;
}
export default function ProductDetail({route}: ProductDetailProps) {
  const navigation = useNavigation()
  const {isDarkMode} = useDarkMode()

  if (!route.params) {
    return null;
  }
  const [bgImage, setBgImage] = useState(route.params.product.image)
  const [gallery, setGallery] = useState(route.params.product.extraImages.map((image, index) => {
    return {
      ...image,
      active: index === 0
    }
  }))

  function onChangeImage(image: any) {
    setGallery(gallery.map((image2, index) => {
      if (image2.id === image.id) {
        return {
          ...image2,
          active: true
        }
      } else {
        return {
          ...image2,
          active: false
        }
      }
    }))
    setBgImage(image.url)
  }

  const styles = _styles(isDarkMode)
  return (
<SafeAreaView style={styles.container}>
  <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={styles.innerContainer}>
    <ImageBackground style={styles.backgroundImageProduct} source={{uri: bgImage }}>
      <View style={styles.containerOptions}>
        <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()}>
          <BackBtn />
        </TouchableOpacity>
        <LikeComponent onLike={() => undefined} liked={false}/>
      </View>
      <View>
        <View style={styles.containerExtraPhotos}>
          {gallery.map((image, index) => (
            <TouchableOpacity
              onPress={() => onChangeImage(image)}
              key={index}
              style={[styles.extraPhoto, {borderWidth: image.active ? 2.5 : 0,}]}
            >
              {index === 3 && (
                <View style={styles.shadowOverlay}>
                  <Typography customStyle={styles.countExtraImages} value="+3" />
                </View>
              )}
              <Image resizeMode="contain" style={styles.image} source={{uri: image.url}} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ImageBackground>

    <View style={styles.body}>
      <View style={styles.containerInnerHeader}>
        <View style={styles.row}>
          <Star />
          <Typography customStyle={styles.star} value="5.0" />
          <Typography customStyle={styles.countReviews} value="(199)" />
        </View>
        <Share />
      </View>

      <View style={{marginTop: normalize(4)}}>
        <Typography customStyle={styles.price} value="$49.40" />
      </View>

      <View style={{marginTop: normalize(20)}}>
        <Typography customStyle={{
          fontSize: normalize(16)
        }} value="Nike Offcourt" />
      </View>

      <View style={styles.containerStore}>
        <Image style={styles.imageStore} source={Nike}/>
        <View style={styles.containerName}>
          <NameStore primary={false} store={{
            id: '1',
            name: 'NIKE',
            verified: true,
            image: ''
          }} />
        </View>
      </View>

      <View style={{marginTop: normalize(24)}}>
        <Typography customStyle={{
          fontFamily: FONT.SEMI_BOLD,
          fontSize: normalize(20)
        }} value="Size" />

        <View style={{marginTop: normalize(12)}}>
          {createRows(sizes, 5).map((row, index) => (
            <View key={index} style={{flexDirection: 'row'}}>
              {row.map((item, idx) => (
                <View
                  key={item.id}
                  style={[
                    styles.size,
                    {
                      backgroundColor: item.disabled ? color.neutral.softGray : item.active ? color.main.blue : color.neutral.white
                    }]}>
                  <Typography customStyle={{
                    fontFamily: FONT.SEMI_BOLD,
                    color: item.disabled ? color.neutral.darkGray : item.active ? color.neutral.white : color.neutral.black
                  }} value={`EU ${item.value}`} />
                </View>
              ))}
            </View>
          ))}
        </View>
        <View style={{marginTop: normalize(24)}}>
          <Button title="Add to bag" />
          <View style={{marginVertical: normalize(5)}} />
          <Button isPrimary={false} title="Buy now" />
        </View>
      </View>

      <View style={{marginTop: normalize(20)}}>
        <Typography customStyle={{
          fontFamily: FONT.SEMI_BOLD,
          fontSize: normalize(20)
        }} value="Desctiptions" />

        <Typography
          customStyle={{
            color: color.neutral.darkGray,
            marginTop: normalize(10),
          }}
          value="Cheer your team to victory with the Nike Offcourt Slides. Brazil-inspired graphics and colours let you... Read more"
        />
      </View>

      <View style={{marginTop: normalize(20)}}>
        <Typography customStyle={{
          fontFamily: FONT.SEMI_BOLD,
          fontSize: normalize(20),
          marginBottom: normalize(14)
        }} value="Related" />

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {products.map(product => (
            <View key={product.id} style={{marginRight: normalize(12)}}>
              <Product key={product.id} product={product} />
            </View>
          ))}
        </ScrollView>

      </View>
    </View>

  </ScrollView>
</SafeAreaView>
  )
}
