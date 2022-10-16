import { useSelector, useDispatch } from 'react-redux';
import {
  addRestaurant,
  removeRestaurant,
} from '../../../store/features/restaurantSlice';

const useRestaurantSlice = () => {
  const restaurant = useSelector(state => state.restaurant);
  const dispatch = useDispatch();

  const addRestaurantSearch = res => {
    dispatch(addRestaurant(res.toLowerCase()));
  };

  const removeRestaurantSearch = res => {
    dispatch(removeRestaurant(res.toLowerCase()));
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
  };
};

export default useRestaurantSlice;
