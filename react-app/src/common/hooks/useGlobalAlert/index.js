import { useToast } from '@chakra-ui/react';

const useGlobalAlert = () => {
  const toast = useToast();

  const globalAlert = ({ title, desc, status }) => {
    toast({
      title: title ? title : 'Error',
      position: 'top',
      description: desc,
      status: status ? status : 'error',
      duration: 5000,
      isClosable: true,
    });
  };

  return {
    globalAlert,
  };
};

export default useGlobalAlert;
