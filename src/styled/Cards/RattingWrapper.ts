import styled from 'styled-components';
import { getSpace } from '../../helpers/theme';

const RatingWrapper = styled.div`
  position: absolute;
  top: ${getSpace(2)};
  right: ${getSpace(2)};
  width: ${getSpace(5)};
  height: ${getSpace(5)};
`;

export default RatingWrapper;
