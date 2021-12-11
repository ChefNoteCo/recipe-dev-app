import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import LoadingScreen from '../../../app/components/LoadingScreen/LoadingScreen';
import RecipeForm from '../../components/RecipeForm/RecipeForm';
import { fetchAllIngredients } from '../../../Ingredient/state/ingredients';
import { saveRecipe } from '../../state/recipes';
import { Recipe } from '../../models';

const CreateRecipe = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const ingredients = useSelector(state => state.ingredients.all);
  const ingredientLoading = useSelector(state => state.ingredients.loading);
  const loading = useSelector(state => state.loading);

  const defaultRecipe = Recipe({});

  useEffect(() => {
    if (ingredientLoading) {
      dispatch(fetchAllIngredients());
    }
  });

  const saveNewRecipe = editedRecipe => {
    dispatch(saveRecipe(editedRecipe)).then(() => {
      navigation.navigate('ViewRecipe', { id: editedRecipe.id });
    });
  };

  return (
    <LoadingScreen loading={ingredientLoading || loading}>
      <RecipeForm
        allIngredients={ingredients}
        recipe={defaultRecipe}
        onSave={saveNewRecipe}
        onCancel={() => navigation.navigate('ViewRecipe', { id: recipeId })}
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
export default CreateRecipe;
