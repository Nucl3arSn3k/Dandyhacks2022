import { Box, HStack } from '@chakra-ui/react';
import React from 'react';
import FilterBar from './components/FilterBar';
import TitleResults from './components/TitleResults';

const Search = () => {
  return (
    <HStack align="flex-start">
      <FilterBar />
      {/* Content */}
      <Box p={10}>
        <TitleResults />
      </Box>
    </HStack>
  );
};

export default Search;
