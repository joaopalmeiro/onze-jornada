import { extendTheme } from '@chakra-ui/react';

// More info:
// - https://chakra-ui.com/docs/features/color-mode
// - https://chakra-ui.com/docs/getting-started#chakraprovider-props
// - https://chakra-ui.com/docs/features/color-mode#for-create-react-app
// - https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/index.ts
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false
};

// 3. extend the theme
const theme = extendTheme({ config });

export default theme;
