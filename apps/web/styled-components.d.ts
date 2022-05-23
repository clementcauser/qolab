import {} from 'styled-components';
import { theme } from '@qolab/uikit';

declare module 'styled-components' {
  type Theme = typeof theme;
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
