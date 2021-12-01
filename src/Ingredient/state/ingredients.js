import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ingredientsData from '../data/ingredients';

const initialState = { loading: true, all: [] };

export const fetchAllIngredients = createAsyncThunk(
  'ingredients/fetchAllIngredients',
  async () => {
    const ingredients = await ingredientsData.list();
    return ingredients;
  }
);

export const saveIngredient = createAsyncThunk(
  'ingredients/saveIngredient',
  async data => {
    const response = await ingredientsData.save(data);
    return response;
  }
);

export const ingredientSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchAllIngredients.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchAllIngredients.fulfilled, (state, action) => {
      state.all = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchAllIngredients.rejected, (state, action) => {
      console.log('Error!!!', action);
    });
    builder.addCase(saveIngredient.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(saveIngredient.fulfilled, (state, action) => {
      state.all.push(action.payload);
      state.loading = false;
    });
    builder.addCase(saveIngredient.rejected, (state, action) => {
      console.log('Error saving the ingredient!!!', action);
    });
  },
});

export default ingredientSlice.reducer;
