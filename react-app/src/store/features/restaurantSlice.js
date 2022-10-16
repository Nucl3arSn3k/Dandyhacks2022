import { createSlice } from '@reduxjs/toolkit';

const { v4: uuidv4 } = require('uuid');

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: {
    restaurants: [],
  },
  reducers: {
    // * Clear restaurants
    clearRestaurants: state => {
      state.restaurants = [];
    },
    // * Add single allergen string
    addRestaurant: (state, action) => {
      state.restaurants = [...state.restaurants, action.payload];
    },
    // * Add single allergen string
    removeRestaurant: (state, action) => {
      state.restaurants = state.restaurants.filter(
        restaurant => restaurant !== action.payload
      );
    },
  },
});

export const { addRestaurant, removeRestaurant, clearRestaurants } =
  restaurantSlice.actions;
export default restaurantSlice.reducer;
