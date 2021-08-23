import { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// More info:
// - https://github.com/chakra-ui/chakra-ui/blob/main/tooling/cra-template/template/src/index.js
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
