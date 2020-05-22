import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';
import { ChallengeProvider } from './hooks/ChallengeProvider';

render(
  <ChallengeProvider>
    <App />
  </ChallengeProvider>,
  document.getElementById('root')
);
