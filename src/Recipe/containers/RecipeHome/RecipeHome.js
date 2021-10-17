import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { fetchAllRecipes } from '../../state/recipes';
import RecipeList from '../../components/RecipeList/RecipeList';

const RecipeHome = ({ navigation }) => {
  const dispatch = useDispatch();
  const recipes = useSelector(state => state.recipes);
  const loading = useSelector(state => state.recipes.loading);
  const hasRecent = recipes.recent.length > 0;

  useEffect(() => {
    if (loading) {
      dispatch(fetchAllRecipes());
    }
  });

  return (
    <View style={styles.recipeHome}>
      {hasRecent && (
        <RecipeList title="Recent Recipes" recipes={recipes.recent} />
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
