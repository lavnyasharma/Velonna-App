import SplashScreen from "@/modules/splashScreen";
import Onboarding from "@/modules/onboarding";
import Login from "@/modules/login";
import ForgotPassword from "@/modules/forgotPassword";
import ChangePassword from "@/modules/changePassword";
import Register from "@/modules/register";
import ConfirmEmail from "@/modules/register/sections/confirmEmail";
import ProductDetail from "@/modules/productDetail";
import Bag from "@/modules/bag";
import OrderReview from "@/modules/orderReview";
import EditProfile from "@/modules/profile/sections/editProfile";
import TermsAndConditions from "@/Pages/TermsConditions/terms";
import Coupon from "@/modules/coupons/coupons";
import CategoryResult from "@/modules/home/components/categoryResult/categoryResult";

const RoutesStack = [
  {
    path: 'splashScreen',
    component: SplashScreen,
    private: false,
  },
  {
    path: 'onboarding',
    component: Onboarding,
    private: false,
  },  {
    path: 'TermsAndConditions',
    component:   TermsAndConditions,
    private: false,
  },

  {
    path: 'login',
    component: Login,
    private: false,
  },
  {
    path: 'coupon',
    component: Coupon,
    private: false,
  },
  {
    path: 'CategoryResult',
    component: CategoryResult,
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
];

export default RoutesStack;
