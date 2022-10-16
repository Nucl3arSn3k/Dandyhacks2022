import {
  FormControl,
  FormLabel,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import useConstrastColor from '../../../../common/hooks/useConstrastColor';
import useGlobalAlert from '../../../../common/hooks/useGlobalAlert';
import useSearchSlice from '../../../../common/hooks/useSearchSlice';

const IngredientFilter = () => {
  const { globalAlert } = useGlobalAlert();
  const [allergen, setAllergen] = useState('');
  const { search, addAllergenSearch } = useSearchSlice();
  const { constrast } = useConstrastColor();

  const handleChange = event => {
    setAllergen(event.target.value);
  };

  const handleSubmitAllergen = event => {
    if (event.key === 'Enter') {
      // * Check duplicate allergens
      if (search.allergens.includes(event.target.value)) {
        globalAlert({ desc: 'Please do not enter duplicate values' });
        return;
      }
      addAllergenSearch(allergen);
      setAllergen('');
    }
  };

  return (
    <VStack w="100%" align="flex-start">
      <FormControl>
        <FormLabel>Add specific dietary restrictions</FormLabel>
        <InputGroup size="sm">
          <InputLeftElement
            size="sm"
            pointerEvents="none"
            children={<Icon as={FaSearch} />}
          />
          <Input
            type="tel"
            placeholder="Search ingredients..."
            onKeyDown={handleSubmitAllergen}
            onChange={handleChange}
            value={allergen}
            variant="filled"
            backgroundColor={constrast}
          />
        </InputGroup>
      </FormControl>
    </VStack>
  );
};

export default IngredientFilter;
