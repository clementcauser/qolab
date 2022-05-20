import styled from 'styled-components';
import { theme } from '../theme';

export const TextInputActionButton = styled.button`
  position: absolute;
  right: ${theme.spacing[5]};
  border: 0;
  background-color: transparent;
  padding: 0;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 1;
    transform: scale(0.97);
  }
`;

export default TextInputActionButton;
