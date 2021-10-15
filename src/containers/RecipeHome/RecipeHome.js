import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, StyleSheet, Text, FlatList } from 'react-native';
// import recipesData from '../../data/recipe';
import RecipeListItem from '../../components/RecipeListItem/RecipeListItem';
// const sampleRecipes = require('../../../sample-data.json');

const RecipeHome = ({ navigation }) => {
  const recipes = useSelector(state => state.recipes);

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <Text>Recipe App</Text>
          <Button
            title="New Recipe"
            onPress={() => navigation.navigate('NewRecipe')}
          />
        </>
      }
      data={recipes.all}
      renderItem={({ item }) => {
        return <RecipeListItem recipe={item} />;
      }}
      style={styles.recipeHome}
    />
  );
};

const styles = StyleSheet.create({
  recipeHome: {
    marginTop: 75,
    backgroundColor: '#ccc',
  },
});

export default RecipeHome;
