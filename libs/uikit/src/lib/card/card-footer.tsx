import styled from 'styled-components';
import { theme } from '../theme';

export const CardFooter = styled.footer`
  display: flex;
  align-items: center;

  padding: ${theme.spacing.sm} ${theme.spacing.lg};

  border-bottom-left-radius: ${theme.borderRadius.lg};
  border-bottom-right-radius: ${theme.borderRadius.lg};

  border-top: ${theme.borderWeights.light} solid ${theme.colors.gray300};
`;

export default CardFooter;
