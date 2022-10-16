import { SimpleGrid, Wrap } from '@chakra-ui/react';
import React from 'react';
import MenuItem from './MenuItem';

const MenuSection = ({ subTitle, items }) => {
  return (
    <SimpleGrid columns={3} w="100%" spacing={10}>
      {items?.map(food => (
        <MenuItem
          key={food.name}
          name={food.name}
          ingredients={food.ingredients}
          price={food.price}
        />
      ))}
    </SimpleGrid>
  );
};

export default MenuSection;
