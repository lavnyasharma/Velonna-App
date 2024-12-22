import React, { useState, useRef, useEffect } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  Animated,
  TouchableOpacity,
} from "react-native";
import globalStyles from "@/layouts/globalStyles";
import { LinearGradient } from 'react-native-gradients';

const { width: screenWidth } = Dimensions.get("window");
const sildeWidth = screenWidth;


const ImageSlider = ({ images }) => {
  const scrollViewRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;
  const activeIndexRef = useRef(0); // Use ref for index to avoid unnecessary re-renders
  const [manualIndex, setManualIndex] = useState(0); // State for manual dot presses

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Calculate next index
      const nextIndex = (activeIndexRef.current + 1) % images.length;
      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({
          x: nextIndex * sildeWidth ,
          animated: true,
        });
      }
      activeIndexRef.current = nextIndex; // Update ref, not state
    }, 3000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, [images.length, activeIndexRef]); // Run effect only on initial mount and when images length changes

  const handleDotPress = (index) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: index * sildeWidth,
        animated: true,
      });
    }
    setManualIndex(index);
    activeIndexRef.current = index; // Update ref
  };

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );

  const dotPosition = Animated.divide(scrollX, sildeWidth);

  const onMomentumScrollEnd = (event) => {
    const index = Math.floor(event.nativeEvent.contentOffset.x / sildeWidth);
    setManualIndex(index);
    activeIndexRef.current = index; // Update ref
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
        contentContainerStyle={{
          overflow: "visible",
          paddingRight: 16,
          width:screenWidth*images.length
        }}
        onMomentumScrollEnd={onMomentumScrollEnd}
      >
        {images.map((image, index) => (
          <View key={index} style={[styles.slide, styles.shadowProp]}>
            <Image source={{ uri: image }} style={styles.image} /> 
          </View>
        ))}
      </ScrollView>
      <View style={styles.dotContainer}>
        {images.map((_, index) => {
          const animatedWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [5, 35, 5],
            extrapolate: "clamp",
          });
          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: ["#ccc", "#000", "#ccc"],
            extrapolate: "clamp",
          });

          return (
            <TouchableOpacity key={index} onPress={() => handleDotPress(index)}>
              <Animated.View
                style={[
                  styles.dot,
                  { width: animatedWidth, backgroundColor: dotColor },
                ]}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },
  slide: {
    width: sildeWidth,
    justifyContent: "center",
    overflow:"hidden",
    aspectRatio: "16/9",
    alignItems: "center",
    elevation: 20,
    shadowColor: "#52006A",
  },
  image: {
    width:"100%",
    height:"100%",
    resizeMode: "cover",
  },
  dotContainer: {
    width: screenWidth,
    flexDirection: "row",
    justifyContent:"center",
    padding: 2,
  },
  dot: {
    width: 5,
    height: 5,
    borderRadius: 50,
    marginHorizontal: 2,
  },
  animatedDot: {
    backgroundColor: "transparent",
  },

  shadowProp: {
    shadowColor: "#8C92AC",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 15,
  },
  shadowProp2: {
    shadowColor: "#8C92AC",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 0,
  },
});

export default ImageSlider;
