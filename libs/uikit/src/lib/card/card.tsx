import { ReactNode } from 'react';
import styled from 'styled-components';
import Text from '../text/text';
import { theme } from '../theme';
import CardFooter from './card-footer';
import CardHeader from './card-header';

export type CardProps = {
  bordered?: boolean;
  title?: string;
  footer?: ReactNode;
  children: ReactNode;
  className?: string;
};

export const Card = styled(
  ({ footer, title, children, className }: CardProps) => (
    <article className={className}>
      {title && (
        <CardHeader>
          <Text variant="h4">{title}</Text>
        </CardHeader>
      )}
      <div className="card-content">{children}</div>
      {footer && <CardFooter>{footer}</CardFooter>}
    </article>
  )
)`
  margin: 0px;
  background-color: ${theme.colors.background};
  border-radius: ${theme.borderRadius.lg};
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  box-shadow: ${theme.shadows.md};

  ${({ footer, title }) => {
    return !footer && !title
      ? `padding: ${theme.spacing.sm} ${theme.spacing.lg};`
      : `
      & .card-content {
        padding: ${theme.spacing.sm} ${theme.spacing.lg};
      }`;
  }}

  ${({ bordered = false }) => `
    border: ${theme.borderWeights.normal} solid ${
    theme.colors[bordered ? 'gray300' : 'background']
  }
  `}

  background-color: ${theme.colors.background};
`;

export default Card;
