import { TouchableOpacity } from "react-native";
import Typography from "../../Typography";
import { styless } from "./style";

export default function Button({
  titleStyle,
   title,
   disabled,
   isPrimary = true,
   onPress,
}) {

  const styles = styless({ disabled, isPrimary });
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={disabled ? 1 : 0.9} style={styles.container}>
      <Typography customStyle={[styles.text,titleStyle]} value={title} />
    </TouchableOpacity>
  );
}
