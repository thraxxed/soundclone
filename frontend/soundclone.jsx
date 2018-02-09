import React from 'react';
import ReactDOM from 'react-dom';
import createStore from './store/store';
import Root from './components/root';

document.addEventListener('keydown', (e) => {
  if (e.which === 32) {
    e.preventDefault();
    let audioEl = document.getElementById('audio-element');
    if (audioEl) {
      if (audioEl.paused) {
        console.log("play audio");
        audioEl.play();
      } else {
        console.log("pause audio");
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
