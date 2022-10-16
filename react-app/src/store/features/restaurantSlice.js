import { createSlice } from '@reduxjs/toolkit';

const { v4: uuidv4 } = require('uuid');

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: {
    restaurants: [
      {
        name: 'My restuarant',
        id: '123',
        img: 'https://placekitten.com/200/300',
        phone: 1231231234,
        address: '123 test drive',
        cuisine: 'Fast food',
        price: '',
        rating: 3,
        menu: [
          {
            subTitle: 'Dinner',
            items: [
              {
                name: 'Pizza',
                price: 100,
                ingredients: ['shellfish', 'pizza', 'tomato', 'cream'],
              },
              {
                name: 'Calzone',
                price: 120,
                ingredients: ['shellfish', 'pizza'],
              },
              {
                name: 'Popcorn',
                price: 120,
                ingredients: ['shellfish', 'pizza'],
              },
            ],
          },
          {
            subTitle: 'Drink',
            items: [
              {
                name: 'Water',
                price: 100,
                ingredients: [],
              },
              {
                name: 'Soda',
                price: 120,
                ingredients: ['shellfish', 'pizza'],
              },
            ],
          },
        ],
      },
    ],
  },
  reducers: {
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

export const { addRestaurant, removeRestaurant } = restaurantSlice.actions;
export default restaurantSlice.reducer;
