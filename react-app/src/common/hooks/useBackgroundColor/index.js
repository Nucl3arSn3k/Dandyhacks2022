import { useColorModeValue } from '@chakra-ui/react';

const useBackgroundColor = () => {
  const bg = useColorModeValue('gray.50', 'gray.900');
  return { bg };
};

export default useBackgroundColor;
