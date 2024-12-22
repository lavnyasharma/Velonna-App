import { View } from "react-native";
import { normalize } from "@/shared/helpers";

export default function ProductSkeleton() {
  return (
    <View
      style={{
        width: '48%',
        height: 250,
      
        margin: normalize(5),
      }}
    >
      {/* Skeleton for image */}
      <View
        style={{
          width: '100%',
          height: '70%',
          backgroundColor: '#ccc',
      
        }}
      />

      {/* Skeleton for text */}
      <View
        style={{
          marginTop: normalize(8),
          padding: normalize(16),
        }}
      >
        <View
          style={{
            backgroundColor: '#ccc',
            height: normalize(14),
            marginBottom: normalize(6),

            width: '50%',
          }}
        />
        <View
          style={{
            backgroundColor: '#ccc',
            height: normalize(14),
            marginBottom: normalize(6),
          
            width: '50%',
          }}
        />
      </View>
    </View>
  );
}
