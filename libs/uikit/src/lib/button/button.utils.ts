import { css } from 'styled-components';
import { theme } from '../theme';
import { ButtonSize, ButtonStatus } from './types';

export const getButtonSizeProperties = (size?: ButtonSize) => {
  switch (size) {
    case 'mini':
      return css`
        padding-left: ${theme.spacing[3]};
        padding-right: ${theme.spacing[3]};
        height: ${theme.spacing[10]};
        line-height: ${theme.spacing[10]};
        width: auto;
        min-width: ${theme.spacing[18]};
        font-size: ${theme.fontSizes.tiny};
        border-radius: ${theme.borderRadius.xs};
      `;

    case 'small':
      return css`
        padding-left: ${theme.spacing[5]};
        padding-right: ${theme.spacing[5]};
        height: ${theme.spacing[12]};
        line-height: ${theme.spacing[14]};
        width: auto;
        min-width: ${theme.spacing[24]};
        font-size: ${theme.fontSizes.xs};
        border-radius: ${theme.borderRadius.sm};
      `;

    case 'large':
      return css`
        padding-left: ${theme.spacing[9]};
        padding-right: ${theme.spacing[9]};
        height: ${theme.spacing[15]};
        line-height: ${theme.spacing[15]};
        width: auto;
        min-width: ${theme.spacing[48]};
        font-size: ${theme.fontSizes.base};
        border-radius: ${theme.borderRadius.base};
      `;

    case 'medium':
    default:
      return css`
        padding-left: ${theme.spacing[7]};
        padding-right: ${theme.spacing[7]};
        height: ${theme.spacing[14]};
        line-height: ${theme.spacing[14]};
        width: auto;
        min-width: ${theme.spacing[36]};
        font-size: ${theme.fontSizes.xs};
        border-radius: ${theme.borderRadius.md};
      `;
  }
};

export const getButtonStatus = (status?: ButtonStatus) => {
  switch (status) {
    case 'secondary':
      return {
        color: theme.colors.secondary500,
        accent: theme.colors.white,
        shadow: theme.colors.secondary300,
      };

    case 'info':
      return {
        color: theme.colors.info500,
        accent: theme.colors.white,
        shadow: theme.colors.info300,
      };

    case 'success':
      return {
        color: theme.colors.success500,
        accent: theme.colors.white,
        shadow: theme.colors.success300,
      };

    case 'warning':
      return {
        color: theme.colors.warning500,
        accent: theme.colors.gray900,
        shadow: theme.colors.warning300,
      };

    case 'danger':
      return {
        color: theme.colors.danger500,
        accent: theme.colors.white,
        shadow: theme.colors.danger300,
      };

    case 'primary':
    default:
      return {
        color: theme.colors.primary500,
        accent: theme.colors.white,
        shadow: theme.colors.primary300,
      };
  }
};
