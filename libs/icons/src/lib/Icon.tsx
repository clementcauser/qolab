import { styled } from '@nextui-org/react';
import { ReactNode } from 'react';

const IconContainer = styled('svg');

const SIZES = {
  small: '16px',
  medium: '24px',
  large: '48px',
};

export type IconProps = {
  color?: string;
  size?: 'small' | 'medium' | 'large';
};

type Props = {
  children: ReactNode;
} & IconProps;

const Icon = ({ color = '#000', size = 'medium', children }: Props) => {
  return (
    <IconContainer
      xmlns="http://www.w3.org/2000/svg"
      tabIndex={-1}
      aria-hidden
      viewBox="0 0 24 24"
      css={{ height: SIZES[size], width: SIZES[size], fill: color }}
    >
      {children}
    </IconContainer>
  );
};

export default Icon;
