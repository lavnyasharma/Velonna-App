import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const StripedBanner = ({ imageUrl }) => {
  return (
    <View style={styles.bannerContainer}>
      <Image source={{ uri: imageUrl }} style={styles.bannerImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  bannerContainer: {
    width: '100%',
    height: 40, // Adjust as needed for the banner's height
    backgroundColor: '#f0f0f0', // Fallback background color
    overflow: 'hidden',
  },
  bannerImage: {
    width: width, // Adjust to fit screen width
    height: '100%',
    width:"100%",
    resizeMode: 'cover',
  },
});

export default StripedBanner;
