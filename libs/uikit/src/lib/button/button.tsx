import styled, { css } from 'styled-components';
import { theme } from '../theme';
import { getButtonSizeProperties, getButtonStatus } from './button.utils';
import { ButtonSize, ButtonStatus } from './types';
import Icon from '@qolab/icons';
import { ReactNode, ComponentPropsWithoutRef, forwardRef } from 'react';

export type ButtonProps = {
  size?: ButtonSize;
  status?: ButtonStatus;
  rounded?: boolean;
  outlined?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  children?: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<'button'>;

export const Button = styled(
  forwardRef<HTMLButtonElement, ButtonProps>(
    ({ iconLeft, children, iconRight, className, ...props }, ref) => (
      <button type="button" {...props} ref={ref} className={className}>
        {iconLeft}
        {children && <span>{children}</span>}
        {iconRight}
      </button>
    )
  )
)`
  display: flex;
  justify-content: center;
  align-items: center;
  appearance: none;
  box-sizing: border-box;

  font-weight: ${theme.fontWeights.medium};
  text-align: center;
  white-space: nowrap;

  ${({ size }) => getButtonSizeProperties(size)}
  ${({ status, outlined }) => {
    const { accent, color, shadow } = getButtonStatus(status);

    if (outlined) {
      return css`
        background-color: ${theme.colors.background};
        color: ${color};
        border: ${theme.borderWeights.normal} solid ${color};
        box-shadow: 0;

        ${Icon} {
          fill: ${color};
        }

        &:hover {
          box-shadow: 0 2px 8px 0 ${shadow};
        }
      `;
    } else {
      return css`
        background-color: ${color};
        color: ${accent};
        border: ${theme.borderWeights.normal} solid ${color};
        box-shadow: 0 4px 14px 0 ${shadow};

        ${Icon} {
          fill: ${accent};
        }

        &:hover {
          box-shadow: 0 2px 8px 0 ${shadow};
        }
      `;
    }
  }}

  outline: currentcolor none medium;
  border-width: ${theme.borderWeights.normal};

  ${({ rounded = false }) =>
    rounded && `border-radius: ${theme.borderRadius.pill};`}

  & > span {
    ${({ iconLeft }) =>
      iconLeft !== undefined && `margin-left: ${theme.spacing.sm};`}
    ${({ iconRight }) =>
      iconRight !== undefined && `margin-right: ${theme.spacing.sm};`}
  }

  &:active {
    transform: scale(0.97);
  }

  cursor: pointer;
  transition: all 0.2s;

  &:disabled {
    background-color: ${theme.colors.gray100};
    border: ${theme.borderWeights.normal} solid ${theme.colors.gray100};
    color: ${theme.colors.gray700};
    transform: none;
    box-shadow: none;
    pointer-events: none;
  }
`;

export default Button;
