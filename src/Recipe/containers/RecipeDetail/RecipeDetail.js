import React, { useEffect, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import RecipeMetadata from '../../components/RecipeMetadata/RecipeMetadata';
import { RecipeIngredientList } from '../../components/RecipeIngredientList/RecipeIngredientList';
import { RecipeInstructionList } from '../../components/RecipeInstructionList/RecipeInstructionList';
import EditRecipeButton from '../../components/EditRecipeButton/EditRecipeButton';
import LoadingScreen from '../../../app/components/LoadingScreen/LoadingScreen';
import { fetchRecipe } from '../../state/recipes';

const ViewRecipe = ({ navigation, route }) => {
  const recipeId = route.params.id;
  const dispatch = useDispatch();
  const recipe = useSelector(state => state.recipes.detail.data);
  const recipeLoading = useSelector(state => state.recipes.detail.loading);

  useEffect(() => {
    if (recipeLoading || recipe.id !== recipeId) {
      dispatch(fetchRecipe(recipeId));
    }
  });

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <EditRecipeButton
          onPress={() => navigation.navigate('EditRecipe', { id: recipeId })}
        />
      ),
    });
  }, [navigation]);

  return (
    <LoadingScreen loading={recipeLoading}>
      <View style={styles.recipeDetail}>
        <RecipeMetadata recipe={recipe} />
        <View style={styles.recipeInstructions}>
          <RecipeIngredientList ingredients={recipe.ingredients} />
          <RecipeInstructionList instructions={recipe.instructions} />
        </View>
      </View>
    </LoadingScreen>
  );
};

const styles = StyleSheet.create({
  recipeDetail: {
    marginTop: 15,
  },
  recipeInstructions: {
    marginTop: 15,
    padding: 10,
  },
});

export default ViewRecipe;
