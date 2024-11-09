import { Dimensions, Image, NativeScrollEvent, NativeSyntheticEvent, ScrollView, View } from "react-native";
import Typography from "@/shared/components/Typography";
import { ImageOne, ImageTwo, ImageTree } from "./assets";
import {styless} from './styles';
import { normalize } from "@/shared/helpers";
import React, { useState } from "react";
import color from "@/shared/constans/colors";
import useDarkMode from "@/shared/hooks/useDarkMode";

const STEPS = [
  {
    id: '1',
    title: 'Shop the internet freely with Tuks.',
    description: 'Find your daily necessities at Brand. The world\'s largest fashion e-commerce has arrived in a mobile version. Shop now!',
    image: ImageOne
  },
  {
    id: '2',
    title: 'Compare prices from your favorite stores.',
    description: 'Find your daily necessities at Brand. The world\'s largest fashion e-commerce has arrived in a mobile version. Shop now!',
    image: ImageTwo
  },
  {
    id: '3',
    title: 'Quick and easy sign up.',
    description: 'Find your daily necessities at Brand. The world\'s largest fashion e-commerce has arrived in a mobile version. Shop now!',
    image: ImageTree
  },
];

export default function Stepper() {
  const {isDarkMode} = useDarkMode();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = (event) => {
    const { contentOffset, layoutMeasurement } = event.nativeEvent;
    const currentIndex = Math.floor(contentOffset.x / (layoutMeasurement.width - 50));
    setCurrentIndex(currentIndex);
  };

  const styles = styless(isDarkMode);

  return (
    <View>
      <ScrollView
        style={{ marginTop: normalize(40) }}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        pagingEnabled
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {STEPS.map(step => (
          <View style={{
            width: Dimensions.get('window').width - 50,
          }} key={step.id}>
            <Image resizeMode="contain" style={{ width: '100%', height: 349 }} source={step.image} />

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: normalize(20) }}>
              <Dot active={currentIndex === 0} />
              <View style={{ marginLeft: normalize(12) }} />
              <Dot active={currentIndex === 1} />
              <View style={{ marginRight: normalize(12) }} />
              <Dot active={currentIndex === 2} />
            </View>
            <View style={styles.containerInformation}>
              <Typography customStyle={styles.title} value={step.title} />
              <Typography
                customStyle={styles.description}
                value={step.description}
              />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

function Dot({ active }) {
  const {isDarkMode} = useDarkMode();
  return (
    <View style={{
      width: 8,
      height: 8,
      borderRadius: 150,
      backgroundColor: active ? color.main.blue : isDarkMode ? color.neutral.white : color.neutral.lightGray
    }} />
  );
}
