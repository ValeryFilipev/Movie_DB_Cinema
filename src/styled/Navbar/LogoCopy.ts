import styled from 'styled-components';
import { getBreakpoint, getColor, getFontSize, getSpace } from '../../helpers/theme';

const LogoCopy = styled.p`
  color: ${getColor('brandYellow')};
  margin-left: ${getSpace(3)};
  margin-bottom: 0;
  line-height: 1;
  font-size: ${getFontSize(5)};
  font-family: 'Lobster', cursive;
  margin-top: 0;
  user-select: none;
  display: none;

  @media (min-width: ${getBreakpoint('md')}) {
    display: block;
  }
`;

export default LogoCopy;
