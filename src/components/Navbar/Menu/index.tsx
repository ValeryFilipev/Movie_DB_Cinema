import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';

import Button from '../../ui/Elements/Button/Buttons';
import { MenuProps } from '../types';
import StyledMenu from '../../../styled/Menu';

const Menu: React.FunctionComponent<MenuProps> = ({ open, isAuthenticated, logout, ...props }) => {
  const tabIndex = open ? -1 : 0;

  return (
    <StyledMenu open={open} aria-hidden={!open} {...props}>
      <Link to='/' tabIndex={tabIndex}>
        <FontAwesomeIcon icon={faList} size='lg' />
        &nbsp;&nbsp;Movies
      </Link>
      <a
        href='https://github.com/ValeryFilipev'
        rel='noopener noreferrer'
        tabIndex={tabIndex}
        target='_blank'
      >
        <FontAwesomeIcon icon={faGithub} size='lg' />
      </a>
      {isAuthenticated ? (
        <>
          <Link to='/watch-list' tabIndex={tabIndex}>
            <Button variant='secondary' buttonType='outlined'>
              My list
            </Button>
          </Link>
          <Button variant='secondary' buttonType='outlined' onClick={logout}>
            Logout
          </Button>
        </>
      ) : (
        <Link to='/authenticate' tabIndex={tabIndex}>
          <Button variant='secondary' buttonType='outlined'>
            Login
          </Button>
        </Link>
      )}
    </StyledMenu>
  );
};

export default Menu;
