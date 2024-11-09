import Typography from "@/shared/components/Typography";
import { Verify } from "@/shared/assets/icons";
import { View } from "react-native";
import React from "react";
import { styless } from "./styles";
import useDarkMode from "@/shared/hooks/useDarkMode";

export default function NameStore({ store, primary = true }) {
  const { isDarkMode } = useDarkMode();
  const styles = styless(isDarkMode, primary);

  return (
    <View style={styles.containerNameStore}>
      <Typography customStyle={styles.nameStore} value={store?.name} />
      {store?.verified && (
        <Verify width={16} height={16} />
      )}
    </View>
  );
}
