import { Box, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import CommonAllergensFilter from './CommonAllergensFilter';
import IngredientFilter from './IngredientFilter';
import useBackgroundColor from '../../../../common/hooks/useBackgroundColor';

const FilterBar = () => {
  const { bg } = useBackgroundColor();
  return (
    <Box w="300px" h="100vh" p={5} bg={bg}>
      <Heading size="lg" mb={5}>
        Filters
      </Heading>
      <VStack align="flex-start" spacing={10}>
        <IngredientFilter />
        <CommonAllergensFilter />
      </VStack>
    </Box>
  );
};

export default FilterBar;
