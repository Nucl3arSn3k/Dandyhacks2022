import { useSelector, useDispatch } from 'react-redux';
import {
  addAllergen,
  removeAllergen,
} from '../../../store/features/searchSlice';

const useSearchSlice = () => {
  const search = useSelector(state => state.search);
  const dispatch = useDispatch();

  const addAllergenSearch = allergen => {
    dispatch(addAllergen(allergen.toLowerCase()));
  };

  const removeAllergenSearch = allergen => {
    dispatch(removeAllergen(allergen.toLowerCase()));
  };

  return { search, addAllergenSearch, removeAllergenSearch };
};

export default useSearchSlice;
