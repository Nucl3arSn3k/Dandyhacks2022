import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    allergens: [],
  },
  reducers: {
    // * Add single allergen string
    addAllergen: (state, action) => {
      state.allergens = [...state.allergens, action.payload];
    },
    // * Add single allergen string
    removeAllergen: (state, action) => {
      state.allergens = state.allergens.filter(
        allergen => allergen !== action.payload
      );
    },
  },
});

export const { addAllergen, removeAllergen } = searchSlice.actions;
export default searchSlice.reducer;
