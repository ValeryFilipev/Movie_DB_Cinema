import React from 'react';
import { OnSuggestionSelected } from 'react-autosuggest';
import { Movie, Genre } from '../Movies/types';

export interface SearchBoxDispatchProps {
  onSuggestionSelected: OnSuggestionSelected<Movie>;
  fetchGenres(): void;
}

export interface SearchBoxStateProps {
  genres: Genre[];
}

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

export type SearchBoxProps = SearchBoxDispatchProps & SearchBoxStateProps;
