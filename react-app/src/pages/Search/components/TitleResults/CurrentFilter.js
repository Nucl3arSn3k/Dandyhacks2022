import {
  Heading,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
  VStack,
  Wrap,
} from '@chakra-ui/react';
import React from 'react';
import useBrandColor from '../../../../common/hooks/useBrandColor';
import useOffGrayColor from '../../../../common/hooks/useOffGrayColor';
import useSearchSlice from '../../../../common/hooks/useSearchSlice';

const CurrentFilter = () => {
  const { search, removeAllergenSearch } = useSearchSlice();
  const { offGray } = useOffGrayColor();
  const { brandColor } = useBrandColor();

  const handleRemoveAllergen = allergen => {
    removeAllergenSearch(allergen);
  };

  return (
    <VStack align="flex-start">
      <Heading size="sm">Current allergen filters</Heading>
      <Wrap>
        {search.allergens.length === 0 && (
          <Text as="i" fontSize="xs" color={offGray}>
            No current allergen filters selected.
          </Text>
        )}
        {search?.allergens.map(allergen => (
          <Tag
            size="lg"
            key={allergen}
            variant="solid"
            backgroundColor={brandColor}
            borderRadius="full"
          >
            <TagLabel>{allergen}</TagLabel>
            <TagCloseButton
              onClick={() => {
                handleRemoveAllergen(allergen);
              }}
            />
          </Tag>
        ))}
      </Wrap>
    </VStack>
  );
};

export default CurrentFilter;
