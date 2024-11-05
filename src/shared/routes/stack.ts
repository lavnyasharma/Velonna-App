import SplashScreen from "@/modules/splashScreen";
import Onboarding from "@/modules/onboarding";
import Login from "@/modules/login";
import ForgotPassword from "@/modules/forgotPassword";
import ChangePassword from "@/modules/changePassword";
import Register from "@/modules/register";
import ConfirmEmail from "@/modules/register/sections/confirmEmail";
import ProductDetail from "@/modules/productDetail";
import { ProductDTO } from "@/shared/DTO/ProductDTO";
import { NativeStackScreenProps } from "react-native-screens/native-stack";
import { StackNavigationProp, StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { RouteProp } from "@react-navigation/native";
import Bag from "@/modules/bag";
import OrderReview from "@/modules/orderReview";
import EditProfile from "@/modules/profile/sections/editProfile";

export type RootStackParamList = {
  splashScreen: undefined
  onboarding: undefined
  login: undefined
  forgotPassword: undefined
  changePassword: undefined
  register: undefined
  confirmEmail: undefined
  productDetail: { product: ProductDTO };
  home: undefined
  bag: undefined
  orderReview: undefined
  editProfile: undefined
};
export type RouteItem = {
  path: keyof RootStackParamList;
  component: any
  private: boolean;
};
export type RouteProps = RouteProp<RootStackParamList>;

export type NavigationProps = StackNavigationProp<RootStackParamList>;

const RoutesStack: RouteItem[] = [
  {
    path: 'splashScreen',
    component: SplashScreen,
    private: false,
  },
  {
    path: 'onboarding',
    component: Onboarding,
    private: false,
  },
  {
    path: 'login',
    component: Login,
    private: false,
  },
  {
    path: 'forgotPassword',
    component: ForgotPassword,
    private: false,
  },
  {
    path: 'changePassword',
    component: ChangePassword,
    private: false,
  },
  {
    path: 'register',
    component: Register,
    private: false,
  },
  {
    path: 'confirmEmail',
    component: ConfirmEmail,
    private: false,
  },
  {
    path: 'productDetail',
    component: ProductDetail,
    private: true,
  },
  {
    path: 'bag',
    component: Bag,
    private: true,
  },
  {
    path: 'orderReview',
    component: OrderReview,
    private: true,
  },
  {
    path: 'editProfile',
    component: EditProfile,
    private: true,
  },
]
export default RoutesStack
