import { useColorModeValue } from '@chakra-ui/react';

const useOffGrayColor = () => {
  const offGray = useColorModeValue('gray.500', 'gray.300');
  return { offGray };
};

export default useOffGrayColor;
