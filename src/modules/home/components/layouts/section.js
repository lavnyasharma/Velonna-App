import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { 
  faUser, 
  faBook, 
  faMapMarkerAlt, 
  faShoppingCart, 
  faHeart, 
  faBell, 
  faCreditCard, 
  faQuestionCircle, 
  faStar, 
  faCog, 
  faTicketSimple,
  faSignOutAlt, 
  faAngleRight,
  faClockRotateLeft, 
  faChevronRight,
  faTrashCan,

  faShield,
  faTrash,
  faCopy,
  faXmark
  
} from '@fortawesome/free-solid-svg-icons';

export const PersonalInfoIcon = ({ size = 18, style }) => (
  <FontAwesomeIcon icon={faUser} size={size} style={style} />
);

export const AddressesIcon = ({ size = 18, style }) => (
  <FontAwesomeIcon icon={faMapMarkerAlt} size={size} style={style} />
);

export const CartIcon = ({ size = 18, style }) => (
  <FontAwesomeIcon icon={faShoppingCart} size={size} style={style} />
);

export const FavouriteIcon = ({ size = 18, style }) => (
  <FontAwesomeIcon icon={faHeart} size={size} style={style} />
);

export const NotificationsIcon = ({ size = 18, style }) => (
  <FontAwesomeIcon icon={faBell} size={size} style={style} />
);

export const PaymentMethodIcon = ({ size = 18, style }) => (
  <FontAwesomeIcon icon={faCreditCard} size={size} style={style} />
);

export const FAQsIcon = ({ size = 18, style }) => (
  <FontAwesomeIcon icon={faQuestionCircle} size={size} style={style} />
);

export const UserReviewsIcon = ({ size = 18, style }) => (
  <FontAwesomeIcon icon={faStar} size={size} style={style} />
);

export const SettingsIcon = ({ size = 18, style }) => (
  <FontAwesomeIcon icon={faCog} size={size} style={style} />
);

export const TermsAndConditionsIcon = ({ size = 18, style }) => (
  <FontAwesomeIcon icon={faBook} size={size} style={style} />
);

export const LogOutIcon = ({ size = 18, style }) => (
  <FontAwesomeIcon icon={faSignOutAlt} size={size} style={style} />
);

export const HistoryIcon = ({ size = 18, style }) => (
  <FontAwesomeIcon icon={faClockRotateLeft} size={size} style={style} />
);

export const ChevronRightIcon = ({ size = 18, style }) => (
  <FontAwesomeIcon icon={faChevronRight} size={size} style={style} />
);
export const PrivacyPolicy = ({ size = 18, style }) => (
  <FontAwesomeIcon icon={faShield} size={size} style={style} />
);
export const DeleteButton = ({ size = 18, style }) => (
  <FontAwesomeIcon icon={faTrashCan} size={size} style={style} />
);
export const Cross = ({ size = 18, style }) => (
  <FontAwesomeIcon icon={faXmark} size={size} style={style} />
);
export const Star = ({ size = 16, style }) => (
  <FontAwesomeIcon icon={faStar} size={size} style={{ color: "yellow", ...style }} />
);
export const Coupon = ({ size = 16, style }) => (
  <FontAwesomeIcon icon={faTicketSimple} size={size} style={style} />
);
export const Right = ({ size = 16, style }) => (
  <FontAwesomeIcon icon={faAngleRight} size={size} style={style} />
);
export const Copy = ({ size = 20, style }) => (
  <FontAwesomeIcon icon={faCopy} size={size} style={style} />
);

