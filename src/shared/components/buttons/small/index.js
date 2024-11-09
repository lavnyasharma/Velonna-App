import { TouchableOpacity } from "react-native";
import Typography from "../../Typography";
import { styless } from "./style";

export default function ButtonSmall({
   title,
   disabled,
   isPrimary = true,
}) {
  const styles = styless({ disabled, isPrimary });
  
  return (
    <TouchableOpacity activeOpacity={disabled ? 1 : 0.9} style={styles.container}>
      <Typography customStyle={styles.text} value={title} />
    </TouchableOpacity>
  );
}
