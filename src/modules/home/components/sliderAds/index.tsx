import { Dimensions, Image, NativeScrollEvent, NativeSyntheticEvent, ScrollView, View } from "react-native";
import { normalize } from "@/shared/helpers";
import React, { useState } from "react";
import { Ads1, Ads2, Ads3 } from "@/shared/assets/ads";
import useDarkMode from "@/shared/hooks/useDarkMode";
import color from "@/shared/constans/colors";
import {styles} from './styles'


export default function SliderAds() {
  const ads = [
    {
      id: '1',
      ads: Ads1
    },
    {
      id: '2',
      ads: Ads2
    },
    {
      id: '3',
      ads: Ads3
    },
  ]
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, layoutMeasurement } = event.nativeEvent;
    const currentIndex = Math.floor(contentOffset.x / (layoutMeasurement.width - 50));
    setCurrentIndex(currentIndex);
  };
  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {ads.map(ad => (
          <View key={ad.id} style={styles.containerCard}>
            <Image
              resizeMode="cover"
              style={styles.image}
              source={ad.ads}
            />

            <View style={styles.containerIndicators}>
              <Dot active={currentIndex === 0} />
              <View style={{marginLeft: normalize(12)}} />
              <Dot active={currentIndex === 1} />
              <View style={{marginRight: normalize(12)}} />
              <Dot active={currentIndex === 2} />
            </View>
          </View>
        ))}
      </ScrollView>

    </View>
  )
}
function Dot({active}: {active: boolean}) {
  const {isDarkMode} = useDarkMode()
  return (
    <View style={{
      width: normalize(24),
      height: normalize(4),
      borderRadius: 150,
      backgroundColor: active ? color.main.blue : isDarkMode ? color.neutral.lightGray : color.neutral.lightGray
    }} />
  )
}
