import { ReactNode } from 'react';
import styled from 'styled-components';

const SIZES = {
  small: '14px',
  medium: '24px',
  large: '48px',
};

export type IconProps = {
  color?: string;
  size?: 'small' | 'medium' | 'large';
};

type Props = {
  children: ReactNode;
  className?: string;
} & IconProps;

const Icon = ({ className, children }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      tabIndex={-1}
      aria-hidden
      viewBox="0 0 24 24"
      className={className}
    >
      {children}
    </svg>
  );
};

export default styled(Icon)<Props>`
  fill: ${({ color = '#111111' }) => color};
  height: ${({ size = 'medium' }) => SIZES[size]};
  width: ${({ size = 'medium' }) => SIZES[size]};
`;
