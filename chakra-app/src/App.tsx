import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Base from './layout/Base';

function App() {
  return (
    <ChakraProvider>
      <Base />
    </ChakraProvider>
  );
}

export default App;
