import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllIngredients } from '../state/ingredients';
import IngredientList from '../components/IngredientList/IngredientList';

const IngredientHome = ({ navigation }) => {
  const dispatch = useDispatch();
  const ingredients = useSelector(state => state.ingredients);
  const loading = useSelector(state => state.ingredients.loading);
  console.log('ingredients', ingredients);

  useEffect(() => {
    if (loading) {
      dispatch(fetchAllIngredients());
    }
  });

  return (
    <View style={styles.ingredientHome}>
      <IngredientList ingredients={ingredients.all} />
    </View>
  );
};

const styles = StyleSheet.create({
  ingredientHome: {},
});

export default IngredientHome;
