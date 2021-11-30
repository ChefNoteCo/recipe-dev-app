import { configureStore } from '@reduxjs/toolkit';
import recipeReducer from '../../Recipe/state/recipes';
import ingredientReducer from '../../Ingredient/state/ingredients';

export const store = configureStore({
  reducer: {
    ingredients: ingredientReducer,
    recipes: recipeReducer,
  },
});
