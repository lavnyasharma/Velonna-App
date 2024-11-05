import { TouchableOpacity } from "react-native";
import Typography from "../../Typography";
import { _styles } from "./style";
import { GestureResponderEvent } from "react-native/Libraries/Types/CoreEventTypes";

interface ButtonSmall {
  title: string
  disabled?: boolean | undefined
  isPrimary?: boolean | undefined
  onPress?: ((event: GestureResponderEvent) => void) | undefined;
}

export default function Button({
   title,
   disabled,
   isPrimary = true,
  onPress,
}: ButtonSmall) {

  const styles = _styles({ disabled, isPrimary })
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={disabled ? 1 : 0.9} style={styles.container}>
      <Typography customStyle={styles.text} value={title} />
    </TouchableOpacity>
  )
}
