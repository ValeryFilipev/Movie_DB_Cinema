import React, { useEffect, useRef } from 'react';
import FocusLock from 'react-focus-lock';
import { Link } from 'react-router-dom';

import Box from '../ui/Layout/Box';
import Menu from '../../containers/Menu';
import SearchBox from '../../containers/SearchBox';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import Burger from './Burger';
import Icon from '../../styled/Navbar/Icon';
import LogoCopy from '../../styled/Navbar/LogoCopy';
import Nav from '../../styled/Navbar/Nav';

interface NavbarProps {
  open: boolean;
  setOpen(value: React.SetStateAction<boolean>): void;
}

const Navbar: React.FunctionComponent<NavbarProps> = ({ open, setOpen }) => {
  const node = useRef<HTMLDivElement>(null);
  const menuId = 'main-menu';

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.outerWidth >= 960) {
        setOpen(false);
      }
    });
  }, [setOpen]);

  useOnClickOutside(node, () => setOpen(false));

  return (
    <Nav>
      <Box display='flex' flexShrink={0} width='auto'>
        <Link aria-current='page' to='/'>
          <Icon className='material-icons' aria-hidden>
            camera_roll
          </Icon>
        </Link>
        <LogoCopy>React Movies</LogoCopy>
        <SearchBox />
      </Box>
      <Box display='flex' flexDirection='row-reverse' ref={node}>
        <FocusLock disabled={!open}>
          <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
          <Menu open={open} id={menuId} />
        </FocusLock>
      </Box>
    </Nav>
  );
};

export default Navbar;
