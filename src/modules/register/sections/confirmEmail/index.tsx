import Wrapper from "@/shared/components/wrapper";
import TitleScreen from "@/shared/components/title";
import { View } from "react-native";
import { normalize } from "@/shared/helpers";
import BackBtn from "@/shared/components/backBtn";
import Typography from "@/shared/components/Typography";
import Input from "@/shared/components/input";
import Button from "@/shared/components/buttons/normal";

export default function ConfirmEmail() {

  return (
    <Wrapper>
      <View style={{flex: 1, paddingHorizontal: normalize(24)}}>
        <BackBtn />
        <View style={{marginTop: normalize(24), marginBottom: normalize(56)}}>
          <TitleScreen value="Confirm your email" />
          <Typography value="We sent a code to (email)" />
        </View>

        <View style={{flex: 0.8}}>
          <Input value="125365" label="Verification code" />

          <View style={{marginVertical: normalize(20)}}>
            <Typography value="Didn’t get the email? Check your junk/spam or resend it." />
          </View>
          <Typography value="Resend email" />
        </View>

        <View style={{flex: 0.2}}>
          <Button disabled title="Continue" />
        </View>
      </View>
    </Wrapper>
  )
}
