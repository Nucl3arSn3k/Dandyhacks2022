import { Box, Divider, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import CommonAllergensFilter from './CommonAllergensFilter';
import IngredientFilter from './IngredientFilter';
import useBackgroundColor from '../../../../common/hooks/useBackgroundColor';

const FilterBar = () => {
  return (
    <Box w="300px" minHeight="100vh" p={5} pos={'fixed'}>
      <Heading size="lg" mb={5}>
        Filters
      </Heading>
      <Divider mb={10} />
      <VStack align="flex-start" spacing={10}>
        <IngredientFilter />
        <CommonAllergensFilter />
      </VStack>
    </Box>
  );
};

export default FilterBar;
