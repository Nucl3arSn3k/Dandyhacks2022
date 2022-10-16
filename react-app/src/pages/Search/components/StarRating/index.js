import { HStack, Icon } from '@chakra-ui/react';
import React from 'react';
import { FaStar } from 'react-icons/fa';
import useBrandColor from '../../../../common/hooks/useBrandColor';

const StarRating = ({ rating }) => {
  const { brandColor } = useBrandColor();

  return (
    <HStack justify="flex-start">
      {Array(rating)
        .fill(1)
        .map(i => (
          <Icon as={FaStar} color={brandColor} key={Math.random()} />
        ))}
    </HStack>
  );
};

export default StarRating;
