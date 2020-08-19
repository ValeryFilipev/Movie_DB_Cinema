import React from 'react';

interface CustomMenuProps {
  open: boolean;
}

export interface MenuStateProps {
  isAuthenticated: boolean;
}

export interface MenuDispatchProps {
  logout(): void;
}

export type MenuOwnProps = CustomMenuProps & React.HTMLAttributes<HTMLDivElement>;

export type MenuProps = MenuStateProps & MenuDispatchProps & MenuOwnProps;
