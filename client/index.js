import React from 'react';
// import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './stores';
import App from './App';

// ✅ Do this if using JAVASCRIPT

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
