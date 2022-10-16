import { useColorModeValue } from '@chakra-ui/react';

const useConstrastColor = () => {
  const constrast = useColorModeValue('gray.200', 'gray.700');
  return { constrast };
};

export default useConstrastColor;
