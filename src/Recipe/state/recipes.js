import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import recipesData from '../data/recipe';
import { sortAscending, sortDescending } from '../../app/helpers/sortOrder';
import { BaseRecipe } from '../../app/models';

const MAX_RECENT_LENGTH = 3;
const initialState = {
  loading: true,
  all: [],
  recent: [],
  detail: {
    loading: true,
    data: BaseRecipe({}),
  },
  save: {
    loading: false,
  },
};

export const saveRecipe = createAsyncThunk(
  'recipes/saveRecipes',
  async data => {
    const recipe = await recipesData.save(data);
    return recipe;
  }
);

export const fetchAllRecipes = createAsyncThunk(
  'recipes/fetchAllRecipes',
  async () => {
    const recipes = await recipesData.list();
    const sortedRecipes = recipes.sort(sortAscending('name'));
    return sortedRecipes;
  }
);

export const fetchRecipe = createAsyncThunk(
  'recipes/fetchRecipe',
  async recipeId => {
    const recipe = await recipesData.get(recipeId);
    return recipe;
  }
);

export const recipeSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    // For non-thunk reducers
    // addRecipe: (state, action) => {
    //   state.all.push(action.payload);
    //   const MAX_RECENT_LENGTH = 3;
    //   if (state.recent.length === MAX_RECENT_LENGTH) {
    //     state.recent.shift();
    //   }
    //   state.recent.push(action.payload);
    // },
    // modifyRecipe: (state, action) => {
    //   const foundRecipeIndex = state.all.findIndex(
    //     recipe => recipe.id === action.payload.id
    //   );
    //   if (foundRecipeIndex !== -1) {
    //     state.all.slice(foundRecipeIndex, foundRecipeIndex + 1);
    //     state.all.push(action.payload);
    //   }
    // },
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
    builder.addCase(fetchRecipe.pending, (state, action) => {
      state.detail.loading = true;
    });
    builder.addCase(fetchRecipe.fulfilled, (state, action) => {
      state.detail.data = action.payload;
      if (state.recent.length === MAX_RECENT_LENGTH) {
        state.recent.shift();
      }
      state.recent.push(action.payload);
      state.detail.loading = false;
    });
    builder.addCase(saveRecipe.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(saveRecipe.fulfilled, (state, action) => {
      const currentState = current(state);
      const recipeId = action.payload.id;
      const existing = currentState.all.findIndex(i => {
        return i.id === recipeId;
      });
      if (existing === -1) {
        state.all.push(action.payload);
      } else {
        state.all[existing] = action.payload;
      }

      state.loading = false;
    });
  },
});

// export const { addRecipe, modifyRecipe } = recipeSlice.actions;
export default recipeSlice.reducer;
