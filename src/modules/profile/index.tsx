import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import Balance from "@/shared/components/balance";
import HeroBackground from "@/shared/components/heroBackground";
import React, { useEffect, useState } from "react";
import { normalize } from "@/shared/helpers";
import Typography from "@/shared/components/Typography";
import { Edit, House, Note, Notification, SecuritySafe, Shield } from "@/shared/assets/icons";
import { _styles } from "./styles";
import useDarkMode from "@/shared/hooks/useDarkMode";
import Button from "@/shared/components/buttons/normal";
import { NavigationProps } from "@/shared/routes/stack";
import TitleSection from "@/shared/components/titleSection";
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ProfileProps {
  navigation: NavigationProps;
}

export default function Profile({ navigation }: ProfileProps) {
  const { isDarkMode } = useDarkMode();
  const styles = _styles(isDarkMode);

  const [firstname, setUsername] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [profileImg, setProfileImg] = useState('');

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
      <HeroBackground height={330}>
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

            <TouchableOpacity onPress={() => navigation.navigate('editProfile')}>
              <Edit width={20} height={20} />
            </TouchableOpacity>
          </View>
        </View>
        <Balance />
      </HeroBackground>

      <View style={styles.body}>
        <TitleSection value="Account Settings" />

        <View style={{ marginTop: normalize(20) }}>
          <View style={styles.containerOptions}>
            <House />
            <View style={{ marginLeft: normalize(14) }}>
              <Typography customStyle={styles.titleOption} value="Address Lists" />
              <Typography customStyle={styles.subtitleOption} value="Set shopping delivery address" />
            </View>
          </View>
          <View style={styles.containerOptions}>
            <SecuritySafe />
            <View style={{ marginLeft: normalize(14) }}>
              <Typography customStyle={styles.titleOption} value="Account Security" />
              <Typography customStyle={styles.subtitleOption} value="E-Wallet, credit cards, & instant debit registered" />
            </View>
          </View>
          <View style={styles.containerOptions}>
            <Notification />
            <View style={{ marginLeft: normalize(14) }}>
              <Typography customStyle={styles.titleOption} value="Notifications" />
              <Typography customStyle={styles.subtitleOption} value="Set any kind of notification message" />
            </View>
          </View>
        </View>

        <TitleSection value="About Tuks" />
        <View style={{ marginTop: normalize(20) }}>
          <View style={styles.containerOptions}>
            <Note />
            <View style={{ marginLeft: normalize(14) }}>
              <Typography customStyle={styles.titleOption} value="Terms & Conditions" />
            </View>
          </View>
          <View style={styles.containerOptions}>
            <Shield />
            <View style={{ marginLeft: normalize(14) }}>
              <Typography customStyle={styles.titleOption} value="Privacy Policy" />
            </View>
          </View>
        </View>
        <View style={{ marginVertical: normalize(20) }}>
          <Button title="Logout" isPrimary={false} onPress={handleLogout} />
        </View>
      </View>
    </ScrollView>
  );
}
