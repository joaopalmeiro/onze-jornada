import { ColorModeScript } from '@chakra-ui/react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import theme from './theme';

import './index.css';

// More info:
// - https://github.com/chakra-ui/chakra-ui/blob/main/tooling/cra-template/template/src/index.js
ReactDOM.render(
  <StrictMode>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <App />
  </StrictMode>,
  document.getElementById('root')
);
