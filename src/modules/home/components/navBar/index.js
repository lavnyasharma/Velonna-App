import { normalize } from "@/shared/helpers";
import { Image, TouchableOpacity, View } from "react-native";
import Typography from "@/shared/components/Typography";
import { FONT } from "@/shared/constans/fonts";
import color from "@/shared/constans/colors";
import { Bag, SearchNormal } from "@/shared/assets/icons";
import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useCart } from "@/context/cartContext";
import SearchBar from "./searchBar";

export default function NavBar({ openSearch, goToBag }) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const { cart, itemCount, subtotal, totalDiscount,fetchCart, total, removeFromCart } =
    useCart();

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const userInfo = await AsyncStorage.getItem("userInfo");
        if (userInfo) {
          const parsedInfo = JSON.parse(userInfo);
          setFirstname(parsedInfo.first_name);
          setLastname(parsedInfo.last_name);
        }
      } catch (error) {
        console.error("Error fetching username:", error);
      }
    };

    fetchUsername();
  }, []);

  useEffect(()=>{
  },[cart])

  const fullName = firstname && lastname ? `${firstname} ${lastname}` : "User";

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("./logo.png")} style={styles.logo} />
      </View>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
      
        <View style={{ marginHorizontal: normalize(12) }} />
        <TouchableOpacity onPress={goToBag} style={{ position: "relative" }}>
          <Bag width={28} height={28} />
          {itemCount === 0 ? null : (
            <View
              style={{
                backgroundColor: color.neutral.white,
                borderRadius: 4,
                borderWidth: 1,
                borderColor: color.main.blue,
                width: normalize(17),
                height: normalize(17),
                alignItems: "center",
                justifyContent: "center",
                position: "absolute",
                right: normalize(0),
                left: normalize(14),
                bottom: normalize(13),
              }}
            >
              <Typography
                customStyle={{
                  color: color.main.blue,
                  textAlign: "center",
                  fontSize: normalize(12),
                  fontFamily: FONT.BOLD,
                }}
                value={itemCount}
              />
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
