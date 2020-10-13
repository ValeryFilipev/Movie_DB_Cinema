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
}
