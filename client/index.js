import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App.jsx';
import StoreProvider from './Providers/StoreContext.js';


ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
 document.getElementById('app')
);
