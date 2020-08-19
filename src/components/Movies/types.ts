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
