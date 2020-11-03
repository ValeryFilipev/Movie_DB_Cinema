import React, { useEffect } from 'react';

import Page from '../ui/Layout/Page';
import MoviesPage from '../../containers/MoviesPage';
import { HomeProps } from '../Movies/types';
import MovieFilter from '../../containers/MovieFilter';

const Home: React.FunctionComponent<HomeProps> = (props) => {
  useEffect(() => {
    props.fetchMovies();
    // eslint-disable-next-line
  }, []);

  return (
    <Page backgroundImage='http://www.dominioncinema.co.uk/wp-content/uploads/2016/11/Dominion-511-of-21.jpg'>
      <MovieFilter />
      <MoviesPage />
    </Page>
  );
};

export default Home;
