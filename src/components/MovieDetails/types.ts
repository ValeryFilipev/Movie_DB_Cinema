import React from 'react';
import { Genre } from '../Movies/types';

export type MovieStatus =
  | 'Rumored'
  | 'Planned'
  | 'In Production'
  | 'Post Production'
  | 'Released'
  | 'Canceled';

export interface Actor {
  character: string;
  id: number;
  name: string;
  profilePath: string;
}

export interface MovieInfo {
  id: number;
  backdropPath?: string;
  budget: number;
  genres: Genre[];
  overview?: string;
  posterPath?: string;
  releaseDate: string;
  runtime: number; // in minutes
  status: MovieStatus;
  tagline?: string;
  title?: string;
  voteAverage?: number;
}
