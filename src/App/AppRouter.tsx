import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { bindActionCreators } from 'redux';
import { Redirect, Route, RouteProps, Switch } from 'react-router-dom';
import { RootAction, RootState } from 'StoreTypes';

import { checkUser } from '../components/Authentication/actions';
import AuthenticationPage from '../components/Authentication';
import { getUserId } from '../components/Authentication/selectors';
import MovieDetails from '../containers/MovieDetails';
import HomePage from '../containers/HomePage';
import WatchList from '../containers/WatchList';
import NotFound from '../NotFound';

interface ProtectedRouteProps extends RouteProps {
  isAllowed: boolean;
  redirectTo?: string;
}

const PrivateRoute = ({
  isAllowed,
  redirectTo = '/authenticate',
  ...rest
}: ProtectedRouteProps): JSX.Element => {
  if (isAllowed) {
    return <Route {...rest} />;
  }

  return <Redirect to={redirectTo} />;
};

interface AppRouterProps {
  isAuthenticated: boolean;
  checkUser(): void;
}

const AppRouter: React.FC<AppRouterProps> = ({ isAuthenticated, checkUser }) => {
  useEffect(() => {
    checkUser();
  }, [checkUser]);

  return (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/movie/:id' component={MovieDetails} />
      <PrivateRoute component={WatchList} isAllowed={isAuthenticated} path='/watch-list' />
      <PrivateRoute
        component={AuthenticationPage}
        isAllowed={!isAuthenticated}
        path='/authenticate'
        redirectTo='/'
      />
      <NotFound />
    </Switch>
  );
};

const mapStateToProps = (state: RootState) => ({
  isAuthenticated: !!getUserId(state)
});

const mapDispatchToProps = (dispatch: ThunkDispatch<RootState, undefined, RootAction>) =>
  bindActionCreators({ checkUser }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);
