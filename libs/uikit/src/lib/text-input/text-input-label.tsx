import styled from 'styled-components';
import Text from '../text/text';
import { theme } from '../theme';

export const TextInputLabel = styled(Text)`
  color: ${theme.colors.black};
  padding: 0 0 0 ${theme.spacing[2]};
  margin-bottom: ${theme.spacing[3]};
`;

export default TextInputLabel;
