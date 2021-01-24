import React from 'react';

import Grid from '../../styled/Grid';
import GridItem from '../../styled/Grid/GridItem';
import { MoviesProps } from './types';
import Pagination from '../Pagination/Pagination';
import MovieListCard from '../Cards/MovieListCard';
import PageSpinner from '../ui/Spinner/PageSpinner';

const Movies: React.FunctionComponent<MoviesProps> = (props) => {
  if (props.fetchingMovies) {
    return <PageSpinner />;
  }

  return (
    <>
      <Grid mb={7}>
        {props.movies.map((movie) => (
          <GridItem key={movie.id}>
            <MovieListCard movie={movie} genres={props.genres} />
          </GridItem>
        ))}
      </Grid>
      <Pagination
        currentPage={props.currentPage}
        totalPages={props.totalPages}
        onPageChange={props.onPageChange}
      />
    </>
  );
};

export default Movies;
