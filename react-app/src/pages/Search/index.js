import { HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import FilterBar from './components/FilterBar';
import Restaurants from './components/Restaurants';
import SearchRestaurants from '../../common/components/SearchRestaurants';
import TitleResults from './components/TitleResults';

const Search = () => {
  return (
    <HStack align="flex-start">
      <FilterBar />
      {/* Content */}
      <VStack w="100%" align="flex-start" p={10} spacing={10} pl={300}>
        <TitleResults />
        <Restaurants />
      </VStack>
    </HStack>
  );
};

export default Search;
