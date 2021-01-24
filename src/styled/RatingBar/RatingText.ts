import styled from 'styled-components';
import { getColor, getFontSize } from '../../helpers/theme';

const RatingText = styled.p`
  font-size: ${getFontSize(1)};
  color: ${getColor('common.white')};
  line-height: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  margin: 0;
`;

export default RatingText;
