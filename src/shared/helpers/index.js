import { Dimensions, PixelRatio, Platform } from "react-native";
const { width: SCREEN_WIDTH } = Dimensions.get('window');

// based on iPhone 5s's scale
const scale = SCREEN_WIDTH / 420;

export function normalize(size) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export function createRows(array, size) {
  const chunkedArray = [];
  for (let i = 0; i < array.length; i += size) {
    const chunk = array.slice(i, i + size);
    chunkedArray.push(chunk);
  }
  return chunkedArray;
}


export function formatCurrency(amount) {
  if (isNaN(amount)) {
      throw new Error("Input must be a valid number.");
  }
  
  return `₹${Number(amount).toLocaleString('en-IN')}`;
}
