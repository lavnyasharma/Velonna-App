import Wrapper from "@/shared/components/wrapper";
import { View } from "react-native";
import { styless } from './styles';
import ProductHorizontal from '@/shared/components/productHorizontal';
import { normalize } from "@/shared/helpers";
import Button from "@/shared/components/buttons/normal";
import HeaderBack from "@/shared/components/headerBack";
import { useNavigation } from "@react-navigation/native";

export default function Bag() {
  const navigation = useNavigation();
  const { isDarkMode } = useDarkMode();
  const styles = styless(isDarkMode);
  
  return (
    <Wrapper>
      <View style={styles.container}>
        <HeaderBack title="Bag" />

        <View style={{ marginTop: normalize(15), flex: 1 }}>
          <ProductHorizontal />
          <View style={{ marginVertical: 10 }} />
          <ProductHorizontal />
        </View>
        <Button onPress={() => navigation.navigate('orderReview')} title="Checkout" />
      </View>
    </Wrapper>
  );
}
