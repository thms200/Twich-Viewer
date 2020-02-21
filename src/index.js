import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';
import store from './store';
import styles from './containers/AppContainer.module.css';

ReactDOM.render(
  <Provider store={store}>
    <AppContainer className={styles.appContainer}/>
  </Provider>,
  document.getElementById('root')
);
