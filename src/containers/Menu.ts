import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootAction, RootState } from 'StoreTypes';

import { MenuStateProps, MenuOwnProps, MenuDispatchProps } from '../components/Header/types';
import Menu from '../components/Menu';

export default Menu;
