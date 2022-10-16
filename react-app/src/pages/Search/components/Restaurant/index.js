import {
  Box,
  Divider,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { FaCircle } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import useOffGrayColor from '../../../../common/hooks/useOffGrayColor';
import useRestaurantSlice from '../../../../common/hooks/useRestaurantSlice';
import { titleCase } from '../../../../common/utils/utils';
import { db } from '../../../../firebase';
import CurrentFilter from '../CurrentFilter';
import FilterBar from '../FilterBar';
import StarRating from '../StarRating';
import MenuSection from './MenuSection';

const queryString = require('query-string');

const Restaurant = () => {
  const params = useParams();
  const [curRes, setCurRes] = useState(null);
  const { offGray } = useOffGrayColor();

  const fetch = async () => {
    // * Get res ID & name from query & cur filtering allergens
    const queryURL = queryString.parse(params.search, {
      arrayFormat: 'bracket',
    });

    const colRef = collection(db, 'restaurants_menu');
    const q = query(colRef, where('id', '==', queryURL.id));
    const data = await getDocs(q);

    data.docs.forEach(res => {
      console.log(res.data()?.restaurant_menu);
      setCurRes({
        name: res.data()?.restaurant_name,
        id: res.id,
        img: 'https://placekitten.com/200/300',
        phone: res.data()?.restaurant_phone,
        address: res.data()?.restaurant_address,
        cuisine: res.data()?.restaurant_cuisine,
        price: '',
        rating: 3,
        menu: [{ subTitle: 'temp', items: res.data()?.restaurant_menu }],
      });
    });
  };

  useEffect(() => {
    fetch();
    // // * Make query here to get menu items, then set it in the restaurant menu
    // setCurRes(getRestaurant(query.id));
  }, [params.search]);

  return (
    <>
      {curRes && (
        <HStack w="100vw" align="flex-start" spacing={0}>
          {/* TODO: make filter bar a wrapper */}
          <FilterBar />
          <VStack w="100%" align="flex-start" h="100%" pl={300}>
            {/* Image */}
            <Box w="100%" height={150} overflow="hidden">
              <Image
                w="100%"
                h="100%"
                src={curRes?.img}
                objectFit="cover"
                m="-5px -10px -10px -5px"
                style={{
                  filter: 'blur(5px)',
                  webkitFilter: 'blur(5px)',
                  mozFilter: 'blur(5px)',
                  oFilter: 'blur(5px)',
                  msFilter: 'blur(5px)',
                }}
                transform="scale(1.3)"
              />
            </Box>
            {/* Contents */}
            <VStack p={10} align="flex-start" spacing={10} w="100%">
              {/* Res Heading */}
              <VStack align="flex-start" w="100%">
                <Heading size="2xl">{titleCase(curRes?.name)}</Heading>
                {/* Address, cuisine, phone number */}
                <HStack pos="relative" color={offGray}>
                  <Box>{curRes?.address}</Box>
                  <Box pos="relative" bottom={1}>
                    <Icon fontSize="3px" as={FaCircle} />
                  </Box>
                  <Box>{titleCase(curRes?.cuisine)}</Box>
                  <Box pos="relative" bottom={1}>
                    <Icon fontSize="3px" as={FaCircle} />
                  </Box>
                  <Box>{curRes?.phone}</Box>
                </HStack>
                {/* Stars */}
                {/* <StarRating rating={curRes?.rating} size="lg" /> */}
              </VStack>
              {/* Menu items */}
              <VStack align="flex-start" spacing={10} w="100%">
                {/* Heading */}
                <VStack align="flex-start" w="100%" spacing={5}>
                  <Heading size="lg">Full menu</Heading>
                  <Divider />
                  <CurrentFilter />
                  <Divider />
                </VStack>
                {/* Menu sections */}
                {curRes?.menu.map(subMenu => (
                  <MenuSection
                    subTitle={subMenu.subTitle}
                    items={subMenu.items}
                    key={subMenu.subTitle}
                  />
                ))}
              </VStack>
            </VStack>
          </VStack>
        </HStack>
      )}
    </>
  );
};

export default Restaurant;
