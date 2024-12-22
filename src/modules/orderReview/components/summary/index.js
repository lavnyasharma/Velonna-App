import { View } from "react-native";
import { styless } from "./styles";
import Typography from "@/shared/components/Typography";
import useDarkMode from "@/shared/hooks/useDarkMode";
import { useCart } from "@/context/cartContext";

export default function Summary() {
  const {cart} = useCart();
  console.log(cart)
  const { isDarkMode } = useDarkMode();
  
  const styles = styless(isDarkMode);

  return (
    <View>
      <View style={styles.priceContainer}>
        <Typography customStyle={styles.text} value="Subtotal" />
        <Typography customStyle={styles.text} value={`₹${cart?.subtotal || 0}`} />

      </View>
      <View style={[styles.priceContainer, styles.shoppingFee]}>
        <Typography customStyle={styles.text} value="GST" />
        <Typography customStyle={styles.text} value="3%" />
      </View>
      <View style={styles.priceContainer}>
        <Typography customStyle={styles.textTotal} value="Order Total" />
        <Typography
    customStyle={styles.text}
    value={`₹${(cart?.total ? cart.total * 1.03 : 0).toFixed(2)}`}
  />
      </View>
    </View>
  );
}
