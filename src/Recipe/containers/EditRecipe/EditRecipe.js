import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import LoadingScreen from '../../../app/components/LoadingScreen/LoadingScreen';
import RecipeForm from '../../components/RecipeForm/RecipeForm';
import { fetchRecipe } from '../../state/recipes';
import { fetchAllIngredients } from '../../../Ingredient/state/ingredients';

const EditRecipe = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const recipe = useSelector(state => state.recipes.detail.data);
  const recipeLoading = useSelector(state => state.recipes.detail.loading);
  const ingredients = useSelector(state => state.ingredients.all);
  const ingredientLoading = useSelector(state => state.ingredients.loading);

  const recipeId = route.params.id;

  useEffect(() => {
    if (recipeLoading) {
      dispatch(fetchRecipe(recipeId));
    }
    if (ingredientLoading) {
      dispatch(fetchAllIngredients());
    }
  });

  const saveNewRecipe = editedRecipe => {
    console.log('Saved', editedRecipe);
    // dispatch(saveRecipe(editedRecipe)).then(() => {
    //   navigation.navigate('RecipeDetail', { id: editedRecipe.id });
    // });
  };

  return (
    <LoadingScreen loading={recipeLoading}>
      <RecipeForm
        allIngredients={ingredients}
        recipe={recipe}
        onSave={saveNewRecipe}
        onCancel={() => navigation.navigate('RecipeDetail', { id: recipeId })}
      />
    </LoadingScreen>
  );
};

const styles = StyleSheet.create({
  formButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 25,
    marginBottom: 25,
  },
  ingredientForm: {
    marginTop: 15,
    padding: 10,
  },
  inputForm: {
    padding: 10,
  },
  instructionForm: {
    padding: 10,
  },
  instructionFormOnFocus: {
    padding: 10,
    marginBottom: 150,
  },
  metadataForm: {
    marginTop: 10,
  },
  submitButton: {
    width: 150,
  },
});
export default EditRecipe;
