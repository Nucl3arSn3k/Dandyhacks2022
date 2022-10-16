import {
  Box,
  Heading,
  HStack,
  Icon,
  Image,
  useColorMode,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import useOffGrayColor from '../../../../common/hooks/useOffGrayColor';
import useBrandColor from '../../../../common/hooks/useBrandColor';
import { FaCircle } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import useSearchSlice from '../../../../common/hooks/useSearchSlice';
import StarRating from '../StarRating';

const RestCard = ({ name, img, address, cuisine, rating, id }) => {
  const { offGray } = useOffGrayColor();
  const { brandColor } = useBrandColor();
  const navigate = useNavigate();
  const { search } = useSearchSlice();
  const queryString = require('query-string');

  return (
    <VStack
      w={300}
      h={200}
      p={2}
      align="flex-start"
      _hover={{
        cursor: 'pointer',
        transform: 'scale(1.01)',
        transition: 'transform 330ms ease-in-out',
      }}
      onClick={() => {
        // * Query the restaurant / it's menu items here
        const allResInfo = {
          allergens: search.allergens,
          name,
          id,
        };
        const encodedURL = queryString.stringify(allResInfo, {
          arrayFormat: 'bracket',
        });
        const decoded = queryString.parse(encodedURL, {
          arrayFormat: 'bracket',
        });
        navigate(`/search/restaurant/${encodedURL}`);
      }}
    >
      <Image
        src={img}
        alt={name}
        w="100%"
        height="150px"
        objectFit="cover"
        borderRadius={5}
      ></Image>
      {/* Name */}
      <Heading fontSize="md" fontWeight={800}>
        {name}
      </Heading>
      {/* Address, cuisine */}
      <HStack pos="relative" color={offGray}>
        <Box>{address}</Box>
        <Box pos="relative" bottom={1}>
          <Icon fontSize="3px" as={FaCircle} />
        </Box>
        <Box>{cuisine}</Box>
      </HStack>
      {/* Rating */}
      <StarRating rating={rating} />
    </VStack>
  );
};

export default RestCard;
