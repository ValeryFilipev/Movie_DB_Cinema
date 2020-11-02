import styled from 'styled-components';
import { getColor } from '../../helpers/theme';

const Circle = styled.path<{ rating: number }>`
  stroke: ${getColor('primary.main')};
  fill: none;
  stroke-width: 3.8;
  stroke-linecap: round;
  stroke-dasharray: ${(props) => props.rating} 100;
`;

export default Circle;
