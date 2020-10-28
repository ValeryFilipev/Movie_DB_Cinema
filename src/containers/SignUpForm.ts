import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootAction, RootState } from 'StoreTypes';

import { signup } from '../components/Authentication/actions';
import SignupForm from '../components/Authentication/SignupForm';
import {
  SignupDispatchProps,
  SignupOwnProps
} from '../components/Authentication/types';

const mapDispatchToProps = (
  dispatch: ThunkDispatch<RootState, undefined, RootAction>
): SignupDispatchProps => bindActionCreators({ onSubmit: signup }, dispatch);

export default connect<{}, SignupDispatchProps, SignupOwnProps>(
  null,
  mapDispatchToProps
)(SignupForm);
