import { Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import useRestaurantSlice from '../../../../common/hooks/useRestaurantSlice';
import CurrentFilter from '../CurrentFilter';

const TitleResults = () => {
  const { restaurant } = useRestaurantSlice();

  const resCount =
    restaurant?.restaurants.length > 0 ? restaurant?.restaurants.length : 0;

  return (
    <VStack align="flex-start">
      <Heading>{resCount} results</Heading>
      <CurrentFilter />
    </VStack>
  );
};

export default TitleResults;
