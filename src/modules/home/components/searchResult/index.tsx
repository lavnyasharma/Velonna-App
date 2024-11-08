import Typography from "@/shared/components/Typography";
import React, { useState } from "react";
import { Dimensions, ScrollView, TouchableOpacity, View } from "react-native";
import { Setting, Dollar } from "@/shared/assets/icons";
import {_styles} from './styles'
import { createRows, normalize } from "@/shared/helpers";
import { ProductDTO } from "@/shared/DTO/ProductDTO";
import Product from "@/shared/components/product";
import ButtonSheet from "@/shared/components/buttonSheet";
import Button from "@/shared/components/buttons/normal";
import Input from "@/shared/components/input";
import RadioButtons from "@/shared/components/radioButtons";
import useDarkMode from "@/shared/hooks/useDarkMode";
import CloseBtn from "@/shared/components/close";
import { categoriesDefault, products, sortByDefault } from "@/shared/constans/mockup";

export default function SearchResult() {
  const [sortBy] = useState(sortByDefault)
  const [categories] = useState(categoriesDefault)
  const [isOpen, setIsOpen] = useState(false);
  const {isDarkMode} = useDarkMode()
  const styles = _styles(isDarkMode)
  return (
    <View style={{flex: 1}}>
      <ScrollView  showsVerticalScrollIndicator={false} style={{marginTop: normalize(12), flex: 1, paddingHorizontal: normalize(20)}}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{marginBottom: normalize(24), flex: 1,}}
        >
          <TouchableOpacity onPress={() => setIsOpen(true)} style={styles.containerFilter}>
            <Setting />
          </TouchableOpacity>
          <View style={styles.containerFilter}>
            <Typography customStyle={styles.titleFilter} value="Official Store" />
          </View>
          <View style={styles.containerFilter}>
            <Typography customStyle={styles.titleFilter} value="Offers" />
          </View>
          <View style={styles.containerFilter}>
            <Typography customStyle={styles.titleFilter} value="Free Delivery Fee" />
          </View>
        </ScrollView>


        <Typography customStyle={styles.titleSection} value="Search Results" />

        <View style={{flex:1}}>
          {createRows<ProductDTO>(products, 2).map((chunk, index) => (
            <View key={index} style={styles.row}>
              {chunk.map((item) => (
                <Product key={item.id} product={item} />
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
      <ButtonSheet height={Dimensions.get('window').height * 0.6} dispatch={isOpen}>
        <View style={styles.containerFilterScreen}>

          <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flex: 0.07}}>
            <Typography customStyle={styles.titleSection} value="Filter" />
            <CloseBtn onPress={() => setIsOpen(false)} />
          </View>

          <View style={{marginTop: normalize(24), flex: 1}}>
            <View style={{flex: 1}}>
              <Typography customStyle={styles.titleSection} value="Sort by" />

              <View style={{ marginTop: normalize(10)}}>
                <RadioButtons options={sortBy} columns={2} />
              </View>
            </View>

            <View style={{marginTop: normalize(24), flex: 1}}>
              <Typography customStyle={styles.titleSection} value="Category" />

              <View style={{marginTop: normalize(10)}}>
                <RadioButtons options={categories} columns={2} />
              </View>
            </View>
          </View>

          <View style={{marginTop: normalize(24), flex: 0.4}}>
            <View>
              <Typography customStyle={styles.titleSection} value="Prices" />

              <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <View style={{flex: 0.48}}>
                  <Input value="" Icon={Dollar} placeholder="Lowest" onChangeText={function (text: string): void {
                    throw new Error("Function not implemented.");
                  } } />
                </View>
                <View style={{flex: 0.48}}>
                  <Input value="" Icon={Dollar} placeholder="Highest" onChangeText={function (text: string): void {
                    throw new Error("Function not implemented.");
                  } } />
                </View>
              </View>
            </View>
          </View>

         <View style={{flex: 0.2}}>
           <Button title="Apply" />
         </View>
        </View>
      </ButtonSheet>
    </View>
  )
}
