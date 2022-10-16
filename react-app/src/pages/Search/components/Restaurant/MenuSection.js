import { Heading, VStack, Wrap } from '@chakra-ui/react';
import React from 'react';
import MenuItem from './MenuItem';

const MenuSection = ({ subTitle, items }) => {
  return (
    <VStack align="flex-start" w="100%">
      <Heading size="md">{subTitle}</Heading>
      <Wrap>
        {items?.map(food => (
          <MenuItem
            key={food.name}
            name={food.name}
            ingredients={food.ingredients}
            price={food.price}
          />
        ))}
      </Wrap>
    </VStack>
  );
};

export default MenuSection;
