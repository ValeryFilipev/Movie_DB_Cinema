import styled from 'styled-components';
import { getColor, getShadow } from '../../helpers/theme';
import Box from '../../components/ui/Layout/Box';

const Container = styled(Box)`
  background-color: ${getColor('common.black')};
  border-radius: 4px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
  box-shadow: ${getShadow(5, true)};
  @media (hover: hover) {
    &:hover {
      transform: scale(1.05);
    }
  }
`;

export default Container;
