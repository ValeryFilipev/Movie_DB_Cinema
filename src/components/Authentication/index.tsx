import React, { useState } from 'react';

import Page from '../ui/Layout/Page';

export enum AuthMode {
  LOGIN = 'login',
  SIGNUP = 'signup'
}

const AuthenticationPage: React.FunctionComponent = () => {
  const [authMode, setAuthMode] = useState<AuthMode>(AuthMode.LOGIN);

  const goToSignup = () => {
    setAuthMode(AuthMode.SIGNUP);
  };

  const goToLogin = () => {
    setAuthMode(AuthMode.LOGIN);
  };

  return (
    <Page backgroundImage='http://www.dominioncinema.co.uk/wp-content/uploads/2016/11/Dominion-511-of-21.jpg'>

    </Page>
  );
};
