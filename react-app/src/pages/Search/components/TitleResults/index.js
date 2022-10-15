import { Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import CurrentFilter from './CurrentFilter';

const TitleResults = () => {
  return (
    <VStack align="flex-start">
      <Heading>23 results</Heading>
      <CurrentFilter />
    </VStack>
  );
};

export default TitleResults;
