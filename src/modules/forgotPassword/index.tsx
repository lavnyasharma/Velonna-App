import Wrapper from "@/shared/components/wrapper";
import Typography from "@/shared/components/Typography";
import { NavigationProp } from "@react-navigation/native";
import Button from "@/shared/components/buttons/normal";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { normalize } from "@/shared/helpers";
import { FONT } from "@/shared/constans/fonts";
import color from "@/shared/constans/colors";
import { Close, CloseWhite } from "@/shared/assets/icons";
import Input from "@/shared/components/input";
import useDarkMode from "@/shared/hooks/useDarkMode";
import TitleScreen from "@/shared/components/title";

type RootStackParamList = {
  changePassword: undefined;
};
interface ForgotPasswordProps {
  navigation:  NavigationProp<RootStackParamList, 'changePassword'>;
}
export default function ForgotPassword({navigation}: ForgotPasswordProps) {
  const {isDarkMode} = useDarkMode();
  function goToChangePassword() {
    navigation.navigate('changePassword')
  }
  function goBack() {
    navigation.goBack()
  }
  return (
    <Wrapper>
      <View style={{paddingHorizontal: 20, flex: 1}}>
        <View style={{flex: 0.8}}>
          <TouchableOpacity onPress={goBack} style={{alignItems: 'flex-end'}}>
            {isDarkMode ?  <CloseWhite /> :  <Close /> }
          </TouchableOpacity>
          <View style={{marginTop: normalize(24)}}>
            <TitleScreen value="Forgot password" />
            <Typography customStyle={{
              color: color.neutral.darkGray
            }} value="Don’t worry sometimes people can forget too, enter your email and we will send you a password reset link." />
          </View>

          <View style={{marginTop: normalize(56)}}>
            <Input value="" placeholder="email@example.com" label="Email" />
          </View>
        </View>
        <View style={{flex: 0.2, justifyContent: 'flex-end', marginBottom: normalize(5)}}>
          <Button onPress={goToChangePassword} title="Submit" />
        </View>
      </View>
    </Wrapper>
  )
}
