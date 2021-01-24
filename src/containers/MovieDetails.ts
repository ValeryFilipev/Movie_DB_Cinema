import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RootState } from 'StoreTypes';

import { addToWatchList, removeFromWatchList } from '../components/WatchList/actions';
import { fetchMovieDetails } from '../components/MovieDetails/actions';
import MovieDetails from '../components/MovieDetails';
import { getIsInWatchList, getMovieDetails } from '../components/MovieDetails/selectors';
import {
  MovieDetailsDispatchProps,
  MovieDetailsStateProps
} from '../components/MovieDetails/types';

const mapStateToProps = (state: RootState): MovieDetailsStateProps => {
  return {
    movieDetails: getMovieDetails(state),
    isInWatchList: getIsInWatchList(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch): MovieDetailsDispatchProps =>
  bindActionCreators({ addToWatchList, fetchMovieDetails, removeFromWatchList }, dispatch);

export default connect<MovieDetailsStateProps, MovieDetailsDispatchProps, {}, RootState>(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetails);
