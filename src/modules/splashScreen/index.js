import { Image, SafeAreaView } from "react-native";
import { LogoApp } from "@/shared/assets/images";


export default function SplashScreen() {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <Image style={{width: '100%', height: 80}} resizeMode="contain" source={LogoApp} />
    </SafeAreaView>
  )
}
