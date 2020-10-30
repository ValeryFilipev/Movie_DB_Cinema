import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RootState } from 'StoreTypes';

import {
  MovieDetailsDispatchProps,
  MovieDetailsStateProps
} from '../components/MovieDetails/types';
import {
  getIsInWatchList,
  getMovieDetails
} from '../components/MovieDetails/selectors';
import MovieDetails from '../components/MovieDetails';
import { fetchMovieDetails } from '../components/MovieDetails/actions';
import { addToWatchList, removeFromWatchList } from '../components/WatchList/actions';

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
