import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { fetchMovies } from '../components/Movies/actions';
import Home from '../components/Home';
import { HomeDispatchProps } from '../components/Movies/types';

const mapDispatchToProps = (dispatch: Dispatch): HomeDispatchProps =>
  bindActionCreators({ fetchMovies }, dispatch);

export default connect<{}, HomeDispatchProps>(null, mapDispatchToProps)(Home);
