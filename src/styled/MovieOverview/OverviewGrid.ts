import styled from 'styled-components';
import { getBreakpoint } from '../../helpers/theme';

const OverviewGrid = styled.div`
  width: 100%;
  display: grid;
  background-color: rgba(0, 0, 0, 0.5);
  grid-template: 'info' 'backdrop' 'stats';

  @media (min-width: ${getBreakpoint('sm')}) {
    grid-template: 'backdrop info' 'stats stats';
    grid-template-columns: 0.3fr 0.7fr;
    grid-template-rows: 1fr auto;
  }

  @media (min-width: ${getBreakpoint('lg')}) {
    grid-template: 'backdrop info' 'backdrop stats';
    grid-template-columns: 0.3fr 0.7fr;
    grid-template-rows: 1fr auto;
  }
`;

export default OverviewGrid;
