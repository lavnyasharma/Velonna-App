import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useRef, useState } from "react";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import globalStyles from "@/layouts/globalStyles";


const IconAndSubtitleContainer = ({ title, icon }) => {
    const scrollViewRef = useRef(null);
  return (
    <View style={style.scrollContainer.categoryBox}>
      <View style={style.scrollContainer.categoryBox.categoryBoxIcon}>
        {icon}
      </View>
      <Text numberOfLines={1} style={style.scrollContainer.categoryBox.categoryBoxText}>
        {title}
      </Text>
    </View>
  );
};

export default function CategoriesSlider({title,customStyle={marginTop:0},categoryData,enableSelect}) {
  const [selected,setSelected] = useState()
  return (
    <View style={[style.container,customStyle]}>
      {title?<View style={style.heading}>
        <Text style={style.heading.title}>{title}</Text>
      </View>:null}
      <View style={style.scrollContainer}>
        <ScrollView
          style={{ overflow: "visible"}}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingVertical: 10,
            gap:10,
            paddingHorizontal: 20,
          }}
        >
          <IconAndSubtitleContainer
            title={"Vegetables"}
          ></IconAndSubtitleContainer>
          <IconAndSubtitleContainer
            title={"Fruits"}
          ></IconAndSubtitleContainer>
          <IconAndSubtitleContainer
            title={"Meat & eggs"}
          ></IconAndSubtitleContainer>
          <IconAndSubtitleContainer
            title={"drinks"}
          ></IconAndSubtitleContainer>
          <IconAndSubtitleContainer
            title={"bakery"}
          ></IconAndSubtitleContainer>
          <IconAndSubtitleContainer
            title={"Vegetables"}
          ></IconAndSubtitleContainer>
          <IconAndSubtitleContainer
            title={"Vegetables"}
          ></IconAndSubtitleContainer>
        </ScrollView>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginBottom:16
  },
  heading: {
    padding: 16,
    title: {
      fontSize: 18,
      fontWeight: "bold",
    },
  },
  scrollContainer: {
    categoryBox: {
      flex: 1,
      aspectRatio: "1",
      alignItems: "center",
      categoryBoxIcon: {
        justifyContent: "center",
        alignItems: "center",
        width: 53,
        backgroundColor: globalStyles.quaternary.color,
        borderRadius: 16,
        aspectRatio: "1",
      },
      categoryBoxText: {
        fontSize: 12,
        marginTop: 10,
        fontWeight: "400",
        width:70,
        textAlign:"center",
        
      },
    },
  },
});
