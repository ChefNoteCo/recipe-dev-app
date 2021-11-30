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
  },
});

export default ingredientSlice.reducer;
