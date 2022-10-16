import { Search2Icon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React from 'react';

const SearchRestaurants = () => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" children={<Search2Icon />} />
      <Input
        type="tel"
        placeholder="Search cuisine, restaurants, dish..."
        variant="filled"
      />
    </InputGroup>
  );
};

export default SearchRestaurants;
