import styled from 'styled-components';
import { theme } from '../theme';
import { GridColumnOffsetSize, GridColumnSize } from './types';

type ColumnProps = {
  xs?: GridColumnSize;
  sm?: GridColumnSize;
  md?: GridColumnSize;
  lg?: GridColumnSize;
  xl?: GridColumnSize;
  start?: GridColumnOffsetSize;
};

export const GridColumn = styled.div<ColumnProps>`
  min-width: 0;

  grid-column: ${({ start = 0, xs }) =>
    start ? `${start + 1} / span ${xs}` : `span ${xs}`};

  ${({ start = 0, sm }) =>
    sm !== undefined &&
    `@media (min-width: ${theme.breakpoints.sm}) {
    grid-column: ${start ? `${start + 1} / span ${sm}` : `span ${sm}`}
  }`}

  ${({ start = 0, md }) =>
    md !== undefined &&
    `@media (min-width: ${theme.breakpoints.md}) {
    grid-column: ${start ? `${start + 1} / span ${md}` : `span ${md}`}
  }`}

${({ start = 0, lg }) =>
    lg !== undefined &&
    `@media (min-width: ${theme.breakpoints.lg}) {
    grid-column: ${start ? `${start + 1} / span ${lg}` : `span ${lg}`}
  }`}

${({ start = 0, xl }) =>
    xl !== undefined &&
    `@media (min-width: ${theme.breakpoints.xl}) {
    grid-column: ${start ? `${start + 1} / span ${xl}` : `span ${xl}`}
  }`}
`;

export default GridColumn;
