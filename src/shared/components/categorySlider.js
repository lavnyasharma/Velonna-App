import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import globalStyles from "@/layouts/globalStyles";
import { FONT } from "../constans/fonts";
import { getCollection } from "@/apis";
import { useNavigation } from '@react-navigation/native'; // Import React Navigation

const IconAndSubtitleContainer = ({ title, icon, onPress }) => {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={style.scrollContainer.categoryBox}
      activeOpacity={0.7} // Adds activeOpacity to ensure the click is responsive
    >
      <View style={style.scrollContainer.categoryBox.categoryBoxIcon}>
        <Image source={{ uri: icon }} style={{ width: '100%', height: '100%', borderRadius: 8, }} />
      </View>
      <Text numberOfLines={1} style={style.scrollContainer.categoryBox.categoryBoxText}>
        {formatTitle(title)}
      </Text>
    </TouchableOpacity>
  );
};

function formatTitle(title) {
  if (!title) return ""; // Handle empty or undefined input

  return title
    .split(" ") // Split the string into an array of words
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
    .join(" "); // Join the words back into a single string
}

export default function CategoriesSlider({ title, customStyle = { marginTop: 0 }, categoryData, enableSelect }) {
  const [selected, setSelected] = useState();
  const [categories, setCategories] = useState([]); // State to hold the fetched categories
  const navigation = useNavigation(); // Use the navigation hook

  // Fetch category data when the component mounts
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCollection();  // API call
       
        setCategories(response.data);  // Assuming response.data contains the categories
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();  // Call the function to fetch data
  }, []);  // Empty dependency array to run the effect once when the component mounts

  const handleCategoryPress = (categoryId) => {
  
    // Navigate to the CategoryResult screen and pass the category ID
    navigation.navigate('CategoryResult', { categoryId });
  };

  return (
    <View style={[style.container, customStyle]}>
      {title ? (
        <View style={style.heading}>
          <Text style={style.heading.title}>{title}</Text>
        </View>
      ) : null}
      <View style={style.scrollContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingVertical: 10,
            gap: 10,
            paddingHorizontal: 20,
          }}
        >
          {categories.length > 0 ? (
            categories.map((category) => (
              <IconAndSubtitleContainer
                key={category.id}  // Use unique key for list items
                title={category.name}  // Pass category name
                icon={category.icon}  // Pass category icon URL
                onPress={() => handleCategoryPress(category.id)}  // Handle click
              />
            ))
          ) : (
            <Text>No categories available</Text>
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  heading: {
    padding: 16,
    title: {
      fontSize: 18,
      fontFamily: FONT.MEDIUM,
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
        width: 55,
        backgroundColor: "#020202",
        borderRadius: 8,
        aspectRatio: "1",
      },
      categoryBoxText: {
        fontSize: 12,
        marginTop: 10,
        fontFamily: FONT.MEDIUM,
        width: 70,
        textAlign: "center",
      },
    },
  },
});
