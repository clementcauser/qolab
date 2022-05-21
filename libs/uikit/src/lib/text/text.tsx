import styled from 'styled-components';
import { theme } from '../theme';
import { getTextColorByStatus, getTextPropertiesByVariant } from './text.utils';
import { TextVariant, TextStatus, TextWeight, TextAlign } from './types';

export type TextProps = {
  variant?: TextVariant;
  status?: TextStatus;
  weight?: TextWeight;
  align?: TextAlign;
};

export const Text = styled.p<TextProps>`
  font-family: ${theme.fonts.sans};

  ${({ status }) => getTextColorByStatus(status)}
  ${({ variant }) => getTextPropertiesByVariant(variant)}
  
  margin: 0;
  text-transform: none;

  text-rendering: geometricprecision;

  ${({ weight }) => weight && `font-weight: ${theme.fontWeights[weight]};`}
  ${({ align }) => align && `text-align: ${align};`}
`;

export default Text;
