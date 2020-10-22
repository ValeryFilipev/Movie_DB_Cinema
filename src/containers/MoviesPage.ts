import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { RootState } from 'StoreTypes';

import Movies from '../components/Movies';
import { getMoviesPage } from '../components/Movies/selectors';
import { MoviesDispatchProps, MoviesState } from '../components/Movies/types';
import { onPageChange } from '../components/Movies/actions';

const mapDispatchToProps = (dispatch: Dispatch): MoviesDispatchProps =>
  bindActionCreators({ onPageChange }, dispatch);

const mapStateToProps = (state: RootState): MoviesState => {
  return getMoviesPage(state);
};

export default connect<MoviesState, MoviesDispatchProps, {}, RootState>(
  mapStateToProps,
  mapDispatchToProps
)(Movies);
