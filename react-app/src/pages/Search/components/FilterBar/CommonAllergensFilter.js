import { Heading, Tag, VStack, Wrap } from '@chakra-ui/react';
import React from 'react';
import useSearchSlice from '../../../../common/hooks/useSearchSlice';

const MOST_COMMON = [
  'Eggs',
  'Milk and Dairy',
  'Peanuts',
  'Tree nuts',
  'Fish',
  'Shellfish',
  'Wheat',
  'Soy',
  'Sesame',
];

const CommonAllergensFilter = () => {
  const { search, addAllergenSearch, removeAllergenSearch } = useSearchSlice();

  return (
    <VStack align="flex-start">
      <Heading size="sm" fontWeight={500}>
        9 Most Common Allergens
      </Heading>
      <Wrap>
        {MOST_COMMON.map(allergen => (
          <Tag
            onClick={() => {
              if (search?.allergens.includes(allergen.toLowerCase())) {
                console.log('has');
                removeAllergenSearch(allergen);
                return;
              }
              addAllergenSearch(allergen);
            }}
            key={allergen}
            variant="solid"
            backgroundColor={
              search?.allergens.includes(allergen.toLowerCase())
                ? 'gray.700'
                : 'gray.600'
            }
            borderRadius="full"
            _hover={{ backgroundColor: 'gray.700' }}
          >
            {allergen}
          </Tag>
        ))}
      </Wrap>
    </VStack>
  );
};

export default CommonAllergensFilter;
