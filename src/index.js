import React from 'react';
import { render } from 'react-dom';
import App from './components/App/App';
import { ChallengeProvider } from './hooks/ChallengeProvider';
// import Providers from hooks folder

render(
  <ChallengeProvider>
    <App />
  </ChallengeProvider>,
  document.getElementById('root')
);
