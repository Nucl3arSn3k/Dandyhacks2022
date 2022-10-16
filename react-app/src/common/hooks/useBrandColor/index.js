import { useColorModeValue } from '@chakra-ui/react';

const useBrandColor = () => {
  const brandColor = useColorModeValue('green.500', 'green.200');
  return { brandColor };
};

export default useBrandColor;
