/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RoutesStack, { RootStackParamList, RouteItem } from "@/shared/routes/stack";
import RoutesTab from '@/shared/routes/tab';
import Typography from "@/shared/components/Typography";
import color from "@/shared/constans/colors";
import { FONT } from "@/shared/constans/fonts";
import { normalize } from "@/shared/helpers";
import Toast from 'react-native-toast-message';
import useDarkMode from "@/shared/hooks/useDarkMode";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Tab = createBottomTabNavigator();

function Home() {
  const { isDarkMode } = useDarkMode();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      {RoutesTab.map(route => (
        <Tab.Screen
          key={route.name}
          name={route.name}
          component={route.component}
          options={{
            tabBarStyle: {
              backgroundColor: isDarkMode ? color.neutral.black : color.neutral.white
            },
            tabBarIcon: ({ focused }) => {
              if (focused) {
                return route.iconActive();
              } else {
                return route.icon();
              }
            },
            tabBarLabel: ({ focused }) => {
              return (
                <Typography
                  customStyle={{
                    fontSize: normalize(12),
                    fontFamily: FONT.MEDIUM,
                    color: focused ? color.main.blue : color.neutral.darkGray
                  }}
                  value={route.displayName}
                />
              );
            }
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

const AuthenticatedStack = createStackNavigator();

function AuthenticatedNavigator() {
  return (
    <AuthenticatedStack.Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <AuthenticatedStack.Screen
        name="home"
        component={Home}
      />
      {RoutesStack.map((route) => {
        return (
          <AuthenticatedStack.Screen
            key={route.path}
            name={route.path}
            component={route.component}
          />
        );
      })}
    </AuthenticatedStack.Navigator>
  );
}

const UnauthenticatedStack = createStackNavigator();

function UnauthenticatedNavigator({ isAuthenticated }) {
  return (
    <UnauthenticatedStack.Navigator initialRouteName={isAuthenticated ? 'home' : 'onboarding'} screenOptions={{ headerShown: false }}>
      <UnauthenticatedStack.Screen
        name="home"
        options={{headerShown:false}}
        component={Home}
      />
      {RoutesStack.map(route => {
        return (
          <UnauthenticatedStack.Screen
          options={{ headerShown: false }}
            key={route.path}
            name={route.path}
            component={route.component}
          />
        );
      })}
    </UnauthenticatedStack.Navigator>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  useEffect(()=>{
    if (AsyncStorage.getItem("accessToken")){
      setIsAuthenticated(true)
    }else{
      setIsAuthenticated(false)
    }
  },[])
  return (
    <>
      <NavigationContainer>
      <UnauthenticatedNavigator  isAuthenticated={isAuthenticated} />
    </NavigationContainer>
     <Toast />
     </>
  
    
  );
}

export default App;
