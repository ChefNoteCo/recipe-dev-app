import { createSlice } from '@reduxjs/toolkit';
const initialRecipes = require('../../../../sample-data.json');
console.log('sample-data', initialRecipes);

const initialState = { all: initialRecipes, recent: [] };

export const recipeSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    addRecipe: (state, action) => {
      state.all.push(action.payload);
      const MAX_RECENT_LENGTH = 3;
      if (state.recent.length === MAX_RECENT_LENGTH) {
        state.recent.shift();
      }
      state.recent.push(action.payload);
    },
    modifyRecipe: (state, action) => {
      const foundRecipeIndex = state.all.findIndex(
        recipe => recipe.id === action.payload.id
      );
      if (foundRecipeIndex !== -1) {
        state.all.slice(foundRecipeIndex, foundRecipeIndex + 1);
        state.all.push(action.payload);
      }
    },
  },
});

export const { addRecipe, modifyRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
