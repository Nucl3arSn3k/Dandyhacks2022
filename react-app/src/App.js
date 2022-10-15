import React, { useEffect } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './setup/AppRouter';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </Provider>
    </ChakraProvider>
  );
}

export default App;
