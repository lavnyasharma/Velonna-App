import { View, Image, TouchableOpacity } from "react-native";
import { Shoes } from "@/shared/assets/ads";
import { _styles } from "./styles";
import Typography from "@/shared/components/Typography";
import NameStore from "@/shared/components/nameStore";
import useDarkMode from "@/shared/hooks/useDarkMode";

interface ProductHorizontalProps {
 actions?: boolean
}

export default function ProductHorizontal({actions = true}: ProductHorizontalProps) {
  const {isDarkMode} = useDarkMode()

  const styles = _styles(isDarkMode)
  return (
    <View style={{flexDirection: 'row'}}>
      <Image style={styles.photo} source={Shoes} />
      <View style={{ flex: 1}}>
        <View style={styles.containerInfo}>
          <NameStore store={{
            id: "1",
            name: "NIKE",
            verified: true,
            image: ''
          }} />
          <Typography customStyle={styles.nameProduct} value="Nike Offcourt" />
          <View style={styles.row}>
            <Typography customStyle={styles.text} value="Size:" />
            <Typography customStyle={styles.sizeValue} value="EU 44" />
          </View>
        </View>
        {actions && (
          <View style={styles.rowValues}>
            <View style={styles.row}>
              <TouchableOpacity style={styles.btnReduce}>
                <Typography customStyle={styles.textBtn} value="-" />
              </TouchableOpacity>
              <Typography customStyle={styles.value} value="1" />
              <TouchableOpacity style={styles.btnAument}>
                <Typography customStyle={styles.textBtnWhite} value="+" />
              </TouchableOpacity>
            </View>
            <Typography customStyle={styles.price} value="$34.22" />
          </View>
        )}
      </View>
    </View>
  )
}
