import React, { useState, useEffect, useRef } from 'react';
import { View, Image, ScrollView, Animated, Dimensions, StyleSheet } from 'react-native';

const ProductImageCarousel = ({ images, aspectRatio = 1, dotPosition = 'bottom' }) => {
  const [containerWidth, setContainerWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
    const handleResize = () => {
      setContainerWidth(Dimensions.get('window').width);
    };

    Dimensions.addEventListener('change', handleResize);
    return () => Dimensions.removeEventListener('change', handleResize);
  }, []);

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { x: scrollX } } }],
    { useNativeDriver: false }
  );

  const onMomentumScrollEnd = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / containerWidth);
    setCurrentIndex(index);
  };

  return (
    <View
      style={styles.container}
      onLayout={(event) => {
        const { width } = event.nativeEvent.layout;
        setContainerWidth(width);
      }}
    >
      <Animated.ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        onMomentumScrollEnd={onMomentumScrollEnd}
        scrollEventThrottle={16}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            source={{ uri: image }}
            style={[
              {
                width: containerWidth,
                height: containerWidth / aspectRatio,
              },
              styles.image,
            ]}
            resizeMode="contain"
          />
        ))}
      </Animated.ScrollView>
      <View style={[styles.dotContainer, dotPosition === 'top' ? styles.dotTop : styles.dotBottom]}>
        {images.map((_, index) => {
          const opacity = scrollX.interpolate({
            inputRange: [
              (index - 1) * containerWidth,
              index * containerWidth,
              (index + 1) * containerWidth,
            ],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={index}
              style={[
                styles.dot,
                { opacity },
                currentIndex === index ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    aspectRatio:1,
   objectFit:"scale-down"
  },
  dotContainer: {
    position: 'absolute',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dotTop: {
    top: 10,
  },
  dotBottom: {
    bottom: 10,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 4,
    marginHorizontal: 2,
  },
  activeDot: {
    backgroundColor: 'black',
  },
  inactiveDot: {
    backgroundColor: 'gray',
  },
});

export default ProductImageCarousel;