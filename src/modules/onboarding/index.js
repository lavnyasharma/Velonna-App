import { View } from "react-native";
import Wrapper from "@/shared/components/wrapper";
import Button from "@/shared/components/buttons/normal";
import { normalize } from "@/shared/helpers";
import Stepper from "@/modules/onboarding/components/stepper";

export default function Onboarding({ navigation }) {
  function goToLogin() {
    navigation.navigate('login');
  }
  
  function goToRegister() {
    navigation.navigate('register');
  }
  
  return (
    <Wrapper>
      <View style={{ flex: 1, paddingHorizontal: normalize(24) }}>
        <View style={{ flex: 0.8 }}>
          <Stepper />
        </View>
        <View style={{ flex: 0.2 }}>
          <Button onPress={goToRegister} title="Create account" />
          <View style={{ marginVertical: normalize(8) }} />
          <Button onPress={goToLogin} isPrimary={false} title="Sign in" />
        </View>
      </View>
    </Wrapper>
  );
}
