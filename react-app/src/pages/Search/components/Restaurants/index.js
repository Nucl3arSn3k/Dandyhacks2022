import { SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import useRestaurantSlice from '../../../../common/hooks/useRestaurantSlice';
import RestCard from './RestCard';

const Restaurants = () => {
  const { restaurant } = useRestaurantSlice();

  return (
    <SimpleGrid>
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
    </SimpleGrid>
  );
};

export default Restaurants;
