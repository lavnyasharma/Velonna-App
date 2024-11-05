import Wrapper from "@/shared/components/wrapper";
import Typography from "@/shared/components/Typography";
import { View } from "react-native";
import BackBtn from "@/shared/components/backBtn";
import { normalize } from "@/shared/helpers";
import TitleScreen from "@/shared/components/title";
import Input from "@/shared/components/input";
import Button from "@/shared/components/buttons/normal";
import CheckBox from "@/shared/components/checkbox";
import { NavigationProp } from "@react-navigation/native";

type RootStackParamList = {
  confirmEmail: undefined;
};
interface RegisterProps {
  navigation:  NavigationProp<RootStackParamList, 'confirmEmail'>;
}
export default function Register({navigation}: RegisterProps) {
function goToConfirmEmail() {
  navigation.navigate('confirmEmail')
}
  return (
    <Wrapper>
      <View style={{flex: 1, paddingHorizontal: normalize(24), marginTop: normalize(20)}}>
        <BackBtn />
        <View style={{marginVertical: normalize(24)}}>
          <TitleScreen value="Let’s create your account" />
        </View>

        <View style={{flex: 0.8}}>
          <View style={{flexDirection: 'row', marginBottom: normalize(16), alignItems: 'center', justifyContent: 'space-between'}}>
            <View style={{flex: 0.48}}>
              <Input value="maner" label="First Name" />
            </View>
            <View style={{flex: 0.48}}>
              <Input value="after" label="Last Name" />
            </View>
          </View>
          <Input value="after.maner" label="Username" />
          <View style={{marginBottom: normalize(16)}} />
          <Input value="0893882812" label="Phone Number" />
          <View style={{marginBottom: normalize(16)}} />
          <Input value="fropero@gmail.com" label="Email" />
          <View style={{marginBottom: normalize(16)}} />
          <Input value="*********" label="Password" />

          <View style={{flexDirection: 'row', alignItems: 'center', marginTop: normalize(10)}}>
            <CheckBox />
            <Typography customStyle={{marginLeft: normalize(10)}} value="I agree to Tuks’s Privacy Policy and Terms of Use" />
          </View>
        </View>

        <View style={{flex: 0.2, justifyContent: 'flex-end'}}>
          <Button onPress={goToConfirmEmail} title="Create account" />
          <View style={{marginBottom: normalize(40)}} />
        </View>
      </View>
    </Wrapper>
  )
}
