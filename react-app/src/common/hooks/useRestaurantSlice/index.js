import { useSelector, useDispatch } from 'react-redux';
import {
  addRestaurant,
  clearRestaurants,
  removeRestaurant,
} from '../../../store/features/restaurantSlice';

const useRestaurantSlice = () => {
  const restaurant = useSelector(state => state.restaurant);
  const dispatch = useDispatch();

  const addRestaurantSearch = res => {
    if (restaurant.restaurants.length > 0) {
      if (
        restaurant.restaurants.filter(res2 => res2.id === res.id).length > 0
      ) {
        return;
      }
    }
    dispatch(addRestaurant(res));
  };

  const removeRestaurantSearch = res => {
    dispatch(removeRestaurant(res));
  };

  const clearRestaurantsSearch = res => {
    dispatch(clearRestaurants(res));
  };

  const getRestaurant = id => {
    const found = restaurant.restaurants.filter(res => res.id === id);
    if (found.length > 0) {
      return found[0];
    }
    return null;
  };

  const getRestaurantMenu = id => {
    const found = restaurant.restaurants.filter(res => res.id === id);
    if (found) {
      return found[0].menu;
    }
    return null;
  };

  return {
    restaurant,
    addRestaurantSearch,
    removeRestaurantSearch,
    getRestaurant,
    getRestaurantMenu,
    clearRestaurantsSearch,
  };
};

export default useRestaurantSlice;
