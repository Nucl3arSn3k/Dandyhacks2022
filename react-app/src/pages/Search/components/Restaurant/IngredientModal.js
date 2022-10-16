import {
  Box,
  Button,
  Divider,
  Highlight,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { colorScheme } from '../../../../setup/theme/constants';
import useSearchSlice from '../../../../common/hooks/useSearchSlice';
import useBrandColor from '../../../../common/hooks/useBrandColor';
import useBGColor from '../../../../common/hooks/useBGFont';
import useOffGrayColor from '../../../../common/hooks/useOffGrayColor';
import { titleCase } from '../../../../common/utils/utils';
const IngredientModal = ({ isOpen, onClose, name, ingredients }) => {
  const { search } = useSearchSlice();
  const { brandColor } = useBrandColor();
  const { bgFont } = useBGColor();
  const { offColor } = useOffGrayColor();

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {titleCase(name)} ingredients
          <Text fontSize="sm" py={3} color={offColor}>
            Potential allergens are{' '}
            <Text
              as="span"
              px="2"
              py="1"
              rounded="full"
              bg={brandColor}
              color={bgFont}
            >
              highlighted
            </Text>
          </Text>
          <Divider />
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box maxH={300} overflowY="auto">
            <Highlight
              query={search?.allergens}
              styles={{
                px: '2',
                py: '1',
                rounded: 'full',
                bg: brandColor,
                color: bgFont,
              }}
            >
              {ingredients.join(', ')}
            </Highlight>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Button mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default IngredientModal;
