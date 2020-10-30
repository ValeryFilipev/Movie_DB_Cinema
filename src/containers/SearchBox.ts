import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { push } from 'connected-react-router';
import { RootAction, RootState } from 'StoreTypes';

import SearchBox from '../components/Navbar/SearchBox';
import {
  SearchBoxDispatchProps,
  SearchBoxStateProps
} from '../components/Navbar/types';
import { fetchGenres } from '../components/Movies/actions';
import { getGenres } from '../components/MovieDetails/selectors';

const mapDispatchToProps = (
  dispatch: Dispatch<RootAction>
): SearchBoxDispatchProps => ({
  onSuggestionSelected: (_, data) => {
    dispatch(push(`/movie/${data.suggestion.id}`, {}));
  },
  ...bindActionCreators({ fetchGenres }, dispatch)
});

const mapStateToProps = (state: RootState): SearchBoxStateProps => ({
  genres: getGenres(state)
});

export default connect<
  SearchBoxStateProps,
  SearchBoxDispatchProps,
  {},
  RootState
>(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);
