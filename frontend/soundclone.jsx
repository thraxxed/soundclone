import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let preLoadedState = undefined;
  if (window.currentUser) {
    preLoadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
  }
  const store = createStore(preLoadedState);
  ReactDOM.render(<Root store={store}/>, root);
});
