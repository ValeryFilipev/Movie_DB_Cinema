import React, { useEffect } from 'react';

import Page from '../ui/Layout/Page';
import { HomeProps } from '../Movies/types';
import MovieFilter from '../../containers/MovieFilter';
import MoviesPage from '../../containers/MoviesPage';

const Home: React.FunctionComponent<HomeProps> = (props) => {
  useEffect(() => {
    props.fetchMovies();
  }, []);

  return (
    <Page backgroundImage='http://www.vamm.com.mx/images/fondo3.png'>
      <MovieFilter />
      <MoviesPage />
    </Page>
  );
};

export default Home;
