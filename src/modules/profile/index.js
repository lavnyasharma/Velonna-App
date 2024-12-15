import { Image, ScrollView, Text,TouchableOpacity, View } from "react-native";
import Balance from "@/shared/components/balance";
import HeroBackground from "@/shared/components/heroBackground";
import React, { useEffect, useState } from "react";
import { normalize } from "@/shared/helpers";
import Typography from "@/shared/components/Typography";
import { Edit, House, Note, Notification, SecuritySafe, Shield } from "@/shared/assets/icons";
import { styless } from "./styles";
import useDarkMode from "@/shared/hooks/useDarkMode";
import Button from "@/shared/components/buttons/normal";
import { NavigationProps } from "@/shared/routes/stack";
import TitleSection from "@/shared/components/titleSection";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CartIcon, LogOutIcon, PrivacyPolicy, TermsAndConditionsIcon } from "../home/components/layouts/section";
export default function Profile({ navigation }) {
  const { isDarkMode } = useDarkMode();
  const styles = styless(isDarkMode);

  const [firstname, setUsername] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [profileImg, setProfileImg] = useState('');
  const navigateToTerms = () => {
    navigation.navigate('TermsAndConditions');
  };
  const navigateToCart = () => {
    navigation.navigate('orderReview');
  }

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userInfo = await AsyncStorage.getItem('userInfo');
        if (userInfo) {
          const parsedInfo = JSON.parse(userInfo);
          setUsername(parsedInfo.first_name);
          setLastname(parsedInfo.last_name);
          setEmail(parsedInfo.email);
          setProfileImg(parsedInfo.profile_picture);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userInfo');
      navigation.navigate('login'); // Navigate to the login screen
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const fullName = firstname && lastname ? `${firstname} ${lastname}` : "User";

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
      <HeroBackground height={200}>
        <View style={{ paddingHorizontal: normalize(24) }}>
          <Typography customStyle={styles.titleScreen} value="Profile" />
          <View style={styles.row}>
            <View style={[styles.row, { marginTop: normalize(24) }]}>
              <Image
                style={styles.avatar}
                source={{ uri: profileImg }}
              />
              <View style={{ marginLeft: normalize(14) }}>
                <Typography customStyle={styles.textUser} value={fullName} />
                <Typography customStyle={styles.email} value={email || "user.email@example.com"} />
              </View>
            </View>

          
          </View>
        </View>

      </HeroBackground>

      <View style={styles.body}>
        <TitleSection value="Account Settings" />
        <View style={{ marginTop: normalize(20) }}>
          <View style={styles.containerOptions}>
          <CartIcon/>
            <TouchableOpacity onPress={navigateToCart}>
      <View style={{ marginLeft: normalize(14) }}>
        <Typography customStyle={styles.titleOption} value="Cart" />
      </View>
    </TouchableOpacity>

          </View>
          <View style={styles.containerOptions}>
          <PrivacyPolicy/>
            <View style={{ marginLeft: normalize(14) }}>
              <Typography customStyle={styles.titleOption} value="Privacy Policy" />
            </View>
          </View>
        </View>
      

        <TitleSection value="About Tuks" />
        <View style={{ marginTop: normalize(20) }}>
          <View style={styles.containerOptions}>
          <TermsAndConditionsIcon/>
            <TouchableOpacity onPress={navigateToTerms}>
      <View style={{ marginLeft: normalize(14) }}>
        <Typography customStyle={styles.titleOption} value="Terms & Conditions" />
      </View>
    </TouchableOpacity>

          </View>
          <View style={styles.containerOptions}>
          <PrivacyPolicy/>
            <View style={{ marginLeft: normalize(14) }}>
              <Typography customStyle={styles.titleOption} value="Privacy Policy" />
            </View>
          </View>
        </View>
        <TouchableOpacity 
  style={{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    backgroundColor: 'transparent',
    width: '100%',
  }}
  onPress={handleLogout}
>
  <LogOutIcon style={{ marginRight: 8 }} />
  <Text style={{ color: 'black', fontSize: 16, textAlign: 'center' }}>Logout</Text>
</TouchableOpacity>

      </View>
    </ScrollView>
  );
}
