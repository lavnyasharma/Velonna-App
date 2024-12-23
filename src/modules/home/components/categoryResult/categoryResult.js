import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { getCollectionResult } from '@/apis';
import ProductList from '@/shared/components/productList';
import BackBtn from '@/shared/components/backBtn';
import LikeComponent from '@/shared/components/like';
import SearchBar from '../navBar/searchBar';
import Filter from '../filter';
import ButtonSheet from '@/shared/components/buttonSheet';
import ButtonSheetV2 from '@/shared/components/buttonSheetV2';

const CategoryResult = ({}) => {
      const [isOpen, setIsOpen] = useState(false);
  const route = useRoute();
  const { categoryId } = route.params;

  const [categoryData, setCategoryData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const data = await getCollectionResult(categoryId);
        setCategoryData(data.results);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };

    fetchCategoryData();
  }, [categoryId,isOpen]);

  if (loading) {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <ProductList products={[]} rows={2} />
      </ScrollView>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.containerOptions}>
        <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()}>
          <BackBtn />
        </TouchableOpacity>
        {/* <LikeComponent onLike={() => undefined} liked={false} /> */}
      </View>
      <View style={styles.searchBar}>
            <SearchBar openSearch={() => setIsOpen(!isOpen)} />
          </View>
          <View>

          {categoryData && categoryData.length > 0 ? (
        <ProductList 
          products={categoryData}  
          rows={2}  
        />
      ) : (
        <Text style={styles.text}>No data available</Text>
      )}
          </View>
  <ButtonSheet
          height={Dimensions.get("window").height * 0.9}
          dispatch={isOpen}
        >
          <Filter setIsOpen={setIsOpen} isOpen={isOpen} />
        </ButtonSheet>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  
    
    backgroundColor: '#fff',
  },
  searchBar:{
   
    paddingBottom:20,
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
  containerOptions: {
    
    width: '100%',
    padding: 10,
  },
  btnBack: {
    padding: 10,
  },
});

export default CategoryResult;
