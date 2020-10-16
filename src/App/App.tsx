import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { ConnectedRouter } from 'connected-react-router';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';

import defaultTheme from '../defaultTheme';
import GlobalStyles from '../globalStyles';
import Header from '../components/Header';
import store, { history } from '../store/store';

const Main = styled.main`
  position: relative;
  padding-top: 70px;
  min-height: 100vh;
  /* prevent horizontal scroll arising cause of absolute positioned image in firefox */
  overflow-x: hidden;
  overflow-y: scroll;
`;

const App: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Provider store={store}>
      <IntlProvider locale='en'>
        <ThemeProvider theme={defaultTheme}>
          <GlobalStyles />
          <ConnectedRouter history={history}>
            <Header open={open} setOpen={setOpen} />
            <ReactNotification />
            <Main>

            </Main>
          </ConnectedRouter>
        </ThemeProvider>
      </IntlProvider>
    </Provider>
  );
};

export default App;
