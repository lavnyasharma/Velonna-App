import Wrapper from "@/shared/components/wrapper";
import Typography from "@/shared/components/Typography";
import { LogoApp } from "@/shared/assets/images";
import { Image, View } from "react-native";
import Input from "@/shared/components/input";
import { normalize } from "@/shared/helpers";
import Button from "@/shared/components/buttons/normal";
import React, { useState } from "react";
import useDarkMode from "@/shared/hooks/useDarkMode";
import CheckBox from "@/shared/components/checkbox";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { axiosInstance, storeTokens, getUserInfo } from "@/apis"; // Import the Axios instance, storeTokens, and getUserInfo function

export default function Login({ navigation }) {
  const { isDarkMode } = useDarkMode();

  // State variables to manage form inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  // Function to handle the login API call
  const handleLogin = async () => {
    console.log('Attempting to log in with:');
    console.log('Username:', username);
    console.log('Password:', password);

    try {
      const response = await axiosInstance.post('/login/', {
        username,
        password,
      });

      console.log('Response data:', response.data);

      if (response.status === 200) {
        // Assuming the API returns an object containing access and refresh tokens
        const { access, refresh } = response.data; // Adjust according to your API response structure
        console.log('Login successful, tokens received:', { access, refresh });
        
        // Store the tokens in AsyncStorage using the storeTokens function
        await storeTokens(access, refresh);

        // Fetch user info after successful login
     const userInfo = await getUserInfo(username);
      console.log('User Info:', userInfo); // Log the user info
      
      await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        navigation.navigate('home');
      } else {
        console.error('Login failed:', response.data.message);
        setError(response.data.message || 'Login failed');
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      setError('An unexpected error occurred');
    }
  };

  return (
    <Wrapper>
      <View style={{ paddingHorizontal: normalize(24), flex: 1 }}>
        <View style={{ flex: 0.5, justifyContent: 'center' }}>
          <Image style={{ width: '100%', height: 80, tintColor: isDarkMode ? 'white' : 'black' }} resizeMode="contain" source={LogoApp} />
        </View>
        <View style={{ flex: 1 }}>
          <Input
            value={username}
            onChangeText={(text) => {
              console.log('Username input:', text);
              setUsername(text);
            }}
            label="Username"
            placeholder="Joen Doe"
          />
          <View style={{ marginVertical: normalize(8) }} />
          <Input
            secureTextEntry
            value={password}
            onChangeText={(text) => {
              console.log('Password input:', text);
              setPassword(text);
            }}
            label="Password"
            placeholder="********"
          />
          {error ? (
            <Typography customStyle={{ color: 'red', marginVertical: normalize(8) }} value={error} />
          ) : null}
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: normalize(16) }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <CheckBox value={rememberMe} onValueChange={setRememberMe} />
              <Typography customStyle={{ opacity: 0.5, marginLeft: normalize(5) }} value="Remember me" />
            </View>
            <Typography onPress={() => navigation.navigate('forgotPassword')} customStyle={{ opacity: 0.5 }} value="Forgot password?" />
          </View>
        </View>

        <View style={{ marginTop: normalize(32), flex: 1, marginBottom: normalize(10), justifyContent: 'flex-end' }}>
          <Button onPress={handleLogin} title="Sign in" />
          <View style={{ marginVertical: normalize(8) }} />
          <Button onPress={() => navigation.navigate('register')} isPrimary={false} title="Create account" />
        </View>
      </View>
    </Wrapper>
  );
}
