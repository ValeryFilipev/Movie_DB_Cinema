import styled from 'styled-components';
import { getBreakpoint, getSpace } from '../../helpers/theme';

const Container = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: auto;
  grid-gap: ${getSpace(5)} ${getSpace(3)};

  @media (min-width: ${getBreakpoint('sm')}) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${getSpace(5)} ${getSpace(3)};
  }

  @media (min-width: ${getBreakpoint('md')}) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: ${getSpace(5)} ${getSpace(4)};
  }

  @media (min-width: ${getBreakpoint('lg')}) {
    grid-template-columns: repeat(6, 1fr);
    grid-gap: ${getSpace(5)} ${getSpace(4)};
  }
`;

export default Container;
