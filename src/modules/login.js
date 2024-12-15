import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Keyboard,
  Image,
  Text,
  KeyboardAvoidingView,
} from "react-native";


import { RFValue } from "react-native-responsive-fontsize";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faApple, faGoogle } from "@fortawesome/free-brands-svg-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import LineBreak from "./home/components/layouts/lineBreak";
import globalStyles from "@/layouts/globalStyles";
import { axiosInstance } from "@/apis";
import {  storeTokens, getUserInfo } from "@/apis"; 

export default function Login({ navigation }) {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 
   
    const [rememberMe, setRememberMe] = useState(false);
    const [error, setError] = useState('');
    const handleLogin = async () => {
        alert(1)

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
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <View style={styles.formContainers}>
        <Image
          source={{
            uri: "https://pldwzgpchvgtdycyfaky.supabase.co/storage/v1/object/public/velonnabucket/banners/bg.png?t=2024-12-15T00%3A24%3A46.569Z",
          }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 2 }}
      >
        <View style={styles.formContainer}>
          <View style={styles.heading}>
            <Text style={styles.heading.text}>Login or Register</Text>
          </View>

          {/* Email Input Section */}
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Enter Email</Text>
          </View>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.input}
              value={username}
              onChangeText={setUsername}
              placeholder="Enter your email"
              placeholderTextColor="#A0A5BA"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Password Input Section */}
          <View style={styles.labelContainer}>
            <Text style={styles.label}>Enter Password</Text>
          </View>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholder="Enter your password"
              placeholderTextColor="#A0A5BA"
              secureTextEntry={true}
            />
          </View>

          {/* Login Button */}
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.button.text}>Continue</Text>
          </TouchableOpacity>

          {/* Or Text */}
          <LineBreak
            thickness={1}
            innerTextEnable={true}
            marginVertical={32}
            innerText="or continue with"
          />

          <View style={styles.socialIconsContainer}>
            <View style={styles.google}>
              <FontAwesomeIcon style={styles.icons} size={25} icon={faGoogle} />
              <Text style={styles.google.text}>Google</Text>
            </View>
            <View style={styles.google}>
              <FontAwesomeIcon style={styles.icons} size={27} icon={faApple} />
              <Text style={styles.google.text}>Apple</Text>
            </View>
          </View>

          <View style={styles.terms}>
            <Text style={styles.terms.text}>
              By Continuing, you agree to our
            </Text>
            <View style={styles.conditionContainer}>
              <TouchableOpacity style={styles.condition}>
                <Text style={styles.condition.text}>Terms & Condition</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.condition}>
                <Text style={styles.condition.text}>Privacy Policy</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  image: {
    width: "100%",
    height: 500, // Example height
  },
  formContainers: {
    flex: 1,
    backgroundColor: "#000",
    flexShrink: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    backgroundColor: "#fff",
    flex: 1,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -1 },
    shadowRadius: 3,
    shadowOpacity: 0.5,
    padding: 16,
  },
  labelContainer: {
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    color: "#31343D",
    fontFamily: "Poppins Medium",
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F5FA",
    borderRadius: 10,
    paddingHorizontal: 16,
    height: 55,
    marginBottom: 20,

  },
  input: {
    flex: 1,
    color: "#31343D",
    fontSize: globalStyles.secondary.fontSize,
  },
  button: {
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 16,
    backgroundColor: "#000",
    borderRadius: 8,
    text: {
      fontSize: RFValue(20, 852),
      color: "#fff",
      fontFamily: "Poppins Medium",
      fontWeight: "400",
    },
  },
  socialIconsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 32,
  },
  google: {
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#EDECEC",
    justifyContent: "center",
    alignItems: "center",
    text: {
      textAlign: "center",
      fontFamily: "Poppins Medium",
      fontSize: globalStyles.secondary.fontSize,
    },
  },
  icons: { marginRight: 8 },
  heading: {
    width: "100%",
    padding: 16,
    paddingTop: 32,
    paddingBottom: 32,
    text: {
      color: "#31343D",
      textAlign: "center",
      fontSize: 25,
      fontFamily: "Poppins Medium",
      fontWeight: 500,
    },
  },
  terms: {
    flex: 3,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    text: {
      textAlign: "center",
      marginBottom: 5,
    },
  },
  conditionContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    flexDirection: "row",
  },
  condition: {
    text: {
      fontSize: globalStyles.quaternary.fontSize,
      color: "#000",
      textDecorationLine: "underline",
      fontWeight: "700",
    },
  },
});


