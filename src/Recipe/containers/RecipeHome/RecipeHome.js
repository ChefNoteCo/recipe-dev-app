import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import RecipeList from '../../components/RecipeList/RecipeList';

const RecipeHome = ({ navigation }) => {
  const recipes = useSelector(state => state.recipes);

  const hasRecent = recipes.recent.length > 0;

  return (
    <View style={styles.recipeHome}>
      {hasRecent && (
        <RecipeList title="Recent Recipes" recipes={state.recipes} />
      )}
      <RecipeList title="All Recipes" recipes={recipes.all} />
    </View>
  );
};

const styles = StyleSheet.create({
  recipeHome: {
    marginTop: 75,
    backgroundColor: '#ccc',
  },
});

export default RecipeHome;
