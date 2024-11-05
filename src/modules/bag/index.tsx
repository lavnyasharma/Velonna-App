import Wrapper from "@/shared/components/wrapper";
import { View } from "react-native";
import {_styles} from './styles'
import ProductHorizontal from '@/shared/components/productHorizontal'
import { normalize } from "@/shared/helpers";
import Button from "@/shared/components/buttons/normal";
import HeaderBack from "@/shared/components/headerBack";
import { useNavigation } from "@react-navigation/native";
import { NavigationProps } from "@/shared/routes/stack";
import useDarkMode from "@/shared/hooks/useDarkMode";

export default function Bag() {
  const navigation = useNavigation<NavigationProps>()
  const {isDarkMode} = useDarkMode()
  const styles = _styles(isDarkMode)
  return (
    <Wrapper>
      <View style={styles.container}>
        <HeaderBack title="Bag" />

        <View style={{marginTop: normalize(15), flex: 1}}>
          <ProductHorizontal />
          <View style={{marginVertical: 10}} />
          <ProductHorizontal />
        </View>
        <Button onPress={() => navigation.navigate('orderReview')} title="Checkout" />
      </View>
    </Wrapper>
  )
}
