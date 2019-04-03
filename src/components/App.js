/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'react-native-elements';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from 'config/rootReducer';
import rootSaga from 'config/rootSaga';
import Root from './Root';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, {}, composeEnhancers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

const theme = {};

const App = () => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <Root />
    </Provider>
  </ThemeProvider>
);

export default App;
