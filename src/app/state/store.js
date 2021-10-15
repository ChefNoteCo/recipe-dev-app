import { configureStore } from '@reduxjs/toolkit';
import recipeReducer from '../../Recipe/state/recipes';

export const store = configureStore({
  reducer: {
    recipes: recipeReducer,
  },
});
