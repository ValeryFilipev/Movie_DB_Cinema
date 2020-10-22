import React from 'react';

export interface Movie {
  backdropPath?: string;
  posterPath?: string;
  genreIds: number[];
  voteAverage: number;
  title: string;
  id: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface WatchListItem {
  id: number;
  title: string;
  posterPath: string;
}

export interface MoviesState {
  fetchingGenres: false;
  genres: Record<number, string>;
  fetchingMovies: boolean;
  currentPage: number;
  currentFilter: Filter;
  error: string | null;
  movies: Movie[];
  totalPages: number;
}

export interface HomeDispatchProps {
  fetchMovies(): void;
}

export type HomeProps = HomeDispatchProps;

export type Filter = 'popular' | 'nowPlaying' | 'topRated' | 'upcoming';

const filterLabels: Record<Filter, string> = {
  popular: 'Popular',
  nowPlaying: 'Now playing',
  topRated: 'Top rated',
  upcoming: 'Upcoming'
};

export const filters = Object.keys(filterLabels).map((key) => ({
  name: key as Filter,
  label: filterLabels[key as Filter]
}));

export interface MovieFilterDispatchProps {
  onClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
}

export interface MovieFilterStateProps {
  filter: Filter;
}

export type MovieFilterProps = MovieFilterDispatchProps & MovieFilterStateProps;

export interface MoviesDispatchProps {
  onPageChange({ selected }: { selected: number }): void;
}

export type MoviesProps = MoviesDispatchProps & MoviesState;
