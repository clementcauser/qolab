import styled from 'styled-components';
import { theme } from '../theme';
import { getTextColorByStatus, getTextPropertiesByVariant } from './text.utils';
import { TextVariant, TextStatus } from './types';

export type TextProps = {
  variant?: TextVariant;
  status?: TextStatus;
};

export const Text = styled.p<TextProps>`
  font-family: ${theme.fonts.sans};

  ${({ status }) => getTextColorByStatus(status)}
  ${({ variant }) => getTextPropertiesByVariant(variant)}

  margin: inherit;
  text-transform: none;

  text-rendering: geometricprecision;
`;

export default Text;
