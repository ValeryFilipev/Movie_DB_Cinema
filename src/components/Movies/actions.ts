import { Movie } from "./types";

export interface FetchMoviesSuccessPayload {
  page: number;
  results: Movie[];
  totalResults: number;
  totalPages: number;
}
