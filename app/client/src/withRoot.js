import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { configureStore } from './module/store';

const store = configureStore({});

const withRoot = Component => {

  const history = createBrowserHistory(window);

  function WithRoot(props) {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Component {...props} />
        </Router>
      </Provider>
    );
  }

  return WithRoot;
};

export default withRoot;
