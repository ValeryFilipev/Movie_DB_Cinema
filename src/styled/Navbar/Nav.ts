import styled from 'styled-components';
import { getSpace } from '../../helpers/theme';

const Nav = styled.nav`
  left: 0;
  background-color: rgba(255, 255, 255, 0.95);
  padding: ${getSpace(3)} ${getSpace(2)};
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  box-shadow: 0 3px 1px -2px rgba(255, 255, 255, 0.1),
    0 2px 2px 0 rgba(255, 255, 255, 0.1), 0 1px 5px 0 rgba(255, 255, 255, 0.1);
  transition: left 0.3s ease-in-out;
  z-index: 999;
`;

export default Nav;
