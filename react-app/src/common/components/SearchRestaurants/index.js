import { Search2Icon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { collection, getDocs, limit, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../../../firebase';
import useRestaurantSlice from '../../hooks/useRestaurantSlice';
import { titleCase } from '../../utils/utils';

const SearchRestaurants = ({ setLoading }) => {
  const { addRestaurantSearch, clearRestaurantsSearch } = useRestaurantSlice();
  const [input, setInput] = useState('');

  const addDocsRestaurant = data => {
    data.docs.forEach(res => {
      console.log(res.data()?.id);
      addRestaurantSearch({
        name: titleCase(res.data()?.restaurant_name),
        id: res.id,
        img: 'https://placekitten.com/200/300',
        phone: res.data()?.restaurant_phone,
        address: res.data()?.restaurant_address,
        cuisine: titleCase(res.data()?.restaurant_cuisine),
        price: '',
        rating: 3,
      });
    });
  };

  const fetchQueryName = async () => {
    if (input.length > 0) {
      const colRef = collection(db, 'restaurants_info');
      const q = query(
        colRef,
        limit(50),
        where('restaurant_name', '>=', input.toLowerCase()),
        where('restaurant_name', '<=', input.toLowerCase() + '\uf8ff')
      );
      const data = await getDocs(q);
      addDocsRestaurant(data);
    }
  };

  const initFetch = async () => {
    // setLoading(true);
    const colRef = collection(db, 'restaurants_info');
    const q = query(colRef, limit(50));
    const data = await getDocs(q);
    addDocsRestaurant(data);
  };

  const fetchQueryCuisine = async () => {
    const colRef = collection(db, 'restaurants_info');
    const q = query(
      colRef,
      limit(50),
      where('restaurant_cuisine', '>=', input.toLowerCase()),
      where('restaurant_cuisine', '<=', input.toLowerCase() + '\uf8ff')
    );
    const data = await getDocs(q);
    addDocsRestaurant(data);
  };

  useEffect(() => {
    if (input.length > 0) {
      clearRestaurantsSearch();
      fetchQueryName();
      fetchQueryCuisine();
      return;
    }
    // setLoading(false);
    initFetch();
  }, [input]);

  const querySearch = async event => {
    setInput(event.target.value);
  };

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" children={<Search2Icon />} />
      <Input
        value={input}
        type="tel"
        placeholder="Search cuisine, restaurants, dish..."
        variant="filled"
        onChange={querySearch}
      />
    </InputGroup>
  );
};

export default SearchRestaurants;
