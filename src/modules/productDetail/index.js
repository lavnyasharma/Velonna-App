import React, { useState } from "react";
import { Image, ImageBackground, SafeAreaView, ScrollView, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Typography from "@/shared/components/Typography";
import Button from "@/shared/components/buttons/normal";
import useDarkMode from "@/shared/hooks/useDarkMode";
import LikeComponent from "@/shared/components/like";
import BackBtn from "@/shared/components/backBtn";
import Product from "@/shared/components/product";
import NameStore from "@/shared/components/nameStore";
import { Share, Star } from "@/shared/assets/icons";
import { products } from "@/shared/constans/mockup";
import { createRows, normalize } from "@/shared/helpers";
import color from "@/shared/constans/colors";
import { FONT } from "@/shared/constans/fonts";
import { Nike } from "@/shared/assets/brands";
import { _styles, styless } from './styles';

export default function ProductDetail({ route }) {
  const navigation = useNavigation();
  const { isDarkMode } = useDarkMode();

  if (!route?.params?.product) {
    console.error("No product data received");
    return null;
  }

  const product = route.params.product;
  console.log("Received Product Data:", product);

  const [bgImage, setBgImage] = useState(product.image); // Assuming product has an `image` field
  const [gallery, setGallery] = useState(
    product.images.map((image, index) => ({
      ...image,
      active: index === 0,
    }))
  );

  function onChangeImage(image) {
    setGallery(gallery.map((img) =>
      img.id === image.id ? { ...img, active: true } : { ...img, active: false }
    ));
    setBgImage(image.url);
  }

  const styles = styless(isDarkMode);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={styles.innerContainer}>
        {/* Background image with back and like buttons */}
        <ImageBackground style={styles.backgroundImageProduct} source={{ uri: bgImage }}>
          <View style={styles.containerOptions}>
            <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()}>
              <BackBtn />
            </TouchableOpacity>
            <LikeComponent onLike={() => undefined} liked={false} />
          </View>
          <View>
            <View style={styles.containerExtraPhotos}>
              {gallery.map((image, index) => (
                <TouchableOpacity
                  onPress={() => onChangeImage(image)}
                  key={index}
                  style={[styles.extraPhoto, { borderWidth: image.active ? 2.5 : 0 }]}
                >
                  {index === 3 && (
                    <View style={styles.shadowOverlay}>
                      <Typography customStyle={styles.countExtraImages} value="+3" />
                    </View>
                  )}
                  <Image resizeMode="contain" style={styles.image} source={{ uri: image.url }} />
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ImageBackground>

        {/* Product body */}
        <View style={styles.body}>
          {/* Rating and Share section */}
          <View style={styles.containerInnerHeader}>
            <View style={styles.row}>
              <Star />
              <Typography customStyle={styles.star} value="5.0" />
              <Typography customStyle={styles.countReviews} value="(199)" />
            </View>
            <Share />
          </View>

          {/* Price and Product Name */}
        
          <View style={{ marginTop: normalize(20) }}>
          <Typography
  customStyle={[{ fontFamily: FONT.SEMI_BOLD }, styles.price]}
  value={product?.title
    ? product.title.charAt(0).toUpperCase() + product.title.slice(1)
    : ""}
/>

          </View>
          <View style={{ marginTop: normalize(4) }}>
            <Typography customStyle={{fontSize: normalize(16),fontFamily: FONT.SEMI_BOLD }} value={`Rs ${product.price}`} />
          </View>
          {/* Store information */}
          {/* <View style={styles.containerStore}>
            <Image style={styles.imageStore} source={Nike} />
            <View style={styles.containerName}>
              <NameStore primary={false} store={product.collection} />
            </View>
          </View> */}

          {/* Size Selection */}
          <View style={{ marginTop: normalize(24) }}>
            <Typography customStyle={{ fontFamily: FONT.SEMI_BOLD, fontSize: normalize(20) }} value="Size" />
            <View style={{ marginTop: normalize(12) }}>
              {createRows([product.size], 5).map((row, index) => (
                <View key={index} style={{ flexDirection: "row" }}>
                  {row.map((item) => (
                    <View
                      key={item.id}
                      style={[
                        styles.size,
                        {
                          backgroundColor: item.disabled ? color.neutral.softGray : item.active ? color.main.blue : color.neutral.white,
                        },
                      ]}
                    >
                      <Typography
                        customStyle={{
                          fontFamily: FONT.SEMI_BOLD,
                          color: item.disabled ? color.neutral.darkGray : item.active ? color.neutral.white : color.neutral.black,
                        }}
                        value={`${item}`}
                      />
                    </View>
                  ))}
                </View>
              ))}
            </View>
          </View>

          {/* Add to Bag and Buy Now buttons */}
          <View style={{ marginTop: normalize(24) }}>
            <Button title="Add to bag" />
            <View style={{ marginVertical: normalize(5) }} />
            <Button isPrimary={false} title="Buy now" />
          </View>

          {/* Product Description */}
          <View style={{ marginTop: normalize(20) }}>
            <Typography customStyle={{ fontFamily: FONT.SEMI_BOLD, fontSize: normalize(20) }} value="Descriptions" />
            <Typography
              customStyle={{
                color: color.neutral.darkGray,
                marginTop: normalize(10),
              }}
              value={product.description}
            />
          </View>

          {/* Related Products Section */}
          {/* <View style={{ marginTop: normalize(20) }}>
            <Typography
              customStyle={{
                fontFamily: FONT.SEMI_BOLD,
                fontSize: normalize(20),
                marginBottom: normalize(14),
              }}
              value="Related"
            />
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {products.map((relatedProduct) => (
                <View key={relatedProduct.id} style={{ marginRight: normalize(12) }}>
                  <Product key={relatedProduct.id} product={relatedProduct} />
                </View>
              ))}
            </ScrollView>
          </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
