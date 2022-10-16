import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './features/searchSlice';
import restaurantReducer from './features/restaurantSlice';

export default configureStore({
  reducer: {
    search: searchReducer,
    restaurant: restaurantReducer,
  },
});
