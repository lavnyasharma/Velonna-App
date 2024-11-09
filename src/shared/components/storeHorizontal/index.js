import { Image, View } from "react-native";
import NameStore from "@/shared/components/nameStore";
import Typography from "@/shared/components/Typography";
import { styless } from './styles';
import useDarkMode from "@/shared/hooks/useDarkMode";
import { normalize } from "@/shared/helpers";

export default function StoreHorizontal({ store, withBorder = true }) {
  const { isDarkMode } = useDarkMode();
  const styles = styless(withBorder, isDarkMode);

  return (
    <View style={styles.container}>
      <Image style={{ width: 50, height: 50 }} source={store.image} />
      <View style={{ marginLeft: normalize(6) }}>
        <NameStore primary={false} store={store} />
        <Typography customStyle={styles.totalProducts} value="662 products" />
      </View>
    </View>
  );
}
