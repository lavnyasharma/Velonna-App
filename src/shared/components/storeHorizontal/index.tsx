import { Image, View } from "react-native";
import NameStore from "@/shared/components/nameStore";
import Typography from "@/shared/components/Typography";
import {_styles} from './styles'
import { StoreDTO } from "@/shared/DTO/ProductDTO";
import useDarkMode from "@/shared/hooks/useDarkMode";
import { normalize } from "@/shared/helpers";

interface StoreHorizontalProps {
  store: StoreDTO
  withBorder?: boolean | undefined
}
export default function StoreHorizontal({store, withBorder = true}: StoreHorizontalProps) {
  const {isDarkMode} = useDarkMode()
  const styles = _styles(withBorder, isDarkMode)
  return (
    <View style={styles.container}>
      <Image style={{width: 50, height: 50}} source={store.image} />
      <View style={{marginLeft: normalize(6)}}>
        <NameStore primary={false} store={store} />

        <Typography customStyle={styles.totalProducts} value="662 products" />
      </View>
    </View>
  )
}
