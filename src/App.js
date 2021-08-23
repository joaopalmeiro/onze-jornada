import { ChakraProvider } from '@chakra-ui/react';

import Eleven from './Eleven';

// More info:
// - https://chakra-ui.com/docs/getting-started#set-up-provider
// - https://github.com/chakra-ui/chakra-ui/blob/main/tooling/cra-template/template/src/App.js
function App() {
  return (
    <ChakraProvider>
      <Eleven />
    </ChakraProvider>
  );
}

export default App;
