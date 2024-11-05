import { View } from "react-native";
import Wrapper from "@/shared/components/wrapper";
import Button from "@/shared/components/buttons/normal";
import { normalize } from "@/shared/helpers";
import Stepper from "@/modules/onboarding/components/stepper";
import { NavigationProp } from "@react-navigation/native";

type RootStackParamList = {
  login: undefined;
  register: undefined;
};
interface OnboardingProps {
  navigation:  NavigationProp<RootStackParamList, 'login' | 'register'>;
}

export default function Onboarding({navigation}: OnboardingProps) {
  function goToLogin() {
    navigation.navigate('login')
  }
  function goToRegister() {
    navigation.navigate('register')
  }
  return (
    <Wrapper>
      <View style={{flex: 1, paddingHorizontal: normalize(24)}}>
        <View style={{flex: 0.8}}>
         <Stepper />
        </View>
        <View style={{flex: 0.2}}>
          <Button onPress={goToRegister} title="Create account" />
          <View style={{marginVertical: normalize(8)}} />
          <Button onPress={goToLogin} isPrimary={false} title="Sign in" />
        </View>
      </View>
    </Wrapper>
  )
}
