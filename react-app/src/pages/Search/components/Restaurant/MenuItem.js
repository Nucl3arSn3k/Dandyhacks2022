import React from 'react';
import useOffGrayColor from '../../../../common/hooks/useOffGrayColor';
import IngredientModal from './IngredientModal';
import useSearchSlice from '../../../../common/hooks/useSearchSlice';
import useBrandColor from '../../../../common/hooks/useBrandColor';
import {
  Button,
  Divider,
  Heading,
  HStack,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { colorScheme } from '../../../../setup/theme/constants';
import { WarningIcon } from '@chakra-ui/icons';

const MenuItem = ({ name, price, ingredients }) => {
  const { offGray } = useOffGrayColor();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { search } = useSearchSlice();
  const { brandColor } = useBrandColor();
  const bgColor = useColorModeValue('gray.50', 'gray.900');

  const hasAllergen =
    search.allergens.filter(element => ingredients.includes(element)).length >
    0;

  return (
    <>
      <IngredientModal
        isOpen={isOpen}
        onClose={onClose}
        name={name}
        ingredients={ingredients}
      />
      <VStack
        h={140}
        w={325}
        py={5}
        px={10}
        justify="center"
        align="flex-start"
        bg={bgColor}
      >
        {/* Allergen alert */}
        {hasAllergen && (
          <HStack color={brandColor}>
            <WarningIcon fontSize="12px" />
            <Text fontSize="xs">Potential allergen detected</Text>
          </HStack>
        )}
        <HStack justify="space-between" w="100%">
          <Heading size="sm">{name}</Heading>
          <Text color={offGray}>{price}</Text>
        </HStack>
        <Divider />
        <Text fontSize="xs" fontWeight={700}>
          Expected ingredients
        </Text>
        <HStack justify="flex-start" w="100%" align="center">
          {/* If no ingredients found */}
          {ingredients.length === 0 && (
            <Text color={offGray} fontSize="xs">
              No expected ingredients found
            </Text>
          )}
          {/* If array is longer than 2 */}
          {ingredients.length > 2 ? (
            <HStack>
              <Text fontSize="xs" color={offGray}>
                {ingredients.slice(0, 2).join(', ')}
              </Text>
              <Button
                size="xs"
                colorScheme={colorScheme}
                onClick={() => {
                  onOpen();
                }}
              >
                See more
              </Button>
            </HStack>
          ) : (
            <Text fontSize="xs" color={offGray}>
              {ingredients.join(', ')}
            </Text>
          )}
        </HStack>
      </VStack>
    </>
  );
};

export default MenuItem;
