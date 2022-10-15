import { useColorModeValue } from '@chakra-ui/react';

const useBrandColor = () => {
  const brandColor = useColorModeValue('green.500', 'green.500');
  return { brandColor };
};

export default useBrandColor;
