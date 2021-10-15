import { configureStore } from '@reduxjs/toolkit';
import recipeReducer from './views/Home/state/recipes';

export const store = configureStore({
  reducer: {
    recipes: recipeReducer,
  },
});
