import { TouchableOpacity, View } from "react-native";
import { Back, BackWhite } from "@/shared/assets/icons";
import Typography from "@/shared/components/Typography";
import { useNavigation } from "@react-navigation/native";
import {styles} from './styles'
import useDarkMode from "@/shared/hooks/useDarkMode";

interface HeaderBackProps {
  title: string
  callback?: () => void
}

export default function HeaderBack({title, callback}: HeaderBackProps) {
  const {isDarkMode} = useDarkMode()
  const navigation = useNavigation()
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <TouchableOpacity onPress={callback ? callback : navigation.goBack}>
        {isDarkMode ? (
          <BackWhite />
        ) : (
          <Back />
        )}
      </TouchableOpacity>
      <Typography customStyle={styles.titleScreen} value={title} />
    </View>
  )
}
