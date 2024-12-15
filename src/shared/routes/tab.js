import Home from "@/modules/home";
import {
  HomeActive,
  Home as HomeIcon,
  Store as StoreIcon,
  StoreActive,
  WishList as WishListIcon,
  WishListActive,
  Profile as ProofileIcon,
  ProfileActive,
} from "@/shared/assets/icons";
import Store from "@/modules/store";
import WhiteList from "@/modules/whiteList";
import Profile from "@/modules/profile";
import SearchResult from "@/modules/home/components/searchResult";

export default [
  {
    id: '1',
    displayName: 'Home',
    name: 'homeTab',
    icon: HomeIcon,
    iconActive: HomeActive,
    component: Home
  },
  {
    id: '2',
    displayName: 'Store',
    name: 'store',
    icon: StoreIcon,
    iconActive: StoreActive,
    component: Store
  },
  {
    id: '3',
    displayName: 'WishList',
    name: 'wishlist',
    icon: WishListIcon,
    iconActive: WishListActive,
    component: WhiteList
  },
  {
    id: '4',
    displayName: 'Profile',
    name: 'profile',
    icon: ProofileIcon,
    iconActive: ProfileActive,
    component: Profile
  },
]
