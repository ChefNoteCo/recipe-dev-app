import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import recipesData from '../data/recipe';
// const initialRecipes = require('../../../sample-data.json');
import { sortAscending, sortDescending } from '../../app/helpers/sortOrder';

const initialState = { loading: true, all: [], recent: [] };

export const saveRecipe = createAsyncThunk(
  'recipes/saveRecipes',
  async data => {
    console.log('data to save', data);
    await recipesData.save(data);
    return data;
  }
);

export const fetchAllRecipes = createAsyncThunk(
  'recipes/fetchAllRecipes',
  async () => {
    const recipes = await recipesData.list();
    const sortedRecipes = recipes.sort(sortAscending('name'));
    console.log('sorted', sortedRecipes);
    return sortedRecipes;
  }
);

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
  extraReducers: builder => {
    builder.addCase(fetchAllRecipes.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchAllRecipes.fulfilled, (state, action) => {
      state.all = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchAllRecipes.rejected, (state, action) => {
      console.log('Error!!!', action);
    });
    builder.addCase(saveRecipe.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(saveRecipe.fulfilled, (state, action) => {
      state.all.push(action.payload);
      const MAX_RECENT_LENGTH = 3;
      if (state.recent.length === MAX_RECENT_LENGTH) {
        state.recent.shift();
      }
      state.recent.push(action.payload);
      state.loading = false;
    });
  },
});

export const addRecipeAsync = payload => async dispatch => {
  dispatch(recipesLoading());
  await recipesData.save(payload);
  dispatch(recipesReceived());
  dispatch(addRecipe(payload));
};

export const { addRecipe, modifyRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
