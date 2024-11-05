import Wrapper from "@/shared/components/wrapper";
import Typography from "@/shared/components/Typography";
import { NavigationProp } from "@react-navigation/native";
import Button from "@/shared/components/buttons/normal";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { normalize } from "@/shared/helpers";
import { FONT } from "@/shared/constans/fonts";
import color from "@/shared/constans/colors";
import { Back, BackWhite } from "@/shared/assets/icons";
import Input from "@/shared/components/input";
import useDarkMode from "@/shared/hooks/useDarkMode";
import TitleScreen from "@/shared/components/title";

type RootStackParamList = {
  changePassword: undefined;
};
interface ChangePasswordProps {
  navigation:  NavigationProp<RootStackParamList, 'changePassword'>;
}
export default function ChangePassword({navigation}: ChangePasswordProps) {
  const {isDarkMode} = useDarkMode();
  function goBack() {
    navigation.goBack()
  }
  return (
    <Wrapper>
      <View style={{paddingHorizontal: 20, flex: 1}}>
        <View style={{flex: 0.8}}>
            <TouchableOpacity onPress={goBack}>
              {isDarkMode ?  <BackWhite /> :  <Back /> }
            </TouchableOpacity>
          <View style={{marginTop: normalize(24)}}>
            <TitleScreen value="Change your password" />
            <Typography customStyle={{
              color: color.neutral.darkGray
            }} value="Time to reset your password, remember don’t forget to write it to notes!" />
          </View>

          <View style={{marginTop: normalize(56)}}>
            <Input value="" placeholder="***********" label="New password" />
          </View>
        </View>
        <View style={{flex: 0.2, justifyContent: 'flex-end', marginBottom: normalize(5)}}>
          <Button title="Submit" />
        </View>
      </View>
    </Wrapper>
  )
}
