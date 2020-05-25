import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';
import { AuthProvider } from './hooks/AuthProvider';
import './index.css';

render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById('root')
);
