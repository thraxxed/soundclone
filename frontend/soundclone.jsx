import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/store';
import Root from './components/root';

document.addEventListener('keydown', (e) => {
  if (e.which === 32 && e.target.className !== 'upload-form-input') {
    e.preventDefault();
    let audioEl = document.getElementById('audio-element');
    if (audioEl) {
      if (audioEl.paused) {
        audioEl.play();
      } else {
        audioEl.pause();
      }
    }
  }
});

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
