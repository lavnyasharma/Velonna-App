import { TouchableOpacity } from "react-native";
import Typography from "../../Typography";
import { _styles } from "./style";

interface ButtonSmall {
  title: string
  disabled?: boolean | undefined
  isPrimary?: boolean | undefined
}

export default function ButtonSmall({
   title,
   disabled,
   isPrimary = true,
}: ButtonSmall) {

  const styles = _styles({ disabled, isPrimary })
  return (
    <TouchableOpacity activeOpacity={disabled ? 1 : 0.9} style={styles.container}>
      <Typography customStyle={styles.text} value={title} />
    </TouchableOpacity>
  )
}
