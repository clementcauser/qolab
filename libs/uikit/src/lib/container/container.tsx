import styled from 'styled-components';
import { theme } from '../theme';

export type ContainerProps = {
  fluid?: boolean;
};

export const Container = styled.div<ContainerProps>`
  width: 100%;
  margin-right: auto;
  margin-left: auto;

  ${({ fluid }) =>
    fluid
      ? 'max-width: 100%'
      : `
  padding-left: calc(2 * ${theme.spacing.sm});
  padding-right: calc(2 * ${theme.spacing.sm});
  
  @media (min-width: ${theme.breakpoints.xs}) {
    max-width: ${theme.breakpoints.xs};
  }

  @media (min-width: ${theme.breakpoints.sm}) {
    max-width: ${theme.breakpoints.sm};
  }

  @media (min-width: ${theme.breakpoints.md}) {
    max-width: ${theme.breakpoints.md};
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    max-width: ${theme.breakpoints.lg};
  }

  @media (min-width: ${theme.breakpoints.lg}) {
    max-width: ${theme.breakpoints.lg};
  }`}
`;

export default Container;
