import { View } from "react-native";
import { normalize } from "@/shared/helpers";

export default function ProductSkeleton() {
  return (
    <View
      style={{
        width: '48%',
        height: 250,
       
        borderRadius: 8,
        marginBottom: normalize(18),
      }}
    >
      {/* Skeleton for image */}
      <View
        style={{
          width: '100%',
          height: '60%',
          backgroundColor: '#ccc',
          borderRadius: 8,
        }}
      />

      {/* Skeleton for text */}
      <View
        style={{
          marginTop: normalize(8),
          padding: normalize(8),
        }}
      >
        <View
          style={{
            backgroundColor: '#ccc',
            height: normalize(14),
            marginBottom: normalize(6),
            borderRadius: 4,
            width: '60%',
          }}
        />
        <View
          style={{
            backgroundColor: '#ccc',
            height: normalize(14),
            marginBottom: normalize(6),
            borderRadius: 4,
            width: '40%',
          }}
        />
      </View>
    </View>
  );
}
