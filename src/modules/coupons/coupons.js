import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";
import { styless } from "./style";
import useDarkMode from "@/shared/hooks/useDarkMode";
import HeaderBack from "@/shared/components/headerBack";
import { Copy } from "../home/components/layouts/section";
import LineBreak from "../home/components/layouts/lineBreak";

const Coupon = () => {
  const { isDarkMode } = useDarkMode();
  const styles = styless(isDarkMode);
  const dummyImage = "https://via.placeholder.com/150";
  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerText}>
          <HeaderBack title="Apply Coupons" />
        </View>

        <View style={styles.searchBar}>
          <TextInput
            style={styles.input}
            placeholder="Search or enter coupon code..."
            placeholderTextColor={isDarkMode ? "#aaa" : "#555"}
          />
          <TouchableOpacity style={styles.applyButton}>
            <Text style={styles.applyButtonText}>Apply</Text>
          </TouchableOpacity>
        </View>
        <LineBreak innerTextEnable={true} thickness={2} innerText={"get the best deals :)"} marginHorizontal={20} marginVertical={20}></LineBreak>
        <View style={styles.coupon}>
          <View style={styles.couponContainer}>
            <View style={styles.couponHeader}>
              <Text style={styles.off}>30% Off </Text>
              <Text style={styles.for}>For Everything </Text>
            </View>
            <View style={styles.couponCode}>
              <View style={styles.code}>
                <Text style={styles.actualCoupon}>Code: EVERTHING99</Text>
              </View>

              <View style={styles.copy}>
                <View style={styles.copyComponent}>
                  <Copy />
                </View>

                <View style={styles.apply}>
                  <View style={styles.price}>
                    <View style={styles.pricedd}>
                      <Text style={styles.priced}>Apply</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.description}>
              <Text style={styles.listItem}>Terms And Conditions Apply</Text>
              <Text style={styles.listItem}>
                • Cannot be combined with other coupons or promotions
              </Text>
              <Text style={styles.listItem}>• Only on full-priced items</Text>
            </View>
          </View>
          {/* <View style={styles.couponFooter}></View> */}
        </View>
      </View>
    </>
  );
};

export default Coupon;
