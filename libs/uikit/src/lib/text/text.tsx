import styled from 'styled-components';
import { theme } from '../theme';
import { getTextColorByStatus, getTextPropertiesBySize } from './text.utils';
import { TextSize, TextStatus } from './types';

export type TextProps = {
  size?: TextSize;
  status?: TextStatus;
};

export const Text = styled.p<TextProps>`
  font-family: ${theme.fonts.sans};

  ${({ size }) => getTextPropertiesBySize(size)}
  ${({ status }) => getTextColorByStatus(status)}

  margin: inherit;
  text-transform: none;

  text-rendering: geometricprecision;
`;

export default Text;
