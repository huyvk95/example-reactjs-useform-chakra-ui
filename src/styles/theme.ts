import { extendTheme, theme as themeChakar } from '@chakra-ui/react';

import { colors } from './colors';
import { sizes } from './sizes';

const themeCustom = {
  ...themeChakar,
  sizes,
  colors: {
    ...themeChakar,
    ...colors,
  },
};

export const theme = extendTheme({
  ...themeCustom,
  styles: {
    global: {
      html: {
        fontSize: '16px',
      },
      body: {
        background: colors.background,
      },
    },
  },
});

type ThemeType = typeof themeCustom;
declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends ThemeType {}
}
