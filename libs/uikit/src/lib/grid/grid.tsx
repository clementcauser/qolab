import styled from 'styled-components';
import { theme } from '../theme';

export type GridProps = {
  noGutters?: boolean;
};

export const Grid = styled.div<GridProps>`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: ${({ noGutters }) => (noGutters ? 0 : theme.spacing[8])};
  grid-auto-flow: row;
`;

export default Grid;
