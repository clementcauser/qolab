import styled from 'styled-components';
import { theme } from '../theme';

export const CardHeader = styled.header`
  display: flex;
  align-items: center;

  padding: ${theme.spacing.sm};

  border-top-left-radius: ${theme.borderRadius.lg};
  border-top-right-radius: ${theme.borderRadius.lg};

  border-bottom: ${theme.borderWeights.light} solid ${theme.colors.gray300};
`;

export default CardHeader;
