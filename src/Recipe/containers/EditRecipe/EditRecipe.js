import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoadingScreen from '../../../app/components/LoadingScreen/LoadingScreen';
import RecipeForm from '../../components/RecipeForm/RecipeForm';
import { fetchRecipe } from '../../state/recipes';
import { fetchAllIngredients } from '../../../Ingredient/state/ingredients';
import { saveRecipe } from '../../state/recipes';

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
    dispatch(saveRecipe(editedRecipe)).then(() => {
      navigation.navigate('ViewRecipe', { id: editedRecipe.id });
    });
  };

  return (
    <LoadingScreen loading={recipeLoading}>
      <RecipeForm
        allIngredients={ingredients}
        recipe={recipe}
        onSave={saveNewRecipe}
        onCancel={() => navigation.navigate('ViewRecipe', { id: recipeId })}
      />
    </LoadingScreen>
  );
};

export default EditRecipe;
