import { View } from "react-native";
import Typography from "@/shared/components/Typography";
import { Location, Phone } from "@/shared/assets/icons";
import {styles} from './styles'

export default function Address() {

  return (
    <View>
      <Typography customStyle={styles.name} value="Arfi Ganteng" />
      <View style={[styles.containerInfo, styles.phone]}>
        <Phone />
        <Typography customStyle={styles.value} value="08234033221" />
      </View>
      <View style={styles.containerInfo}>
        <Location />
        <Typography customStyle={styles.value} value="Jl. Gajah Mungkur, Kost Lanang 69, Gajah Mungkur, Kota Semarang" />
      </View>
    </View>
  )
}
