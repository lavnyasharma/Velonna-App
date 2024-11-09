import { View } from "react-native";
import { styless } from "./styles";
import Typography from "@/shared/components/Typography";
import useDarkMode from "@/shared/hooks/useDarkMode";

export default function Summary() {
  const { isDarkMode } = useDarkMode();
  
  const styles = styless(isDarkMode);

  return (
    <View>
      <View style={styles.priceContainer}>
        <Typography customStyle={styles.text} value="Subtotal" />
        <Typography customStyle={styles.text} value="$209.97" />
      </View>
      <View style={[styles.priceContainer, styles.shoppingFee]}>
        <Typography customStyle={styles.text} value="Shipping Fee" />
        <Typography customStyle={styles.text} value="$13.97" />
      </View>
      <View style={styles.priceContainer}>
        <Typography customStyle={styles.textTotal} value="Order Total" />
        <Typography customStyle={styles.textTotal} value="$223.94" />
      </View>
    </View>
  );
}
