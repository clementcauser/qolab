import { css } from 'styled-components';
import { theme } from '../theme';
import { TextVariant, TextStatus } from './types';

export const getTextPropertiesByVariant = (variant?: TextVariant) => {
  switch (variant) {
    case 'h1':
      return css`
        letter-spacing: ${theme.letterSpacings.tighter};
        line-height: ${theme.lineHeights.md};
        font-size: ${theme.fontSizes.xl};
        font-weight: ${theme.fontWeights.bold};
      `;

    case 'h2':
      return css`
        letter-spacing: ${theme.letterSpacings.tighter};
        font-size: ${theme.fontSizes.lg};
        font-weight: ${theme.fontWeights.semibold};
      `;

    case 'h3':
      return css`
        letter-spacing: ${theme.letterSpacings.tighter};
        font-size: ${theme.fontSizes.md};
        font-weight: ${theme.fontWeights.semibold};
      `;

    case 'h4':
      return css`
        letter-spacing: ${theme.letterSpacings.tighter};
        font-size: ${theme.fontSizes.sm};
        font-weight: ${theme.fontWeights.semibold};
      `;

    case 'h5':
      return css`
        letter-spacing: ${theme.letterSpacings.tight};
        font-size: ${theme.fontSizes.base};
        font-weight: ${theme.fontWeights.semibold};
      `;

    case 'h6':
      return css`
        letter-spacing: ${theme.letterSpacings.tight};
        font-size: ${theme.fontSizes.xs};
        font-weight: ${theme.fontWeights.semibold};
      `;

    case 'link':
      return css`
        cursor: pointer;
        font-size: ${theme.fontSizes.base};
        color: ${theme.colors.link};
        text-decoration: none;
      `;

    default:
    case 'p':
      return css`
        letter-spacing: ${theme.letterSpacings.tighter};
        font-size: ${theme.fontSizes.base};
        line-height: ${theme.lineHeights.lg};
      `;
  }
};

export const getTextColorByStatus = (status?: TextStatus) => {
  switch (status) {
    case 'primary':
      return css`
        color: ${theme.colors.primary500};
      `;

    case 'secondary':
      return css`
        color: ${theme.colors.secondary500};
      `;

    case 'info':
      return css`
        color: ${theme.colors.info500};
      `;

    case 'success':
      return css`
        color: ${theme.colors.success500};
      `;

    case 'warning':
      return css`
        color: ${theme.colors.warning500};
      `;

    case 'danger':
      return css`
        color: ${theme.colors.danger500};
      `;

    case 'accent':
      return css`
        color: ${theme.colors.textAccent};
      `;

    default:
    case 'base':
      return css`
        color: ${theme.colors.text};
      `;
  }
};
