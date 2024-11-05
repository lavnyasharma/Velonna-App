import Typography from "@/shared/components/Typography";
import { Verify } from "@/shared/assets/icons";
import { View } from "react-native";
import React from "react";
import { _styles } from "./styles";
import useDarkMode from "@/shared/hooks/useDarkMode";
import { StoreDTO } from "@/shared/DTO/ProductDTO";

interface NameStoreProps {
  store: StoreDTO
  primary?: boolean
}

export default function NameStore({store, primary = true}: NameStoreProps) {
  const {isDarkMode} = useDarkMode()
  const styles = _styles(isDarkMode, primary)
  return (
    <View style={styles.containerNameStore}>
      <Typography customStyle={styles.nameStore} value={store?.name} />
      {store?.verified && (
        <Verify width={16} height={16} />
      )}
    </View>
  )
}
