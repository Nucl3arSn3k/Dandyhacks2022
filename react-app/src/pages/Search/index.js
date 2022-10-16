import {
  Box,
  Flex,
  Heading,
  HStack,
  Spinner,
  Text,
  useStatStyles,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import FilterBar from './components/FilterBar';
import Restaurants from './components/Restaurants';
import TitleResults from './components/TitleResults';
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../../firebase';
import { limit, query } from 'firebase/firestore';
import useRestaurantSlice from '../../common/hooks/useRestaurantSlice';
import SearchRestaurants from '../../common/components/SearchRestaurants';
import { titleCase } from '../../common/utils/utils';

const Search = () => {
  const [loading, setLoading] = useState(false);

  return (
    <HStack align="flex-start">
      <FilterBar />
      {/* Content */}
      <VStack w="100%" align="flex-start" p={10} spacing={10} pl={300}>
        {!loading ? (
          <>
            <VStack w="100%" align="flex-start">
              <Heading size="2xl" pb={5}>
                Search Rochester
              </Heading>
              <SearchRestaurants setLoading={setLoading} />
            </VStack>
            <TitleResults />
            <Restaurants />
          </>
        ) : (
          <Flex w="100%" h="100vh" justify="center" align="center">
            <Spinner size="xl" />
          </Flex>
        )}
      </VStack>
    </HStack>
  );
};

export default Search;
