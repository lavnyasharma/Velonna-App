import Wrapper from "@/shared/components/wrapper";
import HeaderBack from "@/shared/components/headerBack";
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { normalize } from "@/shared/helpers";
import ProductHorizontal from "@/shared/components/productHorizontal";
import Input from "@/shared/components/input";
import { styless } from './styles';
import ButtonSmall from "@/shared/components/buttons/small";
import Button from "@/shared/components/buttons/normal";
import ShippingAddress from "@/modules/orderReview/components/shippingAddress";
import PaymentMethod from "@/modules/orderReview/components/paymentMethod";
import Summary from "@/modules/orderReview/components/summary";
import ButtonSheet from "@/shared/components/buttonSheet";
import { useState } from "react";
import Typography from "@/shared/components/Typography";
import { Close } from "@/shared/assets/icons";
import { FONT } from "@/shared/constans/fonts";
import PaymentMethods from "@/shared/components/paymentMethods";
import Address from "@/shared/components/address";
import RadioButton from "@/shared/components/radioButton";
import useDarkMode from "@/shared/hooks/useDarkMode";
import CloseBtn from "@/shared/components/close";
import ShippingAddressList from "@/shared/components/shippingAddressList";
import { AddressDTO } from "@/shared/DTO/AddressDTO";
import useKeyboard from "@/shared/hooks/useKeyboard";
import { CartProvider } from "@/context/cartContext";
import Svg, { Path } from "react-native-svg";
import { Coupon, Right } from "../home/components/layouts/section";
import { useNavigation } from "@react-navigation/native";

export default function OrderReview() {
  const navigation = useNavigation();
  const [openMethodPayment, setOpenMethodPayment] = useState(false);
  const [openAddress, setOpenAddress] = useState(false);
  const [addingAddress, setAddingAddress] = useState(false);
  const { isDarkMode } = useDarkMode();
  const { isKeyboardVisible } = useKeyboard();
  const handlePress = () => {
    navigation.navigate('coupon'); 
  };

  const addressList = [
    {
      id: '1',
      title: 'Casa',
      tel: '20000',
      fullLocation: 'Calle julio Nebot, 13, Albal, Valencia, España',
      isDefaultAddress: true,
    },
    {
      id: '2',
      title: 'Oficina',
      tel: '200003',
      fullLocation: 'Carrer de Vicent Sancho Tello, 23, Valencia, España',
      isDefaultAddress: false,
    },
  ];

  const styles = styless(isDarkMode);

  return (
    <Wrapper>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <HeaderBack title="Order Review" />

        <View style={{ marginTop: normalize(24), flex: 1 }}>
        <CartProvider>
        <ProductHorizontal actions={true} />
          </CartProvider>
        </View>

        <TouchableOpacity style={styles.button} onPress={handlePress}>
      <View style={styles.svgContainer}>
        <Coupon />
        <Text style={styles.text}>Apply Coupon</Text>
      </View>
     <Right/>
    </TouchableOpacity>

        <View style={styles.containerSummary}>
          <Summary />
          <View style={styles.divider} />
          <PaymentMethod change={() => setOpenMethodPayment(!openMethodPayment)} />
          <ShippingAddress change={() => setOpenAddress(!openMethodPayment)} />
        </View>

        <View style={{ marginTop: normalize(24) }}>
          <Button title="Checkout $223.94" />
        </View>
      </ScrollView>

      <ButtonSheet dispatch={openMethodPayment}>
        <View style={styles.containerPayments}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <CloseBtn onPress={() => setOpenMethodPayment(!openMethodPayment)} />
            <Typography customStyle={styles.titleModal} value="Payment Method" />
          </View>

          <PaymentMethods />
        </View>
      </ButtonSheet>

      <ButtonSheet dispatch={openAddress}>
        <View style={styles.containerShippingAddress}>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <CloseBtn onPress={() => setOpenAddress(!openAddress)} />
              <Typography customStyle={styles.titleModal} value="Shipping Address" />
            </View>

            <View style={{ width: '100%', marginTop: normalize(24) }}>
              <ShippingAddressList address={addressList} />
            </View>

            <View style={{ marginVertical: normalize(24) }}>
              <Button
                onPress={() => {
                  setOpenAddress(false);
                  setAddingAddress(true);
                }}
                title="Add new address"
                isPrimary={false}
              />
            </View>
          </View>
        </View>
      </ButtonSheet>

      <ButtonSheet height={Platform.OS === 'ios' ? Dimensions.get('window').height * 0.93 : isKeyboardVisible ? normalize(400) : Dimensions.get('window').height * 0.93} dispatch={addingAddress}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ height: '100%' }}
          keyboardVerticalOffset={normalize(50)}
        >
          <View style={{
            padding: normalize(24),
            flex: 1,
          }}>
            <HeaderBack callback={() => setAddingAddress(false)} title="Add New Address" />

            <View style={{
              marginTop: normalize(24),
              flex: 1,
            }}>
              <View style={{
                marginBottom: normalize(14)
              }}>
                <Input value="" placeholder="Name" label="Name" />
              </View>
              <View style={{
                marginBottom: normalize(14)
              }}>
                <Input value="" placeholder="Phone" label="Phone" />
              </View>
              <View style={{
                marginBottom: normalize(14)
              }}>
                <Input value="" placeholder="Address" label="Address" />
              </View>
              <View style={{
                marginBottom: normalize(14)
              }}>
                <Input value="" placeholder="Postal Code" label="Postal Code" />
              </View>
            </View>

            <View>
              <Button title="Add" />
            </View>
          </View>
        </KeyboardAvoidingView>
      </ButtonSheet>
    </Wrapper>
  );
}
