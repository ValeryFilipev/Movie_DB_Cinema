import styled from 'styled-components';
import { Text } from '../components/ui/Typography/Text';
import { getSpace } from '../helpers/theme';

const Label = styled(Text)`
  margin-bottom: 0;
  margin-right: ${getSpace(2)};
  padding: ${getSpace(2)} 0;
  line-height: 1;
  text-transform: capitalize;
  font-weight: 500;
`;

export default Label;
