import { useColorModeValue } from '@chakra-ui/react';

const useBGColor = () => {
  const bgFont = useColorModeValue('gray.50', 'gray.900');
  return { bgFont };
};

export default useBGColor;
