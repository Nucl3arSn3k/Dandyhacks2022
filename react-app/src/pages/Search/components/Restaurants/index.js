import { Flex, SimpleGrid, Text, Wrap } from '@chakra-ui/react';
import React from 'react';
import useRestaurantSlice from '../../../../common/hooks/useRestaurantSlice';
import RestCard from './RestCard';

const Restaurants = () => {
  const { restaurant } = useRestaurantSlice();

  return (
    <>
      {restaurant?.restaurants.length === 0 && (
        <Flex h="50vh" justify="center" align="center" w="100%">
          <Text>No restaurants found</Text>
        </Flex>
      )}
      <Wrap>
        {restaurant?.restaurants.map(res => (
          <RestCard
            key={res.id}
            name={res.name}
            img={res.img}
            phone={res.phone}
            address={res.address}
            cuisine={res.cuisine}
            price={res.price}
            rating={res.rating}
            id={res.id}
          />
        ))}
      </Wrap>
    </>
  );
};

export default Restaurants;
