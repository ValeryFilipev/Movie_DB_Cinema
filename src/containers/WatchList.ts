import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootAction, RootState } from 'StoreTypes';

import { removeFromWatchList } from '../components/WatchList/actions';
import { getWatchList } from '../components/Movies/selectors';
import {
  WatchListStateProps,
  WatchListDispatchProps
} from '../components/Movies/types';
import WatchList from '../components/WatchList';

const mapStateToProps = (state: RootState): WatchListStateProps => ({
  watchList: getWatchList(state)
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, undefined, RootAction>
): WatchListDispatchProps =>
  bindActionCreators({ removeFromWatchList }, dispatch);

export default connect<
  WatchListStateProps,
  WatchListDispatchProps,
  {},
  RootState
>(
  mapStateToProps,
  mapDispatchToProps
)(WatchList);
